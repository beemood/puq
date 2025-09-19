export function endsWithFn(source: string) {
  return (prefix: string) => source.endsWith(prefix);
}
