import { createParamDecorator } from '@nestjs/common';
import type { AuthenticatedRequest } from '../types/authenticated-request.js';

/**
 * Extract the auth-token from the application context `request.headers.authorization`
 *
 * ### Example
 *
 * ````typescript
 *  methodName(@AuthToken() token:string){ }
 * ````
 */
export const AuthToken = createParamDecorator((_, context) => {
  const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.headers.authorization;
});
