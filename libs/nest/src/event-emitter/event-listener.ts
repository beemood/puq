// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InvalidResourceNameError } from '@puq/errors';
import { isResourceClassNameOrThrow } from '@puq/names';
import { Injectable } from '../base/injectable.js';

/**
 * Wrapper around the Injectable decorator that checks target class name ends with "EventListener" suffix.
 * If it does not end with "EventListener" suffix then throw {@link InvalidResourceNameError}
 *
 * @group Decorators
 * @returns ClassDecorator
 */
export function EventListener(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    isResourceClassNameOrThrow(className, '*.EventListener$');
    Injectable()(...args)
  };
}
