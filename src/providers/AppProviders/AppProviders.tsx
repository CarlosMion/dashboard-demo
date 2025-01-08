import { PropsWithChildren } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import MUIThemeProvider from "../MUIThemeProvider";

type AppProvidersProps = {
  messages?: AbstractIntlMessages;
  userAgent: string | null;
} & PropsWithChildren;

export default function AppProviders({
  messages,
  children,
  userAgent,
}: AppProvidersProps) {
  return (
    <MUIThemeProvider userAgent={userAgent}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </MUIThemeProvider>
  );
}
