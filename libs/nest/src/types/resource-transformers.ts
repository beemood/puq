import type { CrudOperationName } from '@puq/names';
import type { Any } from '@puq/types';

export type ResourceTransformFn<T = Any> = (value: T) => T;

export type ResourceTransformers = Partial<
  Record<
    CrudOperationName,
    {
      body?: ResourceTransformFn;
      query?: ResourceTransformFn;
      params?: ResourceTransformFn;
      response?: ResourceTransformFn;
    }
  >
>;
