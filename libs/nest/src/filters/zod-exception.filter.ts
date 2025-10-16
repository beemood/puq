// src/common/filters/zod-exception.filter.ts
import type { ExceptionFilter } from '@nestjs/common';
import { Catch, UnprocessableEntityException } from '@nestjs/common';
import type { Any } from '@puq/types';
import { ZodError } from 'zod';

@Catch(ZodError)
export class ZodExceptionFilter implements ExceptionFilter {
  catch(exception: ZodError) {
    const errors = JSON.parse(exception.message);
    throw new UnprocessableEntityException({
      errors: errors?.map((e: Any) => {
        return {
          property: e?.path?.join('.'),
          constraints: { [e?.code]: true },
          message: e?.message,
        };
      }),
    });
  }
}
