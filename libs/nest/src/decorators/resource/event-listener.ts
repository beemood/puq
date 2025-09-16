import { InvalidResourceNameError } from '@puq/names';
import { Injectable } from './injectable.js';

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
