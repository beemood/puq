import { toInclude, toOmit, toSelect } from '../common/names.js';
import type { Model } from '../common/types.js';

export function projectionModel(model: Model) {
  const select = toSelect(model.name);
  const omit = toOmit(model.name);
  const include = toInclude(model.name);
  return `z.union([
        z.object({ select: ${select} }),
        z.object({ omit: ${omit} }),
        z.object({ include: ${include} }),
        z.object({})
    ])`;
}
