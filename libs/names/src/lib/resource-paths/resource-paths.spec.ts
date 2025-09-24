import { resourcePaths } from './resource-paths.js';
describe('resourcePaths', () => {
  it('should resourcePaths', async () => {
    const r = resourcePaths('ProductCategory');

    const singularPath = `product-category`;
    const pluralPath = `product-categories`;
    const singularByPath = `product-category/:property/:value`;
    const pluralByPath = `product-categories/:property/:value`;
    const idPath = `product-category/:id`;

    expect(r.deleteMany).toEqual(pluralPath);
    expect(r.deleteManyBy).toEqual(pluralByPath);
    expect(r.deleteOne).toEqual(singularPath);
    expect(r.deleteOneBy).toEqual(singularByPath);
    expect(r.deleteOneById).toEqual(idPath);
    expect(r.findMany).toEqual(pluralPath);
    expect(r.findManyBy).toEqual(pluralByPath);
    expect(r.findOne).toEqual(singularPath);
    expect(r.findOneBy).toEqual(singularByPath);
    expect(r.findOneById).toEqual(idPath);
    expect(r.saveMany).toEqual(pluralPath);
    expect(r.saveOne).toEqual(singularPath);
    expect(r.updateMany).toEqual(pluralPath);
    expect(r.updateManyBy).toEqual(pluralByPath);
    expect(r.updateOne).toEqual(singularPath);
    expect(r.updateOneBy).toEqual(singularByPath);
    expect(r.updateOneById).toEqual(idPath);
  });
});
