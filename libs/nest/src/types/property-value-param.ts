import type { Any } from '@puq/types';

export type PropertyValueParam<V = Any> = {
  property: string;
  value: V;
};
