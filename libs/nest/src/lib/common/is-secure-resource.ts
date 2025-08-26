export function isSecureResource(name: string): boolean {
  return new RegExp(/secure|secured|private/i).test(name);
}
