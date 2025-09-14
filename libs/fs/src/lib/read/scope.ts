import { resolve } from 'path';

export type PathResolver = (...segments: string[]) => string;


export function scope(root: string): PathResolver {
  const scopePath = resolve(root);

  function pathResolver(...segments: string[]) {
    const resolved = resolve(...segments);

    if (resolved.startsWith(scopePath)) {
      return resolved;
    }

    throw new Error(
      `The path, ${resolved}, is out of the expected scope, ${scopePath}`
    );
  }

  return pathResolver;
}
