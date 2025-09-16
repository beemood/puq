import { createParamDecorator } from '@nestjs/common';
import { AuthenticatedRequest } from '../../types/authenticated-request.js';

export const SessionId = createParamDecorator((_, context) => {
  const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.session.sessionId;
});
