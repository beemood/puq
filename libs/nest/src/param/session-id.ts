import { createParamDecorator } from '@nestjs/common';
import type { AuthenticatedRequest } from '../types/authenticated-request.js';

/**
 * Extract and inject the session id from the application context.
 *
 * ### Example
 *
 * ````typescript
 *      methodName(@SessionId() sessionId){ }
 * ````
 */
export const SessionId = createParamDecorator((_, context) => {
  const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.session.sessionId;
});
