import type { DMMF } from '@prisma/client/runtime/library';
import { isRelationField, isRequiredField } from '../helpers/is-field.js';
import {
  toEnumSchemaName,
  toOwnCreateSchemaName,
} from '../helpers/to-schema-name.js';
import { printScalarSchemaDefinition } from './print-scalar-schema-definition.js';

export function printRelationCreateFieldSchemaDefinition(field: DMMF.Field) {
  const schemaName = toOwnCreateSchemaName(field.type);

  if (field.isList) {
    return `
            z.object({ 
              createMany: z.object({ 
                  data :  ${schemaName}.array(), 
                  skipDuplicates: _bool.optional()
              })
            })
            `;
  } else {
    return `z.object({ create: ${schemaName}})`;
  }
}

export function printRelationUpdateFieldSchemaDefinition() {
  return `z.object({ connect: _idObject.optional(), disconnect: _idObject.optional() })`;
}

/**
 * Print a input field schema definition such as `z.string()`
 * @param field
 * @returns string
 */
export function printCreateInputFieldSchemaDefinition(
  model: DMMF.Model,
  field: DMMF.Field
): string {
  const parts = new Set<string>();

  // Define schema
  switch (field.kind) {
    case 'object': {
      if (isRelationField(field)) {
        parts.add(printRelationCreateFieldSchemaDefinition(field));
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
    if (!isRelationField(field)) {
      parts.add('array()');
    }
  }

  // define it is optional or not
  if (!isRequiredField(field)) {
    parts.add('optional()');
  }

  return [...parts].join('.');
}

/**
 * Print a input field schema definition such as `z.string().optional()`
 * @param field
 * @returns string
 */
export function printUpdateInputFieldSchemaDefinition(
  model: DMMF.Model,
  field: DMMF.Field
): string {
  const parts = new Set<string>();

  // Define schema
  switch (field.kind) {
    case 'object': {
      if (isRelationField(field)) {
        parts.add(printRelationUpdateFieldSchemaDefinition());
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
    if (!isRelationField(field)) {
      parts.add('array()');
    }
  }

  parts.add('optional()');

  return [...parts].join('.');
}
