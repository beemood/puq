import { join } from 'path';
import { readSchemaFile } from './read-schema-file.js';

describe('readSchemaFile', () => {
  it('should read schema file', async () => {
    const filePath = join(
      __dirname,
      '../../',
      'test',
      'schemas',
      'property.schema.json'
    );
    const schema = await readSchemaFile(filePath);
    expect(schema.$id).toEqual('PropertySchema');
    expect(schema.$filePath).toEqual(filePath);
  });
});
