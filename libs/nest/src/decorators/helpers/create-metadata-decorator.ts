import { SetMetadata } from '@nestjs/common';
import type { Any, DecoratorType } from '@puq/types';
import { createMetadataKey } from './create-metadata-key.js';
import type { DecoratorParts } from './decorator-parts.js';

export class MetadataKeyAlreadyUsedError extends Error {
  constructor(name: string) {
    super(`The meta-data name, ${name}, is already used`);
  }
}

const metadataKeys = new Set<string>();

export function createMetadataDecorator<
  D extends DecoratorType,
  V extends Any[] = []
>(name: string): DecoratorParts<D, V> {
  const key = createMetadataKey(name);

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
