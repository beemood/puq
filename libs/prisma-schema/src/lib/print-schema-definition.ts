import type { DMMF } from '@prisma/client/runtime/library';
import { inspect } from 'util';
import {
  isCurrencyField,
  isIdField,
  isPositiveIntegerField,
  isRequiredField,
} from './is-field.js';
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
            parts.add('z.coerce.number().int().positive()');
          } else if (isPositiveIntegerField(field.name)) {
            parts.add('z.coerce.number().int().positive()');
          } else {
            parts.add('z.coerce.number().int()');
          }
          break;
        }
        case 'Boolean': {
          parts.add(`z.coerce.boolean()`);
          break;
        }
        case 'Decimal':
        case 'Float': {
          if (isCurrencyField(field.name)) {
            parts.add(`z.coerce.number().min(0)`);
          } else {
            parts.add(`z.coerce.number()`);
          }
          break;
        }
        case 'DateTime': {
          parts.add(`z.iso.datetime()`);
          break;
        }
        case 'String': {
          switch (field.name) {
            case 'name': {
              parts.add('z.string().min(3).max(30)');
              break;
            }
            case 'description': {
              parts.add('z.string().max(1000)');
              break;
            }
            case 'slug': {
              parts.add('z.string().min(3).max(35)');
              break;
            }
            case 'website':
            case 'uri':
            case 'url': {
              parts.add('z.url()');
              break;
            }
            case 'username':
            case 'email': {
              parts.add('z.email()');
              break;
            }
            case 'password': {
              parts.add(`
z.string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
  .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {error: 'must contain at least one special character' })
                `);
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
