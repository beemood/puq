import type { PipeTransform } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { ZodType } from 'zod';

/**
 * Nestjs validation pipe integrated with zod schema
 * The pipe auto-parse json objects before applying zod schema parse method.
 */
@Injectable()
export class ZodValidationPipe<T extends ZodType> implements PipeTransform {
  constructor(private schema: T) {}
  transform(value: unknown) {
    return this.schema.parse(value);
  }
}
