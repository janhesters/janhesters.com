import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { AnimatedShinyText } from '~/features/work-with-me/animated-shiny-text';
import { getSocialsMeta } from '~/lib/misc';

import type { Route } from './+types/work-with-jan';

export const meta: Route.MetaFunction = () =>
  getSocialsMeta({
    title: 'Work with Jan Hesters',
    description:
      'Learn how you can work with Jan Hesters for consulting, architecture review, and team training.',
    url: 'https://www.janhesters.com/work-with-jan',
  });

export default function WorkWithJan() {
  return (
    <main className="min-h-[calc(100vh-6.5rem)] py-16">
      <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8">
        <div className="group animate-fade-in inline-flex h-7 translate-y-[-1rem] items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 backdrop-blur-[12px] transition-all ease-in hover:bg-white/20 dark:text-black">
          <AnimatedShinyText
            className="inline-flex items-center justify-center"
            shimmerWidth={100}
          >
            ✨ For SaaS and B2B companies
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </AnimatedShinyText>
        </div>

        <h2 className="translate-y-[-1rem] animate-[fade-in_1s_ease_forwards] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl leading-none font-medium tracking-tighter text-transparent opacity-0 [animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
          ReactSquad is the best way
          <br className="hidden md:block" /> to hire senior React developers.
        </h2>

        <p className="animate-fade-in text-muted-foreground mb-12 translate-y-[-1rem] text-lg tracking-tight text-balance opacity-0 [--animation-delay:400ms] md:text-xl">
          Are you struggling to find qualified software developers, dealing with
          high development costs,
          <br className="hidden md:block" /> and frustrated by the poor quality
          of freelancers or outsourcing agencies?
        </p>
      </section>

      <section className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8">
        <Card className="col-span-1 row-span-1 overflow-hidden border bg-[#f7cf4c] transition-all">
          <CardHeader className="relative text-center">
            <CardTitle className="text-3xl font-bold text-black">
              International
            </CardTitle>

            <CardDescription className="text-xl text-balance text-black">
              Visit ReactSquad.io to augment your team with highly vetted and
              senior React developers within 7 days.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-center">
            <Button
              className="bg-[#445dd8] hover:bg-[#445dd8]/90"
              asChild
              size="lg"
            >
              <a href="https://reactsquad.io">ReactSquad.io</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1 overflow-hidden border bg-[#f7cf4c] transition-all">
          <CardHeader className="relative text-center">
            <CardTitle className="text-3xl font-bold text-black">
              DACH-Raum
            </CardTitle>

            <CardDescription className="text-xl text-balance text-black">
              Greife direkt auf hochqualifizierte Senior React-Entwickler zu und
              stelle sie innerhalb von 7 Tagen ein.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-center">
            <Button
              className="bg-[#445dd8] hover:bg-[#445dd8]/90"
              asChild
              size="lg"
            >
              <a href="https://reactdevs.de">ReactDevs.de</a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
