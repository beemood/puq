import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { classNameSuffixes, InvalidResourceNameError } from '@puq/names';

export function AuthController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    if (!className.endsWith(classNameSuffixes.Controller)) {
      throw new InvalidResourceNameError(className);
    }

    Controller()(...args);
    ApiTags(args[0].name)(...args);
    ApiBearerAuth()(...args);
  };
}
