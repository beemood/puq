import type { Datamodel } from './dmmf.js';
import {
  hasChildMark,
  hasMapMark,
  hasParentMark,
} from './markers/has-markers.js';
import { printEnumFilter } from './objects-printers/print-enum-filter.js';
import { printEnum } from './objects-printers/print-enum.js';
import { printWhereOwn } from './objects-printers/print-where-own.js';
import { printWhere } from './objects-printers/print-where.js';
import { preDefinedCode } from './predefiend-code/predefined-code-string.js';
import { registry } from './registry/registry.js';

export function printSchemas(datamodel: Datamodel): string {
  const lines = new Set<string>();
  const childModels = datamodel.models.filter(hasChildMark);
  const mapModels = datamodel.models.filter(hasMapMark);
  const parentModels = datamodel.models.filter(hasParentMark);

  const enums = datamodel.enums;

  for (const e of enums) {
    printEnum(datamodel, e);
  }

  for (const e of enums) {
    printEnumFilter(datamodel, e);
  }

  // Print where schemas for child-models
  {
    for (const m of childModels) {
      printWhereOwn(datamodel, m);
    }

    for (const m of childModels) {
      printWhere(datamodel, m);
    }
  }

  // Print where schemas for map-models
  {
    for (const m of mapModels) {
      printWhereOwn(datamodel, m);
    }
    for (const m of mapModels) {
      printWhere(datamodel, m);
    }
  }

  // Print where schem for parent-models
  {
    for (const m of parentModels) {
      printWhereOwn(datamodel, m);
    }
    for (const m of parentModels) {
      printWhere(datamodel, m);
    }
  }

  // Adding predefiend code
  lines.add(preDefinedCode);

  for (const [schemaName, schemaValue] of registry) {
    lines.add(`export const ${schemaName} = ${schemaValue};`);
  }

  // Print types
  for (const [schemaName] of registry) {
    lines.add(`export type ${schemaName} = z.infer< typeof ${schemaName}>;`);
  }

  const result = [...lines].join('\n\n');

  return result;
}
