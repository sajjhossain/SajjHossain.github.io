"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}
      // Using disableTransitionOnChange so theme toggle doesn't animate all at once weirdly
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
