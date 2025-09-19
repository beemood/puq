export function includesFn(source: string) {
  return (prefix: string) => source.includes(prefix);
}
