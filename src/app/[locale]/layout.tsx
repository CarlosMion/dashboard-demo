import AppProvidersLoader from "@/providers/AppProviders";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soar",
  description: "It's time to Soar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvidersLoader>{children}</AppProvidersLoader>
      </body>
    </html>
  );
}