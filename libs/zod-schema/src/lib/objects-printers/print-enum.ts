import type { Datamodel, DatamodelEnum } from '../dmmf.js';
import { toEnumName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printEnum(datamodel: Datamodel, model: DatamodelEnum) {
  const modelName = toEnumName(model.name);
  if (registry.has(modelName)) {
    return modelName;
  }

  const fields = model.values.map((e) => `"${e.name}"`).join(',');
  const schema = `z.enum([ ${fields} ])`;

  registry.set(modelName, schema);

  return schema;
}
