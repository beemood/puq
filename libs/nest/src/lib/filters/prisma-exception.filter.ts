import {
  BadRequestException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export function catchPrismaKnownRequestError(
  exception: PrismaClientKnownRequestError
) {
  switch (exception.code) {
    case 'P2002': {
      const target = (exception.meta?.target as string) ?? 'unkown';
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
      throw new BadRequestException(
        `${exception.code}: An unexpected database error occurred!`
      );
    }
  }
}
