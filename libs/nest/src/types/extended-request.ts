import type { Request } from 'express';

export type RequestUser = {
  id?: number;
};

export type ExtendedRequest = Request & { user?: RequestUser };
