import type { PipeTransform } from '@nestjs/common';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import type { ZodType } from 'zod';

/**
 * Zod schema validation pipe: Safely transform and validate user input and return it or throw {@link UnprocessableEntityException} with detailed error object
 */
@Injectable()
export class ZodValidationPipe<T extends ZodType> implements PipeTransform {
  constructor(private schema: T) {}
  async transform(value: unknown) {
    const result = await this.schema.safeParseAsync(value);

    if (result.success) {
      return result.data;
    } else {
      const issues = result.error.issues;
      throw new UnprocessableEntityException({
        errors: issues?.map((e) => {
          return {
            property: e?.path?.join('.'),
            constraints: { [e?.code]: true },
            message: e?.message,
          };
        }),
      });
    }
  }
}
