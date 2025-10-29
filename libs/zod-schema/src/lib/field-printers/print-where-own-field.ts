import type { Datamodel, Field, Model } from '../dmmf.js';
import { toWhereName } from '../names/to-schema-name.js';
import { printWhereOwn } from '../objects-printers/print-where-own.js';
import { registry } from '../registry/registry.js';
import { printWhereEnumField } from './print-where-enum-field.js';
import { printWhereScalarField } from './print-where-scalar-field.js';

export function printWhereOwnField(
  datamodel: Datamodel,
  model: Model,
  field: Field,
  limit = 0
): string {
  switch (field.kind) {
    case 'object': {
      const relationModel = datamodel.models.find((m) => m.name === field.type);
      if (!relationModel) {
        throw new Error(`${field.type} is not found in models!`);
      }
      const relationWhereName = toWhereName(relationModel?.name);
      const relationWhereOwnName = toWhereName(relationModel?.name);

      let relationWhereSchema = '';
      if (registry.has(relationWhereName)) {
        relationWhereSchema = relationWhereName;
      } else if (registry.has(relationWhereOwnName)) {
        relationWhereSchema = relationWhereOwnName;
      } else {
        relationWhereSchema = printWhereOwn(datamodel, relationModel, limit);
      }

      if (field.isList) {
        return `z.object({ 
                some: ${relationWhereSchema}.optional(),
                every: ${relationWhereSchema}.optional(),
                none: ${relationWhereSchema}.optional(),
            })`;
      } else {
        return `${relationWhereSchema}`;
      }
    }
    case 'scalar': {
      return printWhereScalarField(field);
    }
    case 'enum': {
      return printWhereEnumField(field);
    }
    case 'unsupported':
      return 'z.any()';
  }
}
