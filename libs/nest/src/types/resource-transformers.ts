import type { Any } from '@puq/types';
import type { ResourceOperationName } from '../names/resource-operation-name.js';

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
