import type { ExceptionFilter, Type } from '@nestjs/common';
import {
  Catch,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export function createPrismaExceptionFilter(errorClass: Type) {
  @Catch(errorClass)
  class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError) {
      // Unique
      switch (exception.code) {
        case 'P2002': {
          throw new UnprocessableEntityException({
            errors: [
              {
                property: exception.meta?.target,
                constraints: {
                  unique: true,
                },
              },
            ],
          });
        }
        case 'P2025': {
          throw new NotFoundException();
        }
        default: {
          throw new InternalServerErrorException('Prisma Exception');
        }
      }
    }
  }

  return PrismaExceptionFilter;
}
