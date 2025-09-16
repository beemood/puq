import { Param } from '@nestjs/common';

export function PramId(): ParameterDecorator {
  return (...args) => {
    Param('id')(...args);
  };
}
