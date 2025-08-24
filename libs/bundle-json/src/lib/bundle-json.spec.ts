import { join } from 'path';
import { bundleJson } from './bundle-json.js';

describe('bundleJson', () => {
  it('should bundle json schema', async () => {
    await bundleJson(
      join(__dirname, 'schemas'),
      join(__dirname, 'schemas', 'property.schema.json'),
      join(__dirname, 'dist', 'property.schema.json')
    );
  });
});
