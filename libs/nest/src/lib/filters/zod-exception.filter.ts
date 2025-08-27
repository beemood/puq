import type { ExceptionFilter } from '@nestjs/common';
import { Catch, UnprocessableEntityException } from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(ZodError)
export class ZodExceptionFilter implements ExceptionFilter {
  catch(exception: ZodError) {
    if (exception.issues) {
      throw new UnprocessableEntityException({ errors: exception.issues });
    }
    throw exception;
  }
}
