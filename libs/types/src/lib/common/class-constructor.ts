import { Any } from './any.js';

export interface ClassConstructor<T = Any> {
  new (...args: Any[]): T;
}
