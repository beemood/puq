import { InvalidNameError } from '../names/invalid-name-error.js';
import { ResourceClassNameSuffixes } from '../names/resource-class-name.js';
import { Injectable } from './injectable.js';

/**
 * Wrapper around the Injectable decorator that validates resource name before applying the decorator
 *
 * @group Decorators
 * @returns ClassDecorator
 */
export function EventListener(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    if (!className.endsWith(ResourceClassNameSuffixes.EventListener)) {
      throw new InvalidNameError(className);
    }
    Injectable()(...args);
  };
}
