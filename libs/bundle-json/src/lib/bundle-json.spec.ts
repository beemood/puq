import { join } from 'path';
import { bundleJson } from './bundle-json.js';

describe('bundleJson', () => {
  it('should bundle json schema', async () => {
    await bundleJson(
      join(__dirname, '../../', 'test', 'schemas'),
      join(__dirname, '../../', 'test', 'schemas', 'property.schema.json'),
      join(__dirname, '../../', 'test', 'dist', 'property.schema.json')
    );
  });
});
