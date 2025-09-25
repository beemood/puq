import type { Any } from '@puq/types';

export type EventPayload = {
  uuid: string;
  timestamp: number;
  req: {
    url: string;
    body?: Any;
    query?: Any;
    params?: Any;
  };
  res?: {
    body?: Any;
    status?: number;
    errors?: Any;
  };
};
