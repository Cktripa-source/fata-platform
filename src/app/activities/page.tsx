import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SummarizeButton from '@/components/summarize-button';

const activities = [
  {
    value: "item-1",
    title: "Annual Forums and Conferences",
    image: "https://placehold.co/600x400.png",
    hint: "conference room",
    content: "Our annual forums and conferences are flagship events that bring together traditional leaders, government officials, civil society representatives, and international partners. These gatherings serve as crucial platforms for high-level dialogue on pressing issues such as conflict resolution, sustainable development, and cultural preservation. Each forum aims to produce actionable outcomes, policy recommendations, and strengthened networks to advance our collective goals. Past events have been hosted in major cities across Africa, each focusing on a unique theme relevant to the continent's progress and challenges. The insights and collaborations from these forums have led to tangible projects and peace-building successes in multiple regions."
  },
  {
    value: "item-2",
    title: "Peace and Reconciliation Missions",
    image: "https://placehold.co/600x400.png",
    hint: "community meeting",
    content: "FATA is actively involved in mediating and resolving conflicts by leveraging the respected status of traditional leaders. Our peace and reconciliation missions deploy delegations of esteemed leaders to conflict-affected areas to facilitate dialogue, calm tensions, and build bridges between divided communities. These missions are grounded in traditional principles of justice and reconciliation, often proving more effective than purely formal diplomatic efforts. We have successfully intervened in several inter-tribal disputes over land and resources, leading to peace agreements and the establishment of local peace committees to sustain harmony. Testimonials from community members highlight the profound impact of these interventions in restoring social cohesion."
  },
  {
    value: "item-3",
    title: "Cultural Exchange Programs",
    image: "https://placehold.co/600x400.png",
    hint: "traditional dance",
    content: "To foster unity and preserve our rich heritage, FATA organizes cultural exchange programs that connect communities from different parts of the continent. These programs include youth delegations visiting other kingdoms and chiefdoms, joint cultural festivals, and workshops on traditional crafts, languages, and oral histories. By promoting cross-cultural understanding and appreciation, we are building a stronger, more unified African identity. These exchanges not only educate the younger generation about their own and other cultures but also create lasting friendships and networks that transcend ethnic and national boundaries, promoting a shared sense of belonging."
  },
  {
    value: "item-4",
    title: "Partnerships and Collaborations",
    image: "https://placehold.co/600x400.png",
    hint: "handshake agreement",
    content: "Our work is strengthened through strategic partnerships with a wide range of organizations. We collaborate with national governments, the African Union, United Nations agencies, non-governmental organizations (NGOs), and academic institutions. These partnerships enable us to amplify our impact, access critical resources, and contribute to broader policy discussions. Joint projects have included community health initiatives with health-focused NGOs, educational programs with universities, and advocacy campaigns with international bodies to integrate traditional governance into national legal frameworks. These collaborations are essential to achieving our vision of a developed and peaceful Africa."
  }
];

export default function ActivitiesPage() {
  return (
    <div className="container py-12 px-4 md:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Activities</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
          Explore the main initiatives and projects that drive our mission forward.
        </p>
      </header>
      
      <section className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {activities.map((activity) => (
            <AccordionItem value={activity.value} key={activity.value}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                {activity.title}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Image 
                      src={activity.image}
                      alt={activity.title}
                      data-ai-hint={activity.hint}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p>{activity.content}</p>
                    <div className="mt-4">
                      <SummarizeButton content={activity.content} />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
