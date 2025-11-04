import type { DMMF } from '@prisma/generator-helper';
import type { Field } from './dmmf.js';

export const isTimestampFieldName = (name: string) => {
  return name === 'createdAt' || name === 'updatedAt' || name === 'deletedAt';
};

export const isIdName = (name: string): boolean => {
  return name.endsWith('id') || name.endsWith('Id');
};

export const isRelation = (field: Field): boolean => {
  return field.relationName != undefined;
};

export const isNotRelation = (field: Field): boolean => {
  return field.relationName == undefined;
};

export const isNotId = (field: Field): boolean => {
  return field.name != 'id';
};

export const hasDefaultValue = (field: Field): boolean => {
  return field.hasDefaultValue == true;
};

export const isRequired = (field: Field): boolean => {
  if (hasDefaultValue(field)) {
    return false;
  }
  return field.isRequired == true;
};

export const isGeneratedSlugField = (field: Field): boolean => {
  if (field.type === 'String') {
    if (field.name === 'slug') {
      if (field.hasDefaultValue) {
        return true;
      }
    }
  }

  return false;
};

export const isGeneratedIdField = (field: Field): boolean => {
  if (field.hasDefaultValue) {
    const d = field.default as DMMF.FieldDefault;

    if (d.name === 'autoincrement' || d.name === 'uuid' || d.name === 'ulid') {
      return true;
    }

    return false;
  }

  return false;
};

export const isTimestampField = (field: Field): boolean => {
  if (isTimestampFieldName(field.name)) {
    return true;
  }
  return false;
};

export const isAuditField = (field: Field): boolean => {
  if (isTimestampField(field)) {
    return true;
  }

  if (field.name === 'updatedBy') {
    return true;
  }

  return false;
};

export const isNotTimestampField = (field: Field): boolean => {
  return !isTimestampField(field);
};

export const isInputField = (field: Field): boolean => {
  if (isGeneratedIdField(field) || isAuditField(field)) {
    return false;
  }

  if (isRelation(field)) {
    if (!field.isList) {
      return false;
    }
  }

  return true;
};

export const isRequiredInput = (field: Field): boolean => {
  if (field.isRequired) {
    if (
      isGeneratedIdField(field) ||
      isTimestampField(field) ||
      isGeneratedIdField(field)
    ) {
      return false;
    }
    return true;
  }
  return false;
};
