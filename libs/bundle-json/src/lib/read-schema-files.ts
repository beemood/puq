import { files } from '@puq/fs';
import { readSchemaFile } from './read-schema-file.js';
import { JSONSchema7 } from '@puq/types';

export async function readSchemaFiles(
  root: string
): Promise<Map<string, JSONSchema7>> {
  const map = new Map<string, JSONSchema7>();

  const foundFiles = await files(root);
  const schemaFiles = foundFiles.filter((e) => e.path.endsWith('.json'));

  for (const f of schemaFiles) {
    const content = await readSchemaFile(f.path);
    map.set(content.$id, content);
  }

  return map;
}
