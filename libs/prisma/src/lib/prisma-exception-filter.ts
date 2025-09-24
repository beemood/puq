import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import type { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An unexpected error occurred';

    switch (exception.code) {
      case 'P2002':
        // Unique constraint violation
        status = HttpStatus.CONFLICT;
        message = 'Unique constraint violation. This record already exists.';
        break;
      case 'P2025':
        // Record not found
        status = HttpStatus.NOT_FOUND;
        message = 'The requested record was not found.';
        break;
      // Add other Prisma error codes you want to handle
      // See: https://www.prisma.io/docs/reference/api-reference/error-reference
      default:
        // Handle other errors gracefully
        status = HttpStatus.BAD_REQUEST;
        message = 'Invalid operation.';
        break;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
