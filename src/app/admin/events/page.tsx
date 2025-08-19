'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Plus, Edit2, Trash2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
}

export default function EventsAdmin() {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        category: ''
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/events');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = selectedEvent
                ? `http://localhost:5000/api/events/${selectedEvent.id}`
                : 'http://localhost:5000/api/events';

            const method = selectedEvent ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                fetchEvents();
                setFormData({
                    title: '',
                    description: '',
                    date: '',
                    time: '',
                    location: '',
                    category: ''
                });
                setSelectedEvent(null);
            }
        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/events/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    fetchEvents();
                }
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };

    const handleEdit = (event: Event) => {
        setSelectedEvent(event);
        setFormData({
            title: event.title,
            description: event.description,
            date: event.date,
            time: event.time || '',
            location: event.location || '',
            category: event.category || ''
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-soil-dark">Events Management</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-soil-primary hover:bg-soil-dark">
                            <Plus className="w-4 h-4 mr-2" />
                            Add New Event
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{selectedEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
                            <DialogDescription>
                                Fill in the details for the event below.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="title">Title</label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="description">Description</label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="date">Date</label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="time">Time</label>
                                    <Input
                                        id="time"
                                        type="time"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="location">Location</label>
                                <Input
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="category">Category</label>
                                <Input
                                    id="category"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                />
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-soil-primary hover:bg-soil-dark">
                                    {selectedEvent ? 'Update Event' : 'Create Event'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    events.map((event) => (
                        <Card key={event.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg">{event.title}</CardTitle>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleEdit(event)}
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleDelete(event.id)}
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 text-soil-primary mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(event.date).toLocaleDateString()}</span>
                                    {event.time && <span>at {event.time}</span>}
                                </div>
                                <p className="text-gray-600 line-clamp-2">{event.description}</p>
                                {event.location && (
                                    <p className="text-sm text-gray-500 mt-2">📍 {event.location}</p>
                                )}
                                {event.category && (
                                    <span className="inline-block mt-2 text-xs bg-soil-primary/10 text-soil-primary px-2 py-1 rounded-full">
                                        {event.category}
                                    </span>
                                )}
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
