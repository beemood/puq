import type { Any } from '@puq/types';
import type { ZodType } from 'zod';
import { BooleanFilterSchema } from '../filters/boolean-filter-schema.js';
import { DatetimeFilterSchema } from '../filters/datetime-filter-schema.js';
import { IntegerFilterSchema } from '../filters/integer-filter-schema.js';
import { NumberFilterSchema } from '../filters/number-filter-schema.js';
import { StringFilterSchema } from '../filters/string-filter-schema.js';

/**
 * Get the corresponding filter schema by literal schema type for the given literal {@link schema}. For string schema, {@link StringFilterSchema}; number, {@link NumberFilterSchema}; integer, {@link IntegerFilterSchema}; datetime, {@link DatetimeFilterSchema}
 *
 * @param schema
 * @returns
 */
export function toFilterSchema(schema: ZodType) {
  const type = schema.def.type;

  switch (type) {
    case 'bigint':
    case 'string': {
      if ((schema.def as Any).format === 'datetime') {
        return DatetimeFilterSchema;
      }
      return StringFilterSchema;
    }
    case 'number': {
      if ((schema.def as Any).format === 'safeint') {
        return IntegerFilterSchema;
      }

      return NumberFilterSchema;
    }
    case 'int': {
      return IntegerFilterSchema;
    }
    case 'boolean': {
      return BooleanFilterSchema;
    }
    case 'date': {
      return DatetimeFilterSchema;
    }
    default: {
      return null;
    }
  }
}
