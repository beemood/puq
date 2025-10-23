import type { DMMF } from '@prisma/client/runtime/library';
import { inspect } from 'util';
import { isRelationField, isRequiredField } from '../helpers/is-field.js';
import {
  toEnumSchemaName,
  toOwnCreateSchemaName,
} from '../helpers/to-schema-name.js';
import { printScalarSchemaDefinition } from './print-scalar-schema-definition.js';

/**
 * Print a input field schema definition such as `z.string()`
 * @param field
 * @returns string
 */
export function printInputFieldSchemaDefinition(
  model: DMMF.Model,
  field: DMMF.Field
): string {
  const parts = new Set<string>();

  if (field.name === 'id') console.log(inspect(field, true, 1000));

  // Define schema
  switch (field.kind) {
    case 'object': {
      if (isRelationField(field)) {
        if (field.isList) {
          parts.add(`
            z.object({ createMany: ${toOwnCreateSchemaName(
              field.type
            )}.array() })
            `);
        } else {
          parts.add(`z.object({ create: ${toOwnCreateSchemaName(field.type)}})`);
        }
      }
      break;
    }

    case 'scalar': {
      parts.add(printScalarSchemaDefinition(model, field));
      break;
    }
    case 'enum': {
      parts.add(toEnumSchemaName(field.type));
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
