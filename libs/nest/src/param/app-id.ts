import { createParamDecorator } from '@nestjs/common';
import type { AuthenticatedRequest } from '../types/authenticated-request.js';

export const AppId = createParamDecorator((_, context) => {
  const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.app.appId;
});
