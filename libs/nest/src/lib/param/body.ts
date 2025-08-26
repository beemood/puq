import { Body as __Body } from '@nestjs/common';
import type { ZodType } from 'zod';

export function Body(dto: ZodType): ParameterDecorator {
  return (...args) => {
    __Body({
      transform(value) {
        return dto.parse(value);
      },
    })(...args);
  };
}
