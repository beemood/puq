import { Injectable as __Injectable } from '@nestjs/common';
import {
  InvalidResourceNameError,
  isResouceOperationClassName,
} from '@puq/names';

/**
 * A class decorator that combines NestJS's `@Injectable` with resource name validation.
 *
 * This decorator ensures that the class name adheres to the naming convention
 * for a resource operation class before applying the `@Injectable` decorator.
 * This helps enforce consistency and prevents potential runtime errors
 * in a larger framework.
 *
 * @returns {ClassDecorator} A NestJS class decorator.
 * @throws {InvalidResourceNameError} If the class name does not follow the
 * resource operation naming convention.
 */
export function Injectable(): ClassDecorator {
  return (...args) => {
    if (!isResouceOperationClassName(args[0].name)) {
      throw new InvalidResourceNameError(args[0].name);
    }
    __Injectable()(...args);
  };
}
