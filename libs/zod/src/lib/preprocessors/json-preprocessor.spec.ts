import { jsonPreprocessor } from './json-preprocessor.js';
describe('jsonPreprocessor', () => {
  it('should json-preprocessor', async () => {
    expect(jsonPreprocessor({ value: true })).toEqual({ value: true });
    expect(jsonPreprocessor('{ "value": true }')).toEqual({ value: true });
  });
});
