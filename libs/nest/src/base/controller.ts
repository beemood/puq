import { Controller as C } from '@nestjs/common';
import { InvalidNameError } from '../names/invalid-name-error.js';
import { ResourceClassNameSuffixes } from '../names/resource-class-name.js';

/**
 * Nestjs controller decorator wrapper that checks target class name that it ends with "Controller" or not.
 * If it does not ends with "Controller" suffix, then thorw {@link InvalidNameError}
 * 
 * @group Decorators
 * @returns - {@link ClassDecorator}
 */
export function Controller(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    if (!className.endsWith(ResourceClassNameSuffixes.Controller)) {
      throw new InvalidNameError(className, `*Controller$`);
    }

    C()(...args);
  };
}
