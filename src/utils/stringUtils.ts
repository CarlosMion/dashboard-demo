export function maskCardNumber(cardNumber: number): string {
  const cardNumberStr = cardNumber.toString();
  return cardNumberStr.replace(/(\d{4})\d{8}(\d{4})/, "$1 **** **** $2");
}

export function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function formatValidThru(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    month: "2-digit",
    year: "2-digit",
    timeZone: "UTC",
  });
}

export function formatTransactionDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
