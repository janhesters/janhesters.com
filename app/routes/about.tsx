import type { MetaFunction } from '@vercel/remix';

import { PlatformsComponent } from '~/features/landing/platforms-component';
import { getSocialsMeta } from '~/lib/misc';

export const meta: MetaFunction = () =>
  getSocialsMeta({
    title: 'About Jan Hesters',
    description: 'Learn more about Jan and his work.',
    url: 'https://www.janhesters.com/about',
  });

type TimelineItem = {
  name: string;
  description: string;
  date: string;
  dateTime: string;
};

const timeline: TimelineItem[] = [
  {
    name: 'Physics',
    description:
      'At 14, I read "The Universe In A Nutshell" by Stephen Hawking. From that day on, I was hooked and knew I wanted to study physics. In 2013, I began my physics studies at the RWTH Aachen. During my studies, I spent half a year at the University of Technology in Sydney.',
    date: 'Oct 2013',
    dateTime: '2013-10',
  },
  {
    name: 'First Startup',
    description:
      'In 2017, after earning a Bachelor of Science in Physics, I co-founded Ordersome with my long-time business partner, Nikolas Chapoupis. Although the startup failed, it taught me how to program and many more invaluable lessons. Following this, I spent a year working in the blockchain space and received mentorship from Eric Elliott.',
    date: 'Sep 2017',
    dateTime: '2017-09',
  },
  {
    name: 'Hopin',
    description:
      'I joined Hopin as the seventh employee in early 2020. During the pandemic, the company grew rapidly to over a thousand employees. I helped build the React app and interviewed over 100 candidates during this growth. I also helped set up the video infrastructure, led a team of 12 engineers as an engineering manager, and worked on integrating in-house video technologies.',
    date: 'Jan 2020',
    dateTime: '2020-01',
  },
  {
    name: 'ReactSquad',
    description:
      "In 2023, Nikolas and I doubled down on ReactSquad. Our mission is to help companies create exceptional software with React by providing top senior developers and best-in-class training and consulting. As ReactSquad's CTO, I have the privilege of working with dozens of startups and Fortune 500 companies, creating apps and websites used by millions of people.",
    date: 'Aug 2023',
    dateTime: '2023-08',
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start">
          <img
            alt="Jan Hesters"
            className="mb-4 block size-60 rounded-3xl object-cover md:hidden"
            src="https://i.magecdn.com/ada680/79c207_jan_square?f=webp,q.25,p.f,l.f"
          />

          <h2 className="text-center text-2xl font-semibold text-foreground md:text-start md:text-3xl">
            Hi, I&apos;m Jan Hesters, <br /> I&apos;m a fullstack developer.
          </h2>

          <p className="mt-3 text-muted-foreground md:text-lg">
            By day, I&apos;m the CTO at{' '}
            <a
              className="underline hover:text-primary"
              href="https://www.reactsquad.io/jan"
            >
              ReactSquad
            </a>
            . By night, I create content to help you become a better programmer
            and manager.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12">
            {timeline.map(item => (
              <div key={item.name}>
                <div className="md:flex md:items-center md:justify-between md:border-b md:border-border md:pb-2">
                  <time
                    dateTime={item.dateTime}
                    className="text-md flex items-center font-semibold text-primary"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      aria-hidden="true"
                      className="mr-4 size-2 flex-none"
                    >
                      <circle r={2} cx={2} cy={2} fill="currentColor" />
                    </svg>

                    {item.date}

                    <div
                      aria-hidden="true"
                      className="absolute -ml-2 h-0.5 w-screen -translate-x-full bg-primary lg:w-auto lg:flex-auto lg:translate-x-0"
                    />
                  </time>

                  <p className="mt-6 text-lg font-semibold leading-8 text-foreground md:mt-0">
                    {item.name}
                  </p>
                </div>

                <p className="mt-1 leading-7 text-muted-foreground md:mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <img
            alt="Jan Hesters"
            className="hidden rounded-lg object-cover md:block dark:hidden"
            sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1620px) 40vw, 650px"
            src="https://i.magecdn.com/ada680/07c22c_jan_vertical_3_cropped?f=webp,q.25,p.f,l.f"
          />

          <img
            alt="Jan Hesters"
            className="hidden rounded-lg object-cover dark:md:block"
            sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1620px) 40vw, 650px"
            src="https://i.magecdn.com/ada680/15da52_jan_vertical_2_cropped?f=webp,q.25,p.f,l.f"
          />

          <PlatformsComponent />
        </div>
      </div>
    </main>
  );
}
