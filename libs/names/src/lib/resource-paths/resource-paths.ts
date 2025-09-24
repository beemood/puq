import type { StringRecord } from '@puq/types';
import { names } from '../names/names.js';
import { pluralize } from '../names/pluralize.js';
import type { ResourceOperationNames } from '../resource-names/resource-operation-name.js';

export function resourcePaths(
  resourceName: string
): StringRecord<typeof ResourceOperationNames> {
  const s = names(resourceName).kebab;
  const p = names(pluralize(s)).kebab;

  const singularPath = `${s}`;
  const pluralPath = `${p}`;
  const singularByPath = `${s}/:property/:value`;
  const pluralByPath = `${p}/:property/:value`;
  const idPath = `${s}/:id`;

  return {
    deleteMany: pluralPath,
    deleteManyBy: pluralByPath,
    deleteOne: singularPath,
    deleteOneBy: singularByPath,
    deleteOneById: idPath,
    findMany: pluralPath,
    findManyBy: pluralByPath,
    findOne: singularPath,
    findOneBy: singularByPath,
    findOneById: idPath,
    saveMany: pluralPath,
    saveOne: singularPath,
    updateMany: pluralPath,
    updateManyBy: pluralByPath,
    updateOne: singularPath,
    updateOneBy: singularByPath,
    updateOneById: idPath,
  };
}
