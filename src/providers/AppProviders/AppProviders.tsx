"use client";

import { PropsWithChildren } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import MUIThemeProvider from "../MUIThemeProvider";
import QueryClientProviders from "@/api/config/QueryClientProviders";
import NiceModal from "@ebay/nice-modal-react";

type AppProvidersProps = {
  messages?: AbstractIntlMessages;
  locale: string;
  userAgent: string | null;
} & PropsWithChildren;

export default function AppProviders({
  messages,
  locale,
  children,
  userAgent,
}: AppProvidersProps) {
  return (
    <MUIThemeProvider userAgent={userAgent}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <QueryClientProviders>
          <NiceModal.Provider>{children}</NiceModal.Provider>
        </QueryClientProviders>
      </NextIntlClientProvider>
    </MUIThemeProvider>
  );
}
