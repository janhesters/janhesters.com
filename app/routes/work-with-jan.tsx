import Cal from '@calcom/embed-react';
import type { MetaFunction } from '@remix-run/node';
import { ArrowRight, Code, Lightbulb, Users } from 'lucide-react';

import { Button } from '~/components/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/card';
import { getSocialsMeta } from '~/lib/utils';

export const meta: MetaFunction = () =>
  getSocialsMeta({
    title: 'Work with Jan Hesters',
    description:
      'Learn how you can work with Jan Hesters for consulting, architecture review, and team training.',
    url: 'https://www.janhesters.com/work-with-jan',
  });

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  link: string;
};

const services: ServiceItem[] = [
  {
    icon: <Code className="size-6" />,
    title: 'Consulting & Architecture Review',
    description:
      'Get expert advice on your React projects and ensure your architecture is scalable and efficient.',
    cta: 'Book a consultation',
    link: 'https://www.reactsquad.io/jan',
  },
  {
    icon: <Lightbulb className="size-6" />,
    title: 'Team Training',
    description:
      "Elevate your team's React skills with customized training programs. Available trainings are React, Next.js, Remix and Testing.",
    cta: 'Inquire about training',
    link: 'mailto:jan@reactsquad.io',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Developer Matching',
    description:
      "Find the perfect senior React developers for your team through ReactSquad's matching service.",
    cta: 'Find developers',
    link: 'https://www.reactsquad.io/jan',
  },
];

export default function WorkWithJan() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Work with Jan</h2>

          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            I&apos;m available for consulting, architecture review, and to train
            your team. Through ReactSquad, you can also hire senior developers
            that have been trained by me.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {service.icon}
                    <span className="ml-3">{service.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>

                  <Button asChild>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.cta} <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 mt-10 text-2xl font-semibold text-foreground md:mt-0">
            Direct Booking
          </h3>

          <p className="mb-6 text-muted-foreground">
            For direct requests or to discuss your specific needs, you can book
            a call with me using the calendar below.
          </p>

          <div className="mx-auto max-w-3xl">
            <Cal calLink="jan-hesters/meeting-with-jan" />
          </div>
        </div>
      </div>
    </main>
  );
}
