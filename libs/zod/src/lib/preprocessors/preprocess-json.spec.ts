import z from 'zod';
import { preprocessJson } from './preprocess-json.js';
describe('preprocess-json', () => {
  const schema = preprocessJson(z.object({ name: z.string() }));

  it('should preprocess-json', async () => {
    expect(schema.parse({ name: 'some' })).toEqual({ name: 'some' });
    expect(schema.parse('{"name": "some"}')).toEqual({ name: 'some' });
  });
});
