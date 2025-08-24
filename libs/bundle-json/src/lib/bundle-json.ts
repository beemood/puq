import { fileName, writeJsonFile } from '@puq/fs';
import { names } from '@puq/names';
import { inspect } from 'util';
import { readSchemaFile } from './read-schema-file.js';
import { readSchemaFiles } from './read-schema-files.js';
import { resolveReferences } from './resolve-references.js';

/**
 * Bundle json schemas into a single schema file
 * @param mainSchemaFilePath entry schema file path
 * @returns
 */
export async function bundleJson(
  rootDirectory: string,
  mainSchemaFilePath: string,
  outputPath: string
) {
  const name = names(fileName(mainSchemaFilePath)).pascalCase;

  const mainSchema = await readSchemaFile(mainSchemaFilePath);

  resolveReferences(mainSchema);

  console.log('MainSchema', inspect(mainSchema, true, 100));

  mainSchema.definitions = mainSchema.definitions ?? {};

  const schemas = await readSchemaFiles(rootDirectory);

  console.log('Schemas', inspect(schemas, true, 100));

  schemas.delete(name);

  for (const [, value] of schemas) {
    resolveReferences(value);
    mainSchema.definitions = {
      ...mainSchema.definitions,
      ...value.definitions,
    };
    mainSchema.definitions[value.$id] = value;
    delete value.definitions;
  }

  await writeJsonFile(outputPath, mainSchema);
}
