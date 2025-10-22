import type { DMMF } from '@prisma/client/runtime/library';
import { printEnumSchema } from './print-enum-schema.js';
import {
  printCreateInputSchema,
  printUpdateInputSchema,
} from './print-input-schema.js';
import { printOwnOrderBySchema } from './print-order-by-schema.js';
import { printOwnSelectProjectionSchema } from './print-projection-schema.js';

export function printSchemas(datamodel: Omit<DMMF.Datamodel, 'indexes'>) {
  const printerFns = new Set<(model: DMMF.Model) => string>();

  const content = new Set<string>();
  const models = datamodel.models;
  const enums = datamodel.enums;

  printerFns.add(printOwnOrderBySchema);
  printerFns.add(printOwnSelectProjectionSchema);

  printerFns.add(printCreateInputSchema);
  printerFns.add(printUpdateInputSchema);

  content.add(`import * as PZ from '@puq/zod';`);
  content.add(`import z from 'zod';`);

  for (const e of enums) {
    content.add(printEnumSchema(e));
  }
  for (const fn of printerFns)
    for (const m of models) {
      content.add(fn(m));
    }

  return [...content].join('\n\n');
}
