import { SetMetadata } from '@nestjs/common';
import type { Any, DecoratorType } from '@puq/types';
import type { DecoratorParts } from '../types/decorator-parts.js';
import { toMetadataKey } from './to-metadata-key.js';

export class MetadataKeyAlreadyUsedError extends Error {
  constructor(name: string) {
    super(`The meta-data name, ${name}, is already used`);
  }
}

const metadataKeys = new Set<string>();

/**
 * Create meta-data decorator using nestjs SetMetadata decorator, if there is no params provided, the value will be true.
 *
 * @param name
 * @returns
 */
export function createMetadataDecorator<
  D extends DecoratorType,
  V extends Any[] = []
>(name: string): DecoratorParts<D, V> {
  const key = toMetadataKey(name);

  if (metadataKeys.has(name)) {
    throw new MetadataKeyAlreadyUsedError(name);
  }

  metadataKeys.add(name);

  function decorator(...params: V): D {
    const defaultParam = params == undefined ? true : params;
    return ((...args: Any[]) => {
      (SetMetadata(key, defaultParam) as Any)(...args);
    }) as D;
  }

  return { key, decorator };
}
