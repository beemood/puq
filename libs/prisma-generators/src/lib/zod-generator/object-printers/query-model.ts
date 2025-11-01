import {
  toField,
  toInclude,
  toOmit,
  toOrderBy,
  toQueryNoProjection,
  toSelect,
  toWhere,
} from '../common/names.js';
import type { Model } from '../common/types.js';

export function queryNoProjectionModel(model: Model) {
  const where = toWhere(model.name);
  const orderBy = toOrderBy(model.name);
  const distinct = toField(model.name);
  return `z.object({
    take: take,
    skip: skip,
    distinct: ${distinct}.array(),
    orderBy: ${orderBy},
    where: ${where},
    })`;
}

export function queryModel(model: Model) {
  const select = toSelect(model.name);
  const omit = toOmit(model.name);
  const include = toInclude(model.name);

  const noProjectionName = toQueryNoProjection(model.name);

  return `z.union([ 
    z.object({ select: ${select} }).extend(${noProjectionName}),
    z.object({ omit: ${omit} }).extend(${noProjectionName}),
    z.object({ include: ${include} }).extend(${noProjectionName}),
    z.object({})
  ])`;
}
