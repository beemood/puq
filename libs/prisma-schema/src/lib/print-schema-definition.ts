import type { DMMF } from '@prisma/client/runtime/library';
import { inspect } from 'util';
import { isCurrencyField, isIdField, isRequiredField } from './is-field.js';
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
            parts.add('_id');
          } else {
            parts.add('_int');
          }
          break;
        }
        case 'Boolean': {
          parts.add(`_bool`);
          break;
        }
        case 'Decimal':
        case 'Float': {
          if (isCurrencyField(field.name)) {
            parts.add(`_currency`);
          } else {
            parts.add(`_number`);
          }
          break;
        }
        case 'DateTime': {
          parts.add(`_datetime`);
          break;
        }
        case 'String': {
          switch (field.name) {
            case 'name': {
              parts.add('_name');
              break;
            }
            case 'description': {
              parts.add('_description');
              break;
            }
            case 'slug': {
              parts.add('_slug');
              break;
            }
            case 'website':
            case 'uri':
            case 'url': {
              parts.add('_url');
              break;
            }
            case 'username':
            case 'email': {
              parts.add('_email');
              break;
            }
            case 'password': {
              parts.add(`_password`);
              break;
            }
            case 'phone': {
              parts.add('_phone');
              break;
            }
            case 'zip': {
              parts.add('_string');
              break;
            }
            default: {
              parts.add('_string');
              break;
            }
          }

          break;
        }
        case 'BigInt': {
          parts.add(`_string`);
          break;
        }

        case 'Json': {
          parts.add('z.json()');
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
