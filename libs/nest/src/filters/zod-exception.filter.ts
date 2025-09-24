// src/common/filters/zod-exception.filter.ts
import type { ExceptionFilter } from '@nestjs/common';
import { Catch, UnprocessableEntityException } from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(ZodError)
export class ZodExceptionFilter implements ExceptionFilter {
  catch(exception: ZodError) {
    throw new UnprocessableEntityException(exception);
  }
}
