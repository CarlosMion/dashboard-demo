import { PropsWithChildren } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

type AppProvidersProps = {
  messages?: AbstractIntlMessages;
  userAgent: string | null;
} & PropsWithChildren;

export default function AppProviders({
  messages,
  children,
}: AppProvidersProps) {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
