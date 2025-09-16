import { Post } from '@nestjs/common';
import { PublicOperation } from '../metadata/public-operation.js';

export function LoginMethod(): MethodDecorator {
  return (...args) => {
    Post('auth/login')(...args);
    PublicOperation()(...args);
  };
}
