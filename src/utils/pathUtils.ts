export function toCamelCase(str?: string): string | undefined {
  return str?.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}
