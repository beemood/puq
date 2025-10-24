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
  toCreateSchemaName,
  toDistictSchemaName,
  toIncludeSchemaName,
  toOmitSchemaName,
  toOrderBySchemaName,
  toOwnCreateSchemaName,
  toOwnOrderBySchemaName,
  toOwnQueryOneSchemaName,
  toOwnQuerySchemaName,
  toOwnSelectSchemaName,
  toOwnWhereSchemaName,
  toProjectionSchemaName,
  toQuerySchemaName,
  toSelectSchemaName,
  toUpdateSchemaName,
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

import { printSchemaType } from './print-schema-types.js';
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
  const schemaPrinterFns = new Set<(model: DMMF.Model) => string>();
  const schemaNameFns = new Set<(modelName: string) => string>();

  const content = new Set<string>();
  const models = datamodel.models;

  // Printers ordered by priorities
  schemaPrinterFns.add(printDistictSchema);
  schemaNameFns.add(toDistictSchemaName);

  schemaPrinterFns.add(printOwnWhereSchema);
  schemaNameFns.add(toOwnWhereSchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toOwnWhereSchemaName));

  schemaPrinterFns.add(printWhereSchema);
  schemaNameFns.add(toWhereSchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toWhereSchemaName));

  schemaPrinterFns.add(printOwnOrderBySchema);
  schemaNameFns.add(toOwnOrderBySchemaName);
  schemaPrinterFns.add(
    createJsonProcessorSchemaPrinter(toOwnOrderBySchemaName)
  );

  schemaPrinterFns.add(printOrderBySchema);
  schemaNameFns.add(toOrderBySchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toOrderBySchemaName));

  schemaPrinterFns.add(printOwnSelectProjectionSchema);
  schemaNameFns.add(toOwnSelectSchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toOwnSelectSchemaName));

  schemaPrinterFns.add(printSelectProjectionSchema);
  schemaNameFns.add(toSelectSchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toSelectSchemaName));

  schemaPrinterFns.add(printOmitProjectionSchema);
  schemaNameFns.add(toOmitSchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toOmitSchemaName));

  schemaPrinterFns.add(printOwnQueryOneSchema);
  schemaNameFns.add(toOwnQueryOneSchemaName);
  schemaPrinterFns.add(
    createJsonProcessorSchemaPrinter(toOwnQueryOneSchemaName)
  );

  schemaPrinterFns.add(printOwnQuerySchema);
  schemaNameFns.add(toOwnQuerySchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toOwnQuerySchemaName));

  schemaPrinterFns.add(printIncludeProjectionSchema);
  schemaNameFns.add(toIncludeSchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toIncludeSchemaName));

  schemaPrinterFns.add(printCompleteSelectProjectionSchema);
  schemaNameFns.add(toCompleteSelectSchemaName);
  schemaPrinterFns.add(
    createJsonProcessorSchemaPrinter(toCompleteSelectSchemaName)
  );

  schemaPrinterFns.add(printQuerySchema);
  schemaNameFns.add(toQuerySchemaName);
  schemaPrinterFns.add(createJsonProcessorSchemaPrinter(toQuerySchemaName));

  schemaPrinterFns.add(printCompleteSelectProjectionSchema);
  schemaNameFns.add(toCompleteSelectSchemaName);
  schemaPrinterFns.add(
    createJsonProcessorSchemaPrinter(toCompleteSelectSchemaName)
  );

  schemaPrinterFns.add(printCompleteQueryOneSchema);
  schemaNameFns.add(toCompleteQueryOneSchemaName);
  schemaPrinterFns.add(
    createJsonProcessorSchemaPrinter(toCompleteQueryOneSchemaName)
  );

  schemaPrinterFns.add(printCompleteQuerySchema);
  schemaNameFns.add(toCompleteQuerySchemaName);
  schemaPrinterFns.add(
    createJsonProcessorSchemaPrinter(toCompleteQuerySchemaName)
  );

  schemaPrinterFns.add(printProjectionSchema);
  schemaNameFns.add(toProjectionSchemaName);

  schemaPrinterFns.add(printOwnCreateInputSchema);
  schemaNameFns.add(toOwnCreateSchemaName);

  schemaPrinterFns.add(printCreateInputSchema);
  schemaNameFns.add(toCreateSchemaName);

  schemaPrinterFns.add(printUpdateInputSchema);
  schemaNameFns.add(toUpdateSchemaName);

  // Common Code
  content.add(`import z from 'zod';`);
  content.add(printPredefinedSchemas());

  for (const e of datamodel.enums) {
    content.add(printEnumSchema(e));
    content.add(printEnumFilterSchema(e));
    content.add(printEnumArrayFilterSchema(e));
  }

  for (const fn of schemaPrinterFns) {
    for (const m of models) {
      content.add(fn(m));
    }
  }

  for (const fn of schemaNameFns) {
    for (const m of models) {
      content.add(printSchemaType(fn(m.name)));
    }
  }

  return [...content].join('\n\n');
}
