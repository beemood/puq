import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

export function ResourceController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    Controller()(...args);
    ApiTags(className)(...args);
    ApiBearerAuth()(...args);
  };
}
