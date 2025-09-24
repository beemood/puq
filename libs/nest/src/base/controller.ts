/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller as NestController } from '@nestjs/common';
import { InvalidResourceNameError } from '@puq/errors';
import { isResourceClassNameOrThrow } from '@puq/names';

/**
 * Nestjs controller decorator wrapper that checks target class name that it ends with "Controller" or not.
 * If it does not ends with "Controller" suffix, then thorw {@link InvalidResourceNameError}
 *
 * @group Decorators
 * @returns - {@link ClassDecorator}
 */
export function Controller(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    isResourceClassNameOrThrow(className, 'Controller$');

    NestController()(...args);
  };
}
