import type { Model } from '../common/dmmf.js';
import {
  toField,
  toOmit,
  toOrderBy,
  toQueryOwn,
  toSelectOwn,
  toWhere
} from '../common/names.js';
import { makePartial } from '../field-printers/make-partial.js';

import { pre } from '../common/pre.js';

/**
 * Print query-one schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const queryOneModel = (model: Model): string => {
  const where = toWhere(model.name);
  const select = toSelectOwn(model.name);
  const omit = toOmit(model.name);
  // const include = toInclude(model.name);
  // z.object({ include: ${include}, where: ${where} }),
  const schema = `z.object({ 
    select: ${select},
    omit: ${omit},
    where: ${where}
  })`;

  return makePartial(schema);
};

/**
 * Print query schema without projection fields
 *
 * @param model {@link Model}
 * @returns string
 */
export const queryModelOwn = (model: Model): string => {
  const where = toWhere(model.name);
  const orderBy = toOrderBy(model.name);
  const distinct = toField(model.name);
  const schema = `z.object({
    take: ${pre('take')},
    skip: ${pre('skip')},
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
  const select = toSelectOwn(model.name);
  const omit = toOmit(model.name);
  // const include = toInclude(model.name);

  const queryOwnName = toQueryOwn(model.name);

  // z.object({ include: ${include} }).extend(${queryOwnName}),
  const schema = `z.object({ 
    select: ${select}, 
    omit: ${omit}, 
    ...${queryOwnName}.shape 
  })`;

  return makePartial(schema);
};
