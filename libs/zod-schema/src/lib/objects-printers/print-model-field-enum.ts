import type { Datamodel, Model } from '../dmmf.js';
import { toModelFieldEnumName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printModelFieldEnum(datamodel: Datamodel, model: Model) {
  const modelName = toModelFieldEnumName(model.name);

  if (registry.has(modelName)) {
    return modelName;
  }

  const fields = model.fields
    .filter((e) => e.relationName == undefined)
    .map((e) => `"${e.name}"`)
    .join(',');

  const schema = `z.enum([ ${fields} ])`;

  registry.set(modelName, schema);

  return schema;
}
