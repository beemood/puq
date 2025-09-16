/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthenticatedRequest = {
  user: { userId: any };
  session: { sessionId: any };
} & Request;
