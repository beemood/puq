import type { Datamodel, Field, Model } from '../dmmf.js';
import { printOrderBy } from '../objects-printers/print-order-by.js';

export function printOrderByField(
  datamodel: Datamodel,
  model: Model,
  field: Field,
  limit = 0
): string {
  if (field.relationName != undefined) {
    const relationModel = datamodel.models.find((e) => e.name === field.type);

    if (!relationModel) {
      throw new Error(`${field.type} not found in models`);
    }

    if (field.isList) {
      return '_orderByCount';
    } else {
      return printOrderBy(datamodel, relationModel, ++limit);
    }
  }

  return '_direction';
}
