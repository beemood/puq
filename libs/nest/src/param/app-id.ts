import { createParamDecorator } from '@nestjs/common';
import type { AuthenticatedRequest } from '../types/authenticated-request.js';

/**
 * Extract the app id from the application context, `request.app.appId`
 *
 * ### Example
 *
 * ````typescript
 *  methodName(@AppId() id:number){ }
 * ````
 */
export const AppId = createParamDecorator((_, context) => {
  const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.app.appId;
});
