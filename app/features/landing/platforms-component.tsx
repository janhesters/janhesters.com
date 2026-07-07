import { ArrowDown } from "lucide-react";

import logoInstagram from "/svgs/instagram.svg?url";
import logoLinkedIn from "/svgs/linkedin.svg?url";
import logoTikTok from "/svgs/tiktok.svg?url";
import logoX from "/svgs/x.svg?url";
import logoYouTube from "/svgs/youtube.svg?url";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

type Platform = {
  platformName: string;
  description: string;
  logo: string;
  cta: "Follow" | "Subscribe";
  url: string;
};

export function PlatformsComponent() {
  const platforms: Platform[] = [
    {
      cta: "Subscribe",
      description: "Long form tutorials",
      logo: logoYouTube,
      platformName: "YouTube",
      url: "https://www.youtube.com/@janhesters?sub_confirmation=1",
    },
    {
      cta: "Follow",
      description: "Coding quick tips",
      logo: logoX,
      platformName: "X",
      url: "https://x.com/janhesters",
    },
    {
      cta: "Follow",
      description: "Long form tutorials",
      logo: logoLinkedIn,
      platformName: "LinkedIn",
      url: "https://www.linkedin.com/in/jan-hesters/",
    },
    {
      cta: "Follow",
      description: "Coding quick tips",
      logo: logoInstagram,
      platformName: "Instagram",
      url: "https://www.instagram.com/janhesters/",
    },
    {
      cta: "Follow",
      description: "Coding quick tips",
      logo: logoTikTok,
      platformName: "TikTok",
      url: "https://www.tiktok.com/@janhesters",
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
          {platforms.map((platform) => (
            <li key={platform.platformName}>
              <a
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "-mx-4 flex items-center gap-4 py-6",
                )}
                href={platform.url}
              >
                <div className="relative flex size-10 flex-none items-center justify-center rounded-md">
                  <img
                    alt={platform.platformName}
                    className="size-10"
                    src={platform.logo}
                  />
                </div>

                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Platform</dt>

                  <dd className="text-foreground w-full flex-none text-sm font-medium">
                    {platform.platformName}
                  </dd>

                  <dt className="sr-only">Type of content</dt>

                  <dd className="text-muted-foreground text-xs">
                    {platform.description}
                  </dd>
                </dl>

                <div className="text-primary flex items-center justify-center">
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
