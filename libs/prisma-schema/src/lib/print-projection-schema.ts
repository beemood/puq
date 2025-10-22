import type { DMMF } from '@prisma/client/runtime/library';
import type { Predicate } from '@puq/types';
import { isOwnField, isRelationField } from './is-field.js';
import {
  toCompleteProjectionFieldDefinition,
  toProjectionFieldDefinition,
} from './to-field-definitions.js';
import {
  toCompleteSelectSchemaName,
  toIncludeSchemaName,
  toOmitSchemaName,
  toOwnSelectSchemaName,
  toSelectSchemaName,
} from './to-schema-names.js';

export function _printProjectionSchema(
  model: DMMF.Model,
  toSchemaName: (modelName: string) => string,
  toFieldDefinition: (field: DMMF.Field) => string,
  fieldFilterFn: Predicate<DMMF.Field> = () => true
): string {
  const schemaFields = model.fields
    .filter(fieldFilterFn)
    .map(toFieldDefinition)
    .join(',');

  return [
    `export const ${toSchemaName(model.name)} = z.object({`,
    schemaFields,
    `})`,
  ].join('');
}

export function printOwnSelectProjectionSchema(model: DMMF.Model) {
  return _printProjectionSchema(
    model,
    toOwnSelectSchemaName,
    toProjectionFieldDefinition,
    isOwnField
  );
}

/**
 * Print the select projection schema
 * @param model
 * @returns
 */
export function printSelectProjectionSchema(model: DMMF.Model) {
  return _printProjectionSchema(
    model,
    toSelectSchemaName,
    toProjectionFieldDefinition
  );
}

/**
 * Print the select projection schema
 * @param model
 * @returns
 */
export function printCompleteSelectProjectionSchema(model: DMMF.Model) {
  return _printProjectionSchema(
    model,
    toCompleteSelectSchemaName,
    toCompleteProjectionFieldDefinition
  );
}

export function printOmitProjectionSchema(model: DMMF.Model) {
  return _printProjectionSchema(
    model,
    toOmitSchemaName,
    toProjectionFieldDefinition,
    isOwnField
  );
}

export function printIncludeProjectionSchema(model: DMMF.Model) {
  if (model.fields.some((e) => e.relationName != undefined)) {
    return _printProjectionSchema(
      model,
      toIncludeSchemaName,
      toCompleteProjectionFieldDefinition,
      isRelationField
    );
  }
  return '';
}
