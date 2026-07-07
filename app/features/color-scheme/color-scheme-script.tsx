import { useLayoutEffect, useMemo } from "react";

import { useColorScheme } from "./use-color-scheme";

const useClientLayoutEffect =
  typeof document === "undefined"
    ? ((() => {}) as typeof useLayoutEffect)
    : useLayoutEffect;

export function ColorSchemeScript() {
  const colorScheme = useColorScheme();

  // The inline script must only capture the color scheme available during
  // SSR; re-rendering it with a new value must not change the markup.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally frozen to the first render
  const script = useMemo(
    () => `const colorScheme = ${JSON.stringify(colorScheme)};
if (colorScheme === 'system') {
  const media = globalThis.matchMedia('(prefers-color-scheme: dark)');
  if (media.matches) {
    document.documentElement.classList.add('dark');
  }
}`,
    [],
  );

  useClientLayoutEffect(() => {
    switch (colorScheme) {
      case "light": {
        document.documentElement.classList.remove("dark");

        break;
      }

      case "dark": {
        document.documentElement.classList.add("dark");

        break;
      }

      case "system": {
        function check(media: MediaQueryList | MediaQueryListEvent) {
          if (media.matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }

        const media = globalThis.matchMedia("(prefers-color-scheme: dark)");
        check(media);

        media.addEventListener("change", check);
        return () => media.removeEventListener("change", check);
      }

      default: {
        console.error("Impossible color scheme state:", colorScheme);
      }
    }
  }, [colorScheme]);

  // biome-ignore lint/security/noDangerouslySetInnerHtml: self-generated script, no user input
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
