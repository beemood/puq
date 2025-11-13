import type { Product, ProductType, Tag } from '../../generated';
import { client } from '../client.spec';

describe('ProductTag', () => {
  let createdProductType: ProductType;

  let createdProduct: Product;
  let createdTag: Tag;

  beforeAll(async () => {
    //

    createdProductType = await client.productType.create({
      data: { name: 'Default' },
    });

    createdProduct = await client.product.create({
      data: {
        name: 'Product',
        sku: 'prorduct sku',
        upc: 'Product upc',
        typeId: createdProductType.id,
      },
    });

    createdTag = await client.tag.create({
      data: { name: 'tag' },
    });
  });

  it('should create product-tag', async () => {
    const created = await client.productTag.create({
      data: { productId: createdProduct.id, tagId: createdTag.id },
    });
    expect(created).toBeDefined();
    expect(created.tagId).toEqual(createdTag.id);
    expect(created.productId).toEqual(createdProduct.id);
  });
});
