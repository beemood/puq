import { Controller, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { classNameSuffixes, InvalidResourceNameError } from '@puq/names';
import { ResourceEventInterceptor } from 'src/interceptors/resource-event.js';
import { ResourceTransformInterceptor } from 'src/interceptors/resource-transform.js';
import { ResourceName } from '../metadata/resource-name.js';

/**
 * A class decorator that combines NestJS's `@Controller` with Swagger decorators
 * for a more streamlined API resource setup.
 *
 * This decorator automatically applies:
 * - `@Controller()`: Marks the class as a NestJS controller.
 * - `@ApiTags()`: Adds an API tag based on the controller's class name,
 * which helps group related endpoints in the Swagger UI.
 * - `@ApiBearerAuth()`: Specifies that this resource's endpoints are protected
 * by a bearer token, typically for authentication.
 *
 * @returns - {@link ClassDecorator} A NestJS class decorator.
 */
export function ResourceController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    if (!className.endsWith(classNameSuffixes.Controller)) {
      throw new InvalidResourceNameError(className);
    }
    UseInterceptors(
      ResourceTransformInterceptor,
      ResourceEventInterceptor
    )(...args);
    ResourceName()(...args);
    Controller()(...args);
    ApiTags(className)(...args);
    ApiBearerAuth()(...args);
  };
}
