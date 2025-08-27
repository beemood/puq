import { SelectCategoryFieldsSchema } from './category.js';

describe('category', () => {
  it('should transform and validate ', () => {
    expect(
      SelectCategoryFieldsSchema.parse(JSON.stringify({ id: true, name: true }))
    ).toEqual({ id: true, name: true });
  });
});
