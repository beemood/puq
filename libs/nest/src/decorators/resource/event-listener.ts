import { InvalidResourceNameError } from '@puq/names';
import { Injectable } from './injectable.js';

/**
 * Wrapper around the Injectable decorator that validates resource name before applying the decorator
 * @group Decorator
 * @returns ClassDecorator
 */
export function EventListener(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    if (!className.endsWith('EventListener')) {
      throw new InvalidResourceNameError(
        `The resource name, ${className}, is invalid! Event listener class names must end with 'EventListener'`
      );
    }
    Injectable()(...args);
  };
}
