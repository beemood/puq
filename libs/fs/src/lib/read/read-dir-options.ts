import { ObjectEncodingOptions } from 'fs';

export type ReadDirOptions = ObjectEncodingOptions & {
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
};
