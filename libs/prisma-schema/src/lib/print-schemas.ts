import type { DMMF } from '@prisma/client/runtime/library';
import {
  printCompleteSelectProjectionSchema,
  printIncludeProjectionSchema,
  printOmitProjectionSchema,
  printOwnSelectProjectionSchema,
  printSelectProjectionSchema,
} from './print-projection-schema.js';

import { printCommonSchemas } from './print-common-schemas.js';
import { printDistictSchema } from './print-distict-schema.js';
import {
  printEnumArrayFilterSchema,
  printEnumFilterSchema,
  printEnumSchema,
} from './print-enum-schema.js';
import {
  printOwnQueryOneSchema,
  printOwnQuerySchema,
} from './print-query-schema.js';
import { printOwnWhereSchema } from './print-where-schema.js';

export function printSchemas(datamodel: Omit<DMMF.Datamodel, 'indexes'>) {
  const printerFns = new Set<(model: DMMF.Model) => string>();

  const content = new Set<string>();
  const models = datamodel.models;

  // Projections
  printerFns.add(printDistictSchema);
  printerFns.add(printOwnWhereSchema);
  printerFns.add(printOwnSelectProjectionSchema);
  printerFns.add(printSelectProjectionSchema);
  printerFns.add(printOmitProjectionSchema);
  printerFns.add(printOwnQueryOneSchema);
  printerFns.add(printOwnQuerySchema);
  printerFns.add(printIncludeProjectionSchema);

  printerFns.add(printCompleteSelectProjectionSchema);

  // Common Code
  content.add(`import z from 'zod';`);
  content.add(printCommonSchemas());

  for (const e of datamodel.enums) {
    content.add(printEnumSchema(e));
    content.add(printEnumFilterSchema(e));
    content.add(printEnumArrayFilterSchema(e));
  }

  for (const fn of printerFns)
    for (const m of models) {
      content.add(fn(m));
    }

  return [...content].join('\n\n');
}
