// src/common/filters/zod-exception.filter.ts
import type { ExceptionFilter } from '@nestjs/common';
import {
    Catch,
    NotFoundException,
    UnprocessableEntityException,
} from '@nestjs/common';
import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import type { Any } from '@puq/types';
import type { ZodError } from 'zod';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: Any) {
    const name = exception.name as 'ZodError' | 'PrismaClientKnownRequestError';
    switch (name) {
      case 'ZodError': {
        const e = exception as ZodError;
        throw new UnprocessableEntityException({
          issues: JSON.parse(e.message),
        });
      }
      case 'PrismaClientKnownRequestError': {
        const e = exception as PrismaClientKnownRequestError;
        const code = e.code;
        switch (code) {
          case 'P2002': {
            throw new UnprocessableEntityException({ ...exception });
          }
          case 'P2025': {
            throw new NotFoundException({ ...exception });
          }
        }

        throw new UnprocessableEntityException({
          issues: e,
        });
      }

      default: {
        throw exception;
      }
    }
  }
}
