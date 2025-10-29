import type { Datamodel, Field, Model } from '../dmmf.js';
import { printOrderBy } from '../objects-printers/print-order-by.js';

export function printOrderByField(
  datamodel: Datamodel,
  model: Model,
  field: Field
): string {
  if (field.relationName) {
    if (field.isList) {
      return '_orderByCount';
    } else {
      const relationModel = datamodel.models.find((e) => e.name === field.type);
      if (!relationModel) {
        throw new Error(`${field.type} not found in models`);
      }
      return printOrderBy(datamodel, relationModel);
    }
  }

  return '_direction';
}
