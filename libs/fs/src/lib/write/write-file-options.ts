import { Abortable } from 'events';
import { ObjectEncodingOptions, OpenMode } from 'fs';
import { WriteFlag } from './write-flag.js';

export type WriteFileOptions = ObjectEncodingOptions &
  Abortable & {
    mode?: OpenMode;
    flag?: WriteFlag | undefined;
    flush?: boolean | undefined;
  };
