import type { DMMF } from '@prisma/client/runtime/library';
import { isCurrencyFieldName, isIdField } from '../helpers/is-field.js';

export function printScalarSchemaDefinition(
  model: DMMF.Model,
  field: DMMF.Field
) {
  if (field.kind !== 'scalar') {
    throw new Error('The field is not scalar!');
  }

  switch (field.type) {
    case 'Int': {
      if (isIdField(model, field)) {
        return '_id';
      } else {
        return '_int';
      }
    }
    case 'Boolean': {
      return `_bool`;
    }
    case 'Decimal':
    case 'Float': {
      if (isCurrencyFieldName(field.name)) {
        return `_currency`;
      } else {
        return `_num`;
      }
    }
    case 'DateTime': {
      return `_date`;
    }
    case 'String': {
      switch (field.name) {
        case 'name': {
          return '_name';
        }
        case 'description': {
          return '_description';
        }
        case 'slug': {
          return '_slug';
        }
        case 'website':
        case 'uri':
        case 'url': {
          return '_url';
        }
        case 'username':
        case 'email': {
          return '_email';
        }
        case 'password': {
          return `_password`;
        }
        case 'phone': {
          return '_phone';
        }
        case 'zip': {
          return '_str';
        }
        default: {
          return '_str';
        }
      }
    }
    case 'BigInt': {
      return `_str`;
    }

    case 'Json': {
      return '_json';
    }

    default: {
      return `z.any()`;
    }
  }
}
