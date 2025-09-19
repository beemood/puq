export function startsWithFn(source: string) {
  return (prefix: string) => source.startsWith(prefix);
}
