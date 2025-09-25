import type { PipeTransform } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { ZodObject } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject) {}

  transform(value: unknown) {
    return this.schema.parse(value);
  }
}
