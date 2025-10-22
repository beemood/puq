import type { DMMF } from '@prisma/client/runtime/library';
import {
  printCompleteSelectProjectionSchema,
  printIncludeProjectionSchema,
  printOmitProjectionSchema,
  printOwnSelectProjectionSchema,
  printProjectionSchema,
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
  printOrderBySchema,
  printOwnOrderBySchema,
} from './print-order-by-schema.js';
import {
  printCompleteQueryOneSchema,
  printCompleteQuerySchema,
  printOwnQueryOneSchema,
  printOwnQuerySchema,
  printQuerySchema,
} from './print-query-schema.js';
import { printSchemaJsonProcessor } from './print-schema-json-processor.js';
import { printOwnWhereSchema, printWhereSchema } from './print-where-schema.js';
import {
  toCompleteQueryOneSchemaName,
  toCompleteQuerySchemaName,
  toCompleteSelectSchemaName,
  toIncludeSchemaName,
  toOmitSchemaName,
  toOrderBySchemaName,
  toOwnOrderBySchemaName,
  toOwnQueryOneSchemaName,
  toOwnQuerySchemaName,
  toOwnSelectSchemaName,
  toOwnWhereSchemaName,
  toQuerySchemaName,
  toSelectSchemaName,
  toWhereSchemaName,
} from './to-schema-names.js';

export function printSchemas(datamodel: Omit<DMMF.Datamodel, 'indexes'>) {
  const printerFns = new Set<(model: DMMF.Model) => string>();

  const content = new Set<string>();
  const models = datamodel.models;

  // Printers ordered by priorities
  printerFns.add(printDistictSchema);

  printerFns.add(printOwnWhereSchema);
  printerFns.add(printSchemaJsonProcessor(toOwnWhereSchemaName));

  printerFns.add(printWhereSchema);
  printerFns.add(printSchemaJsonProcessor(toWhereSchemaName));

  printerFns.add(printOwnOrderBySchema);
  printerFns.add(printSchemaJsonProcessor(toOwnOrderBySchemaName));

  printerFns.add(printOrderBySchema);
  printerFns.add(printSchemaJsonProcessor(toOrderBySchemaName));

  printerFns.add(printOwnSelectProjectionSchema);
  printerFns.add(printSchemaJsonProcessor(toOwnSelectSchemaName));

  printerFns.add(printSelectProjectionSchema);
  printerFns.add(printSchemaJsonProcessor(toSelectSchemaName));

  printerFns.add(printOmitProjectionSchema);
  printerFns.add(printSchemaJsonProcessor(toOmitSchemaName));

  printerFns.add(printOwnQueryOneSchema);
  printerFns.add(printSchemaJsonProcessor(toOwnQueryOneSchemaName));

  printerFns.add(printOwnQuerySchema);
  printerFns.add(printSchemaJsonProcessor(toOwnQuerySchemaName));

  printerFns.add(printIncludeProjectionSchema);
  printerFns.add(printSchemaJsonProcessor(toIncludeSchemaName));

  printerFns.add(printCompleteSelectProjectionSchema);
  printerFns.add(printSchemaJsonProcessor(toCompleteSelectSchemaName));

  printerFns.add(printQuerySchema);
  printerFns.add(printSchemaJsonProcessor(toQuerySchemaName));

  printerFns.add(printCompleteSelectProjectionSchema);
  printerFns.add(printSchemaJsonProcessor(toCompleteSelectSchemaName));

  printerFns.add(printCompleteQueryOneSchema);
  printerFns.add(printSchemaJsonProcessor(toCompleteQueryOneSchemaName));

  printerFns.add(printCompleteQuerySchema);
  printerFns.add(printSchemaJsonProcessor(toCompleteQuerySchemaName));

  printerFns.add(printProjectionSchema);

  // Common Code
  content.add(`import z from 'zod';`);
  content.add(printCommonSchemas());

  for (const e of datamodel.enums) {
    content.add(printEnumSchema(e));
    content.add(printEnumFilterSchema(e));
    content.add(printEnumArrayFilterSchema(e));
  }

  for (const fn of printerFns) {
    for (const m of models) {
      content.add(fn(m));
    }
  }

  return [...content].join('\n\n');
}
