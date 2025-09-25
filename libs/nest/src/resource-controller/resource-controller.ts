import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller } from '../base/controller.js';
import { ResourceName } from '../metadata/resource-name.js';

/**
 * Nestjs controller decorator that combines common resouce interceptors, {@link ResourceName} metadata, and swagger docs and security.
 *
 * @returns - {@link ClassDecorator}
 */
export function ResourceController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    Controller()(...args);
    ResourceName()(...args);
    ApiTags(className)(...args);
    ApiBearerAuth()(...args);
  };
}
