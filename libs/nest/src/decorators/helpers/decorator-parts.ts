import type { Any } from '@puq/types';

export type DecoratorParts<D, V extends Any[]> = {
  key: symbol;
  decorator: (...params: V) => D;
};
