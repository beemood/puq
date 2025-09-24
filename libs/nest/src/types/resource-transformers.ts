import type { ResourceOperationName } from '@puq/names';
import type { Any } from '@puq/types';

export type ResourceTransformFn<T = Any> = (value: T) => T;

export type ResourceTransformers = Partial<
  Record<
    ResourceOperationName,
    {
      body?: ResourceTransformFn;
      query?: ResourceTransformFn;
      params?: ResourceTransformFn;
      response?: ResourceTransformFn;
    }
  >
>;
