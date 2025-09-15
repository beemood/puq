import path from 'path';
/**
 * @group Path
 */
export const FILE_SYSTEM_SCOPE = 'FILE_SYSTEM_SCOPE';

/**
 * @group Path
 */
export type PathResolver = (...paths: string[]) => string;

/**
 * Thrown when the path is out of scope
 *
 * @group Path
 */
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
  const scopePath = process.env[FILE_SYSTEM_SCOPE];
  if (scopePath == undefined || scopePath == '') {
    return path.resolve;
  } else {
    return scope(path.resolve(scopePath));
  }
}

/**
 * The resolver resolves paths if they are under the defined scope in {@link FILE_SYSTEM_SCOPE} environment variable, or throw {@link PathOutOfScopeError}
 * @group Path
 * @param paths string values
 * @return string
 */
export const resolve = createScopeResolver();
