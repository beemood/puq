import type { Model } from '../common/dmmf.js';
import {
  toField,
  toInclude,
  toOmit,
  toOrderBy,
  toQueryNoProjection,
  toSelect,
  toWhere,
} from '../common/names.js';
import { makePartial } from '../field-printers/make-partial.js';

/**
 * Print query schema without projection fields
 *
 * @param model {@link Model}
 * @returns string
 */
export const queryNoProjectionModel = (model: Model): string => {
  const where = toWhere(model.name);
  const orderBy = toOrderBy(model.name);
  const distinct = toField(model.name);
  const schema = `z.object({
    take: take,
    skip: skip,
    distinct: ${distinct}.array(),
    orderBy: ${orderBy},
    where: ${where},
  })`;

  return makePartial(schema);
};

/**
 * Print query schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const queryModel = (model: Model): string => {
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
};
