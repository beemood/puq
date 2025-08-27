import type { ExceptionFilter } from '@nestjs/common';
import { Catch } from '@nestjs/common';
import { catchPrismaErrors } from '@puq/nest';
import { Prisma } from '@puq/prisma-puq';

@Catch(Prisma.PrismaClientKnownRequestError, Prisma.PrismaClientValidationError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(
    exception:
      | Prisma.PrismaClientKnownRequestError
      | Prisma.PrismaClientValidationError
  ) {
    catchPrismaErrors(exception);
  }
}
