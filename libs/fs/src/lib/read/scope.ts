import path from 'path';

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
  const scopePath = path.resolve(root);

  function scopedResolver(...segments: string[]) {
    const resolved = path.resolve(...segments);
    if (resolved.startsWith(scopePath)) {
      return resolved;
    }
    throw new PathOutOfScopeError(resolved, scopePath);
  }

  return scopedResolver;
}

function createScopeResolver() {
  const FILE_SYSTEM_SCOPE = process.env.FILE_SYSTEM_SCOPE;
  if (FILE_SYSTEM_SCOPE == undefined || FILE_SYSTEM_SCOPE == '') {
    return path.resolve;
  } else {
    return scope(path.resolve(FILE_SYSTEM_SCOPE));
  }
}

export const resolve = createScopeResolver();
