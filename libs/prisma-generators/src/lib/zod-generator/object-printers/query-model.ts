import type { Model } from '../common/dmmf.js';
import {
  toField,
  toInclude,
  toOmit,
  toOrderBy,
  toQueryOwn,
  toSelectOwn,
  toWhere,
} from '../common/names.js';
import { pre } from '../common/pre.js';
import { makePartial } from '../field-printers/make-partial.js';

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
  const include = toInclude(model.name);

  const selectSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${select} )`;
  const omitSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${omit}   )`;
  const whereSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${where})`;
  const includeSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${include})`;
  const schema = `z.object({ 
    select:   ${selectSchema},
    omit:     ${omitSchema},
    include: ${includeSchema},
    where:    ${whereSchema}
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

  const orderBySchemea = `z.preprocess(${pre(
    'parseJsonOrReturn'
  )}, ${orderBy})`;
  const whereSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${where})`;
  const schema = `z.object({
    take:     ${pre('take')},
    skip:     ${pre('skip')},
    distinct: ${distinct}.array(),
    orderBy:  ${orderBySchemea},
    where:    ${whereSchema}
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
  const include = toInclude(model.name);
  const queryOwnName = toQueryOwn(model.name);

  const selectSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${select} )`;
  const omitSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${omit}   )`;
  const includeSchema = `z.preprocess(${pre(
    'parseJsonOrReturn'
  )}, ${include}   )`;

  const schema = `z.object({ 
    select:   ${selectSchema}, 
    omit:     ${omitSchema}, 
    include:  ${includeSchema},
    ...${queryOwnName}.shape 
  })`;

  return makePartial(schema);
};
