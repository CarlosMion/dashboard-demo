import { inter, lato } from "@/fonts";
import AppProvidersLoader from "@/providers/AppProviders";
import type { Metadata } from "next";
import { useMemo } from "react";

export const metadata: Metadata = {
  title: "Soar",
  description: "It's time to Soar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontsClassName = useMemo<string>(
    () => `${inter.variable} ${lato.variable}`,
    []
  );

  return (
    <html lang="en">
      <body className={fontsClassName}>
        <AppProvidersLoader>{children}</AppProvidersLoader>
      </body>
    </html>
  );
}
