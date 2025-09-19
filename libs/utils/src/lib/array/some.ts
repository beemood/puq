export function some<T>(array: T[], handler: (value: T) => boolean): boolean {
  return array.some(handler);
}
