import type { ExceptionFilter } from '@nestjs/common';
import {
  Catch,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError) {
    switch (exception.code) {
      case 'P2002': {
        throw new UnprocessableEntityException({
          ...exception,
        });
      }
      case 'P2025': {
        throw new NotFoundException({
          ...exception,
        });
      }
      default: {
        throw new InternalServerErrorException('Prisma Exception');
      }
    }
  }
}
