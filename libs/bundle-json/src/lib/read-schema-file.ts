import { fileName, readJsonFile } from '@puq/fs';
import { names } from '@puq/names';
import { JSONSchema7 } from '@puq/types';
import { resolve } from 'path';

export async function readSchemaFile(filepath: string): Promise<JSONSchema7> {
  const content = await readJsonFile<JSONSchema7>(filepath);
  content.$id = names(fileName(filepath)).pascalCase;
  content.$filePath = resolve(filepath);

  return content;
}
