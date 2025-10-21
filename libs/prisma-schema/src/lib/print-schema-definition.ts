import type { DMMF } from '@prisma/client/runtime/library';
import { inspect } from 'util';
import {
  isCurrencyField,
  isIdField,
  isPositiveIntegerField,
  isRequiredField,
} from './field-filter-functions.js';
/**
 * Print the zod schema definitions from prisma DMMF.Field options such as `z.int()`, `z.coerce.number().int()` etc.
 * @param field
 * @returns string
 */
export function printSchemaDefinition(
  model: DMMF.Model,
  field: DMMF.Field
): string {
  const parts = new Set<string>();

  if (field.name === 'id') console.log(inspect(field, true, 1000));

  // Define schema
  switch (field.kind) {
    case 'object': {
      if (field.relationName) {
        parts.add(`${field.type}OwnCreateSchema`);
      }
      break;
    }

    case 'scalar': {
      switch (field.type) {
        case 'Int': {
          if (isIdField(model, field)) {
            parts.add('PZ.Scalar.id()');
          } else if (isPositiveIntegerField(field.name)) {
            parts.add('PZ.Scalar.positiveInt()');
          } else {
            parts.add('PZ.Scalar.int()');
          }
          break;
        }
        case 'Boolean': {
          parts.add(`PZ.Scalar.bool()`);
          break;
        }
        case 'Decimal':
        case 'Float': {
          if (isCurrencyField(field.name)) {
            parts.add(`PZ.Scalar.currency()`);
          } else {
            parts.add(`PZ.Scalar.number()`);
          }
          break;
        }
        case 'DateTime': {
          parts.add(`PZ.Scalar.datetime()`);
          break;
        }
        case 'String': {
          switch (field.name) {
            case 'name': {
              parts.add('PZ.Scalar.name()');
              break;
            }
            case 'description': {
              parts.add('PZ.Scalar.description()');
              break;
            }
            case 'slug': {
              parts.add('PZ.Scalar.slug()');
              break;
            }
            case 'website':
            case 'uri':
            case 'url': {
              parts.add('PZ.Scalar.url()');
              break;
            }
            case 'username':
            case 'email': {
              parts.add('PZ.Scalar.email()');
              break;
            }
            case 'password': {
              parts.add('PZ.Scalar.password()');
              break;
            }
            case 'phone': {
              parts.add('PZ.Scalar.phone()');
              break;
            }
            case 'zip': {
              parts.add('PZ.Scalar.zip()');
              break;
            }
            default: {
              parts.add('PZ.Scalar.string()');
              break;
            }
          }

          break;
        }
        case 'BigInt': {
          parts.add(`PZ.Scalar.string()`);
          break;
        }

        case 'Json': {
          parts.add('PZ.Scalar.json()');
          break;
        }
      }
      break;
    }
    case 'enum': {
      parts.add(`${field.type}Schema`);
      break;
    }

    case 'unsupported': {
      parts.add('z.any()');
      break;
    }
  }

  if (field.isList) {
    parts.add('array()');
  }

  // define it is optional or not
  if (!isRequiredField(field)) {
    parts.add('optional()');
  }

  return [...parts].join('.');
}
