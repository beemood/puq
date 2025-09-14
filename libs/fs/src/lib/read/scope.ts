import { resolve } from 'path';

export type PathResolver = (...segments: string[]) => string;

export class PathOutOfScopeError extends Error {
  constructor(path: string, scope: string) {
    super(`The path, ${path}, is out of the expected scope, ${scope}`);
  }
}

/**
 * Create a scoped path resolver function that checks the resolved path is under the provided {@link root} directory or throw {@link PathOutOfScopeError}
 *
 * @group Read
 * @param root direcory to scope
 * @returns secure resolver function
 */
export function scope(root: string): PathResolver {
  const scopePath = resolve(root);

  function pathResolver(...segments: string[]) {
    const resolved = resolve(...segments);

    if (resolved.startsWith(scopePath)) {
      return resolved;
    }
    throw new PathOutOfScopeError(resolved, scopePath);
  }

  return pathResolver;
}
