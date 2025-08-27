import type { ExceptionFilter } from '@nestjs/common';
import { Catch } from '@nestjs/common';
import { catchPrismaKnownRequestError } from '@puq/nest';
import { Prisma } from '@puq/prisma-puq';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError) {
    catchPrismaKnownRequestError(exception);
  }
}
