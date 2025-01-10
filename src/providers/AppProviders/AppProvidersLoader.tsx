import { headers } from "next/headers";
import { useLocale, useMessages } from "next-intl";
import { PropsWithChildren } from "react";

import AppProviders from "./AppProviders";
import { MainLayout } from "@/layout";

export default async function AppProvidersLoader({
  children,
}: PropsWithChildren) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  return (
    <AppProvidersLoaderInternal userAgent={userAgent}>
      {children}
    </AppProvidersLoaderInternal>
  );
}

type AppProvidersLoaderInternalProps = PropsWithChildren & {
  userAgent: string | null;
};

function AppProvidersLoaderInternal({
  userAgent,
  children,
}: AppProvidersLoaderInternalProps) {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <AppProviders messages={messages} userAgent={userAgent} locale={locale}>
      <MainLayout>{children}</MainLayout>
    </AppProviders>
  );
}
