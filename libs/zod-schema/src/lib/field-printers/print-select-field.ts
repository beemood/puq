import type { Datamodel, Field, Model } from '../dmmf.js';
import {
  hasIncludeMark,
  hasSelectMark,
  hasWhereMark
} from '../markers/has-markers.js';
import { toQueryName, toQueryOneName } from '../names/to-schema-name.js';
import { printInclude } from '../objects-printers/print-include.js';
import { printSelect } from '../objects-printers/print-select.js';
import { printWhere } from '../objects-printers/print-where.js';
import { registry } from '../registry/registry.js';

export function printSelectField(
  datamodel: Datamodel,
  model: Model,
  field: Field
): string {
  if (field.relationName) {
    const relationModel = datamodel.models.find((m) => m.name === field.type);
    if (!relationModel) throw new Error(`${field.type} is not found in models`);

    const relationModelName = relationModel.name;

    const relationQueryOneName = toQueryOneName(relationModelName);
    const relationQueryName = toQueryName(relationModelName);

    const parts = new Set<string>();

    if (hasSelectMark(field)) {
      parts.add(`select: ${printSelect(datamodel, relationModel)}.optional()`);
    }

    if (hasWhereMark(field)) {
      parts.add(`where: ${printWhere(datamodel, relationModel)}.optional()`);
    }

    if (hasIncludeMark(field)) {
      parts.add(
        `include: ${printInclude(datamodel, relationModel)}.optional()`
      );
    }

    const schemeParts = [...parts].join(',');

    if (field.isList) {
      if (registry.has(relationQueryName)) {
        return relationQueryName;
      }

      return `z.object({ 
        take: _take, 
        skip: _skip,
        ${schemeParts}
      })`;
    } else {
      if (registry.has(relationQueryOneName)) {
        return relationQueryName;
      }
      return `z.object({ ${schemeParts} })`;
    }
  }

  return '_select';
}
