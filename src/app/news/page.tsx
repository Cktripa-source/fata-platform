import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SummarizeButton from '@/components/summarize-button';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const newsArticles = [
  {
    title: 'FATA Calls for Increased Role of Traditional Leaders in Climate Action',
    date: 'July 15, 2024',
    category: 'Press Release',
    image: 'https://placehold.co/600x400.png',
    hint: 'african landscape drought',
    content: 'In a significant press release today, the Forum of African Traditional Authorities (FATA) urged national governments and international bodies to formally integrate traditional leaders into climate change adaptation and mitigation strategies. Citing their deep-rooted knowledge of local ecosystems and their influence within communities, FATA argues that traditional leaders are essential partners in building climate resilience. The statement highlights successful community-led conservation projects and calls for funding mechanisms that directly support these grassroots initiatives.'
  },
  {
    title: 'A Journey Through Benin: A Cultural Exchange Diary',
    date: 'June 28, 2024',
    category: 'Blog Post',
    image: 'https://placehold.co/600x400.png',
    hint: 'african market',
    content: 'Last month, a youth delegation from Zambia, sponsored by FATA, embarked on a cultural exchange trip to the Kingdom of Dahomey in modern-day Benin. This blog post captures their experiences, from learning about the history of the Dahomey Amazons to participating in traditional Voodoo ceremonies. The delegates share their reflections on the importance of inter-African understanding and the powerful connections they forged with their Beninese counterparts, emphasizing the vibrant and living heritage of the continent.'
  },
  {
    title: 'Interview with HRH Izakare Drani Stephen on Peace and Security',
    date: 'May 10, 2024',
    category: 'Video',
    image: 'https://placehold.co/600x400.png',
    hint: 'interview setup',
    content: 'FATA President, HRH Izakare Drani Stephen, sat down for an in-depth interview to discuss the organization\'s role in promoting peace and security across Africa. He shared insights from recent mediation efforts, the challenges of modernizing traditional justice systems, and his vision for a conflict-free continent where traditional authorities and state institutions work hand-in-hand. The full interview provides a comprehensive overview of FATA\'s strategies and successes in conflict resolution.'
  }
];

export default function NewsPage() {
  return (
    <div className="container py-12 px-4 md:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">News & Media</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
          The latest news, announcements, and media content from FATA.
        </p>
      </header>
      
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  data-ai-hint={article.hint}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="pt-4 flex-grow">
                <p className="text-sm text-primary font-semibold">{article.category}</p>
                <CardTitle className="font-headline text-xl mt-1">{article.title}</CardTitle>
                <p className="text-sm text-foreground/70 mt-1">{article.date}</p>
                <p className="mt-2 text-sm line-clamp-3">{article.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <SummarizeButton content={article.content} />
                <Button variant="link" className="p-0 h-auto">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-8">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <Image 
                key={i}
                src={`https://placehold.co/400x400.png`}
                alt={`Gallery image ${i+1}`}
                data-ai-hint="african culture"
                width={400}
                height={400}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-8">Video Content</h2>
          <div className="space-y-4">
            <Card className="flex items-center p-4 hover:bg-secondary/50 transition-colors">
              <PlayCircle className="h-12 w-12 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">2023 Annual Forum Highlights</h3>
                <p className="text-sm text-foreground/70">Watch the key moments from our last general assembly.</p>
              </div>
            </Card>
            <Card className="flex items-center p-4 hover:bg-secondary/50 transition-colors">
              <PlayCircle className="h-12 w-12 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">A Message from the President</h3>
                <p className="text-sm text-foreground/70">HRH Izakare Drani Stephen discusses the future of FATA.</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
