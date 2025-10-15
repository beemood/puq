import { Query as NestQuery } from '@nestjs/common';
import type { ZodType } from 'zod';
import { ZodValidationPipe } from '../zod/zod-validation.pipe.js';
/**
 * Inject query params into the method parameters
 * If the schema is provided the input will be parsed with schema.
 * @param schema ZodType
 * @returns ParameterDecorator
 *
 * ### Examples
 * ````typescript
 *    methoName(@Query(ProductQuerySchema) query:ProductQuery){ }
 * ````
 */
export function Query<T extends ZodType>(schema?: T): ParameterDecorator {
  return (...args) => {
    if (schema) {
      NestQuery(new ZodValidationPipe(schema))(...args);
    } else {
      NestQuery()(...args);
    }
  };
}
