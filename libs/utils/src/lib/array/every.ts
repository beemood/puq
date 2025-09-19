export function every<T>(array: T[], handler: (value: T) => boolean): boolean {
  return array.every(handler);
}
