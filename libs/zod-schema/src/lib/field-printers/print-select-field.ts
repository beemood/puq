import type { Datamodel, Field, Model } from '../dmmf.js';
import { printQueryOne } from '../objects-printers/print-query-one.js';
import { printQuery } from '../objects-printers/print-query.js';

export function printSelectField(
  datamodel: Datamodel,
  model: Model,
  field: Field
): string {
  if (field.relationName) {
    if (field.isList) {
      return printQueryOne(datamodel, model);
    } else {
      return printQuery(datamodel, model);
    }
  }

  return '_select';
}
