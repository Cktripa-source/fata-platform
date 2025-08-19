'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit2, Trash2, Image as ImageIcon, Tag, Calendar } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    content: string;
    image_url: string;
    category: string;
    author: string;
    created_at: string;
}

export default function NewsAdmin() {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image_url: '',
        category: '',
        author: ''
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/news');
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:5000/api/media/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            return data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let imageUrl = formData.image_url;

            if (imageFile) {
                const uploadedUrl = await handleImageUpload(imageFile);
                if (uploadedUrl) {
                    imageUrl = uploadedUrl;
                }
            }

            const url = selectedArticle
                ? `http://localhost:5000/api/news/${selectedArticle.id}`
                : 'http://localhost:5000/api/news';

            const method = selectedArticle ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    image_url: imageUrl
                }),
            });

            if (response.ok) {
                fetchArticles();
                setFormData({
                    title: '',
                    content: '',
                    image_url: '',
                    category: '',
                    author: ''
                });
                setSelectedArticle(null);
                setImageFile(null);
            }
        } catch (error) {
            console.error('Error saving article:', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/news/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    fetchArticles();
                }
            } catch (error) {
                console.error('Error deleting article:', error);
            }
        }
    };

    const handleEdit = (article: NewsArticle) => {
        setSelectedArticle(article);
        setFormData({
            title: article.title,
            content: article.content,
            image_url: article.image_url,
            category: article.category,
            author: article.author
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-soil-dark">News Management</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-soil-primary hover:bg-soil-dark">
                            <Plus className="w-4 h-4 mr-2" />
                            Add News Article
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>{selectedArticle ? 'Edit Article' : 'Add New Article'}</DialogTitle>
                            <DialogDescription>
                                Create or edit a news article. All fields marked with * are required.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="title">Title *</label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="content">Content *</label>
                                <Textarea
                                    id="content"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    className="min-h-[200px]"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="category">Category</label>
                                    <Input
                                        id="category"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        placeholder="e.g., Events, Updates, Press Release"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="author">Author</label>
                                    <Input
                                        id="author"
                                        value={formData.author}
                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="image">Featured Image</label>
                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                                />
                                {formData.image_url && (
                                    <div className="mt-2">
                                        <img
                                            src={formData.image_url}
                                            alt="Preview"
                                            className="max-h-40 rounded-md"
                                        />
                                    </div>
                                )}
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-soil-primary hover:bg-soil-dark">
                                    {selectedArticle ? 'Update Article' : 'Publish Article'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList>
                    <TabsTrigger value="all">All Articles</TabsTrigger>
                    <TabsTrigger value="draft">Drafts</TabsTrigger>
                    <TabsTrigger value="published">Published</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            articles.map((article) => (
                                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleEdit(article)}
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleDelete(article.id)}
                                                className="text-red-500 hover:text-red-600"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {article.image_url && (
                                            <div className="aspect-video relative mb-4">
                                                <img
                                                    src={article.image_url}
                                                    alt={article.title}
                                                    className="rounded-md object-cover w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <p className="text-gray-600 line-clamp-3 mb-4">{article.content}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            {article.category && (
                                                <div className="flex items-center gap-1">
                                                    <Tag className="w-4 h-4" />
                                                    <span>{article.category}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(article.created_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
