import type { Model } from '../common/dmmf.js';
import { toInclude, toOmit, toSelect } from '../common/names.js';
import { pre } from '../common/pre.js';

/**
 * Print projection schema
 *
 * @param model {@link Model}
 * @returns
 */
export const projectionModel = (model: Model): string => {
  const select = toSelect(model.name);
  const omit = toOmit(model.name);
  const include = toInclude(model.name);

  const selectSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${select} )`;
  const omitSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${omit}   )`;
  const includeSchema = `z.preprocess(${pre('parseJsonOrReturn')}, ${include})`;
  return `z.union([
        z.object({ select:   ${selectSchema} }),
        z.object({ omit:     ${omitSchema} }),
        z.object({ include:  ${includeSchema} }),
        z.object({})
    ])`;
};
