import { createParamDecorator } from '@nestjs/common';
import type { AuthenticatedRequest } from '../types/authenticated-request.js';

/**
 * Extract and inject the user id from the application context.
 *
 * ### Example
 *
 * ````typescript
 *      methodName(@UserId() sessionId){ }
 * ````
 */
export const UserId = createParamDecorator((_, context) => {
  const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.user.userId;
});
