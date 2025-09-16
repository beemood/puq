/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthenticatedRequest = {
  app: { appId: any };
  user: { userId: any };
  session: { sessionId: any };
} & Request;
