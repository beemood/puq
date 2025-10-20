import type { ExceptionFilter, Type } from '@nestjs/common';
import {
  Catch,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * Create PrismaException fitler that catches prisma errors and transform them into nestjs exceeptions.
 *
 * @param prismaErrorClass
 * @returns nestjs exception filter {@link ExceptionFilter}
 */
export function createPrismaExceptionFilter(prismaErrorClass: Type) {
  @Catch(prismaErrorClass)
  class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError) {
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
