import { Param } from '@nestjs/common';

export function ParamProperty(): ParameterDecorator {
  return (...args) => {
    Param('property')(...args);
  };
}
