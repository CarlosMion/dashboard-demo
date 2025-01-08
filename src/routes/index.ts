export type UrlInfo = {
  url: string;
};

function asUrlInfos<T extends { [key: string]: UrlInfo }>(arg: T): T {
  return arg;
}

export const routes = asUrlInfos({
  home: {
    url: "/",
  },
  transactions: {
    url: "/transactions",
  },
  accounts: {
    url: "/accounts",
  },
  investments: {
    url: "/investments",
  },
  creditCards: {
    url: "/credit-cards",
  },
  loans: {
    url: "/loans",
  },
  services: {
    url: "/services",
  },
  myPrivileges: {
    url: "/my-privileges",
  },
  settings: {
    url: "/settings",
  },
});

export function generatePath(
  path: string,
  params?: { [key: string]: string | number }
): string {
  return path.replace(/:([a-zA-Z]+)/g, (_, key) => {
    if (!!params?.[key]) {
      return encodeURIComponent(params[key]);
    }
    throw new Error(`Missing parameter: ${key}`);
  });
}
