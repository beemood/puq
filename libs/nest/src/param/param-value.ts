import { Param } from '@nestjs/common';

export function ParamValue(): ParameterDecorator {
  return (...args) => {
    Param('value')(...args);
  };
}
