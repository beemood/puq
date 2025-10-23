import type { DMMF } from '@prisma/client/runtime/library';

export type NameFn = (name: string) => string;

/**
 * Function to create a zod schema definition for the given field such as `name: z.string()`
 */
export type ToFieldDefinitionFn = (
  model: DMMF.Model,
  field: DMMF.Field
) => string;

/**
 * Function to filter model fields such as filtering out **relation-fields**, **id-fields**, **input-fields** etc.
 */
export type FieldFilterFn = (field: DMMF.Field) => boolean;
