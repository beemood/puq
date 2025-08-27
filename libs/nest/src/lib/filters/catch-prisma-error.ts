import {
  BadRequestException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import type {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';
import { inspect } from 'util';

export function catchPrismaErrors(
  exception: PrismaClientKnownRequestError | PrismaClientValidationError
) {
  console.error('Inspect: \n\b', inspect(exception, true, 10));

  {
    const e = exception as PrismaClientKnownRequestError;
    if (e.code) {
      switch (e.code) {
        case 'P2002': {
          const target = (e.meta?.target as string) ?? 'unkown';
          throw new UnprocessableEntityException({
            errors: [
              {
                code: 'unique',
                path: target,
                message: `Unique: ${target} already exists`,
              },
            ],
          });
        }
        case 'P2025': {
          throw new NotFoundException('Record not found');
        }

        default: {
          throw new BadRequestException(`${e.code}: ${e.message}`);
        }
      }
    }
  }

  {
    throw new BadRequestException(`Potentially input validation error`);
  }
}
