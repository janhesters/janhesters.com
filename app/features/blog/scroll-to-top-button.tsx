import { CircleChevronUp } from 'lucide-react';

import { Button } from '~/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip';

export function ScrollToTopButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="text-muted-foreground hidden items-center justify-center rounded-full md:flex"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="icon"
            variant="ghost"
          >
            <CircleChevronUp aria-hidden="true" className="size-6" />

            <span className="sr-only">Scroll to top</span>
          </Button>
        </TooltipTrigger>

        <TooltipContent side="top">Scroll to top</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
