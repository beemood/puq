import type { Type } from '@nestjs/common';
import type { Any } from '@puq/types';
import {
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  isDefinedOrThrow,
} from '@puq/utils';
import { AuthController } from './auth-controller.js';
import { AutoAuthMethod } from './auto-auth-method.js';

/**
 * Authentication controller decorator that automatically wires auth controller and the methods of the target class to the corresponding HTTP operations.
 * It infers operations' details from method names
 *
 * @group Decorators
 * @returns - {@link ClassDecorator}
 */
export function AutoAuthController(): ClassDecorator {
  return (...args) => {
    AuthController()(...args);

    const targetClass = args[0] as Any as Type;

    const propertyKeys = getOwnPropertyNames(targetClass);

    for (const propertyKey of propertyKeys) {
      const descriptor = getOwnPropertyDescriptor(targetClass, propertyKey);

      isDefinedOrThrow(descriptor);

      AutoAuthMethod()(targetClass, propertyKey, descriptor);
    }
  };
}
