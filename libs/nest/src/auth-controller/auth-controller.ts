import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller } from '../base/controller.js';
/**
 * Authentication controller decorator that combines Nestjs and Swagger decorators.
 * @group Decorators
 * @returns - {@link ClassDecorator}
 */
export function AuthController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    Controller()(...args);
    ApiTags(className)(...args);
    ApiBearerAuth()(...args);
  };
}
