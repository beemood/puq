import { SetMetadata } from '@nestjs/common';
import { names } from '@puq/names';

export type MetaDataDecoratorParts = {
  decorator: () => MethodDecorator;
  key: symbol;
};

export class MetaDataNameAlreadyUsedError extends Error {
  constructor(name: string) {
    super(`The meta-data name, ${name}, is already used`);
  }
}

const metadataKeys = new Set<string>();

export function createMetaDataDecorator<Params extends [] = any>(
  name: string
): MetaDataDecoratorParts {
  if (metadataKeys.has(name)) {
    throw new MetaDataNameAlreadyUsedError(name);
  }
  metadataKeys.add(name);

  const { screamingSnake } = names(name);

  const key = Symbol(screamingSnake + '__METADATA_KEY');

  function decorator(...params: Params): MethodDecorator {
    return (...args) => {
      SetMetadata(key, params)(...args);
    };
  }

  return {
    key,
    decorator,
  };
}
