import { z } from 'zod';
import {
  BooleanFilterSchema,
  DateTimeFilterSchema,
  IntegerFilterSchema,
  NumberFilterSchema,
  StringFilterSchema,
} from './property-filter-schemas.js';

/**
 * Convert zod object schema's properties into zod enum ('asc' | 'desc') type.
 *
 * @param zodObject Zod object schema
 * @returns Zod object schema with BooleanType properties
 */
export function toWhereRecord<T extends Record<string, z.ZodType>>(
  zodObject: z.ZodObject<T>
) {
  const newShape = Object.fromEntries(
    Object.entries(zodObject.shape)
      .map(([key, value]) => {
        const type = value.def.type;
        switch (type) {
          case 'bigint':
          case 'string': {
            return [key, StringFilterSchema];
          }
          case 'number': {
            return [key, NumberFilterSchema];
          }
          case 'boolean': {
            return [key, BooleanFilterSchema];
          }
          case 'int': {
            return [key, IntegerFilterSchema];
          }
          case 'date': {
            return [key, DateTimeFilterSchema];
          }
          case 'symbol':
          case 'undefined':
          case 'object':
          case 'function':
          case 'null':
          case 'void':
          case 'never':
          case 'any':
          case 'unknown':
          case 'record':
          case 'file':
          case 'array':
          case 'tuple':
          case 'union':
          case 'intersection':
          case 'map':
          case 'set':
          case 'enum':
          case 'literal':
          case 'nullable':
          case 'optional':
          case 'nonoptional':
          case 'success':
          case 'transform':
          case 'default':
          case 'prefault':
          case 'catch':
          case 'nan':
          case 'pipe':
          case 'readonly':
          case 'template_literal':
          case 'promise':
          case 'lazy':
          case 'custom': {
            return null;
          }
        }
      })
      .filter((e) => e) as [[]]
  );

  return z.object(newShape).partial();
}
