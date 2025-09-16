/* eslint-disable @typescript-eslint/no-explicit-any */

export type MapObjectHandler<T extends object = any> = (
  key: string,
  value: any,
  source?: T
) => any;

export function mapObject<T extends object>(
  source: T,
  handle: MapObjectHandler<T>
) {
  const entries = Object.entries(source);

  for (const [k, v] of entries) {
    (source as any)[k] = handle(k, v, source);
  }

  return source;
}
