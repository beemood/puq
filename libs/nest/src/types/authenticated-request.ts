import type { Request } from 'express';

export type AuthenticatedRequest = {
  app: { appId: string };
  user: { userId: string };
  session: { sessionId: string };
} & Request;
