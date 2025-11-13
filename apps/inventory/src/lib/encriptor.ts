import type { Encoder } from '@puq/types';

export class Encriptor implements Encoder {
  encode<T, R>(data: T): R {
    return `encripted:${data}` as unknown as R;
  }
}
