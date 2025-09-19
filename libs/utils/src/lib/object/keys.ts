export function keys<T extends object>(value: T): Array<string> {
  return Object.keys(value);
}
