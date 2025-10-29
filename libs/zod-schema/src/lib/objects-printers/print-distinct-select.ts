import type { Datamodel, Model } from '../dmmf.js';
import {
  toDistinctSelectName,
  toModelFieldEnumName,
} from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printDistinctSelect(datamodel: Datamodel, model: Model) {
  const fieldEnumSchemaName = toModelFieldEnumName(model.name);

  if (!registry.has(fieldEnumSchemaName)) {
    throw new Error(
      `${fieldEnumSchemaName} must be added to the registry before DistinctSelect schema`
    );
  }

  const schema = `${fieldEnumSchemaName}.array().length(1)`;
  const modelName = model.name;
  const schemaName = toDistinctSelectName(modelName);

  if (registry.has(schemaName)) {
    return schemaName;
  }

  registry.set(schemaName, schema);

  return schema;
}
