import type { Abortable } from 'events';
import type { ObjectEncodingOptions, OpenMode } from 'fs';
import type { WriteFlag } from './write-flag.js';

export type WriteFileOptions = ObjectEncodingOptions &
  Abortable & {
    mode?: OpenMode;
    flag?: WriteFlag | undefined;
    flush?: boolean | undefined;
  };
