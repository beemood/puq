import { Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { AuthOperationName } from '@puq/names';
import { InvalidAuthOperationNameError, isAuthOperationName } from '@puq/names';
import { PublicOperation } from '../metadata/public-operation.js';
import { authPaths } from './auth-paths.js';
import { SwaggerAutoOperation } from './swagger-auth-operation.js';

export function AuthMethod(): MethodDecorator {
  return (...args) => {
    const operationName = args[1].toString() as AuthOperationName;

    if (!isAuthOperationName(operationName)) {
      throw new InvalidAuthOperationNameError(operationName);
    }

    // Limit 1 request a minute
    Throttle({ default: { limit: 1, ttl: 60_000 } })(...args);

    // Set operation summary
    SwaggerAutoOperation(operationName)(...args);

    // Set http decorator
    switch (operationName) {
      case 'forgotPassword': {
        Post(authPaths.forgotPassword)(...args);
        break;
      }
      case 'loginWithCredentials': {
        Post(authPaths.loginWithCredentials)(...args);
        break;
      }
      case 'loginWithOtp': {
        Post(authPaths.loginWithOtp)(...args);
        break;
      }
      case 'logoutFromAllSessions': {
        Post(authPaths.logoutFromAllSessions)(...args);
        break;
      }
      case 'logoutFromCurrentSession': {
        Post(authPaths.logoutFromCurrentSession)(...args);
        break;
      }
      case 'resetPassword': {
        Post(authPaths.resetPassword)(...args);
        break;
      }
      case 'subscribe': {
        Post(authPaths.subscribe)(...args);
        break;
      }
    }

    // Configure access policy

    switch (operationName) {
      case 'forgotPassword':
      case 'loginWithCredentials':
      case 'loginWithOtp':
      case 'resetPassword':
      case 'subscribe': {
        PublicOperation()(...args);
        break;
      }
      case 'logoutFromAllSessions':
      case 'logoutFromCurrentSession': {
        break;
      }
    }
  };
}
