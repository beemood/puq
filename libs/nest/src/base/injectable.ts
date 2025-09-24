import { Injectable as __Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InvalidResourceNameError } from '@puq/errors';
import { isResourceClassNameOrThrow } from '@puq/names';

/**
 * Wrapper around Nestjs Injectable decorator that validate the target class name as defined in {@link ResourceClassNameSuffixes}.
 *
 * @returns - {@link ClassDecorator}
 * @throws - {@link InvalidResourceNameError}
 */
export function Injectable(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    isResourceClassNameOrThrow(className);

    __Injectable()(...args);
  };
}
