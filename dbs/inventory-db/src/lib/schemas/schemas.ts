import * as P from '@puq/zod';
import { z } from 'zod';

/**
 * EmployeeField schema (Wed Nov 05 2025)
 */
export const EmployeeField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'employeeId',
]);
export type EmployeeFieldType = z.infer<typeof EmployeeField>;

/**
 * StoreField schema (Wed Nov 05 2025)
 */
export const StoreField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'storeId',
]);
export type StoreFieldType = z.infer<typeof StoreField>;

/**
 * CategoryField schema (Wed Nov 05 2025)
 */
export const CategoryField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'name',
  'slug',
  'description',
  'parentId',
]);
export type CategoryFieldType = z.infer<typeof CategoryField>;

/**
 * CurrencyField schema (Wed Nov 05 2025)
 */
export const CurrencyField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'name',
  'slug',
  'symbol',
  'description',
]);
export type CurrencyFieldType = z.infer<typeof CurrencyField>;

/**
 * TagField schema (Wed Nov 05 2025)
 */
export const TagField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'name',
  'slug',
  'description',
]);
export type TagFieldType = z.infer<typeof TagField>;

/**
 * ProductTagField schema (Wed Nov 05 2025)
 */
export const ProductTagField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'productId',
  'tagId',
]);
export type ProductTagFieldType = z.infer<typeof ProductTagField>;

/**
 * SupplierField schema (Wed Nov 05 2025)
 */
export const SupplierField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'supplierId',
]);
export type SupplierFieldType = z.infer<typeof SupplierField>;

/**
 * ProductField schema (Wed Nov 05 2025)
 */
export const ProductField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'active',
  'name',
  'slug',
  'model',
  'description',
  'upc',
  'sku',
  'parentId',
  'categoryId',
  'supplierId',
]);
export type ProductFieldType = z.infer<typeof ProductField>;

/**
 * ImageField schema (Wed Nov 05 2025)
 */
export const ImageField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'url',
  'title',
  'description',
  'order',
]);
export type ImageFieldType = z.infer<typeof ImageField>;

/**
 * ProductImageField schema (Wed Nov 05 2025)
 */
export const ProductImageField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'productId',
  'imageId',
]);
export type ProductImageFieldType = z.infer<typeof ProductImageField>;

/**
 * PriceLevelField schema (Wed Nov 05 2025)
 */
export const PriceLevelField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'name',
  'slug',
  'description',
  'taxrate',
  'currencyId',
]);
export type PriceLevelFieldType = z.infer<typeof PriceLevelField>;

/**
 * PriceField schema (Wed Nov 05 2025)
 */
export const PriceField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'productId',
  'priceLevelId',
  'price',
]);
export type PriceFieldType = z.infer<typeof PriceField>;

/**
 * QuantityField schema (Wed Nov 05 2025)
 */
export const QuantityField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'storeId',
  'productId',
  'quantity',
  'minQuantity',
]);
export type QuantityFieldType = z.infer<typeof QuantityField>;

/**
 * SerialNumberField schema (Wed Nov 05 2025)
 */
export const SerialNumberField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'updatedBy',
  'readonly',
  'serialNumber',
  'inStock',
  'storeId',
  'productId',
]);
export type SerialNumberFieldType = z.infer<typeof SerialNumberField>;

/**
 * EmployeeOmit schema (Wed Nov 05 2025)
 */
export const EmployeeOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    employeeId: P.bool,
  })
  .partial();
export type EmployeeOmitType = z.infer<typeof EmployeeOmit>;

/**
 * StoreOmit schema (Wed Nov 05 2025)
 */
export const StoreOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    storeId: P.bool,
  })
  .partial();
export type StoreOmitType = z.infer<typeof StoreOmit>;

/**
 * CategoryOmit schema (Wed Nov 05 2025)
 */
export const CategoryOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
    parentId: P.bool,
  })
  .partial();
export type CategoryOmitType = z.infer<typeof CategoryOmit>;

/**
 * CurrencyOmit schema (Wed Nov 05 2025)
 */
export const CurrencyOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    name: P.bool,
    slug: P.bool,
    symbol: P.bool,
    description: P.bool,
  })
  .partial();
export type CurrencyOmitType = z.infer<typeof CurrencyOmit>;

/**
 * TagOmit schema (Wed Nov 05 2025)
 */
export const TagOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
  })
  .partial();
export type TagOmitType = z.infer<typeof TagOmit>;

/**
 * ProductTagOmit schema (Wed Nov 05 2025)
 */
export const ProductTagOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    productId: P.bool,
    tagId: P.bool,
  })
  .partial();
export type ProductTagOmitType = z.infer<typeof ProductTagOmit>;

/**
 * SupplierOmit schema (Wed Nov 05 2025)
 */
export const SupplierOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    supplierId: P.bool,
  })
  .partial();
export type SupplierOmitType = z.infer<typeof SupplierOmit>;

/**
 * ProductOmit schema (Wed Nov 05 2025)
 */
export const ProductOmit = z
  .object({
    id: P.bool,
    uuid: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    active: P.bool,
    name: P.bool,
    slug: P.bool,
    model: P.bool,
    description: P.bool,
    upc: P.bool,
    sku: P.bool,
    parentId: P.bool,
    categoryId: P.bool,
    supplierId: P.bool,
  })
  .partial();
export type ProductOmitType = z.infer<typeof ProductOmit>;

/**
 * ImageOmit schema (Wed Nov 05 2025)
 */
export const ImageOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    url: P.bool,
    title: P.bool,
    description: P.bool,
    order: P.bool,
  })
  .partial();
export type ImageOmitType = z.infer<typeof ImageOmit>;

/**
 * ProductImageOmit schema (Wed Nov 05 2025)
 */
export const ProductImageOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    productId: P.bool,
    imageId: P.bool,
  })
  .partial();
export type ProductImageOmitType = z.infer<typeof ProductImageOmit>;

/**
 * PriceLevelOmit schema (Wed Nov 05 2025)
 */
export const PriceLevelOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
    taxrate: P.bool,
    currencyId: P.bool,
  })
  .partial();
export type PriceLevelOmitType = z.infer<typeof PriceLevelOmit>;

/**
 * PriceOmit schema (Wed Nov 05 2025)
 */
export const PriceOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    productId: P.bool,
    priceLevelId: P.bool,
    price: P.bool,
  })
  .partial();
export type PriceOmitType = z.infer<typeof PriceOmit>;

/**
 * QuantityOmit schema (Wed Nov 05 2025)
 */
export const QuantityOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    storeId: P.bool,
    productId: P.bool,
    quantity: P.bool,
    minQuantity: P.bool,
  })
  .partial();
export type QuantityOmitType = z.infer<typeof QuantityOmit>;

/**
 * SerialNumberOmit schema (Wed Nov 05 2025)
 */
export const SerialNumberOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    serialNumber: P.bool,
    inStock: P.bool,
    storeId: P.bool,
    productId: P.bool,
  })
  .partial();
export type SerialNumberOmitType = z.infer<typeof SerialNumberOmit>;

/**
 * EmployeeSelectOwn schema (Wed Nov 05 2025)
 */
export const EmployeeSelectOwn = EmployeeOmit;
export type EmployeeSelectOwnType = z.infer<typeof EmployeeSelectOwn>;

/**
 * StoreSelectOwn schema (Wed Nov 05 2025)
 */
export const StoreSelectOwn = StoreOmit;
export type StoreSelectOwnType = z.infer<typeof StoreSelectOwn>;

/**
 * CategorySelectOwn schema (Wed Nov 05 2025)
 */
export const CategorySelectOwn = CategoryOmit;
export type CategorySelectOwnType = z.infer<typeof CategorySelectOwn>;

/**
 * CurrencySelectOwn schema (Wed Nov 05 2025)
 */
export const CurrencySelectOwn = CurrencyOmit;
export type CurrencySelectOwnType = z.infer<typeof CurrencySelectOwn>;

/**
 * TagSelectOwn schema (Wed Nov 05 2025)
 */
export const TagSelectOwn = TagOmit;
export type TagSelectOwnType = z.infer<typeof TagSelectOwn>;

/**
 * ProductTagSelectOwn schema (Wed Nov 05 2025)
 */
export const ProductTagSelectOwn = ProductTagOmit;
export type ProductTagSelectOwnType = z.infer<typeof ProductTagSelectOwn>;

/**
 * SupplierSelectOwn schema (Wed Nov 05 2025)
 */
export const SupplierSelectOwn = SupplierOmit;
export type SupplierSelectOwnType = z.infer<typeof SupplierSelectOwn>;

/**
 * ProductSelectOwn schema (Wed Nov 05 2025)
 */
export const ProductSelectOwn = ProductOmit;
export type ProductSelectOwnType = z.infer<typeof ProductSelectOwn>;

/**
 * ImageSelectOwn schema (Wed Nov 05 2025)
 */
export const ImageSelectOwn = ImageOmit;
export type ImageSelectOwnType = z.infer<typeof ImageSelectOwn>;

/**
 * ProductImageSelectOwn schema (Wed Nov 05 2025)
 */
export const ProductImageSelectOwn = ProductImageOmit;
export type ProductImageSelectOwnType = z.infer<typeof ProductImageSelectOwn>;

/**
 * PriceLevelSelectOwn schema (Wed Nov 05 2025)
 */
export const PriceLevelSelectOwn = PriceLevelOmit;
export type PriceLevelSelectOwnType = z.infer<typeof PriceLevelSelectOwn>;

/**
 * PriceSelectOwn schema (Wed Nov 05 2025)
 */
export const PriceSelectOwn = PriceOmit;
export type PriceSelectOwnType = z.infer<typeof PriceSelectOwn>;

/**
 * QuantitySelectOwn schema (Wed Nov 05 2025)
 */
export const QuantitySelectOwn = QuantityOmit;
export type QuantitySelectOwnType = z.infer<typeof QuantitySelectOwn>;

/**
 * SerialNumberSelectOwn schema (Wed Nov 05 2025)
 */
export const SerialNumberSelectOwn = SerialNumberOmit;
export type SerialNumberSelectOwnType = z.infer<typeof SerialNumberSelectOwn>;

/**
 * EmployeeInclude schema (Wed Nov 05 2025)
 */
export const EmployeeInclude = z
  .object({
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
    changedStores: z.object({ select: StoreSelectOwn }).or(P.bool),
    changedCategories: z.object({ select: CategorySelectOwn }).or(P.bool),
    changedTags: z.object({ select: TagSelectOwn }).or(P.bool),
    changedProductTags: z.object({ select: ProductTagSelectOwn }).or(P.bool),
    changedSuppliers: z.object({ select: SupplierSelectOwn }).or(P.bool),
    changedProducts: z.object({ select: ProductSelectOwn }).or(P.bool),
    changedPriceLevels: z.object({ select: PriceLevelSelectOwn }).or(P.bool),
    changedPrices: z.object({ select: PriceSelectOwn }).or(P.bool),
    changedQuantitys: z.object({ select: QuantitySelectOwn }).or(P.bool),
    changedSerialNumbers: z
      .object({ select: SerialNumberSelectOwn })
      .or(P.bool),
    chagnedImages: z.object({ select: ImageSelectOwn }).or(P.bool),
    chagnedProductImages: z
      .object({ select: ProductImageSelectOwn })
      .or(P.bool),
    changedCurrencies: z.object({ select: CurrencySelectOwn }).or(P.bool),
    changedEmployees: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type EmployeeIncludeType = z.infer<typeof EmployeeInclude>;

/**
 * StoreInclude schema (Wed Nov 05 2025)
 */
export const StoreInclude = z
  .object({
    quantities: z.object({ select: QuantitySelectOwn }).or(P.bool),
    serialNumbers: z.object({ select: SerialNumberSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type StoreIncludeType = z.infer<typeof StoreInclude>;

/**
 * CategoryInclude schema (Wed Nov 05 2025)
 */
export const CategoryInclude = z
  .object({
    parent: z.object({ select: CategorySelectOwn }).or(P.bool),
    children: z.object({ select: CategorySelectOwn }).or(P.bool),
    products: z.object({ select: ProductSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type CategoryIncludeType = z.infer<typeof CategoryInclude>;

/**
 * CurrencyInclude schema (Wed Nov 05 2025)
 */
export const CurrencyInclude = z
  .object({
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
    priceLevels: z.object({ select: PriceLevelSelectOwn }).or(P.bool),
  })
  .partial();
export type CurrencyIncludeType = z.infer<typeof CurrencyInclude>;

/**
 * TagInclude schema (Wed Nov 05 2025)
 */
export const TagInclude = z
  .object({
    productTags: z.object({ select: ProductTagSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type TagIncludeType = z.infer<typeof TagInclude>;

/**
 * ProductTagInclude schema (Wed Nov 05 2025)
 */
export const ProductTagInclude = z
  .object({
    product: z.object({ select: ProductSelectOwn }).or(P.bool),
    tag: z.object({ select: TagSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type ProductTagIncludeType = z.infer<typeof ProductTagInclude>;

/**
 * SupplierInclude schema (Wed Nov 05 2025)
 */
export const SupplierInclude = z
  .object({
    products: z.object({ select: ProductSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type SupplierIncludeType = z.infer<typeof SupplierInclude>;

/**
 * ProductInclude schema (Wed Nov 05 2025)
 */
export const ProductInclude = z
  .object({
    parent: z.object({ select: ProductSelectOwn }).or(P.bool),
    variants: z.object({ select: ProductSelectOwn }).or(P.bool),
    category: z.object({ select: CategorySelectOwn }).or(P.bool),
    supplier: z.object({ select: SupplierSelectOwn }).or(P.bool),
    productTags: z.object({ select: ProductTagSelectOwn }).or(P.bool),
    prices: z.object({ select: PriceSelectOwn }).or(P.bool),
    quantities: z.object({ select: QuantitySelectOwn }).or(P.bool),
    serialNumbers: z.object({ select: SerialNumberSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
    productImages: z.object({ select: ProductImageSelectOwn }).or(P.bool),
  })
  .partial();
export type ProductIncludeType = z.infer<typeof ProductInclude>;

/**
 * ImageInclude schema (Wed Nov 05 2025)
 */
export const ImageInclude = z
  .object({
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
    productImages: z.object({ select: ProductImageSelectOwn }).or(P.bool),
  })
  .partial();
export type ImageIncludeType = z.infer<typeof ImageInclude>;

/**
 * ProductImageInclude schema (Wed Nov 05 2025)
 */
export const ProductImageInclude = z
  .object({
    product: z.object({ select: ProductSelectOwn }).or(P.bool),
    image: z.object({ select: ImageSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type ProductImageIncludeType = z.infer<typeof ProductImageInclude>;

/**
 * PriceLevelInclude schema (Wed Nov 05 2025)
 */
export const PriceLevelInclude = z
  .object({
    prices: z.object({ select: PriceSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
    currency: z.object({ select: CurrencySelectOwn }).or(P.bool),
  })
  .partial();
export type PriceLevelIncludeType = z.infer<typeof PriceLevelInclude>;

/**
 * PriceInclude schema (Wed Nov 05 2025)
 */
export const PriceInclude = z
  .object({
    product: z.object({ select: ProductSelectOwn }).or(P.bool),
    priceLevel: z.object({ select: PriceLevelSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type PriceIncludeType = z.infer<typeof PriceInclude>;

/**
 * QuantityInclude schema (Wed Nov 05 2025)
 */
export const QuantityInclude = z
  .object({
    product: z.object({ select: ProductSelectOwn }).or(P.bool),
    store: z.object({ select: StoreSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type QuantityIncludeType = z.infer<typeof QuantityInclude>;

/**
 * SerialNumberInclude schema (Wed Nov 05 2025)
 */
export const SerialNumberInclude = z
  .object({
    product: z.object({ select: ProductSelectOwn }).or(P.bool),
    store: z.object({ select: StoreSelectOwn }).or(P.bool),
    employee: z.object({ select: EmployeeSelectOwn }).or(P.bool),
  })
  .partial();
export type SerialNumberIncludeType = z.infer<typeof SerialNumberInclude>;

/**
 * EmployeeOrderByOwn schema (Wed Nov 05 2025)
 */
export const EmployeeOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    employeeId: P.dir,
  })
  .partial();
export type EmployeeOrderByOwnType = z.infer<typeof EmployeeOrderByOwn>;

/**
 * StoreOrderByOwn schema (Wed Nov 05 2025)
 */
export const StoreOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    storeId: P.dir,
  })
  .partial();
export type StoreOrderByOwnType = z.infer<typeof StoreOrderByOwn>;

/**
 * CategoryOrderByOwn schema (Wed Nov 05 2025)
 */
export const CategoryOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    name: P.dir,
    slug: P.dir,
    description: P.dir,
    parentId: P.dir,
  })
  .partial();
export type CategoryOrderByOwnType = z.infer<typeof CategoryOrderByOwn>;

/**
 * CurrencyOrderByOwn schema (Wed Nov 05 2025)
 */
export const CurrencyOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    name: P.dir,
    slug: P.dir,
    symbol: P.dir,
    description: P.dir,
  })
  .partial();
export type CurrencyOrderByOwnType = z.infer<typeof CurrencyOrderByOwn>;

/**
 * TagOrderByOwn schema (Wed Nov 05 2025)
 */
export const TagOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    name: P.dir,
    slug: P.dir,
    description: P.dir,
  })
  .partial();
export type TagOrderByOwnType = z.infer<typeof TagOrderByOwn>;

/**
 * ProductTagOrderByOwn schema (Wed Nov 05 2025)
 */
export const ProductTagOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    productId: P.dir,
    tagId: P.dir,
  })
  .partial();
export type ProductTagOrderByOwnType = z.infer<typeof ProductTagOrderByOwn>;

/**
 * SupplierOrderByOwn schema (Wed Nov 05 2025)
 */
export const SupplierOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    supplierId: P.dir,
  })
  .partial();
export type SupplierOrderByOwnType = z.infer<typeof SupplierOrderByOwn>;

/**
 * ProductOrderByOwn schema (Wed Nov 05 2025)
 */
export const ProductOrderByOwn = z
  .object({
    id: P.dir,
    uuid: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    active: P.dir,
    name: P.dir,
    slug: P.dir,
    model: P.dir,
    description: P.dir,
    upc: P.dir,
    sku: P.dir,
    parentId: P.dir,
    categoryId: P.dir,
    supplierId: P.dir,
  })
  .partial();
export type ProductOrderByOwnType = z.infer<typeof ProductOrderByOwn>;

/**
 * ImageOrderByOwn schema (Wed Nov 05 2025)
 */
export const ImageOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    url: P.dir,
    title: P.dir,
    description: P.dir,
    order: P.dir,
  })
  .partial();
export type ImageOrderByOwnType = z.infer<typeof ImageOrderByOwn>;

/**
 * ProductImageOrderByOwn schema (Wed Nov 05 2025)
 */
export const ProductImageOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    productId: P.dir,
    imageId: P.dir,
  })
  .partial();
export type ProductImageOrderByOwnType = z.infer<typeof ProductImageOrderByOwn>;

/**
 * PriceLevelOrderByOwn schema (Wed Nov 05 2025)
 */
export const PriceLevelOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    name: P.dir,
    slug: P.dir,
    description: P.dir,
    taxrate: P.dir,
    currencyId: P.dir,
  })
  .partial();
export type PriceLevelOrderByOwnType = z.infer<typeof PriceLevelOrderByOwn>;

/**
 * PriceOrderByOwn schema (Wed Nov 05 2025)
 */
export const PriceOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    productId: P.dir,
    priceLevelId: P.dir,
    price: P.dir,
  })
  .partial();
export type PriceOrderByOwnType = z.infer<typeof PriceOrderByOwn>;

/**
 * QuantityOrderByOwn schema (Wed Nov 05 2025)
 */
export const QuantityOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    storeId: P.dir,
    productId: P.dir,
    quantity: P.dir,
    minQuantity: P.dir,
  })
  .partial();
export type QuantityOrderByOwnType = z.infer<typeof QuantityOrderByOwn>;

/**
 * SerialNumberOrderByOwn schema (Wed Nov 05 2025)
 */
export const SerialNumberOrderByOwn = z
  .object({
    id: P.dir,
    createdAt: P.dir,
    updatedAt: P.dir,
    deletedAt: P.dir,
    updatedBy: P.dir,
    readonly: P.dir,
    serialNumber: P.dir,
    inStock: P.dir,
    storeId: P.dir,
    productId: P.dir,
  })
  .partial();
export type SerialNumberOrderByOwnType = z.infer<typeof SerialNumberOrderByOwn>;

/**
 * EmployeeOrderBy schema (Wed Nov 05 2025)
 */
export const EmployeeOrderBy = z
  .object({
    ...EmployeeOrderByOwn.shape,
    employee: EmployeeOrderByOwn,
    changedStores: P.orderByCount,
    changedCategories: P.orderByCount,
    changedTags: P.orderByCount,
    changedProductTags: P.orderByCount,
    changedSuppliers: P.orderByCount,
    changedProducts: P.orderByCount,
    changedPriceLevels: P.orderByCount,
    changedPrices: P.orderByCount,
    changedQuantitys: P.orderByCount,
    changedSerialNumbers: P.orderByCount,
    chagnedImages: P.orderByCount,
    chagnedProductImages: P.orderByCount,
    changedCurrencies: P.orderByCount,
    changedEmployees: P.orderByCount,
  })
  .partial();
export type EmployeeOrderByType = z.infer<typeof EmployeeOrderBy>;

/**
 * StoreOrderBy schema (Wed Nov 05 2025)
 */
export const StoreOrderBy = z
  .object({
    ...StoreOrderByOwn.shape,
    quantities: P.orderByCount,
    serialNumbers: P.orderByCount,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type StoreOrderByType = z.infer<typeof StoreOrderBy>;

/**
 * CategoryOrderBy schema (Wed Nov 05 2025)
 */
export const CategoryOrderBy = z
  .object({
    ...CategoryOrderByOwn.shape,
    parent: CategoryOrderByOwn,
    children: P.orderByCount,
    products: P.orderByCount,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type CategoryOrderByType = z.infer<typeof CategoryOrderBy>;

/**
 * CurrencyOrderBy schema (Wed Nov 05 2025)
 */
export const CurrencyOrderBy = z
  .object({
    ...CurrencyOrderByOwn.shape,
    employee: EmployeeOrderByOwn,
    priceLevels: P.orderByCount,
  })
  .partial();
export type CurrencyOrderByType = z.infer<typeof CurrencyOrderBy>;

/**
 * TagOrderBy schema (Wed Nov 05 2025)
 */
export const TagOrderBy = z
  .object({
    ...TagOrderByOwn.shape,
    productTags: P.orderByCount,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type TagOrderByType = z.infer<typeof TagOrderBy>;

/**
 * ProductTagOrderBy schema (Wed Nov 05 2025)
 */
export const ProductTagOrderBy = z
  .object({
    ...ProductTagOrderByOwn.shape,
    product: ProductOrderByOwn,
    tag: TagOrderByOwn,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type ProductTagOrderByType = z.infer<typeof ProductTagOrderBy>;

/**
 * SupplierOrderBy schema (Wed Nov 05 2025)
 */
export const SupplierOrderBy = z
  .object({
    ...SupplierOrderByOwn.shape,
    products: P.orderByCount,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type SupplierOrderByType = z.infer<typeof SupplierOrderBy>;

/**
 * ProductOrderBy schema (Wed Nov 05 2025)
 */
export const ProductOrderBy = z
  .object({
    ...ProductOrderByOwn.shape,
    parent: ProductOrderByOwn,
    variants: P.orderByCount,
    category: CategoryOrderByOwn,
    supplier: SupplierOrderByOwn,
    productTags: P.orderByCount,
    prices: P.orderByCount,
    quantities: P.orderByCount,
    serialNumbers: P.orderByCount,
    employee: EmployeeOrderByOwn,
    productImages: P.orderByCount,
  })
  .partial();
export type ProductOrderByType = z.infer<typeof ProductOrderBy>;

/**
 * ImageOrderBy schema (Wed Nov 05 2025)
 */
export const ImageOrderBy = z
  .object({
    ...ImageOrderByOwn.shape,
    employee: EmployeeOrderByOwn,
    productImages: P.orderByCount,
  })
  .partial();
export type ImageOrderByType = z.infer<typeof ImageOrderBy>;

/**
 * ProductImageOrderBy schema (Wed Nov 05 2025)
 */
export const ProductImageOrderBy = z
  .object({
    ...ProductImageOrderByOwn.shape,
    product: ProductOrderByOwn,
    image: ImageOrderByOwn,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type ProductImageOrderByType = z.infer<typeof ProductImageOrderBy>;

/**
 * PriceLevelOrderBy schema (Wed Nov 05 2025)
 */
export const PriceLevelOrderBy = z
  .object({
    ...PriceLevelOrderByOwn.shape,
    prices: P.orderByCount,
    employee: EmployeeOrderByOwn,
    currency: CurrencyOrderByOwn,
  })
  .partial();
export type PriceLevelOrderByType = z.infer<typeof PriceLevelOrderBy>;

/**
 * PriceOrderBy schema (Wed Nov 05 2025)
 */
export const PriceOrderBy = z
  .object({
    ...PriceOrderByOwn.shape,
    product: ProductOrderByOwn,
    priceLevel: PriceLevelOrderByOwn,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type PriceOrderByType = z.infer<typeof PriceOrderBy>;

/**
 * QuantityOrderBy schema (Wed Nov 05 2025)
 */
export const QuantityOrderBy = z
  .object({
    ...QuantityOrderByOwn.shape,
    product: ProductOrderByOwn,
    store: StoreOrderByOwn,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type QuantityOrderByType = z.infer<typeof QuantityOrderBy>;

/**
 * SerialNumberOrderBy schema (Wed Nov 05 2025)
 */
export const SerialNumberOrderBy = z
  .object({
    ...SerialNumberOrderByOwn.shape,
    product: ProductOrderByOwn,
    store: StoreOrderByOwn,
    employee: EmployeeOrderByOwn,
  })
  .partial();
export type SerialNumberOrderByType = z.infer<typeof SerialNumberOrderBy>;

/**
 * EmployeeWhereOwn schema (Wed Nov 05 2025)
 */
export const EmployeeWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    employeeId: P.strFilter,
  })
  .partial();
export type EmployeeWhereOwnType = z.infer<typeof EmployeeWhereOwn>;

/**
 * StoreWhereOwn schema (Wed Nov 05 2025)
 */
export const StoreWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    storeId: P.strFilter,
  })
  .partial();
export type StoreWhereOwnType = z.infer<typeof StoreWhereOwn>;

/**
 * CategoryWhereOwn schema (Wed Nov 05 2025)
 */
export const CategoryWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    name: P.strFilter,
    slug: P.strFilter,
    description: P.strFilter,
    parentId: P.intFilter,
  })
  .partial();
export type CategoryWhereOwnType = z.infer<typeof CategoryWhereOwn>;

/**
 * CurrencyWhereOwn schema (Wed Nov 05 2025)
 */
export const CurrencyWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    name: P.strFilter,
    slug: P.strFilter,
    symbol: P.strFilter,
    description: P.strFilter,
  })
  .partial();
export type CurrencyWhereOwnType = z.infer<typeof CurrencyWhereOwn>;

/**
 * TagWhereOwn schema (Wed Nov 05 2025)
 */
export const TagWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    name: P.strFilter,
    slug: P.strFilter,
    description: P.strFilter,
  })
  .partial();
export type TagWhereOwnType = z.infer<typeof TagWhereOwn>;

/**
 * ProductTagWhereOwn schema (Wed Nov 05 2025)
 */
export const ProductTagWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    productId: P.intFilter,
    tagId: P.intFilter,
  })
  .partial();
export type ProductTagWhereOwnType = z.infer<typeof ProductTagWhereOwn>;

/**
 * SupplierWhereOwn schema (Wed Nov 05 2025)
 */
export const SupplierWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    supplierId: P.strFilter,
  })
  .partial();
export type SupplierWhereOwnType = z.infer<typeof SupplierWhereOwn>;

/**
 * ProductWhereOwn schema (Wed Nov 05 2025)
 */
export const ProductWhereOwn = z
  .object({
    id: P.intFilter,
    uuid: P.strFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    active: P.boolFilter,
    name: P.strFilter,
    slug: P.strFilter,
    model: P.strFilter,
    description: P.strFilter,
    upc: P.strFilter,
    sku: P.strFilter,
    parentId: P.intFilter,
    categoryId: P.intFilter,
    supplierId: P.intFilter,
  })
  .partial();
export type ProductWhereOwnType = z.infer<typeof ProductWhereOwn>;

/**
 * ImageWhereOwn schema (Wed Nov 05 2025)
 */
export const ImageWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    url: P.strFilter,
    title: P.strFilter,
    description: P.strFilter,
    order: P.intFilter,
  })
  .partial();
export type ImageWhereOwnType = z.infer<typeof ImageWhereOwn>;

/**
 * ProductImageWhereOwn schema (Wed Nov 05 2025)
 */
export const ProductImageWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    productId: P.intFilter,
    imageId: P.intFilter,
  })
  .partial();
export type ProductImageWhereOwnType = z.infer<typeof ProductImageWhereOwn>;

/**
 * PriceLevelWhereOwn schema (Wed Nov 05 2025)
 */
export const PriceLevelWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    name: P.strFilter,
    slug: P.strFilter,
    description: P.strFilter,
    taxrate: P.numFilter,
    currencyId: P.intFilter,
  })
  .partial();
export type PriceLevelWhereOwnType = z.infer<typeof PriceLevelWhereOwn>;

/**
 * PriceWhereOwn schema (Wed Nov 05 2025)
 */
export const PriceWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    productId: P.intFilter,
    priceLevelId: P.intFilter,
    price: P.numFilter,
  })
  .partial();
export type PriceWhereOwnType = z.infer<typeof PriceWhereOwn>;

/**
 * QuantityWhereOwn schema (Wed Nov 05 2025)
 */
export const QuantityWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    storeId: P.intFilter,
    productId: P.intFilter,
    quantity: P.intFilter,
    minQuantity: P.intFilter,
  })
  .partial();
export type QuantityWhereOwnType = z.infer<typeof QuantityWhereOwn>;

/**
 * SerialNumberWhereOwn schema (Wed Nov 05 2025)
 */
export const SerialNumberWhereOwn = z
  .object({
    id: P.intFilter,
    createdAt: P.datetimeFilter,
    updatedAt: P.datetimeFilter,
    deletedAt: P.datetimeFilter,
    updatedBy: P.intFilter,
    readonly: P.boolFilter,
    serialNumber: P.strFilter,
    inStock: P.boolFilter,
    storeId: P.intFilter,
    productId: P.intFilter,
  })
  .partial();
export type SerialNumberWhereOwnType = z.infer<typeof SerialNumberWhereOwn>;

/**
 * EmployeeWhere schema (Wed Nov 05 2025)
 */
export const EmployeeWhere = z
  .object({
    ...EmployeeWhereOwn.shape,
    employee: EmployeeWhereOwn.partial(),
    changedStores: z
      .object({
        some: StoreWhereOwn,
        every: StoreWhereOwn,
        none: StoreWhereOwn,
      })
      .partial(),
    changedCategories: z
      .object({
        some: CategoryWhereOwn,
        every: CategoryWhereOwn,
        none: CategoryWhereOwn,
      })
      .partial(),
    changedTags: z
      .object({
        some: TagWhereOwn,
        every: TagWhereOwn,
        none: TagWhereOwn,
      })
      .partial(),
    changedProductTags: z
      .object({
        some: ProductTagWhereOwn,
        every: ProductTagWhereOwn,
        none: ProductTagWhereOwn,
      })
      .partial(),
    changedSuppliers: z
      .object({
        some: SupplierWhereOwn,
        every: SupplierWhereOwn,
        none: SupplierWhereOwn,
      })
      .partial(),
    changedProducts: z
      .object({
        some: ProductWhereOwn,
        every: ProductWhereOwn,
        none: ProductWhereOwn,
      })
      .partial(),
    changedPriceLevels: z
      .object({
        some: PriceLevelWhereOwn,
        every: PriceLevelWhereOwn,
        none: PriceLevelWhereOwn,
      })
      .partial(),
    changedPrices: z
      .object({
        some: PriceWhereOwn,
        every: PriceWhereOwn,
        none: PriceWhereOwn,
      })
      .partial(),
    changedQuantitys: z
      .object({
        some: QuantityWhereOwn,
        every: QuantityWhereOwn,
        none: QuantityWhereOwn,
      })
      .partial(),
    changedSerialNumbers: z
      .object({
        some: SerialNumberWhereOwn,
        every: SerialNumberWhereOwn,
        none: SerialNumberWhereOwn,
      })
      .partial(),
    chagnedImages: z
      .object({
        some: ImageWhereOwn,
        every: ImageWhereOwn,
        none: ImageWhereOwn,
      })
      .partial(),
    chagnedProductImages: z
      .object({
        some: ProductImageWhereOwn,
        every: ProductImageWhereOwn,
        none: ProductImageWhereOwn,
      })
      .partial(),
    changedCurrencies: z
      .object({
        some: CurrencyWhereOwn,
        every: CurrencyWhereOwn,
        none: CurrencyWhereOwn,
      })
      .partial(),
    changedEmployees: z
      .object({
        some: EmployeeWhereOwn,
        every: EmployeeWhereOwn,
        none: EmployeeWhereOwn,
      })
      .partial(),
    AND: EmployeeWhereOwn,
    OR: EmployeeWhereOwn.array(),
    NOT: EmployeeWhereOwn.or(EmployeeWhereOwn.array()),
  })
  .partial();
export type EmployeeWhereType = z.infer<typeof EmployeeWhere>;

/**
 * StoreWhere schema (Wed Nov 05 2025)
 */
export const StoreWhere = z
  .object({
    ...StoreWhereOwn.shape,
    quantities: z
      .object({
        some: QuantityWhereOwn,
        every: QuantityWhereOwn,
        none: QuantityWhereOwn,
      })
      .partial(),
    serialNumbers: z
      .object({
        some: SerialNumberWhereOwn,
        every: SerialNumberWhereOwn,
        none: SerialNumberWhereOwn,
      })
      .partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: StoreWhereOwn,
    OR: StoreWhereOwn.array(),
    NOT: StoreWhereOwn.or(StoreWhereOwn.array()),
  })
  .partial();
export type StoreWhereType = z.infer<typeof StoreWhere>;

/**
 * CategoryWhere schema (Wed Nov 05 2025)
 */
export const CategoryWhere = z
  .object({
    ...CategoryWhereOwn.shape,
    parent: CategoryWhereOwn.partial(),
    children: z
      .object({
        some: CategoryWhereOwn,
        every: CategoryWhereOwn,
        none: CategoryWhereOwn,
      })
      .partial(),
    products: z
      .object({
        some: ProductWhereOwn,
        every: ProductWhereOwn,
        none: ProductWhereOwn,
      })
      .partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: CategoryWhereOwn,
    OR: CategoryWhereOwn.array(),
    NOT: CategoryWhereOwn.or(CategoryWhereOwn.array()),
  })
  .partial();
export type CategoryWhereType = z.infer<typeof CategoryWhere>;

/**
 * CurrencyWhere schema (Wed Nov 05 2025)
 */
export const CurrencyWhere = z
  .object({
    ...CurrencyWhereOwn.shape,
    employee: EmployeeWhereOwn.partial(),
    priceLevels: z
      .object({
        some: PriceLevelWhereOwn,
        every: PriceLevelWhereOwn,
        none: PriceLevelWhereOwn,
      })
      .partial(),
    AND: CurrencyWhereOwn,
    OR: CurrencyWhereOwn.array(),
    NOT: CurrencyWhereOwn.or(CurrencyWhereOwn.array()),
  })
  .partial();
export type CurrencyWhereType = z.infer<typeof CurrencyWhere>;

/**
 * TagWhere schema (Wed Nov 05 2025)
 */
export const TagWhere = z
  .object({
    ...TagWhereOwn.shape,
    productTags: z
      .object({
        some: ProductTagWhereOwn,
        every: ProductTagWhereOwn,
        none: ProductTagWhereOwn,
      })
      .partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: TagWhereOwn,
    OR: TagWhereOwn.array(),
    NOT: TagWhereOwn.or(TagWhereOwn.array()),
  })
  .partial();
export type TagWhereType = z.infer<typeof TagWhere>;

/**
 * ProductTagWhere schema (Wed Nov 05 2025)
 */
export const ProductTagWhere = z
  .object({
    ...ProductTagWhereOwn.shape,
    product: ProductWhereOwn.partial(),
    tag: TagWhereOwn.partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: ProductTagWhereOwn,
    OR: ProductTagWhereOwn.array(),
    NOT: ProductTagWhereOwn.or(ProductTagWhereOwn.array()),
  })
  .partial();
export type ProductTagWhereType = z.infer<typeof ProductTagWhere>;

/**
 * SupplierWhere schema (Wed Nov 05 2025)
 */
export const SupplierWhere = z
  .object({
    ...SupplierWhereOwn.shape,
    products: z
      .object({
        some: ProductWhereOwn,
        every: ProductWhereOwn,
        none: ProductWhereOwn,
      })
      .partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: SupplierWhereOwn,
    OR: SupplierWhereOwn.array(),
    NOT: SupplierWhereOwn.or(SupplierWhereOwn.array()),
  })
  .partial();
export type SupplierWhereType = z.infer<typeof SupplierWhere>;

/**
 * ProductWhere schema (Wed Nov 05 2025)
 */
export const ProductWhere = z
  .object({
    ...ProductWhereOwn.shape,
    parent: ProductWhereOwn.partial(),
    variants: z
      .object({
        some: ProductWhereOwn,
        every: ProductWhereOwn,
        none: ProductWhereOwn,
      })
      .partial(),
    category: CategoryWhereOwn.partial(),
    supplier: SupplierWhereOwn.partial(),
    productTags: z
      .object({
        some: ProductTagWhereOwn,
        every: ProductTagWhereOwn,
        none: ProductTagWhereOwn,
      })
      .partial(),
    prices: z
      .object({
        some: PriceWhereOwn,
        every: PriceWhereOwn,
        none: PriceWhereOwn,
      })
      .partial(),
    quantities: z
      .object({
        some: QuantityWhereOwn,
        every: QuantityWhereOwn,
        none: QuantityWhereOwn,
      })
      .partial(),
    serialNumbers: z
      .object({
        some: SerialNumberWhereOwn,
        every: SerialNumberWhereOwn,
        none: SerialNumberWhereOwn,
      })
      .partial(),
    employee: EmployeeWhereOwn.partial(),
    productImages: z
      .object({
        some: ProductImageWhereOwn,
        every: ProductImageWhereOwn,
        none: ProductImageWhereOwn,
      })
      .partial(),
    AND: ProductWhereOwn,
    OR: ProductWhereOwn.array(),
    NOT: ProductWhereOwn.or(ProductWhereOwn.array()),
  })
  .partial();
export type ProductWhereType = z.infer<typeof ProductWhere>;

/**
 * ImageWhere schema (Wed Nov 05 2025)
 */
export const ImageWhere = z
  .object({
    ...ImageWhereOwn.shape,
    employee: EmployeeWhereOwn.partial(),
    productImages: z
      .object({
        some: ProductImageWhereOwn,
        every: ProductImageWhereOwn,
        none: ProductImageWhereOwn,
      })
      .partial(),
    AND: ImageWhereOwn,
    OR: ImageWhereOwn.array(),
    NOT: ImageWhereOwn.or(ImageWhereOwn.array()),
  })
  .partial();
export type ImageWhereType = z.infer<typeof ImageWhere>;

/**
 * ProductImageWhere schema (Wed Nov 05 2025)
 */
export const ProductImageWhere = z
  .object({
    ...ProductImageWhereOwn.shape,
    product: ProductWhereOwn.partial(),
    image: ImageWhereOwn.partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: ProductImageWhereOwn,
    OR: ProductImageWhereOwn.array(),
    NOT: ProductImageWhereOwn.or(ProductImageWhereOwn.array()),
  })
  .partial();
export type ProductImageWhereType = z.infer<typeof ProductImageWhere>;

/**
 * PriceLevelWhere schema (Wed Nov 05 2025)
 */
export const PriceLevelWhere = z
  .object({
    ...PriceLevelWhereOwn.shape,
    prices: z
      .object({
        some: PriceWhereOwn,
        every: PriceWhereOwn,
        none: PriceWhereOwn,
      })
      .partial(),
    employee: EmployeeWhereOwn.partial(),
    currency: CurrencyWhereOwn.partial(),
    AND: PriceLevelWhereOwn,
    OR: PriceLevelWhereOwn.array(),
    NOT: PriceLevelWhereOwn.or(PriceLevelWhereOwn.array()),
  })
  .partial();
export type PriceLevelWhereType = z.infer<typeof PriceLevelWhere>;

/**
 * PriceWhere schema (Wed Nov 05 2025)
 */
export const PriceWhere = z
  .object({
    ...PriceWhereOwn.shape,
    product: ProductWhereOwn.partial(),
    priceLevel: PriceLevelWhereOwn.partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: PriceWhereOwn,
    OR: PriceWhereOwn.array(),
    NOT: PriceWhereOwn.or(PriceWhereOwn.array()),
  })
  .partial();
export type PriceWhereType = z.infer<typeof PriceWhere>;

/**
 * QuantityWhere schema (Wed Nov 05 2025)
 */
export const QuantityWhere = z
  .object({
    ...QuantityWhereOwn.shape,
    product: ProductWhereOwn.partial(),
    store: StoreWhereOwn.partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: QuantityWhereOwn,
    OR: QuantityWhereOwn.array(),
    NOT: QuantityWhereOwn.or(QuantityWhereOwn.array()),
  })
  .partial();
export type QuantityWhereType = z.infer<typeof QuantityWhere>;

/**
 * SerialNumberWhere schema (Wed Nov 05 2025)
 */
export const SerialNumberWhere = z
  .object({
    ...SerialNumberWhereOwn.shape,
    product: ProductWhereOwn.partial(),
    store: StoreWhereOwn.partial(),
    employee: EmployeeWhereOwn.partial(),
    AND: SerialNumberWhereOwn,
    OR: SerialNumberWhereOwn.array(),
    NOT: SerialNumberWhereOwn.or(SerialNumberWhereOwn.array()),
  })
  .partial();
export type SerialNumberWhereType = z.infer<typeof SerialNumberWhere>;

/**
 * EmployeeQueryOwn schema (Wed Nov 05 2025)
 */
export const EmployeeQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: EmployeeField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, EmployeeOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, EmployeeWhere),
  })
  .partial();
export type EmployeeQueryOwnType = z.infer<typeof EmployeeQueryOwn>;

/**
 * StoreQueryOwn schema (Wed Nov 05 2025)
 */
export const StoreQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: StoreField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, StoreOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, StoreWhere),
  })
  .partial();
export type StoreQueryOwnType = z.infer<typeof StoreQueryOwn>;

/**
 * CategoryQueryOwn schema (Wed Nov 05 2025)
 */
export const CategoryQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CategoryField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, CategoryOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, CategoryWhere),
  })
  .partial();
export type CategoryQueryOwnType = z.infer<typeof CategoryQueryOwn>;

/**
 * CurrencyQueryOwn schema (Wed Nov 05 2025)
 */
export const CurrencyQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CurrencyField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, CurrencyOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, CurrencyWhere),
  })
  .partial();
export type CurrencyQueryOwnType = z.infer<typeof CurrencyQueryOwn>;

/**
 * TagQueryOwn schema (Wed Nov 05 2025)
 */
export const TagQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: TagField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, TagOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, TagWhere),
  })
  .partial();
export type TagQueryOwnType = z.infer<typeof TagQueryOwn>;

/**
 * ProductTagQueryOwn schema (Wed Nov 05 2025)
 */
export const ProductTagQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: ProductTagField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, ProductTagOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, ProductTagWhere),
  })
  .partial();
export type ProductTagQueryOwnType = z.infer<typeof ProductTagQueryOwn>;

/**
 * SupplierQueryOwn schema (Wed Nov 05 2025)
 */
export const SupplierQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: SupplierField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, SupplierOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, SupplierWhere),
  })
  .partial();
export type SupplierQueryOwnType = z.infer<typeof SupplierQueryOwn>;

/**
 * ProductQueryOwn schema (Wed Nov 05 2025)
 */
export const ProductQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: ProductField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, ProductOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, ProductWhere),
  })
  .partial();
export type ProductQueryOwnType = z.infer<typeof ProductQueryOwn>;

/**
 * ImageQueryOwn schema (Wed Nov 05 2025)
 */
export const ImageQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: ImageField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, ImageOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, ImageWhere),
  })
  .partial();
export type ImageQueryOwnType = z.infer<typeof ImageQueryOwn>;

/**
 * ProductImageQueryOwn schema (Wed Nov 05 2025)
 */
export const ProductImageQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: ProductImageField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, ProductImageOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, ProductImageWhere),
  })
  .partial();
export type ProductImageQueryOwnType = z.infer<typeof ProductImageQueryOwn>;

/**
 * PriceLevelQueryOwn schema (Wed Nov 05 2025)
 */
export const PriceLevelQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: PriceLevelField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, PriceLevelOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, PriceLevelWhere),
  })
  .partial();
export type PriceLevelQueryOwnType = z.infer<typeof PriceLevelQueryOwn>;

/**
 * PriceQueryOwn schema (Wed Nov 05 2025)
 */
export const PriceQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: PriceField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, PriceOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, PriceWhere),
  })
  .partial();
export type PriceQueryOwnType = z.infer<typeof PriceQueryOwn>;

/**
 * QuantityQueryOwn schema (Wed Nov 05 2025)
 */
export const QuantityQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: QuantityField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, QuantityOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, QuantityWhere),
  })
  .partial();
export type QuantityQueryOwnType = z.infer<typeof QuantityQueryOwn>;

/**
 * SerialNumberQueryOwn schema (Wed Nov 05 2025)
 */
export const SerialNumberQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: SerialNumberField.array(),
    orderBy: z.preprocess(P.parseJsonOrReturn, SerialNumberOrderBy),
    where: z.preprocess(P.parseJsonOrReturn, SerialNumberWhere),
  })
  .partial();
export type SerialNumberQueryOwnType = z.infer<typeof SerialNumberQueryOwn>;

/**
 * EmployeeQueryOne schema (Wed Nov 05 2025)
 */
export const EmployeeQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, EmployeeSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, EmployeeOmit),
    include: z.preprocess(P.parseJsonOrReturn, EmployeeInclude),
    where: z.preprocess(P.parseJsonOrReturn, EmployeeWhere),
  })
  .partial();
export type EmployeeQueryOneType = z.infer<typeof EmployeeQueryOne>;

/**
 * StoreQueryOne schema (Wed Nov 05 2025)
 */
export const StoreQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, StoreSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, StoreOmit),
    include: z.preprocess(P.parseJsonOrReturn, StoreInclude),
    where: z.preprocess(P.parseJsonOrReturn, StoreWhere),
  })
  .partial();
export type StoreQueryOneType = z.infer<typeof StoreQueryOne>;

/**
 * CategoryQueryOne schema (Wed Nov 05 2025)
 */
export const CategoryQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, CategorySelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, CategoryOmit),
    include: z.preprocess(P.parseJsonOrReturn, CategoryInclude),
    where: z.preprocess(P.parseJsonOrReturn, CategoryWhere),
  })
  .partial();
export type CategoryQueryOneType = z.infer<typeof CategoryQueryOne>;

/**
 * CurrencyQueryOne schema (Wed Nov 05 2025)
 */
export const CurrencyQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, CurrencySelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, CurrencyOmit),
    include: z.preprocess(P.parseJsonOrReturn, CurrencyInclude),
    where: z.preprocess(P.parseJsonOrReturn, CurrencyWhere),
  })
  .partial();
export type CurrencyQueryOneType = z.infer<typeof CurrencyQueryOne>;

/**
 * TagQueryOne schema (Wed Nov 05 2025)
 */
export const TagQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, TagSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, TagOmit),
    include: z.preprocess(P.parseJsonOrReturn, TagInclude),
    where: z.preprocess(P.parseJsonOrReturn, TagWhere),
  })
  .partial();
export type TagQueryOneType = z.infer<typeof TagQueryOne>;

/**
 * ProductTagQueryOne schema (Wed Nov 05 2025)
 */
export const ProductTagQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ProductTagOmit),
    include: z.preprocess(P.parseJsonOrReturn, ProductTagInclude),
    where: z.preprocess(P.parseJsonOrReturn, ProductTagWhere),
  })
  .partial();
export type ProductTagQueryOneType = z.infer<typeof ProductTagQueryOne>;

/**
 * SupplierQueryOne schema (Wed Nov 05 2025)
 */
export const SupplierQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, SupplierSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, SupplierOmit),
    include: z.preprocess(P.parseJsonOrReturn, SupplierInclude),
    where: z.preprocess(P.parseJsonOrReturn, SupplierWhere),
  })
  .partial();
export type SupplierQueryOneType = z.infer<typeof SupplierQueryOne>;

/**
 * ProductQueryOne schema (Wed Nov 05 2025)
 */
export const ProductQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ProductSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ProductOmit),
    include: z.preprocess(P.parseJsonOrReturn, ProductInclude),
    where: z.preprocess(P.parseJsonOrReturn, ProductWhere),
  })
  .partial();
export type ProductQueryOneType = z.infer<typeof ProductQueryOne>;

/**
 * ImageQueryOne schema (Wed Nov 05 2025)
 */
export const ImageQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ImageSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ImageOmit),
    include: z.preprocess(P.parseJsonOrReturn, ImageInclude),
    where: z.preprocess(P.parseJsonOrReturn, ImageWhere),
  })
  .partial();
export type ImageQueryOneType = z.infer<typeof ImageQueryOne>;

/**
 * ProductImageQueryOne schema (Wed Nov 05 2025)
 */
export const ProductImageQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ProductImageSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ProductImageOmit),
    include: z.preprocess(P.parseJsonOrReturn, ProductImageInclude),
    where: z.preprocess(P.parseJsonOrReturn, ProductImageWhere),
  })
  .partial();
export type ProductImageQueryOneType = z.infer<typeof ProductImageQueryOne>;

/**
 * PriceLevelQueryOne schema (Wed Nov 05 2025)
 */
export const PriceLevelQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, PriceLevelSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, PriceLevelOmit),
    include: z.preprocess(P.parseJsonOrReturn, PriceLevelInclude),
    where: z.preprocess(P.parseJsonOrReturn, PriceLevelWhere),
  })
  .partial();
export type PriceLevelQueryOneType = z.infer<typeof PriceLevelQueryOne>;

/**
 * PriceQueryOne schema (Wed Nov 05 2025)
 */
export const PriceQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, PriceSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, PriceOmit),
    include: z.preprocess(P.parseJsonOrReturn, PriceInclude),
    where: z.preprocess(P.parseJsonOrReturn, PriceWhere),
  })
  .partial();
export type PriceQueryOneType = z.infer<typeof PriceQueryOne>;

/**
 * QuantityQueryOne schema (Wed Nov 05 2025)
 */
export const QuantityQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, QuantityOmit),
    include: z.preprocess(P.parseJsonOrReturn, QuantityInclude),
    where: z.preprocess(P.parseJsonOrReturn, QuantityWhere),
  })
  .partial();
export type QuantityQueryOneType = z.infer<typeof QuantityQueryOne>;

/**
 * SerialNumberQueryOne schema (Wed Nov 05 2025)
 */
export const SerialNumberQueryOne = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, SerialNumberOmit),
    include: z.preprocess(P.parseJsonOrReturn, SerialNumberInclude),
    where: z.preprocess(P.parseJsonOrReturn, SerialNumberWhere),
  })
  .partial();
export type SerialNumberQueryOneType = z.infer<typeof SerialNumberQueryOne>;

/**
 * EmployeeQuery schema (Wed Nov 05 2025)
 */
export const EmployeeQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, EmployeeSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, EmployeeOmit),
    include: z.preprocess(P.parseJsonOrReturn, EmployeeInclude),
    ...EmployeeQueryOwn.shape,
  })
  .partial();
export type EmployeeQueryType = z.infer<typeof EmployeeQuery>;

/**
 * StoreQuery schema (Wed Nov 05 2025)
 */
export const StoreQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, StoreSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, StoreOmit),
    include: z.preprocess(P.parseJsonOrReturn, StoreInclude),
    ...StoreQueryOwn.shape,
  })
  .partial();
export type StoreQueryType = z.infer<typeof StoreQuery>;

/**
 * CategoryQuery schema (Wed Nov 05 2025)
 */
export const CategoryQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, CategorySelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, CategoryOmit),
    include: z.preprocess(P.parseJsonOrReturn, CategoryInclude),
    ...CategoryQueryOwn.shape,
  })
  .partial();
export type CategoryQueryType = z.infer<typeof CategoryQuery>;

/**
 * CurrencyQuery schema (Wed Nov 05 2025)
 */
export const CurrencyQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, CurrencySelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, CurrencyOmit),
    include: z.preprocess(P.parseJsonOrReturn, CurrencyInclude),
    ...CurrencyQueryOwn.shape,
  })
  .partial();
export type CurrencyQueryType = z.infer<typeof CurrencyQuery>;

/**
 * TagQuery schema (Wed Nov 05 2025)
 */
export const TagQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, TagSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, TagOmit),
    include: z.preprocess(P.parseJsonOrReturn, TagInclude),
    ...TagQueryOwn.shape,
  })
  .partial();
export type TagQueryType = z.infer<typeof TagQuery>;

/**
 * ProductTagQuery schema (Wed Nov 05 2025)
 */
export const ProductTagQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ProductTagOmit),
    include: z.preprocess(P.parseJsonOrReturn, ProductTagInclude),
    ...ProductTagQueryOwn.shape,
  })
  .partial();
export type ProductTagQueryType = z.infer<typeof ProductTagQuery>;

/**
 * SupplierQuery schema (Wed Nov 05 2025)
 */
export const SupplierQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, SupplierSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, SupplierOmit),
    include: z.preprocess(P.parseJsonOrReturn, SupplierInclude),
    ...SupplierQueryOwn.shape,
  })
  .partial();
export type SupplierQueryType = z.infer<typeof SupplierQuery>;

/**
 * ProductQuery schema (Wed Nov 05 2025)
 */
export const ProductQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ProductSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ProductOmit),
    include: z.preprocess(P.parseJsonOrReturn, ProductInclude),
    ...ProductQueryOwn.shape,
  })
  .partial();
export type ProductQueryType = z.infer<typeof ProductQuery>;

/**
 * ImageQuery schema (Wed Nov 05 2025)
 */
export const ImageQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ImageSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ImageOmit),
    include: z.preprocess(P.parseJsonOrReturn, ImageInclude),
    ...ImageQueryOwn.shape,
  })
  .partial();
export type ImageQueryType = z.infer<typeof ImageQuery>;

/**
 * ProductImageQuery schema (Wed Nov 05 2025)
 */
export const ProductImageQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, ProductImageSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, ProductImageOmit),
    include: z.preprocess(P.parseJsonOrReturn, ProductImageInclude),
    ...ProductImageQueryOwn.shape,
  })
  .partial();
export type ProductImageQueryType = z.infer<typeof ProductImageQuery>;

/**
 * PriceLevelQuery schema (Wed Nov 05 2025)
 */
export const PriceLevelQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, PriceLevelSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, PriceLevelOmit),
    include: z.preprocess(P.parseJsonOrReturn, PriceLevelInclude),
    ...PriceLevelQueryOwn.shape,
  })
  .partial();
export type PriceLevelQueryType = z.infer<typeof PriceLevelQuery>;

/**
 * PriceQuery schema (Wed Nov 05 2025)
 */
export const PriceQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, PriceSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, PriceOmit),
    include: z.preprocess(P.parseJsonOrReturn, PriceInclude),
    ...PriceQueryOwn.shape,
  })
  .partial();
export type PriceQueryType = z.infer<typeof PriceQuery>;

/**
 * QuantityQuery schema (Wed Nov 05 2025)
 */
export const QuantityQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, QuantityOmit),
    include: z.preprocess(P.parseJsonOrReturn, QuantityInclude),
    ...QuantityQueryOwn.shape,
  })
  .partial();
export type QuantityQueryType = z.infer<typeof QuantityQuery>;

/**
 * SerialNumberQuery schema (Wed Nov 05 2025)
 */
export const SerialNumberQuery = z
  .object({
    select: z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn),
    omit: z.preprocess(P.parseJsonOrReturn, SerialNumberOmit),
    include: z.preprocess(P.parseJsonOrReturn, SerialNumberInclude),
    ...SerialNumberQueryOwn.shape,
  })
  .partial();
export type SerialNumberQueryType = z.infer<typeof SerialNumberQuery>;

/**
 * EmployeeSelect schema (Wed Nov 05 2025)
 */
export const EmployeeSelect = z
  .object({ ...EmployeeSelectOwn.shape })
  .partial();
export type EmployeeSelectType = z.infer<typeof EmployeeSelect>;

/**
 * StoreSelect schema (Wed Nov 05 2025)
 */
export const StoreSelect = z.object({ ...StoreSelectOwn.shape }).partial();
export type StoreSelectType = z.infer<typeof StoreSelect>;

/**
 * CategorySelect schema (Wed Nov 05 2025)
 */
export const CategorySelect = z
  .object({ ...CategorySelectOwn.shape })
  .partial();
export type CategorySelectType = z.infer<typeof CategorySelect>;

/**
 * CurrencySelect schema (Wed Nov 05 2025)
 */
export const CurrencySelect = z
  .object({ ...CurrencySelectOwn.shape })
  .partial();
export type CurrencySelectType = z.infer<typeof CurrencySelect>;

/**
 * TagSelect schema (Wed Nov 05 2025)
 */
export const TagSelect = z.object({ ...TagSelectOwn.shape }).partial();
export type TagSelectType = z.infer<typeof TagSelect>;

/**
 * ProductTagSelect schema (Wed Nov 05 2025)
 */
export const ProductTagSelect = z
  .object({ ...ProductTagSelectOwn.shape })
  .partial();
export type ProductTagSelectType = z.infer<typeof ProductTagSelect>;

/**
 * SupplierSelect schema (Wed Nov 05 2025)
 */
export const SupplierSelect = z
  .object({ ...SupplierSelectOwn.shape })
  .partial();
export type SupplierSelectType = z.infer<typeof SupplierSelect>;

/**
 * ProductSelect schema (Wed Nov 05 2025)
 */
export const ProductSelect = z.object({ ...ProductSelectOwn.shape }).partial();
export type ProductSelectType = z.infer<typeof ProductSelect>;

/**
 * ImageSelect schema (Wed Nov 05 2025)
 */
export const ImageSelect = z.object({ ...ImageSelectOwn.shape }).partial();
export type ImageSelectType = z.infer<typeof ImageSelect>;

/**
 * ProductImageSelect schema (Wed Nov 05 2025)
 */
export const ProductImageSelect = z
  .object({ ...ProductImageSelectOwn.shape })
  .partial();
export type ProductImageSelectType = z.infer<typeof ProductImageSelect>;

/**
 * PriceLevelSelect schema (Wed Nov 05 2025)
 */
export const PriceLevelSelect = z
  .object({ ...PriceLevelSelectOwn.shape })
  .partial();
export type PriceLevelSelectType = z.infer<typeof PriceLevelSelect>;

/**
 * PriceSelect schema (Wed Nov 05 2025)
 */
export const PriceSelect = z.object({ ...PriceSelectOwn.shape }).partial();
export type PriceSelectType = z.infer<typeof PriceSelect>;

/**
 * QuantitySelect schema (Wed Nov 05 2025)
 */
export const QuantitySelect = z
  .object({ ...QuantitySelectOwn.shape })
  .partial();
export type QuantitySelectType = z.infer<typeof QuantitySelect>;

/**
 * SerialNumberSelect schema (Wed Nov 05 2025)
 */
export const SerialNumberSelect = z
  .object({ ...SerialNumberSelectOwn.shape })
  .partial();
export type SerialNumberSelectType = z.infer<typeof SerialNumberSelect>;

/**
 * EmployeeProjection schema (Wed Nov 05 2025)
 */
export const EmployeeProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, EmployeeSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, EmployeeOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, EmployeeInclude) }),
  z.object({}),
]);
export type EmployeeProjectionType = z.infer<typeof EmployeeProjection>;

/**
 * StoreProjection schema (Wed Nov 05 2025)
 */
export const StoreProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, StoreSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, StoreOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, StoreInclude) }),
  z.object({}),
]);
export type StoreProjectionType = z.infer<typeof StoreProjection>;

/**
 * CategoryProjection schema (Wed Nov 05 2025)
 */
export const CategoryProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, CategorySelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, CategoryOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, CategoryInclude) }),
  z.object({}),
]);
export type CategoryProjectionType = z.infer<typeof CategoryProjection>;

/**
 * CurrencyProjection schema (Wed Nov 05 2025)
 */
export const CurrencyProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, CurrencySelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, CurrencyOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, CurrencyInclude) }),
  z.object({}),
]);
export type CurrencyProjectionType = z.infer<typeof CurrencyProjection>;

/**
 * TagProjection schema (Wed Nov 05 2025)
 */
export const TagProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, TagSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, TagOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, TagInclude) }),
  z.object({}),
]);
export type TagProjectionType = z.infer<typeof TagProjection>;

/**
 * ProductTagProjection schema (Wed Nov 05 2025)
 */
export const ProductTagProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, ProductTagSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, ProductTagOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, ProductTagInclude) }),
  z.object({}),
]);
export type ProductTagProjectionType = z.infer<typeof ProductTagProjection>;

/**
 * SupplierProjection schema (Wed Nov 05 2025)
 */
export const SupplierProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, SupplierSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, SupplierOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, SupplierInclude) }),
  z.object({}),
]);
export type SupplierProjectionType = z.infer<typeof SupplierProjection>;

/**
 * ProductProjection schema (Wed Nov 05 2025)
 */
export const ProductProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, ProductSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, ProductOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, ProductInclude) }),
  z.object({}),
]);
export type ProductProjectionType = z.infer<typeof ProductProjection>;

/**
 * ImageProjection schema (Wed Nov 05 2025)
 */
export const ImageProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, ImageSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, ImageOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, ImageInclude) }),
  z.object({}),
]);
export type ImageProjectionType = z.infer<typeof ImageProjection>;

/**
 * ProductImageProjection schema (Wed Nov 05 2025)
 */
export const ProductImageProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, ProductImageSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, ProductImageOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, ProductImageInclude) }),
  z.object({}),
]);
export type ProductImageProjectionType = z.infer<typeof ProductImageProjection>;

/**
 * PriceLevelProjection schema (Wed Nov 05 2025)
 */
export const PriceLevelProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, PriceLevelSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, PriceLevelOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, PriceLevelInclude) }),
  z.object({}),
]);
export type PriceLevelProjectionType = z.infer<typeof PriceLevelProjection>;

/**
 * PriceProjection schema (Wed Nov 05 2025)
 */
export const PriceProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, PriceSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, PriceOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, PriceInclude) }),
  z.object({}),
]);
export type PriceProjectionType = z.infer<typeof PriceProjection>;

/**
 * QuantityProjection schema (Wed Nov 05 2025)
 */
export const QuantityProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, QuantitySelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, QuantityOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, QuantityInclude) }),
  z.object({}),
]);
export type QuantityProjectionType = z.infer<typeof QuantityProjection>;

/**
 * SerialNumberProjection schema (Wed Nov 05 2025)
 */
export const SerialNumberProjection = z.union([
  z.object({ select: z.preprocess(P.parseJsonOrReturn, SerialNumberSelect) }),
  z.object({ omit: z.preprocess(P.parseJsonOrReturn, SerialNumberOmit) }),
  z.object({ include: z.preprocess(P.parseJsonOrReturn, SerialNumberInclude) }),
  z.object({}),
]);
export type SerialNumberProjectionType = z.infer<typeof SerialNumberProjection>;

/**
 * EmployeeCreateOwn schema (Wed Nov 05 2025)
 */
export const EmployeeCreateOwn = z.object({
  readonly: P.bool.optional(),
  employeeId: P.str,
});
export type EmployeeCreateOwnType = z.infer<typeof EmployeeCreateOwn>;

/**
 * StoreCreateOwn schema (Wed Nov 05 2025)
 */
export const StoreCreateOwn = z.object({
  readonly: P.bool.optional(),
  storeId: P.str,
});
export type StoreCreateOwnType = z.infer<typeof StoreCreateOwn>;

/**
 * CategoryCreateOwn schema (Wed Nov 05 2025)
 */
export const CategoryCreateOwn = z.object({
  readonly: P.bool.optional(),
  name: P.short,
});
export type CategoryCreateOwnType = z.infer<typeof CategoryCreateOwn>;

/**
 * CurrencyCreateOwn schema (Wed Nov 05 2025)
 */
export const CurrencyCreateOwn = z.object({
  readonly: P.bool.optional(),
  name: P.short,
});
export type CurrencyCreateOwnType = z.infer<typeof CurrencyCreateOwn>;

/**
 * TagCreateOwn schema (Wed Nov 05 2025)
 */
export const TagCreateOwn = z.object({
  readonly: P.bool.optional(),
  name: P.short,
});
export type TagCreateOwnType = z.infer<typeof TagCreateOwn>;

/**
 * ProductTagCreateOwn schema (Wed Nov 05 2025)
 */
export const ProductTagCreateOwn = z.object({
  readonly: P.bool.optional(),
  productId: P.int,
  tagId: P.int,
});
export type ProductTagCreateOwnType = z.infer<typeof ProductTagCreateOwn>;

/**
 * SupplierCreateOwn schema (Wed Nov 05 2025)
 */
export const SupplierCreateOwn = z.object({ supplierId: P.str });
export type SupplierCreateOwnType = z.infer<typeof SupplierCreateOwn>;

/**
 * ProductCreateOwn schema (Wed Nov 05 2025)
 */
export const ProductCreateOwn = z.object({
  readonly: P.bool.optional(),
  active: P.bool.optional(),
  name: P.short,
  upc: P.str,
  sku: P.str,
});
export type ProductCreateOwnType = z.infer<typeof ProductCreateOwn>;

/**
 * ImageCreateOwn schema (Wed Nov 05 2025)
 */
export const ImageCreateOwn = z.object({ url: P.str, order: P.int.optional() });
export type ImageCreateOwnType = z.infer<typeof ImageCreateOwn>;

/**
 * ProductImageCreateOwn schema (Wed Nov 05 2025)
 */
export const ProductImageCreateOwn = z.object({
  productId: P.int,
  imageId: P.int,
});
export type ProductImageCreateOwnType = z.infer<typeof ProductImageCreateOwn>;

/**
 * PriceLevelCreateOwn schema (Wed Nov 05 2025)
 */
export const PriceLevelCreateOwn = z.object({
  readonly: P.bool.optional(),
  name: P.short,
  taxrate: P.num,
  currencyId: P.int,
});
export type PriceLevelCreateOwnType = z.infer<typeof PriceLevelCreateOwn>;

/**
 * PriceCreateOwn schema (Wed Nov 05 2025)
 */
export const PriceCreateOwn = z.object({
  readonly: P.bool.optional(),
  productId: P.int,
  priceLevelId: P.int,
  price: P.currency,
});
export type PriceCreateOwnType = z.infer<typeof PriceCreateOwn>;

/**
 * QuantityCreateOwn schema (Wed Nov 05 2025)
 */
export const QuantityCreateOwn = z.object({
  readonly: P.bool.optional(),
  storeId: P.int,
  productId: P.int,
  quantity: P.int,
});
export type QuantityCreateOwnType = z.infer<typeof QuantityCreateOwn>;

/**
 * SerialNumberCreateOwn schema (Wed Nov 05 2025)
 */
export const SerialNumberCreateOwn = z.object({
  readonly: P.bool.optional(),
  serialNumber: P.str,
  inStock: P.bool.optional(),
  storeId: P.int,
  productId: P.int,
});
export type SerialNumberCreateOwnType = z.infer<typeof SerialNumberCreateOwn>;

/**
 * EmployeeCreate schema (Wed Nov 05 2025)
 */
export const EmployeeCreate = z.object({
  readonly: P.bool.optional(),
  employeeId: P.str,
  changedStores: P.connectMany.optional(),
  changedCategories: P.connectMany.optional(),
  changedTags: P.connectMany.optional(),
  changedProductTags: P.connectMany.optional(),
  changedSuppliers: P.connectMany.optional(),
  changedProducts: P.connectMany.optional(),
  changedPriceLevels: P.connectMany.optional(),
  changedPrices: P.connectMany.optional(),
  changedQuantitys: P.connectMany.optional(),
  changedSerialNumbers: P.connectMany.optional(),
  chagnedImages: P.connectMany.optional(),
  chagnedProductImages: P.connectMany.optional(),
  changedCurrencies: P.connectMany.optional(),
  changedEmployees: P.connectMany.optional(),
});
export type EmployeeCreateType = z.infer<typeof EmployeeCreate>;

/**
 * EmployeeUpdate schema (Wed Nov 05 2025)
 */
export const EmployeeUpdate = EmployeeCreate.clone().partial();
export type EmployeeUpdateType = z.infer<typeof EmployeeUpdate>;

/**
 * StoreCreate schema (Wed Nov 05 2025)
 */
export const StoreCreate = z.object({
  readonly: P.bool.optional(),
  storeId: P.str,
  quantities: P.connectMany.optional(),
  serialNumbers: P.connectMany.optional(),
});
export type StoreCreateType = z.infer<typeof StoreCreate>;

/**
 * StoreUpdate schema (Wed Nov 05 2025)
 */
export const StoreUpdate = StoreCreate.clone().partial();
export type StoreUpdateType = z.infer<typeof StoreUpdate>;

/**
 * CategoryCreate schema (Wed Nov 05 2025)
 */
export const CategoryCreate = z.object({
  readonly: P.bool.optional(),
  name: P.short,
  description: P.long.optional(),
  parentId: P.int.optional(),
  children: P.connectMany.optional(),
  products: P.connectMany.optional(),
});
export type CategoryCreateType = z.infer<typeof CategoryCreate>;

/**
 * CategoryUpdate schema (Wed Nov 05 2025)
 */
export const CategoryUpdate = CategoryCreate.clone().partial();
export type CategoryUpdateType = z.infer<typeof CategoryUpdate>;

/**
 * CurrencyCreate schema (Wed Nov 05 2025)
 */
export const CurrencyCreate = z.object({
  readonly: P.bool.optional(),
  name: P.short,
  symbol: P.str.optional(),
  description: P.long.optional(),
  priceLevels: P.connectMany.optional(),
});
export type CurrencyCreateType = z.infer<typeof CurrencyCreate>;

/**
 * CurrencyUpdate schema (Wed Nov 05 2025)
 */
export const CurrencyUpdate = CurrencyCreate.clone().partial();
export type CurrencyUpdateType = z.infer<typeof CurrencyUpdate>;

/**
 * TagCreate schema (Wed Nov 05 2025)
 */
export const TagCreate = z.object({
  readonly: P.bool.optional(),
  name: P.short,
  description: P.long.optional(),
  productTags: P.connectMany.optional(),
});
export type TagCreateType = z.infer<typeof TagCreate>;

/**
 * TagUpdate schema (Wed Nov 05 2025)
 */
export const TagUpdate = TagCreate.clone().partial();
export type TagUpdateType = z.infer<typeof TagUpdate>;

/**
 * ProductTagCreate schema (Wed Nov 05 2025)
 */
export const ProductTagCreate = z.object({
  readonly: P.bool.optional(),
  productId: P.int,
  tagId: P.int,
});
export type ProductTagCreateType = z.infer<typeof ProductTagCreate>;

/**
 * ProductTagUpdate schema (Wed Nov 05 2025)
 */
export const ProductTagUpdate = ProductTagCreate.clone().partial();
export type ProductTagUpdateType = z.infer<typeof ProductTagUpdate>;

/**
 * SupplierCreate schema (Wed Nov 05 2025)
 */
export const SupplierCreate = z.object({
  supplierId: P.str,
  products: P.connectMany.optional(),
});
export type SupplierCreateType = z.infer<typeof SupplierCreate>;

/**
 * SupplierUpdate schema (Wed Nov 05 2025)
 */
export const SupplierUpdate = SupplierCreate.clone().partial();
export type SupplierUpdateType = z.infer<typeof SupplierUpdate>;

/**
 * ProductCreate schema (Wed Nov 05 2025)
 */
export const ProductCreate = z.object({
  readonly: P.bool.optional(),
  active: P.bool.optional(),
  name: P.short,
  model: P.str.optional(),
  description: P.long.optional(),
  upc: P.str,
  sku: P.str,
  parentId: P.int.optional(),
  categoryId: P.int.optional(),
  supplierId: P.int.optional(),
  variants: P.connectMany.optional(),
  productTags: P.connectMany.optional(),
  prices: P.connectMany.optional(),
  quantities: P.connectMany.optional(),
  serialNumbers: P.connectMany.optional(),
  productImages: P.connectMany.optional(),
});
export type ProductCreateType = z.infer<typeof ProductCreate>;

/**
 * ProductUpdate schema (Wed Nov 05 2025)
 */
export const ProductUpdate = ProductCreate.clone().partial();
export type ProductUpdateType = z.infer<typeof ProductUpdate>;

/**
 * ImageCreate schema (Wed Nov 05 2025)
 */
export const ImageCreate = z.object({
  url: P.str,
  title: P.str.optional(),
  description: P.long.optional(),
  order: P.int.optional(),
  productImages: P.connectMany.optional(),
});
export type ImageCreateType = z.infer<typeof ImageCreate>;

/**
 * ImageUpdate schema (Wed Nov 05 2025)
 */
export const ImageUpdate = ImageCreate.clone().partial();
export type ImageUpdateType = z.infer<typeof ImageUpdate>;

/**
 * ProductImageCreate schema (Wed Nov 05 2025)
 */
export const ProductImageCreate = z.object({
  productId: P.int,
  imageId: P.int,
});
export type ProductImageCreateType = z.infer<typeof ProductImageCreate>;

/**
 * ProductImageUpdate schema (Wed Nov 05 2025)
 */
export const ProductImageUpdate = ProductImageCreate.clone().partial();
export type ProductImageUpdateType = z.infer<typeof ProductImageUpdate>;

/**
 * PriceLevelCreate schema (Wed Nov 05 2025)
 */
export const PriceLevelCreate = z.object({
  readonly: P.bool.optional(),
  name: P.short,
  description: P.long.optional(),
  taxrate: P.num,
  currencyId: P.int,
  prices: P.connectMany.optional(),
});
export type PriceLevelCreateType = z.infer<typeof PriceLevelCreate>;

/**
 * PriceLevelUpdate schema (Wed Nov 05 2025)
 */
export const PriceLevelUpdate = PriceLevelCreate.clone().partial();
export type PriceLevelUpdateType = z.infer<typeof PriceLevelUpdate>;

/**
 * PriceCreate schema (Wed Nov 05 2025)
 */
export const PriceCreate = z.object({
  readonly: P.bool.optional(),
  productId: P.int,
  priceLevelId: P.int,
  price: P.currency,
});
export type PriceCreateType = z.infer<typeof PriceCreate>;

/**
 * PriceUpdate schema (Wed Nov 05 2025)
 */
export const PriceUpdate = PriceCreate.clone().partial();
export type PriceUpdateType = z.infer<typeof PriceUpdate>;

/**
 * QuantityCreate schema (Wed Nov 05 2025)
 */
export const QuantityCreate = z.object({
  readonly: P.bool.optional(),
  storeId: P.int,
  productId: P.int,
  quantity: P.int,
  minQuantity: P.int.optional(),
});
export type QuantityCreateType = z.infer<typeof QuantityCreate>;

/**
 * QuantityUpdate schema (Wed Nov 05 2025)
 */
export const QuantityUpdate = QuantityCreate.clone().partial();
export type QuantityUpdateType = z.infer<typeof QuantityUpdate>;

/**
 * SerialNumberCreate schema (Wed Nov 05 2025)
 */
export const SerialNumberCreate = z.object({
  readonly: P.bool.optional(),
  serialNumber: P.str,
  inStock: P.bool.optional(),
  storeId: P.int,
  productId: P.int,
});
export type SerialNumberCreateType = z.infer<typeof SerialNumberCreate>;

/**
 * SerialNumberUpdate schema (Wed Nov 05 2025)
 */
export const SerialNumberUpdate = SerialNumberCreate.clone().partial();
export type SerialNumberUpdateType = z.infer<typeof SerialNumberUpdate>;
