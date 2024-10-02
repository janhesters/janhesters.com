import './styles/tailwind.css';

import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
} from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@vercel/remix';
import { Menu } from 'lucide-react';
import { ComponentProps } from 'react';

import { Button, buttonVariants } from '~/components/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/sheet';

import { getSocialsMeta } from './lib/misc';
import { cn } from './lib/utils';

export const config = { runtime: 'edge' };

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/cyo5jva.css',
  },
];

export const meta: MetaFunction = () => [
  ...getSocialsMeta({
    description: 'Learn how to become a senior fullstack developer.',
    keywords:
      'Learn React, Learn Next.js, Learn Remix, Learn Tailwind, Learn Javascript, Learn Typescript, Learn Engineering Management, Become A Senior Developer, Become A Senior Fullstack Developer, Tutorials, Guides, Courses, React, Next.js, Remix, Tailwind, Javascript, Typescript, Engineering Management',
    title: 'Jan Hesters',
    url: 'https://www.janhesters.com',
  }),
  { name: 'robots', content: 'index,follow' },
  { name: 'googlebot', content: 'index,follow' },
];

function GitHubIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
  );
}

const navLinks = [
  { to: '/blog', label: 'Blog' },
  { to: '/work-with-jan', label: 'Work With Me' },
  { to: '/about', label: 'About' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const showImprintLink =
    location.pathname === '/about' || location.pathname === '/imprint';
  const showBlogLinkInFooter = location.pathname.includes('/blog');

  const url = new URL(location.pathname, 'https://www.janhesters.com');

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="canonical" href={url.href} />
        <link rel="alternate" href={url.href} hrefLang="en" />
        <Links />
      </head>

      <body>
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
            <Link to="/">
              <h1 className="text-xl font-bold text-foreground hover:text-primary">
                Jan Hesters
              </h1>
            </Link>

            <nav className="hidden gap-2 md:flex">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      buttonVariants({ variant: 'ghost' }),
                      isActive && 'text-primary',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Spacer that is exactly the width of the name Jan Hesters, so that the nav is in the middle. */}
            <div className="hidden w-[115px] md:block" />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />

                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  {navLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          'text-muted-foreground hover:text-foreground',
                          isActive && 'text-primary',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {children}

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-4 sm:h-12 sm:flex-row">
            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a
                className="hover:text-foreground"
                href="https://github.com/janhesters/janhesters.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">Github</span>

                <GitHubIcon className="size-6 fill-muted-foreground transition hover:fill-foreground" />
              </a>

              {showImprintLink && (
                <NavLink
                  className={({ isActive }) =>
                    cn('hover:text-foreground', isActive && 'text-primary')
                  }
                  to="/imprint"
                >
                  Imprint
                </NavLink>
              )}

              {showBlogLinkInFooter && (
                <NavLink
                  className={({ isActive }) =>
                    cn('hover:text-foreground', isActive && 'text-primary')
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} janhesters.com. All rights
              reserved.
            </p>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

function ErrorPage({
  title,
  message,
  subMessage,
}: {
  title: string;
  message: string;
  subMessage?: string;
}) {
  return (
    <div className="flex min-h-[calc(100vh-146px)] flex-col items-center justify-center px-4 text-center md:min-h-[calc(100vh-102px)]">
      <h2 className="mb-4 text-4xl font-bold text-foreground">{title}</h2>

      <p className="mb-2 text-xl text-muted-foreground">{message}</p>

      {subMessage && (
        <p className="mb-8 text-xl text-muted-foreground">{subMessage}</p>
      )}

      <Link
        to="/"
        className={cn(
          buttonVariants({ variant: 'default', size: 'lg' }),
          'mt-3 font-semibold',
        )}
      >
        Go back home
      </Link>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorPage
          title="404 - Page Not Found"
          message="Oops! The page you're looking for doesn't exist."
        />
      );
    }

    return (
      <ErrorPage
        title="Oops! An Error Occurred"
        message={`Status: ${error.status}`}
        subMessage={error.statusText}
      />
    );
  }

  return (
    <ErrorPage
      title="500 - Unexpected Error"
      message="An unknown error has occurred. Please try again later."
    />
  );
}
