import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { names } from '@puq/names';
/**
 * Auth controller decorator
 * @returns Class decorator
 */
export function AuthController(): ClassDecorator {
  return (...args) => {
    Controller('auth')(...args);
    ApiTags(names(args[0].name).titleCase)(...args);
  };
}
