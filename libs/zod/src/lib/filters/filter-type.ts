import type { BooleanFilterSchema } from './boolean-filter-schema.js';
import type { DatetimeFilterSchema } from './datetime-filter-schema.js';
import type { IntegerFilterSchema } from './integer-filter-schema.js';
import type { NumberFilterSchema } from './number-filter-schema.js';
import type { StringFilterSchema } from './string-filter-schema.js';

export type FilterType =
  | typeof StringFilterSchema
  | typeof NumberFilterSchema
  | typeof IntegerFilterSchema
  | typeof BooleanFilterSchema
  | typeof DatetimeFilterSchema;
