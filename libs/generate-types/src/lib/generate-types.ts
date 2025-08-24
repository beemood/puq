import { fileName, readJsonFile } from '@puq/fs';
import { names } from '@puq/names';
import type { JSONSchema7 } from '@puq/types';

function toTypeOptions(schema: JSONSchema7): string {
  if (!schema) throw new Error(`schema is required`);

  if (schema.type == 'boolean') {
    return 'boolean';
  } else if (schema.type == 'string') {
    return 'string';
  } else if (schema.type == 'integer' || schema.type === 'number') {
    return 'number';
  } else if (schema.type === 'array') {
    if (!schema.items) {
      return 'any[]';
    }
    return `${toTypeOptions(schema.items as JSONSchema7)}[]`;
  }

  if (schema.$ref) {
    return schema.$ref.split('/').pop()!;
  }

  if (schema.allOf) {
    const allOfType = schema.allOf
      .map((e) => {
        return toTypeOptions(e as JSONSchema7);
      })
      .join(' & ');

    return `( ${allOfType} )`;
  }

  if (schema.oneOf) {
    const oneOfType = schema.oneOf
      .map((e) => {
        return toTypeOptions(e as JSONSchema7);
      })
      .join(' | ');

    return `( ${oneOfType})`;
  }

  if (schema.enum) {
    return schema.enum
      .map((e) => {
        return typeof e === 'string' ? `'${e}'` : e;
      })
      .join(' | ');
  }

  if (schema.const) {
    return typeof schema.const === 'string'
      ? `'${schema.const}'`
      : `${schema.const}`;
  }

  if (schema.properties) {
    const entries = Object.entries(schema.properties);

    const properties = entries
      .map(([propertyName, value]) => {
        const isRequired = schema.required?.includes(propertyName) ? '' : '?';
        const propertyType = toTypeOptions(value as JSONSchema7);
        return `${propertyName}${isRequired}:${propertyType};`;
      })
      .join('\n');

    return `{${properties}}`;
  }

  if (schema.patternProperties) {
    const propertyName = schema.propertyNames
      ? toTypeOptions(schema.propertyNames as JSONSchema7)
      : 'string';

    return `Partial<Record<${propertyName}, ${toTypeOptions(
      Object.values(schema.patternProperties)[0] as JSONSchema7
    )}>>`;
  }

  return '';
}

function toType(typeName: string, schema: JSONSchema7): string {
  return `export type ${typeName} = ${toTypeOptions(schema)}`;
}

export async function generateTypes(filepath: string): Promise<string> {
  const schema = await readJsonFile<JSONSchema7>(filepath);
  const types: string[] = [];

  {
    const typeName = names(fileName(filepath)).pascalCase;
    types.push(toType(typeName, schema));
  }
  {
    const definitionEntries = Object.entries(schema.definitions ?? {});
    for (const [key, value] of definitionEntries) {
      const typeName = names(key).pascalCase;

      types.push(toType(typeName, value));
    }
  }
  return types.join('\n');
}
