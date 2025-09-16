import { Post } from '@nestjs/common';
import { InvalidAuthOperationNameError, isAuthOperationName } from '@puq/names';
import { PublicOperation } from '../metadata/public-operation.js';

export function LoginMethod(): MethodDecorator {
  return (...args) => {
    const operationName = args[1].toString();

    if (!isAuthOperationName(operationName)) {
      throw new InvalidAuthOperationNameError(operationName);
    }
    Post('auth/login')(...args);
    PublicOperation()(...args);
  };
}
