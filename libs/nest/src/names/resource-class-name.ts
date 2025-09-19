import { endsWithFn, some, values } from '@puq/utils';

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
