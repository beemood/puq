import { ObjectEncodingOptions } from 'fs';

export type ReadDirOptions = ObjectEncodingOptions & {
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
};

export async function readdir(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  return await readdir(rootPath, { encoding: 'utf-8', ...options });
}
