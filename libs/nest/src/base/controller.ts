import { Controller as C } from '@nestjs/common';
import { InvalidNameError } from '../names/invalid-name-error.js';
import {
  ResourceClassNameSuffixes
} from '../names/resource-class-name.js';

export function Controller(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    if (!className.endsWith(ResourceClassNameSuffixes.Controller)) {
      throw new InvalidNameError(className, `*Controller$`);
    }

    C()(...args);
  };
}
