import type { Type } from '@nestjs/common';
import type { Any } from '@puq/types';
import { ResourceController } from './resource-controller.js';
import { ResourceMethod } from './resource-method.js';

export function AutoResourceController(): ClassDecorator {
  return (...args) => {
    ResourceController()(...args);
    const targetClass = args[0] as Any as Type;

    const propertyKeys = Object.getOwnPropertyNames(targetClass.prototype);

    for (const propertyKey of propertyKeys) {
      const descriptor = Object.getOwnPropertyDescriptor(
        targetClass.prototype,
        propertyKey
      );

      ResourceMethod()(targetClass, propertyKey, descriptor ?? {});
    }
  };
}
