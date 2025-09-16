import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function LoginController(): ClassDecorator {
  return (...args) => {
    Controller('auth')(...args);
    ApiTags(args[0].name)(...args);
  };
}
