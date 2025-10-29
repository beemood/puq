import type { Datamodel, Field, Model } from '../dmmf.js';
import { toWhereName, toWhereOwnName } from '../names/to-schema-name.js';
import { printWhere } from '../objects-printers/print-where.js';
import { registry } from '../registry/registry.js';
import { printWhereEnumField } from './print-where-enum-field.js';
import { printWhereManyRelationField } from './print-where-many-relation-field.js';
import { printWhereScalarField } from './print-where-scalar-field.js';

export function printWhereField(
  datamodel: Datamodel,
  model: Model,
  field: Field,
  limit = 0
): string {
  switch (field.kind) {
    case 'object': {
      const relationModel = datamodel.models.find((m) => m.name === field.type);
      if (!relationModel) throw new Error(`${field.type} not found in models`);

      const relationWhereName = toWhereName(relationModel.name);
      const relationWhereOwnName = toWhereOwnName(relationModel.name);

      const isSameModel = relationModel.name === model.name;

      let relationSchema = '';

      if (registry.has(relationWhereName)) {
        relationSchema = relationWhereName;
      } else if (registry.has(relationWhereOwnName)) {
        relationSchema = relationWhereOwnName;
      } else {
        relationSchema = printWhere(datamodel, relationModel, ++limit);
      }

      if (field.isList) {
        if (isSameModel) {
          return printWhereManyRelationField(datamodel, relationModel, limit);
        }

        return `z.object({ 
            some: ${relationSchema}.optional(),
            every: ${relationSchema}.optional(),
            none: ${relationSchema}.optional(),
        })`;
      }

      return relationSchema;
    }
    case 'scalar': {
      return printWhereScalarField(field);
    }
    case 'enum': {
      return printWhereEnumField(field);
    }
    case 'unsupported': {
      throw new Error(`${field.name} is not supported where filter`);
    }
  }
}
