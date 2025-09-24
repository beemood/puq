import { InvalidResourceNameError } from '@puq/errors';
import { endsWithFn, keys, some, values } from '@puq/utils';

export const ResourceClassNameSuffixes = {
  Controller: 'Controller',
  Service: 'Service',
  Interceptor: 'Interceptor',
  ExceptionFilter: 'ExceptionFilter',
  EventEmitter: 'EventEmitter',
  EventListener: 'EventListener',
  Module: 'Module',
  Guard: 'Guard',
  Error: 'Error',
  Pipe: 'Pipe',
  Transformer: 'Transformer',
  Middleware: 'Middleware',
} as const;

export type ResourceClassNameSuffix = keyof typeof ResourceClassNameSuffixes;

/**
 * Check if
 * the given {@link className} is valid as in {@link ResourceClassNameSuffix} or not,
 * then return `true`, else `false
 *
 * @group Names
 * @param className {@link string}
 * @returns - {@link Boolean}
 */
export function isResourceClassName(className: string): boolean {
  return some(values(ResourceClassNameSuffixes), endsWithFn(className));
}

export function isResourceClassNameOrThrow<T extends string>(
  className: T,
  expected: string = keys(ResourceClassNameSuffixes)
    .map((e) => e + '$')
    .join('|')
): className is T {
  if (isResourceClassName(className)) {
    return true;
  }

  throw new InvalidResourceNameError(className, expected);
}
