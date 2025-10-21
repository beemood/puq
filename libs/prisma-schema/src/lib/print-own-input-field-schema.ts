import type { DMMF } from '@prisma/client/runtime/library';

export function printOwnInputFieldSchema(field: DMMF.Field): string {
  return [field.name, ':'].join(' ');
}
