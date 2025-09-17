import type { Any } from '@puq/types';

/**
 * A type for the handler function used by `mapObject`.
 *
 * It receives the key and value of each property, and the original source object.
 * It should return the new value for that property.
 * The generic `T` represents the type of the source object.
 */
export type MapObjectHandler<T extends object = Any> = (
  key: string,
  value: Any,
  source?: T
) => Any;

/**
 * Iterates over the properties of an object and applies a handler function to each one,
 * modifying the object in place with the return values.
 *
 * This function is similar to `Array.prototype.map`, but for objects.
 * It allows you to transform the values of an object based on a custom function.
 *
 * @group Object
 * @template T The type of the source object.
 * @param {T} source The object to iterate and modify.
 * @param {MapObjectHandler<T>} handle The function to call for each key-value pair.
 * It receives the key, the old value, and the source object.
 * The returned value will replace the old value.
 * @returns {T} The modified source object.
 */
export function mapObject<T extends object>(
  source: T,
  handle: MapObjectHandler<T>
) {
  const entries = Object.entries(source);

  for (const [k, v] of entries) {
    (source as Any)[k] = handle(k, v, source);
  }

  return source;
}
