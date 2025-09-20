import { Injectable } from '../base/injectable.js';
import { InvalidNameError } from '../names/invalid-name-error.js';
import { ResourceClassNameSuffixes } from '../names/resource-class-name.js';

/**
 * Wrapper around the Injectable decorator that checks target class name ends with "EventListener" suffix.
 * If it does not end with "EventListener" suffix then throw {@link InvalidNameError}
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
