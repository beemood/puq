import type { DMMF } from '@prisma/client/runtime/library';
import { isRelationField } from './is-field.js';
import {
  toEnumArrayFilterSchemaName,
  toEnumFilterSchemaName,
  toOwnWhereSchemaName,
} from './to-schema-names.js';

export function printWhereFieldSchemaDefinition(field: DMMF.Field) {
  switch (field.kind) {
    case 'object': {
      if (isRelationField(field)) {
        const ownWhereSchemaName = toOwnWhereSchemaName(field.type);
        if (field.isList) {
          return `z.object({
            every: ${ownWhereSchemaName}.optional(), 
            some: ${ownWhereSchemaName}.optional(), 
            none: ${ownWhereSchemaName}.optional()
          }).optional()`;
        } else {
          return `${ownWhereSchemaName}.optional()`;
        }
      }
      return `z.never()`;
    }
    case 'scalar': {
      switch (field.type) {
        case 'Json': {
          return '_jsonFilter.optional()';
        }
        case 'String': {
          if (field.isList) {
            return `_strArrayFilter.optional()`;
          }
          return `_strFilter.optional()`;
        }
        case 'Decimal':
        case 'Float': {
          if (field.isList) {
            return `_numArrayFilter.optional()`;
          }
          return `_numFilter.optional()`;
        }
        case 'Int': {
          if (field.isList) {
            return '_intArrayFilter.optional()';
          }
          return '_intFilter.optional()';
        }
        case 'Boolean': {
          if (field.isList) {
            return '_boolArrayFilter.optional()';
          }
          return '_boolFilter.optional()';
        }
        case 'DateTime': {
          if (field.isList) {
            return '_dateArrayFilter.optional()';
          }
          return '_dateFilter.optional()';
        }
      }

      break;
    }
    case 'enum': {
      if (field.isList) {
        const enumArrayFilterSchemaName = toEnumArrayFilterSchemaName(
          field.type
        );
        return `${enumArrayFilterSchemaName}.optional()`;
      } else {
        const enumFilterSchemaName = toEnumFilterSchemaName(field.type);
        return `${enumFilterSchemaName}.optional()`;
      }
    }
    case 'unsupported': {
      return `z.never()`;
    }
  }

  return `z.never()`;
}
