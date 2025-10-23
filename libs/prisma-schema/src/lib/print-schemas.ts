import type { DMMF } from '@prisma/client/runtime/library';
import {
  printCompleteSelectProjectionSchema,
  printIncludeProjectionSchema,
  printOmitProjectionSchema,
  printOwnSelectProjectionSchema,
  printProjectionSchema,
  printSelectProjectionSchema,
} from './printers/print-projection-schema.js';

import { printPredefinedSchemas } from './common/print-pre-defiend-schemas.js';
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
} from './helpers/to-schema-name.js';
import { printDistictSchema } from './printers/print-distict-schema.js';
import {
  printEnumArrayFilterSchema,
  printEnumFilterSchema,
  printEnumSchema,
} from './printers/print-enum-schema.js';
import {
  printCreateInputSchema,
  printOwnCreateInputSchema,
  printUpdateInputSchema,
} from './printers/print-input-schema.js';
import {
  printOwnWhereSchema,
  printWhereSchema,
} from './printers/print-where-schema.js';

import {
  printOrderBySchema,
  printOwnOrderBySchema,
} from './printers/print-order-by-schema.js';
import {
  printCompleteQueryOneSchema,
  printCompleteQuerySchema,
  printOwnQueryOneSchema,
  printOwnQuerySchema,
  printQuerySchema,
} from './printers/print-query-schema.js';
import { createJsonProcessorSchemaPrinter } from './printers/print-schema-json-processor.js';

/**
 * Print all zod schemas for each database model
 * @param datamodel DMMF.Datamodel
 * @returns string
 */
export function printSchemas(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>
): string {
  const printerFns = new Set<(model: DMMF.Model) => string>();

  const content = new Set<string>();
  const models = datamodel.models;

  // Printers ordered by priorities
  printerFns.add(printDistictSchema);

  printerFns.add(printOwnWhereSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOwnWhereSchemaName));

  printerFns.add(printWhereSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toWhereSchemaName));

  printerFns.add(printOwnOrderBySchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOwnOrderBySchemaName));

  printerFns.add(printOrderBySchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOrderBySchemaName));

  printerFns.add(printOwnSelectProjectionSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOwnSelectSchemaName));

  printerFns.add(printSelectProjectionSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toSelectSchemaName));

  printerFns.add(printOmitProjectionSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOmitSchemaName));

  printerFns.add(printOwnQueryOneSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOwnQueryOneSchemaName));

  printerFns.add(printOwnQuerySchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toOwnQuerySchemaName));

  printerFns.add(printIncludeProjectionSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toIncludeSchemaName));

  printerFns.add(printCompleteSelectProjectionSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toCompleteSelectSchemaName));

  printerFns.add(printQuerySchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toQuerySchemaName));

  printerFns.add(printCompleteSelectProjectionSchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toCompleteSelectSchemaName));

  printerFns.add(printCompleteQueryOneSchema);
  printerFns.add(
    createJsonProcessorSchemaPrinter(toCompleteQueryOneSchemaName)
  );

  printerFns.add(printCompleteQuerySchema);
  printerFns.add(createJsonProcessorSchemaPrinter(toCompleteQuerySchemaName));

  printerFns.add(printProjectionSchema);

  printerFns.add(printOwnCreateInputSchema);
  printerFns.add(printCreateInputSchema);
  printerFns.add(printUpdateInputSchema);

  // Common Code
  content.add(`import z from 'zod';`);
  content.add(printPredefinedSchemas());

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
