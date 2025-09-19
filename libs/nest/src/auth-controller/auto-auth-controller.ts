import type { Type } from '@nestjs/common';
import type { Any } from '@puq/types';
import { AuthController } from './auth-controller.js';
import { AutoAuthMethod } from './auto-auth-method.js';

/**
 * Automatically wires auth controller and its methods to the corresponding HTTP operation.
 * It infers operations' details from method names
 * @group Decorator
 * @returns - {@link ClassDecorator}
 */
export function AutoAuthController(): ClassDecorator {
  return (...args) => {
    AuthController()(...args);

    const targetClass = args[0] as Any as Type;

    const propertyKeys = Object.getOwnPropertyNames(targetClass.prototype);

    for (const propertyKey of propertyKeys) {
      const descriptor = Object.getOwnPropertyDescriptor(
        targetClass.prototype,
        propertyKey
      );

      AutoAuthMethod()(targetClass, propertyKey, descriptor ?? {});
    }
  };
}
