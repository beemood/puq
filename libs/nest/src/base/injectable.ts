import { Injectable as __Injectable } from '@nestjs/common';

import { values } from '@puq/utils';
import { InvalidNameError } from '../names/invalid-name-error.js';
import {
  isResourceClassName,
  ResourceClassNameSuffixes,
} from '../names/resource-class-name.js';

/**
 * Wrapper around Nestjs Injectable decorator that validate the target class name as defined in {@link ResourceClassNameSuffixes}.
 * a
 * @returns - {@link ClassDecorator}
 * @throws - {@link InvalidNameError}
 */
export function Injectable(): ClassDecorator {
  return (...args) => {
    if (!isResourceClassName(args[0].name)) {
      throw new InvalidNameError(
        args[0].name,
        values(ResourceClassNameSuffixes) + ''
      );
    }
    __Injectable()(...args);
  };
}
