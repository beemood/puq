import { join } from 'path';
import { bundleJson } from './bundle-json.js';

describe('bundleJson', () => {
  it('should bundle json schema', async () => {
    const result = await bundleJson(
      join(__dirname, '../../', 'test', 'schemas'),
      join(__dirname, '../../', 'test', 'schemas', 'property.schema.json')
    );
  });
});
