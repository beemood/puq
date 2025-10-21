import type { DMMF } from '@prisma/client/runtime/library';
import { isOwnInputField } from './is-input-field.js';
import { printZodSchema } from './print-zod-schema.js';

export function printOwnCreateSchemaFields(model: DMMF.Model) {
  return model.fields
    .filter(isOwnInputField)
    .map((e) => {
      return `${e.name}:${printZodSchema(e)}`;
    })
    .join(',');
}
