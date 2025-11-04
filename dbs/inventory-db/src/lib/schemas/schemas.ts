import { z } from 'zod';
import * as P from '@puq/zod';

  /**
   * StoreField schema (Mon Nov 03 2025)
   */
export const StoreField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'name', 'slug', 'description' ])
export type StoreField = z.infer<typeof StoreField>; 

  /**
   * CategoryField schema (Mon Nov 03 2025)
   */
export const CategoryField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'parentId', 'name', 'slug', 'description' ])
export type CategoryField = z.infer<typeof CategoryField>; 

  /**
   * TagField schema (Mon Nov 03 2025)
   */
export const TagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'name', 'slug', 'description' ])
export type TagField = z.infer<typeof TagField>; 

  /**
   * ProductTagField schema (Mon Nov 03 2025)
   */
export const ProductTagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'productId', 'tagId' ])
export type ProductTagField = z.infer<typeof ProductTagField>; 

  /**
   * ManufacturerField schema (Mon Nov 03 2025)
   */
export const ManufacturerField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'name' ])
export type ManufacturerField = z.infer<typeof ManufacturerField>; 

  /**
   * ProductField schema (Mon Nov 03 2025)
   */
export const ProductField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'parentId', 'categoryId', 'manufacturerId', 'name', 'slug', 'model', 'description', 'upc', 'sku', 'active' ])
export type ProductField = z.infer<typeof ProductField>; 

  /**
   * PriceLevelField schema (Mon Nov 03 2025)
   */
export const PriceLevelField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'name', 'slug', 'description', 'taxrate' ])
export type PriceLevelField = z.infer<typeof PriceLevelField>; 

  /**
   * PriceField schema (Mon Nov 03 2025)
   */
export const PriceField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'productId', 'priceLevelId', 'price' ])
export type PriceField = z.infer<typeof PriceField>; 

  /**
   * QuantityField schema (Mon Nov 03 2025)
   */
export const QuantityField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'storeId', 'productId', 'quantity', 'minQuantity' ])
export type QuantityField = z.infer<typeof QuantityField>; 

  /**
   * SerialNumberField schema (Mon Nov 03 2025)
   */
export const SerialNumberField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'storeId', 'productId', 'serialNumber', 'inStock' ])
export type SerialNumberField = z.infer<typeof SerialNumberField>; 

  /**
   * StoreOmit schema (Mon Nov 03 2025)
   */
export const StoreOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, name: P.bool, slug: P.bool, description: P.bool }).partial()
export type StoreOmit = z.infer<typeof StoreOmit>; 

  /**
   * CategoryOmit schema (Mon Nov 03 2025)
   */
export const CategoryOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, parentId: P.bool, name: P.bool, slug: P.bool, description: P.bool }).partial()
export type CategoryOmit = z.infer<typeof CategoryOmit>; 

  /**
   * TagOmit schema (Mon Nov 03 2025)
   */
export const TagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, name: P.bool, slug: P.bool, description: P.bool }).partial()
export type TagOmit = z.infer<typeof TagOmit>; 

  /**
   * ProductTagOmit schema (Mon Nov 03 2025)
   */
export const ProductTagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, productId: P.bool, tagId: P.bool }).partial()
export type ProductTagOmit = z.infer<typeof ProductTagOmit>; 

  /**
   * ManufacturerOmit schema (Mon Nov 03 2025)
   */
export const ManufacturerOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, name: P.bool }).partial()
export type ManufacturerOmit = z.infer<typeof ManufacturerOmit>; 

  /**
   * ProductOmit schema (Mon Nov 03 2025)
   */
export const ProductOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, parentId: P.bool, categoryId: P.bool, manufacturerId: P.bool, name: P.bool, slug: P.bool, model: P.bool, description: P.bool, upc: P.bool, sku: P.bool, active: P.bool }).partial()
export type ProductOmit = z.infer<typeof ProductOmit>; 

  /**
   * PriceLevelOmit schema (Mon Nov 03 2025)
   */
export const PriceLevelOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, name: P.bool, slug: P.bool, description: P.bool, taxrate: P.bool }).partial()
export type PriceLevelOmit = z.infer<typeof PriceLevelOmit>; 

  /**
   * PriceOmit schema (Mon Nov 03 2025)
   */
export const PriceOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, productId: P.bool, priceLevelId: P.bool, price: P.bool }).partial()
export type PriceOmit = z.infer<typeof PriceOmit>; 

  /**
   * QuantityOmit schema (Mon Nov 03 2025)
   */
export const QuantityOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, storeId: P.bool, productId: P.bool, quantity: P.bool, minQuantity: P.bool }).partial()
export type QuantityOmit = z.infer<typeof QuantityOmit>; 

  /**
   * SerialNumberOmit schema (Mon Nov 03 2025)
   */
export const SerialNumberOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, storeId: P.bool, productId: P.bool, serialNumber: P.bool, inStock: P.bool }).partial()
export type SerialNumberOmit = z.infer<typeof SerialNumberOmit>; 

  /**
   * StoreSelectOwn schema (Mon Nov 03 2025)
   */
export const StoreSelectOwn = StoreOmit
export type StoreSelectOwn = z.infer<typeof StoreSelectOwn>; 

  /**
   * CategorySelectOwn schema (Mon Nov 03 2025)
   */
export const CategorySelectOwn = CategoryOmit
export type CategorySelectOwn = z.infer<typeof CategorySelectOwn>; 

  /**
   * TagSelectOwn schema (Mon Nov 03 2025)
   */
export const TagSelectOwn = TagOmit
export type TagSelectOwn = z.infer<typeof TagSelectOwn>; 

  /**
   * ProductTagSelectOwn schema (Mon Nov 03 2025)
   */
export const ProductTagSelectOwn = ProductTagOmit
export type ProductTagSelectOwn = z.infer<typeof ProductTagSelectOwn>; 

  /**
   * ManufacturerSelectOwn schema (Mon Nov 03 2025)
   */
export const ManufacturerSelectOwn = ManufacturerOmit
export type ManufacturerSelectOwn = z.infer<typeof ManufacturerSelectOwn>; 

  /**
   * ProductSelectOwn schema (Mon Nov 03 2025)
   */
export const ProductSelectOwn = ProductOmit
export type ProductSelectOwn = z.infer<typeof ProductSelectOwn>; 

  /**
   * PriceLevelSelectOwn schema (Mon Nov 03 2025)
   */
export const PriceLevelSelectOwn = PriceLevelOmit
export type PriceLevelSelectOwn = z.infer<typeof PriceLevelSelectOwn>; 

  /**
   * PriceSelectOwn schema (Mon Nov 03 2025)
   */
export const PriceSelectOwn = PriceOmit
export type PriceSelectOwn = z.infer<typeof PriceSelectOwn>; 

  /**
   * QuantitySelectOwn schema (Mon Nov 03 2025)
   */
export const QuantitySelectOwn = QuantityOmit
export type QuantitySelectOwn = z.infer<typeof QuantitySelectOwn>; 

  /**
   * SerialNumberSelectOwn schema (Mon Nov 03 2025)
   */
export const SerialNumberSelectOwn = SerialNumberOmit
export type SerialNumberSelectOwn = z.infer<typeof SerialNumberSelectOwn>; 

  /**
   * StoreOrderByOwn schema (Mon Nov 03 2025)
   */
export const StoreOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, name: P.dir, slug: P.dir, description: P.dir 
  }).partial()
export type StoreOrderByOwn = z.infer<typeof StoreOrderByOwn>; 

  /**
   * CategoryOrderByOwn schema (Mon Nov 03 2025)
   */
export const CategoryOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, parentId: P.dir, name: P.dir, slug: P.dir, description: P.dir 
  }).partial()
export type CategoryOrderByOwn = z.infer<typeof CategoryOrderByOwn>; 

  /**
   * TagOrderByOwn schema (Mon Nov 03 2025)
   */
export const TagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, name: P.dir, slug: P.dir, description: P.dir 
  }).partial()
export type TagOrderByOwn = z.infer<typeof TagOrderByOwn>; 

  /**
   * ProductTagOrderByOwn schema (Mon Nov 03 2025)
   */
export const ProductTagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, productId: P.dir, tagId: P.dir 
  }).partial()
export type ProductTagOrderByOwn = z.infer<typeof ProductTagOrderByOwn>; 

  /**
   * ManufacturerOrderByOwn schema (Mon Nov 03 2025)
   */
export const ManufacturerOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, name: P.dir 
  }).partial()
export type ManufacturerOrderByOwn = z.infer<typeof ManufacturerOrderByOwn>; 

  /**
   * ProductOrderByOwn schema (Mon Nov 03 2025)
   */
export const ProductOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, parentId: P.dir, categoryId: P.dir, manufacturerId: P.dir, name: P.dir, slug: P.dir, model: P.dir, description: P.dir, upc: P.dir, sku: P.dir, active: P.dir 
  }).partial()
export type ProductOrderByOwn = z.infer<typeof ProductOrderByOwn>; 

  /**
   * PriceLevelOrderByOwn schema (Mon Nov 03 2025)
   */
export const PriceLevelOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, name: P.dir, slug: P.dir, description: P.dir, taxrate: P.dir 
  }).partial()
export type PriceLevelOrderByOwn = z.infer<typeof PriceLevelOrderByOwn>; 

  /**
   * PriceOrderByOwn schema (Mon Nov 03 2025)
   */
export const PriceOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, productId: P.dir, priceLevelId: P.dir, price: P.dir 
  }).partial()
export type PriceOrderByOwn = z.infer<typeof PriceOrderByOwn>; 

  /**
   * QuantityOrderByOwn schema (Mon Nov 03 2025)
   */
export const QuantityOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, storeId: P.dir, productId: P.dir, quantity: P.dir, minQuantity: P.dir 
  }).partial()
export type QuantityOrderByOwn = z.infer<typeof QuantityOrderByOwn>; 

  /**
   * SerialNumberOrderByOwn schema (Mon Nov 03 2025)
   */
export const SerialNumberOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, storeId: P.dir, productId: P.dir, serialNumber: P.dir, inStock: P.dir 
  }).partial()
export type SerialNumberOrderByOwn = z.infer<typeof SerialNumberOrderByOwn>; 

  /**
   * StoreOrderBy schema (Mon Nov 03 2025)
   */
export const StoreOrderBy = z.object({
    ...StoreOrderByOwn.shape, 
    Quantities: P.orderByCount, SerialNumbers: P.orderByCount 
  }).partial()
export type StoreOrderBy = z.infer<typeof StoreOrderBy>; 

  /**
   * CategoryOrderBy schema (Mon Nov 03 2025)
   */
export const CategoryOrderBy = z.object({
    ...CategoryOrderByOwn.shape, 
    Parent: CategoryOrderByOwn, Children: P.orderByCount, Products: P.orderByCount 
  }).partial()
export type CategoryOrderBy = z.infer<typeof CategoryOrderBy>; 

  /**
   * TagOrderBy schema (Mon Nov 03 2025)
   */
export const TagOrderBy = z.object({
    ...TagOrderByOwn.shape, 
    ProductTags: P.orderByCount 
  }).partial()
export type TagOrderBy = z.infer<typeof TagOrderBy>; 

  /**
   * ProductTagOrderBy schema (Mon Nov 03 2025)
   */
export const ProductTagOrderBy = z.object({
    ...ProductTagOrderByOwn.shape, 
    Product: ProductOrderByOwn, Tag: TagOrderByOwn 
  }).partial()
export type ProductTagOrderBy = z.infer<typeof ProductTagOrderBy>; 

  /**
   * ManufacturerOrderBy schema (Mon Nov 03 2025)
   */
export const ManufacturerOrderBy = z.object({
    ...ManufacturerOrderByOwn.shape, 
    Product: P.orderByCount 
  }).partial()
export type ManufacturerOrderBy = z.infer<typeof ManufacturerOrderBy>; 

  /**
   * ProductOrderBy schema (Mon Nov 03 2025)
   */
export const ProductOrderBy = z.object({
    ...ProductOrderByOwn.shape, 
    Parent: ProductOrderByOwn, Category: CategoryOrderByOwn, Manufacturer: ManufacturerOrderByOwn, Variants: P.orderByCount, ProductTags: P.orderByCount, Prices: P.orderByCount, Quantities: P.orderByCount, SerialNumbers: P.orderByCount 
  }).partial()
export type ProductOrderBy = z.infer<typeof ProductOrderBy>; 

  /**
   * PriceLevelOrderBy schema (Mon Nov 03 2025)
   */
export const PriceLevelOrderBy = z.object({
    ...PriceLevelOrderByOwn.shape, 
    Prices: P.orderByCount 
  }).partial()
export type PriceLevelOrderBy = z.infer<typeof PriceLevelOrderBy>; 

  /**
   * PriceOrderBy schema (Mon Nov 03 2025)
   */
export const PriceOrderBy = z.object({
    ...PriceOrderByOwn.shape, 
    Product: ProductOrderByOwn, PriceLevel: PriceLevelOrderByOwn 
  }).partial()
export type PriceOrderBy = z.infer<typeof PriceOrderBy>; 

  /**
   * QuantityOrderBy schema (Mon Nov 03 2025)
   */
export const QuantityOrderBy = z.object({
    ...QuantityOrderByOwn.shape, 
    Product: ProductOrderByOwn, Store: StoreOrderByOwn 
  }).partial()
export type QuantityOrderBy = z.infer<typeof QuantityOrderBy>; 

  /**
   * SerialNumberOrderBy schema (Mon Nov 03 2025)
   */
export const SerialNumberOrderBy = z.object({
    ...SerialNumberOrderByOwn.shape, 
    Product: ProductOrderByOwn, Store: StoreOrderByOwn 
  }).partial()
export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBy>; 

  /**
   * StoreWhereOwn schema (Mon Nov 03 2025)
   */
export const StoreWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter }).partial()
export type StoreWhereOwn = z.infer<typeof StoreWhereOwn>; 

  /**
   * CategoryWhereOwn schema (Mon Nov 03 2025)
   */
export const CategoryWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, parentId: P.intFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter }).partial()
export type CategoryWhereOwn = z.infer<typeof CategoryWhereOwn>; 

  /**
   * TagWhereOwn schema (Mon Nov 03 2025)
   */
export const TagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter }).partial()
export type TagWhereOwn = z.infer<typeof TagWhereOwn>; 

  /**
   * ProductTagWhereOwn schema (Mon Nov 03 2025)
   */
export const ProductTagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, productId: P.intFilter, tagId: P.intFilter }).partial()
export type ProductTagWhereOwn = z.infer<typeof ProductTagWhereOwn>; 

  /**
   * ManufacturerWhereOwn schema (Mon Nov 03 2025)
   */
export const ManufacturerWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, name: P.strFilter }).partial()
export type ManufacturerWhereOwn = z.infer<typeof ManufacturerWhereOwn>; 

  /**
   * ProductWhereOwn schema (Mon Nov 03 2025)
   */
export const ProductWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, parentId: P.intFilter, categoryId: P.intFilter, manufacturerId: P.intFilter, name: P.strFilter, slug: P.strFilter, model: P.strFilter, description: P.strFilter, upc: P.strFilter, sku: P.strFilter, active: P.boolFilter }).partial()
export type ProductWhereOwn = z.infer<typeof ProductWhereOwn>; 

  /**
   * PriceLevelWhereOwn schema (Mon Nov 03 2025)
   */
export const PriceLevelWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter, taxrate: P.numFilter }).partial()
export type PriceLevelWhereOwn = z.infer<typeof PriceLevelWhereOwn>; 

  /**
   * PriceWhereOwn schema (Mon Nov 03 2025)
   */
export const PriceWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, productId: P.intFilter, priceLevelId: P.intFilter, price: P.numFilter }).partial()
export type PriceWhereOwn = z.infer<typeof PriceWhereOwn>; 

  /**
   * QuantityWhereOwn schema (Mon Nov 03 2025)
   */
export const QuantityWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, storeId: P.intFilter, productId: P.intFilter, quantity: P.intFilter, minQuantity: P.intFilter }).partial()
export type QuantityWhereOwn = z.infer<typeof QuantityWhereOwn>; 

  /**
   * SerialNumberWhereOwn schema (Mon Nov 03 2025)
   */
export const SerialNumberWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, storeId: P.intFilter, productId: P.intFilter, serialNumber: P.strFilter, inStock: P.boolFilter }).partial()
export type SerialNumberWhereOwn = z.infer<typeof SerialNumberWhereOwn>; 

  /**
   * StoreWhere schema (Mon Nov 03 2025)
   */
export const StoreWhere = z.object({ 
  ...StoreWhereOwn.shape,
  Quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), SerialNumbers: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), 
    AND:StoreWhereOwn,
    OR:StoreWhereOwn.array(), 
    NOT:StoreWhereOwn.or(StoreWhereOwn.array())
  }).partial()
export type StoreWhere = z.infer<typeof StoreWhere>; 

  /**
   * CategoryWhere schema (Mon Nov 03 2025)
   */
export const CategoryWhere = z.object({ 
  ...CategoryWhereOwn.shape,
  Parent: CategoryWhereOwn.partial(), Children: z.object({ 
          some: CategoryWhereOwn,
          every: CategoryWhereOwn,
          none: CategoryWhereOwn
        }).partial(), Products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), 
    AND:CategoryWhereOwn,
    OR:CategoryWhereOwn.array(), 
    NOT:CategoryWhereOwn.or(CategoryWhereOwn.array())
  }).partial()
export type CategoryWhere = z.infer<typeof CategoryWhere>; 

  /**
   * TagWhere schema (Mon Nov 03 2025)
   */
export const TagWhere = z.object({ 
  ...TagWhereOwn.shape,
  ProductTags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(), 
    AND:TagWhereOwn,
    OR:TagWhereOwn.array(), 
    NOT:TagWhereOwn.or(TagWhereOwn.array())
  }).partial()
export type TagWhere = z.infer<typeof TagWhere>; 

  /**
   * ProductTagWhere schema (Mon Nov 03 2025)
   */
export const ProductTagWhere = z.object({ 
  ...ProductTagWhereOwn.shape,
  Product: ProductWhereOwn.partial(), Tag: TagWhereOwn.partial(), 
    AND:ProductTagWhereOwn,
    OR:ProductTagWhereOwn.array(), 
    NOT:ProductTagWhereOwn.or(ProductTagWhereOwn.array())
  }).partial()
export type ProductTagWhere = z.infer<typeof ProductTagWhere>; 

  /**
   * ManufacturerWhere schema (Mon Nov 03 2025)
   */
export const ManufacturerWhere = z.object({ 
  ...ManufacturerWhereOwn.shape,
  Product: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), 
    AND:ManufacturerWhereOwn,
    OR:ManufacturerWhereOwn.array(), 
    NOT:ManufacturerWhereOwn.or(ManufacturerWhereOwn.array())
  }).partial()
export type ManufacturerWhere = z.infer<typeof ManufacturerWhere>; 

  /**
   * ProductWhere schema (Mon Nov 03 2025)
   */
export const ProductWhere = z.object({ 
  ...ProductWhereOwn.shape,
  Parent: ProductWhereOwn.partial(), Category: CategoryWhereOwn.partial(), Manufacturer: ManufacturerWhereOwn.partial(), Variants: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), ProductTags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(), Prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), Quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), SerialNumbers: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), 
    AND:ProductWhereOwn,
    OR:ProductWhereOwn.array(), 
    NOT:ProductWhereOwn.or(ProductWhereOwn.array())
  }).partial()
export type ProductWhere = z.infer<typeof ProductWhere>; 

  /**
   * PriceLevelWhere schema (Mon Nov 03 2025)
   */
export const PriceLevelWhere = z.object({ 
  ...PriceLevelWhereOwn.shape,
  Prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), 
    AND:PriceLevelWhereOwn,
    OR:PriceLevelWhereOwn.array(), 
    NOT:PriceLevelWhereOwn.or(PriceLevelWhereOwn.array())
  }).partial()
export type PriceLevelWhere = z.infer<typeof PriceLevelWhere>; 

  /**
   * PriceWhere schema (Mon Nov 03 2025)
   */
export const PriceWhere = z.object({ 
  ...PriceWhereOwn.shape,
  Product: ProductWhereOwn.partial(), PriceLevel: PriceLevelWhereOwn.partial(), 
    AND:PriceWhereOwn,
    OR:PriceWhereOwn.array(), 
    NOT:PriceWhereOwn.or(PriceWhereOwn.array())
  }).partial()
export type PriceWhere = z.infer<typeof PriceWhere>; 

  /**
   * QuantityWhere schema (Mon Nov 03 2025)
   */
export const QuantityWhere = z.object({ 
  ...QuantityWhereOwn.shape,
  Product: ProductWhereOwn.partial(), Store: StoreWhereOwn.partial(), 
    AND:QuantityWhereOwn,
    OR:QuantityWhereOwn.array(), 
    NOT:QuantityWhereOwn.or(QuantityWhereOwn.array())
  }).partial()
export type QuantityWhere = z.infer<typeof QuantityWhere>; 

  /**
   * SerialNumberWhere schema (Mon Nov 03 2025)
   */
export const SerialNumberWhere = z.object({ 
  ...SerialNumberWhereOwn.shape,
  Product: ProductWhereOwn.partial(), Store: StoreWhereOwn.partial(), 
    AND:SerialNumberWhereOwn,
    OR:SerialNumberWhereOwn.array(), 
    NOT:SerialNumberWhereOwn.or(SerialNumberWhereOwn.array())
  }).partial()
export type SerialNumberWhere = z.infer<typeof SerialNumberWhere>; 

  /**
   * StoreQueryOwn schema (Mon Nov 03 2025)
   */
export const StoreQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: StoreField.array(),
    orderBy: StoreOrderBy,
    where: StoreWhere,
  }).partial()
export type StoreQueryOwn = z.infer<typeof StoreQueryOwn>; 

  /**
   * CategoryQueryOwn schema (Mon Nov 03 2025)
   */
export const CategoryQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: CategoryField.array(),
    orderBy: CategoryOrderBy,
    where: CategoryWhere,
  }).partial()
export type CategoryQueryOwn = z.infer<typeof CategoryQueryOwn>; 

  /**
   * TagQueryOwn schema (Mon Nov 03 2025)
   */
export const TagQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: TagField.array(),
    orderBy: TagOrderBy,
    where: TagWhere,
  }).partial()
export type TagQueryOwn = z.infer<typeof TagQueryOwn>; 

  /**
   * ProductTagQueryOwn schema (Mon Nov 03 2025)
   */
export const ProductTagQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: ProductTagField.array(),
    orderBy: ProductTagOrderBy,
    where: ProductTagWhere,
  }).partial()
export type ProductTagQueryOwn = z.infer<typeof ProductTagQueryOwn>; 

  /**
   * ManufacturerQueryOwn schema (Mon Nov 03 2025)
   */
export const ManufacturerQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: ManufacturerField.array(),
    orderBy: ManufacturerOrderBy,
    where: ManufacturerWhere,
  }).partial()
export type ManufacturerQueryOwn = z.infer<typeof ManufacturerQueryOwn>; 

  /**
   * ProductQueryOwn schema (Mon Nov 03 2025)
   */
export const ProductQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: ProductField.array(),
    orderBy: ProductOrderBy,
    where: ProductWhere,
  }).partial()
export type ProductQueryOwn = z.infer<typeof ProductQueryOwn>; 

  /**
   * PriceLevelQueryOwn schema (Mon Nov 03 2025)
   */
export const PriceLevelQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: PriceLevelField.array(),
    orderBy: PriceLevelOrderBy,
    where: PriceLevelWhere,
  }).partial()
export type PriceLevelQueryOwn = z.infer<typeof PriceLevelQueryOwn>; 

  /**
   * PriceQueryOwn schema (Mon Nov 03 2025)
   */
export const PriceQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: PriceField.array(),
    orderBy: PriceOrderBy,
    where: PriceWhere,
  }).partial()
export type PriceQueryOwn = z.infer<typeof PriceQueryOwn>; 

  /**
   * QuantityQueryOwn schema (Mon Nov 03 2025)
   */
export const QuantityQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: QuantityField.array(),
    orderBy: QuantityOrderBy,
    where: QuantityWhere,
  }).partial()
export type QuantityQueryOwn = z.infer<typeof QuantityQueryOwn>; 

  /**
   * SerialNumberQueryOwn schema (Mon Nov 03 2025)
   */
export const SerialNumberQueryOwn = z.object({
    take: P.take,
    skip: P.skip,
    distinct: SerialNumberField.array(),
    orderBy: SerialNumberOrderBy,
    where: SerialNumberWhere,
  }).partial()
export type SerialNumberQueryOwn = z.infer<typeof SerialNumberQueryOwn>; 

  /**
   * StoreQueryOne schema (Mon Nov 03 2025)
   */
export const StoreQueryOne = z.object({ 
    select: StoreSelectOwn,
    omit: StoreOmit,
    where: StoreWhere
  }).partial()
export type StoreQueryOne = z.infer<typeof StoreQueryOne>; 

  /**
   * CategoryQueryOne schema (Mon Nov 03 2025)
   */
export const CategoryQueryOne = z.object({ 
    select: CategorySelectOwn,
    omit: CategoryOmit,
    where: CategoryWhere
  }).partial()
export type CategoryQueryOne = z.infer<typeof CategoryQueryOne>; 

  /**
   * TagQueryOne schema (Mon Nov 03 2025)
   */
export const TagQueryOne = z.object({ 
    select: TagSelectOwn,
    omit: TagOmit,
    where: TagWhere
  }).partial()
export type TagQueryOne = z.infer<typeof TagQueryOne>; 

  /**
   * ProductTagQueryOne schema (Mon Nov 03 2025)
   */
export const ProductTagQueryOne = z.object({ 
    select: ProductTagSelectOwn,
    omit: ProductTagOmit,
    where: ProductTagWhere
  }).partial()
export type ProductTagQueryOne = z.infer<typeof ProductTagQueryOne>; 

  /**
   * ManufacturerQueryOne schema (Mon Nov 03 2025)
   */
export const ManufacturerQueryOne = z.object({ 
    select: ManufacturerSelectOwn,
    omit: ManufacturerOmit,
    where: ManufacturerWhere
  }).partial()
export type ManufacturerQueryOne = z.infer<typeof ManufacturerQueryOne>; 

  /**
   * ProductQueryOne schema (Mon Nov 03 2025)
   */
export const ProductQueryOne = z.object({ 
    select: ProductSelectOwn,
    omit: ProductOmit,
    where: ProductWhere
  }).partial()
export type ProductQueryOne = z.infer<typeof ProductQueryOne>; 

  /**
   * PriceLevelQueryOne schema (Mon Nov 03 2025)
   */
export const PriceLevelQueryOne = z.object({ 
    select: PriceLevelSelectOwn,
    omit: PriceLevelOmit,
    where: PriceLevelWhere
  }).partial()
export type PriceLevelQueryOne = z.infer<typeof PriceLevelQueryOne>; 

  /**
   * PriceQueryOne schema (Mon Nov 03 2025)
   */
export const PriceQueryOne = z.object({ 
    select: PriceSelectOwn,
    omit: PriceOmit,
    where: PriceWhere
  }).partial()
export type PriceQueryOne = z.infer<typeof PriceQueryOne>; 

  /**
   * QuantityQueryOne schema (Mon Nov 03 2025)
   */
export const QuantityQueryOne = z.object({ 
    select: QuantitySelectOwn,
    omit: QuantityOmit,
    where: QuantityWhere
  }).partial()
export type QuantityQueryOne = z.infer<typeof QuantityQueryOne>; 

  /**
   * SerialNumberQueryOne schema (Mon Nov 03 2025)
   */
export const SerialNumberQueryOne = z.object({ 
    select: SerialNumberSelectOwn,
    omit: SerialNumberOmit,
    where: SerialNumberWhere
  }).partial()
export type SerialNumberQueryOne = z.infer<typeof SerialNumberQueryOne>; 

  /**
   * StoreInclude schema (Mon Nov 03 2025)
   */
export const StoreInclude = z.object({ Quantities: P.bool.or(z.object({ select :QuantitySelectOwn })), SerialNumbers: P.bool.or(z.object({ select :SerialNumberSelectOwn })) }).partial()
export type StoreInclude = z.infer<typeof StoreInclude>; 

  /**
   * CategoryInclude schema (Mon Nov 03 2025)
   */
export const CategoryInclude = z.object({ Parent: P.bool.or(z.object({ select :CategorySelectOwn })), Children: P.bool.or(z.object({ select :CategorySelectOwn })), Products: P.bool.or(z.object({ select :ProductSelectOwn })) }).partial()
export type CategoryInclude = z.infer<typeof CategoryInclude>; 

  /**
   * TagInclude schema (Mon Nov 03 2025)
   */
export const TagInclude = z.object({ ProductTags: P.bool.or(z.object({ select :ProductTagSelectOwn })) }).partial()
export type TagInclude = z.infer<typeof TagInclude>; 

  /**
   * ProductTagInclude schema (Mon Nov 03 2025)
   */
export const ProductTagInclude = z.object({ Product: P.bool.or(z.object({ select :ProductSelectOwn })), Tag: P.bool.or(z.object({ select :TagSelectOwn })) }).partial()
export type ProductTagInclude = z.infer<typeof ProductTagInclude>; 

  /**
   * ManufacturerInclude schema (Mon Nov 03 2025)
   */
export const ManufacturerInclude = z.object({ Product: P.bool.or(z.object({ select :ProductSelectOwn })) }).partial()
export type ManufacturerInclude = z.infer<typeof ManufacturerInclude>; 

  /**
   * ProductInclude schema (Mon Nov 03 2025)
   */
export const ProductInclude = z.object({ Parent: P.bool.or(z.object({ select :ProductSelectOwn })), Category: P.bool.or(z.object({ select :CategorySelectOwn })), Manufacturer: P.bool.or(z.object({ select :ManufacturerSelectOwn })), Variants: P.bool.or(z.object({ select :ProductSelectOwn })), ProductTags: P.bool.or(z.object({ select :ProductTagSelectOwn })), Prices: P.bool.or(z.object({ select :PriceSelectOwn })), Quantities: P.bool.or(z.object({ select :QuantitySelectOwn })), SerialNumbers: P.bool.or(z.object({ select :SerialNumberSelectOwn })) }).partial()
export type ProductInclude = z.infer<typeof ProductInclude>; 

  /**
   * PriceLevelInclude schema (Mon Nov 03 2025)
   */
export const PriceLevelInclude = z.object({ Prices: P.bool.or(z.object({ select :PriceSelectOwn })) }).partial()
export type PriceLevelInclude = z.infer<typeof PriceLevelInclude>; 

  /**
   * PriceInclude schema (Mon Nov 03 2025)
   */
export const PriceInclude = z.object({ Product: P.bool.or(z.object({ select :ProductSelectOwn })), PriceLevel: P.bool.or(z.object({ select :PriceLevelSelectOwn })) }).partial()
export type PriceInclude = z.infer<typeof PriceInclude>; 

  /**
   * QuantityInclude schema (Mon Nov 03 2025)
   */
export const QuantityInclude = z.object({ Product: P.bool.or(z.object({ select :ProductSelectOwn })), Store: P.bool.or(z.object({ select :StoreSelectOwn })) }).partial()
export type QuantityInclude = z.infer<typeof QuantityInclude>; 

  /**
   * SerialNumberInclude schema (Mon Nov 03 2025)
   */
export const SerialNumberInclude = z.object({ Product: P.bool.or(z.object({ select :ProductSelectOwn })), Store: P.bool.or(z.object({ select :StoreSelectOwn })) }).partial()
export type SerialNumberInclude = z.infer<typeof SerialNumberInclude>; 

  /**
   * StoreQuery schema (Mon Nov 03 2025)
   */
export const StoreQuery = z.object({ 
    select: StoreSelectOwn, 
    omit: StoreOmit, 
    ...StoreQueryOwn.shape 
  }).partial()
export type StoreQuery = z.infer<typeof StoreQuery>; 

  /**
   * CategoryQuery schema (Mon Nov 03 2025)
   */
export const CategoryQuery = z.object({ 
    select: CategorySelectOwn, 
    omit: CategoryOmit, 
    ...CategoryQueryOwn.shape 
  }).partial()
export type CategoryQuery = z.infer<typeof CategoryQuery>; 

  /**
   * TagQuery schema (Mon Nov 03 2025)
   */
export const TagQuery = z.object({ 
    select: TagSelectOwn, 
    omit: TagOmit, 
    ...TagQueryOwn.shape 
  }).partial()
export type TagQuery = z.infer<typeof TagQuery>; 

  /**
   * ProductTagQuery schema (Mon Nov 03 2025)
   */
export const ProductTagQuery = z.object({ 
    select: ProductTagSelectOwn, 
    omit: ProductTagOmit, 
    ...ProductTagQueryOwn.shape 
  }).partial()
export type ProductTagQuery = z.infer<typeof ProductTagQuery>; 

  /**
   * ManufacturerQuery schema (Mon Nov 03 2025)
   */
export const ManufacturerQuery = z.object({ 
    select: ManufacturerSelectOwn, 
    omit: ManufacturerOmit, 
    ...ManufacturerQueryOwn.shape 
  }).partial()
export type ManufacturerQuery = z.infer<typeof ManufacturerQuery>; 

  /**
   * ProductQuery schema (Mon Nov 03 2025)
   */
export const ProductQuery = z.object({ 
    select: ProductSelectOwn, 
    omit: ProductOmit, 
    ...ProductQueryOwn.shape 
  }).partial()
export type ProductQuery = z.infer<typeof ProductQuery>; 

  /**
   * PriceLevelQuery schema (Mon Nov 03 2025)
   */
export const PriceLevelQuery = z.object({ 
    select: PriceLevelSelectOwn, 
    omit: PriceLevelOmit, 
    ...PriceLevelQueryOwn.shape 
  }).partial()
export type PriceLevelQuery = z.infer<typeof PriceLevelQuery>; 

  /**
   * PriceQuery schema (Mon Nov 03 2025)
   */
export const PriceQuery = z.object({ 
    select: PriceSelectOwn, 
    omit: PriceOmit, 
    ...PriceQueryOwn.shape 
  }).partial()
export type PriceQuery = z.infer<typeof PriceQuery>; 

  /**
   * QuantityQuery schema (Mon Nov 03 2025)
   */
export const QuantityQuery = z.object({ 
    select: QuantitySelectOwn, 
    omit: QuantityOmit, 
    ...QuantityQueryOwn.shape 
  }).partial()
export type QuantityQuery = z.infer<typeof QuantityQuery>; 

  /**
   * SerialNumberQuery schema (Mon Nov 03 2025)
   */
export const SerialNumberQuery = z.object({ 
    select: SerialNumberSelectOwn, 
    omit: SerialNumberOmit, 
    ...SerialNumberQueryOwn.shape 
  }).partial()
export type SerialNumberQuery = z.infer<typeof SerialNumberQuery>; 

  /**
   * StoreSelect schema (Mon Nov 03 2025)
   */
export const StoreSelect = z.object({...StoreSelectOwn.shape,  }).partial()
export type StoreSelect = z.infer<typeof StoreSelect>; 

  /**
   * CategorySelect schema (Mon Nov 03 2025)
   */
export const CategorySelect = z.object({...CategorySelectOwn.shape,  }).partial()
export type CategorySelect = z.infer<typeof CategorySelect>; 

  /**
   * TagSelect schema (Mon Nov 03 2025)
   */
export const TagSelect = z.object({...TagSelectOwn.shape,  }).partial()
export type TagSelect = z.infer<typeof TagSelect>; 

  /**
   * ProductTagSelect schema (Mon Nov 03 2025)
   */
export const ProductTagSelect = z.object({...ProductTagSelectOwn.shape,  }).partial()
export type ProductTagSelect = z.infer<typeof ProductTagSelect>; 

  /**
   * ManufacturerSelect schema (Mon Nov 03 2025)
   */
export const ManufacturerSelect = z.object({...ManufacturerSelectOwn.shape,  }).partial()
export type ManufacturerSelect = z.infer<typeof ManufacturerSelect>; 

  /**
   * ProductSelect schema (Mon Nov 03 2025)
   */
export const ProductSelect = z.object({...ProductSelectOwn.shape,  }).partial()
export type ProductSelect = z.infer<typeof ProductSelect>; 

  /**
   * PriceLevelSelect schema (Mon Nov 03 2025)
   */
export const PriceLevelSelect = z.object({...PriceLevelSelectOwn.shape,  }).partial()
export type PriceLevelSelect = z.infer<typeof PriceLevelSelect>; 

  /**
   * PriceSelect schema (Mon Nov 03 2025)
   */
export const PriceSelect = z.object({...PriceSelectOwn.shape,  }).partial()
export type PriceSelect = z.infer<typeof PriceSelect>; 

  /**
   * QuantitySelect schema (Mon Nov 03 2025)
   */
export const QuantitySelect = z.object({...QuantitySelectOwn.shape,  }).partial()
export type QuantitySelect = z.infer<typeof QuantitySelect>; 

  /**
   * SerialNumberSelect schema (Mon Nov 03 2025)
   */
export const SerialNumberSelect = z.object({...SerialNumberSelectOwn.shape,  }).partial()
export type SerialNumberSelect = z.infer<typeof SerialNumberSelect>; 

  /**
   * StoreProjection schema (Mon Nov 03 2025)
   */
export const StoreProjection = z.union([
        z.object({ select: StoreSelect }),
        z.object({ omit: StoreOmit }),
        z.object({ include: StoreInclude }),
        z.object({})
    ])
export type StoreProjection = z.infer<typeof StoreProjection>; 

  /**
   * CategoryProjection schema (Mon Nov 03 2025)
   */
export const CategoryProjection = z.union([
        z.object({ select: CategorySelect }),
        z.object({ omit: CategoryOmit }),
        z.object({ include: CategoryInclude }),
        z.object({})
    ])
export type CategoryProjection = z.infer<typeof CategoryProjection>; 

  /**
   * TagProjection schema (Mon Nov 03 2025)
   */
export const TagProjection = z.union([
        z.object({ select: TagSelect }),
        z.object({ omit: TagOmit }),
        z.object({ include: TagInclude }),
        z.object({})
    ])
export type TagProjection = z.infer<typeof TagProjection>; 

  /**
   * ProductTagProjection schema (Mon Nov 03 2025)
   */
export const ProductTagProjection = z.union([
        z.object({ select: ProductTagSelect }),
        z.object({ omit: ProductTagOmit }),
        z.object({ include: ProductTagInclude }),
        z.object({})
    ])
export type ProductTagProjection = z.infer<typeof ProductTagProjection>; 

  /**
   * ManufacturerProjection schema (Mon Nov 03 2025)
   */
export const ManufacturerProjection = z.union([
        z.object({ select: ManufacturerSelect }),
        z.object({ omit: ManufacturerOmit }),
        z.object({ include: ManufacturerInclude }),
        z.object({})
    ])
export type ManufacturerProjection = z.infer<typeof ManufacturerProjection>; 

  /**
   * ProductProjection schema (Mon Nov 03 2025)
   */
export const ProductProjection = z.union([
        z.object({ select: ProductSelect }),
        z.object({ omit: ProductOmit }),
        z.object({ include: ProductInclude }),
        z.object({})
    ])
export type ProductProjection = z.infer<typeof ProductProjection>; 

  /**
   * PriceLevelProjection schema (Mon Nov 03 2025)
   */
export const PriceLevelProjection = z.union([
        z.object({ select: PriceLevelSelect }),
        z.object({ omit: PriceLevelOmit }),
        z.object({ include: PriceLevelInclude }),
        z.object({})
    ])
export type PriceLevelProjection = z.infer<typeof PriceLevelProjection>; 

  /**
   * PriceProjection schema (Mon Nov 03 2025)
   */
export const PriceProjection = z.union([
        z.object({ select: PriceSelect }),
        z.object({ omit: PriceOmit }),
        z.object({ include: PriceInclude }),
        z.object({})
    ])
export type PriceProjection = z.infer<typeof PriceProjection>; 

  /**
   * QuantityProjection schema (Mon Nov 03 2025)
   */
export const QuantityProjection = z.union([
        z.object({ select: QuantitySelect }),
        z.object({ omit: QuantityOmit }),
        z.object({ include: QuantityInclude }),
        z.object({})
    ])
export type QuantityProjection = z.infer<typeof QuantityProjection>; 

  /**
   * SerialNumberProjection schema (Mon Nov 03 2025)
   */
export const SerialNumberProjection = z.union([
        z.object({ select: SerialNumberSelect }),
        z.object({ omit: SerialNumberOmit }),
        z.object({ include: SerialNumberInclude }),
        z.object({})
    ])
export type SerialNumberProjection = z.infer<typeof SerialNumberProjection>; 

  /**
   * StoreCreateOwn schema (Mon Nov 03 2025)
   */
export const StoreCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type StoreCreateOwn = z.infer<typeof StoreCreateOwn>; 

  /**
   * CategoryCreateOwn schema (Mon Nov 03 2025)
   */
export const CategoryCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type CategoryCreateOwn = z.infer<typeof CategoryCreateOwn>; 

  /**
   * TagCreateOwn schema (Mon Nov 03 2025)
   */
export const TagCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type TagCreateOwn = z.infer<typeof TagCreateOwn>; 

  /**
   * ProductTagCreateOwn schema (Mon Nov 03 2025)
   */
export const ProductTagCreateOwn = z.object({ readonly: P.bool.optional(),productId: P.int,tagId: P.int })
export type ProductTagCreateOwn = z.infer<typeof ProductTagCreateOwn>; 

  /**
   * ManufacturerCreateOwn schema (Mon Nov 03 2025)
   */
export const ManufacturerCreateOwn = z.object({ name: P.short })
export type ManufacturerCreateOwn = z.infer<typeof ManufacturerCreateOwn>; 

  /**
   * ProductCreateOwn schema (Mon Nov 03 2025)
   */
export const ProductCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,upc: P.str,sku: P.str,active: P.bool.optional() })
export type ProductCreateOwn = z.infer<typeof ProductCreateOwn>; 

  /**
   * PriceLevelCreateOwn schema (Mon Nov 03 2025)
   */
export const PriceLevelCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,taxrate: P.num })
export type PriceLevelCreateOwn = z.infer<typeof PriceLevelCreateOwn>; 

  /**
   * PriceCreateOwn schema (Mon Nov 03 2025)
   */
export const PriceCreateOwn = z.object({ readonly: P.bool.optional(),productId: P.int,priceLevelId: P.int,price: P.currency })
export type PriceCreateOwn = z.infer<typeof PriceCreateOwn>; 

  /**
   * QuantityCreateOwn schema (Mon Nov 03 2025)
   */
export const QuantityCreateOwn = z.object({ readonly: P.bool.optional(),storeId: P.int,productId: P.int,quantity: P.int,minQuantity: P.int })
export type QuantityCreateOwn = z.infer<typeof QuantityCreateOwn>; 

  /**
   * SerialNumberCreateOwn schema (Mon Nov 03 2025)
   */
export const SerialNumberCreateOwn = z.object({ readonly: P.bool.optional(),storeId: P.int,productId: P.int,serialNumber: P.str,inStock: P.bool.optional() })
export type SerialNumberCreateOwn = z.infer<typeof SerialNumberCreateOwn>; 

  /**
   * StoreCreate schema (Mon Nov 03 2025)
   */
export const StoreCreate = z.object({ readonly: P.bool.optional(), name: P.short, description: P.long.optional(), Quantities: P.connectMany.optional(), SerialNumbers: P.connectMany.optional() })
export type StoreCreate = z.infer<typeof StoreCreate>; 

  /**
   * StoreUpdate schema (Mon Nov 03 2025)
   */
export const StoreUpdate = StoreCreate.clone().partial()
export type StoreUpdate = z.infer<typeof StoreUpdate>; 

  /**
   * CategoryCreate schema (Mon Nov 03 2025)
   */
export const CategoryCreate = z.object({ readonly: P.bool.optional(), parentId: P.int.optional(), name: P.short, description: P.long.optional(), Children: P.connectMany.optional(), Products: P.connectMany.optional() })
export type CategoryCreate = z.infer<typeof CategoryCreate>; 

  /**
   * CategoryUpdate schema (Mon Nov 03 2025)
   */
export const CategoryUpdate = CategoryCreate.clone().partial()
export type CategoryUpdate = z.infer<typeof CategoryUpdate>; 

  /**
   * TagCreate schema (Mon Nov 03 2025)
   */
export const TagCreate = z.object({ readonly: P.bool.optional(), name: P.short, description: P.long.optional(), ProductTags: P.connectMany.optional() })
export type TagCreate = z.infer<typeof TagCreate>; 

  /**
   * TagUpdate schema (Mon Nov 03 2025)
   */
export const TagUpdate = TagCreate.clone().partial()
export type TagUpdate = z.infer<typeof TagUpdate>; 

  /**
   * ProductTagCreate schema (Mon Nov 03 2025)
   */
export const ProductTagCreate = z.object({ readonly: P.bool.optional(), productId: P.int, tagId: P.int })
export type ProductTagCreate = z.infer<typeof ProductTagCreate>; 

  /**
   * ProductTagUpdate schema (Mon Nov 03 2025)
   */
export const ProductTagUpdate = ProductTagCreate.clone().partial()
export type ProductTagUpdate = z.infer<typeof ProductTagUpdate>; 

  /**
   * ManufacturerCreate schema (Mon Nov 03 2025)
   */
export const ManufacturerCreate = z.object({ name: P.short, Product: P.connectMany.optional() })
export type ManufacturerCreate = z.infer<typeof ManufacturerCreate>; 

  /**
   * ManufacturerUpdate schema (Mon Nov 03 2025)
   */
export const ManufacturerUpdate = ManufacturerCreate.clone().partial()
export type ManufacturerUpdate = z.infer<typeof ManufacturerUpdate>; 

  /**
   * ProductCreate schema (Mon Nov 03 2025)
   */
export const ProductCreate = z.object({ readonly: P.bool.optional(), parentId: P.int.optional(), categoryId: P.int.optional(), manufacturerId: P.int.optional(), name: P.short, model: P.str.optional(), description: P.long.optional(), upc: P.str, sku: P.str, active: P.bool.optional(), Variants: P.connectMany.optional(), ProductTags: P.connectMany.optional(), Prices: P.connectMany.optional(), Quantities: P.connectMany.optional(), SerialNumbers: P.connectMany.optional() })
export type ProductCreate = z.infer<typeof ProductCreate>; 

  /**
   * ProductUpdate schema (Mon Nov 03 2025)
   */
export const ProductUpdate = ProductCreate.clone().partial()
export type ProductUpdate = z.infer<typeof ProductUpdate>; 

  /**
   * PriceLevelCreate schema (Mon Nov 03 2025)
   */
export const PriceLevelCreate = z.object({ readonly: P.bool.optional(), name: P.short, description: P.long.optional(), taxrate: P.num, Prices: P.connectMany.optional() })
export type PriceLevelCreate = z.infer<typeof PriceLevelCreate>; 

  /**
   * PriceLevelUpdate schema (Mon Nov 03 2025)
   */
export const PriceLevelUpdate = PriceLevelCreate.clone().partial()
export type PriceLevelUpdate = z.infer<typeof PriceLevelUpdate>; 

  /**
   * PriceCreate schema (Mon Nov 03 2025)
   */
export const PriceCreate = z.object({ readonly: P.bool.optional(), productId: P.int, priceLevelId: P.int, price: P.currency })
export type PriceCreate = z.infer<typeof PriceCreate>; 

  /**
   * PriceUpdate schema (Mon Nov 03 2025)
   */
export const PriceUpdate = PriceCreate.clone().partial()
export type PriceUpdate = z.infer<typeof PriceUpdate>; 

  /**
   * QuantityCreate schema (Mon Nov 03 2025)
   */
export const QuantityCreate = z.object({ readonly: P.bool.optional(), storeId: P.int, productId: P.int, quantity: P.int, minQuantity: P.int })
export type QuantityCreate = z.infer<typeof QuantityCreate>; 

  /**
   * QuantityUpdate schema (Mon Nov 03 2025)
   */
export const QuantityUpdate = QuantityCreate.clone().partial()
export type QuantityUpdate = z.infer<typeof QuantityUpdate>; 

  /**
   * SerialNumberCreate schema (Mon Nov 03 2025)
   */
export const SerialNumberCreate = z.object({ readonly: P.bool.optional(), storeId: P.int, productId: P.int, serialNumber: P.str, inStock: P.bool.optional() })
export type SerialNumberCreate = z.infer<typeof SerialNumberCreate>; 

  /**
   * SerialNumberUpdate schema (Mon Nov 03 2025)
   */
export const SerialNumberUpdate = SerialNumberCreate.clone().partial()
export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdate>; 