import type { PipeTransform } from '@nestjs/common';
import {
    Injectable,
    UnprocessableEntityException
} from '@nestjs/common';
import type { ZodObject } from 'zod';
import { ZodError } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject) {}

  transform(value: unknown) {
    try {
      this.schema.parse(value);
      return value;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new UnprocessableEntityException({
          message: 'Validation failed',
          errors: error.issues,
        });
      }
      throw new UnprocessableEntityException('Validation failed');
    }
  }
}
