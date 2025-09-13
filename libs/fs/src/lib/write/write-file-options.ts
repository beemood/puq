import { Abortable } from 'events';
import { Mode, ObjectEncodingOptions } from 'fs';

export type WriteFileOptions = ObjectEncodingOptions &
  Abortable & {
    mode?: Mode | undefined;
    flag?: string | undefined;
    flush?: boolean | undefined;
  };
