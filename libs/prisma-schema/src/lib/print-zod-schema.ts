import type { DMMF } from '@prisma/client/runtime/library';
import { isCurrencyField } from './is-currency-field.js';
import { isPositiveIntegerField } from './is-positive-integer-field.js';
import { isShortStringField } from './is-short-string-field.js';

export function printZodSchema(field: DMMF.Field) {
  const parts: string[] = [];

  // Define schema
  switch (field.kind) {
    case 'object': {
      parts.push(`${field.name}OwnCreateSchema.optional()`);
      break;
    }

    case 'scalar': {
      switch (field.type) {
        case 'Int': {
          if (isPositiveIntegerField(field.name)) {
            parts.push('PZ.Scalar.positiveInt()');
          } else {
            parts.push('PZ.Scalar.int()');
          }
          break;
        }
        case 'Boolean': {
          parts.push(`PZ.Scalar.bool()`);
          break;
        }
        case 'Decimal':
        case 'Float': {
          if (isCurrencyField(field.name)) {
            parts.push(`PZ.Scalar.currency()`);
          } else {
            parts.push(`PZ.Scalar.number()`);
          }
          break;
        }
        case 'DateTime': {
          parts.push(`PZ.Scalar.datetime()`);
          break;
        }
        case 'String': {
          if (isShortStringField(field.name)) {
            parts.push(`PZ.Scalar.name()`);
          } else {
            parts.push(`PZ.Scalar.string()`);
          }
          break;
        }
        case 'BigInt': {
          parts.push(`PZ.Scalar.string()`);
          break;
        }
      }
      break;
    }
    case 'enum': {
      parts.push(`${field.type}Schema`);
      break;
    }

    case 'unsupported': {
      return 'z.any()';
    }
  }

  // define it is optional or not
  if (field.isRequired !== true) {
    parts.push('optional()');
  }

  return parts.join('.');
}
