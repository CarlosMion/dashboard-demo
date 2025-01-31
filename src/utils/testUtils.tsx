import { render } from "@testing-library/react";
import { ReactNode } from "react";
import AppProviders from "@/providers/AppProviders/AppProviders";

import messages from "@/i18n/messages/en.json";

const customRender = (children: ReactNode) =>
  render(
    <AppProviders
      locale={"en"}
      messages={messages}
      userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    >
      {children}
    </AppProviders>
  );

export * from "@testing-library/react";

export { customRender as render };
