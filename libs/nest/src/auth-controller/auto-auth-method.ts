import { Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { InvalidNameError } from '@puq/errors';
import { AuthOperationNames, AuthPaths, isAuthOperationName } from '@puq/names';
import { values } from '@puq/utils';
import { PublicOperation } from '../metadata/public-operation.js';
import { SwaggerAutoOperation } from '../swagger/swagger-auth-operation.js';

/**
 * Authentication method decorator that automatically wires target method to the corresponding HTTP operation as defined in {@link AuthOperationNames}
 * if it is a valid, one of the operations {@link AuthOperationNames}
 *
 * @group Decorators
 * @returns - {@link MethodDecorator}
 * @throws - {@link InvalidNameError}
 */
export function AutoAuthMethod(): MethodDecorator {
  return (...args) => {
    const operationName = args[1].toString();

    if (!isAuthOperationName(operationName)) {
      throw new InvalidNameError(
        operationName,
        values(AuthOperationNames) + ''
      );
    }

    // Limit 1 request a minute
    Throttle({ default: { limit: 1, ttl: 60_000 } })(...args);

    // Set operation summary
    SwaggerAutoOperation(operationName)(...args);

    // Set http decorator
    switch (operationName) {
      case 'forgotPassword': {
        Post(AuthPaths.forgotPassword)(...args);
        break;
      }
      case 'loginWithCredentials': {
        Post(AuthPaths.loginWithCredentials)(...args);
        break;
      }
      case 'loginWithOtp': {
        Post(AuthPaths.loginWithOtp)(...args);
        break;
      }
      case 'logoutFromAllSessions': {
        Post(AuthPaths.logoutFromAllSessions)(...args);
        break;
      }
      case 'logoutFromCurrentSession': {
        Post(AuthPaths.logoutFromCurrentSession)(...args);
        break;
      }
      case 'resetPassword': {
        Post(AuthPaths.resetPassword)(...args);
        break;
      }
      case 'subscribe': {
        Post(AuthPaths.subscribe)(...args);
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
