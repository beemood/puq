import { type Type } from '@nestjs/common';
import type { Any } from '@puq/types';
import { AutoResourceMethod } from './auto-resource-method.js';
import { ResourceController } from './resource-controller.js';

/**
 * This automatically wires the resource controller and its defined methods to the corresponding HTTP operation.
 * It infers all details of the controller class and its methods from method names.
 * The classes with this decorator does not need method decorators.
 * @returns - {@link ClassDecorator}
 *
 * @example
 *
 * This controller will automatically create the the path, `GET /product/:id`.
 *
 * ```typescript
 *  ;@AutoResourceController()
 *  export class ProductController {
 *
 *    // This method does not need decorator
 *    findOneById(@Param("id") id:number){
 *        return []
 *    }
 *  }
 * ```
 */
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

      AutoResourceMethod()(targetClass, propertyKey, descriptor ?? {});
    }
  };
}
