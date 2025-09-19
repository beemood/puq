import type { Any } from '@puq/types';

export type EventPayload = {
  req: {
    uuid: string;
    timestamp: number;
    url: string;
    body?: Any;
    query?: Any;
    params?: Any;
  };
  res?: {
    uuid: string;
    timestamp: number;
    body?: Any;
    status?: number;
    errors?: Any;
  };
};
