import { resourcePaths } from './resource-paths.js';

describe('resourcePaths', () => {
  it('should crate resource paths', async () => {
    const p = resourcePaths('category');
    expect(p.pluralByPath).toEqual(`categories/:property/:value`);
    expect(p.pluralPath).toEqual(`categories`);
    expect(p.singularByPath).toEqual(`category/:property/:value`);
    expect(p.singularIdPath).toEqual(`category/:id`);
    expect(p.singularPath).toEqual(`category`);
  });
});
