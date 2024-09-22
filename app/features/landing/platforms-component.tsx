/* eslint-disable import/no-unresolved */
import { ArrowDown } from 'lucide-react';

import logoInstagram from '/svgs/instagram.svg?url';
import logoLinkedIn from '/svgs/linkedin.svg?url';
import logoTikTok from '/svgs/tiktok.svg?url';
import logoX from '/svgs/x.svg?url';
import logoYouTube from '/svgs/youtube.svg?url';
import { buttonVariants } from '~/components/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/card';
import { cn } from '~/lib/utils';

type Platform = {
  platformName: string;
  description: string;
  logo: string;
  cta: 'Follow' | 'Subscribe';
  url: string;
};

export function PlatformsComponent() {
  const platforms: Platform[] = [
    {
      platformName: 'YouTube',
      description: 'Long form tutorials',
      logo: logoYouTube,
      cta: 'Subscribe',
      url: 'https://www.youtube.com/@janhesters?sub_confirmation=1',
    },
    {
      platformName: 'X',
      description: 'Coding quick tips',
      logo: logoX,
      cta: 'Follow',
      url: 'https://x.com/janhesters',
    },
    {
      platformName: 'LinkedIn',
      description: 'Long form tutorials',
      logo: logoLinkedIn,
      cta: 'Follow',
      url: 'https://www.linkedin.com/in/jan-hesters/',
    },
    {
      platformName: 'Instagram',
      description: 'Coding quick tips',
      logo: logoInstagram,
      cta: 'Follow',
      url: 'https://www.instagram.com/janhesters/',
    },
    {
      platformName: 'TikTok',
      description: 'Coding quick tips',
      logo: logoTikTok,
      cta: 'Follow',
      url: 'https://www.tiktok.com/@janhesters',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ArrowDown className="size-6" />

          <span className="ml-3">Find me on these platforms</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ol className="space-y-2">
          {platforms.map(platform => (
            <li key={platform.platformName}>
              <a
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  '-mx-4 flex items-center gap-4 py-6',
                )}
                href={platform.url}
              >
                <div className="relative flex size-10 flex-none items-center justify-center rounded-md">
                  <img
                    alt={platform.platformName}
                    src={platform.logo}
                    className="size-10"
                  />
                </div>

                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Platform</dt>

                  <dd className="w-full flex-none text-sm font-medium text-foreground">
                    {platform.platformName}
                  </dd>

                  <dt className="sr-only">Type of content</dt>

                  <dd className="text-xs text-muted-foreground">
                    {platform.description}
                  </dd>
                </dl>

                <div className="flex items-center justify-center text-primary">
                  {platform.cta}
                </div>
              </a>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
