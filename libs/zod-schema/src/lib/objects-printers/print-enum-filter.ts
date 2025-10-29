import type { Datamodel, DatamodelEnum } from '../dmmf.js';
import { toEnumFilterName, toEnumName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printEnumFilter(datamodel: Datamodel, model: DatamodelEnum) {
  const enumName = toEnumName(model.name);
  const schemaName = toEnumFilterName(model.name);

  if (registry.has(schemaName)) {
    return schemaName;
  }

  const schema = `${enumName}.or(z.object({
        equals: ${enumName}.optional(), 
        in: ${enumName}.array().optional() , 
        notIn: ${enumName}.array().optional(), 
        not: z.object({ 
            equals: ${enumName}.optional(), 
            in: ${enumName}.array().optional() , 
            notIn: ${enumName}.array().optional()
        }).optional()
}))`;

  registry.set(schemaName, schema);

  return schema;
}
