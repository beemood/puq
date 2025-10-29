import type { Datamodel } from './dmmf.js';
import {
  hasChildMark,
  hasMapMark,
  hasParentMark,
} from './markers/has-markers.js';
import { printDistinctSelect } from './objects-printers/print-distinct-select.js';
import { printEnumFilter } from './objects-printers/print-enum-filter.js';
import { printEnum } from './objects-printers/print-enum.js';
import { printInclude } from './objects-printers/print-include.js';
import { printModelFieldEnum } from './objects-printers/print-model-field-enum.js';
import { printOmit } from './objects-printers/print-omit.js';
import { printOrderBy } from './objects-printers/print-order-by.js';
import { printProjection } from './objects-printers/print-projection.js';
import { printQueryOne } from './objects-printers/print-query-one.js';
import { printQuery } from './objects-printers/print-query.js';
import { printSelect } from './objects-printers/print-select.js';
import { printWhereOwn } from './objects-printers/print-where-own.js';
import { printWhere } from './objects-printers/print-where.js';
import { preDefinedCode } from './predefiend-code/predefined-code-string.js';
import { registry } from './registry/registry.js';

export function printSchemas(datamodel: Datamodel): string {
  const lines = new Set<string>();
  const allModels = datamodel.models;
  const childModels = allModels.filter(hasChildMark);
  const mapModels = allModels.filter(hasMapMark);
  const parentModels = allModels.filter(hasParentMark);

  const enums = datamodel.enums;

  for (const e of enums) {
    printEnum(datamodel, e);
  }

  for (const e of enums) {
    printEnumFilter(datamodel, e);
  }

  for (const m of allModels) {
    printModelFieldEnum(datamodel, m);
    printDistinctSelect(datamodel, m);
  }

  // Print where schemas
  {
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
  }

  // print omit schemas
  {
    for (const m of allModels) {
      printOmit(datamodel, m);
    }
  }

  // print order by
  {
    {
      for (const m of childModels) {
        printOrderBy(datamodel, m);
      }
    }

    {
      for (const m of mapModels) {
        printOrderBy(datamodel, m);
      }
    }

    {
      for (const m of parentModels) {
        printOrderBy(datamodel, m);
      }
    }
  }

  // print select
  {
    // Child select
    {
      for (const m of childModels) {
        printSelect(datamodel, m);
      }
    }

    // Map select
    {
      for (const m of mapModels) {
        printSelect(datamodel, m);
      }
    }

    // Parent select
    {
      for (const m of parentModels) {
        printSelect(datamodel, m);
      }
    }
  }

  // Print includes
  {
    for (const m of childModels) {
      printInclude(datamodel, m);
    }

    for (const m of mapModels) {
      printInclude(datamodel, m);
    }

    for (const m of parentModels) {
      printInclude(datamodel, m);
    }
  }

  // Print projection one
  {
    for (const m of childModels) {
      printProjection(datamodel, m);
    }

    for (const m of mapModels) {
      printProjection(datamodel, m);
    }

    for (const m of parentModels) {
      printProjection(datamodel, m);
    }
  }

  // Print Query one
  {
    for (const m of childModels) {
      printQueryOne(datamodel, m);
    }

    for (const m of mapModels) {
      printQueryOne(datamodel, m);
    }

    for (const m of parentModels) {
      printQueryOne(datamodel, m);
    }
  }

  // Print Query
  {
    for (const m of childModels) {
      printQuery(datamodel, m);
    }

    for (const m of mapModels) {
      printQuery(datamodel, m);
    }

    for (const m of parentModels) {
      printQuery(datamodel, m);
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
