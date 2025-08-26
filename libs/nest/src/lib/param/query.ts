import { Query as __Query } from '@nestjs/common';
import type { ZodType } from 'zod';

export function Query(dto: ZodType): ParameterDecorator {
  return (...args) => {
    __Query({
      transform(value) {
        return dto.parse(value);
      },
    })(...args);
  };
}
