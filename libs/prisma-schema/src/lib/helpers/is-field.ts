import type { DMMF } from '@prisma/client/runtime/library';

/**
 * Determines if a field requires a value provided by the user.
 * A field is required if it is **not generated**, **has no default value**, and is marked as **isRequired**.
 * @param field DMMF.Field
 * @returns boolean
 */
export function isRequiredField(field: DMMF.Field): boolean {
  if (isGeneratedField(field)) {
    return false;
  }

  if (isRelationField(field)) {
    if (field.isList) {
      return false;
    }
  }

  if (field.hasDefaultValue) {
    return false;
  }

  return field.isRequired == true;
}

/**
 * Determines if a field is one of predefiend currency property names such as **price**, **cost**, **total**, and so more
 * @param name string
 * @returns boolean
 */
export function isCurrencyFieldName(name: string) {
  return new RegExp(
    /(cost|price|total|subtotal|tax|salesPrice|amount|rate|value|fee|revenue|expense|budget|discount|debit|credit|finance|currency|money|usd|eur|gbp|jpy)$/i
  ).test(name);
}

/**
 * Determines if a field is **generated field** such as **uuid**, **autoincrement**, **now** , or **updatedAt**
 * @param field
 * @returns
 */
export function isGeneratedField(field: DMMF.Field) {
  if (field.kind === 'unsupported') {
    return true;
  }

  if (field.default) {
    const defaultName = (field.default as DMMF.FieldDefault).name;
    if (defaultName === 'uuid') return true;
    if (defaultName === 'autoincrement') return true;
    if (defaultName === 'now') return true;
  }

  if (field.isUpdatedAt) {
    return true;
  }

  return false;
}

/**
 * Determinses a field is one of the **timestamp** fields, **createdAt**, **udpatedAt**, **deletedAt**
 * @param field DMMF.Field
 * @returns boolean
 */
export function isTimestampField(field: DMMF.Field): boolean {
  if (field.isUpdatedAt) {
    return true;
  }

  if (field.default && (field.default as DMMF.FieldDefault).name === 'now') {
    return true;
  }

  if (field.name === 'deletedAt' && field.isRequired !== true) {
    return true;
  }

  if (field.name === 'createdAt' && field.isRequired !== true) {
    return true;
  }

  if (field.name === 'updatedAt' && field.isRequired !== true) {
    return true;
  }

  return false;
}

/**
 * Checks if the field is `@internal`, indicating it should be excluded from **create/update** operations.
 * @param field DMMF.Field
 * @returns boolean
 */
export function isInternalField(field: DMMF.Field): boolean {
  return !!field.documentation?.includes('@internal');
}

/**
 * Checks if the field is `@readonly`, indicating it should be excluded from **update** operations.
 * @param field DMMF.Field
 * @returns boolean
 */
export function isReadOnlyField(feild: DMMF.Field): boolean {
  return !!feild.documentation?.includes('@readonly');
}

/**
 * Check a field is a relation field
 * @param field DMMF.Field
 * @returns boolean
 */
export function isRelationField(field: DMMF.Field) {
  return field.relationName != undefined;
}

/**
 * Check a field is NOT relation field
 * @param field DMMF.Field
 * @returns boolean
 */
export function isOwnField(field: DMMF.Field) {
  return field.relationName == undefined;
}

/**
 * Check the field is a child/children relation. Any relation contains one of the keywords **child, children,  attribute, attributes, tag, tags, label, labels** is considered a child relation
 * @param field DMMF.Field
 * @returns boolean
 */
export function isChildRelation(field: DMMF.Field): boolean {
  if (!isRelationField(field)) {
    return false;
  }
  const childRelationkeys = [
    '@child',
    '@children',
    '@attribute',
    '@attributes',
    '@tag',
    '@tags',
    '@label',
    '@labels',
  ];

  for (const k of childRelationkeys) {
    if (field.documentation?.includes(k)) {
      return true;
    }
  }
  return false;
}

/**
 * Determines a field is included in the **create** operations or not
 * @param field DMMF.Field
 * @returns boolean
 */
export function isCreateInputField(field: DMMF.Field) {
  if (field.isId) {
    return false;
  }

  if (isInternalField(field)) {
    return false;
  }

  if (isTimestampField(field)) {
    return false;
  }

  if (isRelationField(field)) {
    if (isChildRelation(field)) {
      return true;
    }
    return false;
  }

  return true;
}

/**
 * Determines a field is the target' model's own field (not relation field)
 * @param field DMMF.Field
 * @returns boolean
 */
export function isOwnInputField(field: DMMF.Field): boolean {
  if (isCreateInputField(field)) {
    if (isRelationField(field)) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

/**
 * Determines a field is included in the **update** operations or not
 * @param field DMMF.Field
 * @returns boolean
 */
export function isUpdateInputField(field: DMMF.Field) {
  if (isReadOnlyField(field)) {
    return false;
  }

  if (isOwnField(field)) {
    return true;
  }

  if (isRelationField(field)) {
    if (isChildRelation(field)) {
      return true;
    }

    return false;
  }

  return true;
}

/**
 * Determines a field is one of the pre-defined short-string property names
 * @param name String
 * @returns boolean
 */
export function isShortStringFieldName(name: string) {
  // Matches common terms for short text fields, typically 255 characters or less.
  // The 'i' flag makes the match case-insensitive.
  // The '$' anchor ensures the match is at the end of the string for precision.
  return new RegExp(
    /(name|label|code|abbr|acronym|title|key|short|brief|ref|reference|city|state|country)$/i
  ).test(name);
}

/**
 * Determines a field is an id field or not (including foreign id keys).
 * @param model DMMF.Model
 * @param field DMMF.Field
 * @returns boolean
 */
export function isIdField(model: DMMF.Model, field: DMMF.Field): boolean {
  if (field.isId) {
    return true;
  }

  return model.fields
    .filter(isRelationField)
    .some(
      (e) =>
        e.relationFromFields?.includes(field.name) ||
        e.relationToFields?.includes(field.name)
    );
}
