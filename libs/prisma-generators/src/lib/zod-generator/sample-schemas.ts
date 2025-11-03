import { z } from "zod";
import * as P from "@puq/zod";

/**
 * ProductType schema (Mon Nov 03 2025)
 */
export const ProductType = z.enum([
  "DEFAULT",
  "CONVENIENCE",
  "SHOPPING",
  "SPECIALTY",
  "UNSOUGHT",
  "SERVICE_PROFESSIONAL",
  "SERVICE_SUBSCRIPTION",
  "DIGITAL_GOODS",
  "DIGITAL_INFORMATION",
  "INDUSTRIAL_MATERIALS",
  "INDUSTRIAL_CAPITAL_INSTALLATIONS",
  "INDUSTRIAL_SUPPLIES_OPERATIONS",
]);

/**
 * StoreField schema (Mon Nov 03 2025)
 */
export const StoreField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "name",
  "slug",
  "description",
]);

/**
 * CategoryField schema (Mon Nov 03 2025)
 */
export const CategoryField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "parentId",
  "name",
  "slug",
  "description",
]);

/**
 * TagField schema (Mon Nov 03 2025)
 */
export const TagField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "name",
  "slug",
  "description",
]);

/**
 * ProductTagField schema (Mon Nov 03 2025)
 */
export const ProductTagField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "productId",
  "tagId",
]);

/**
 * ManufacturerField schema (Mon Nov 03 2025)
 */
export const ManufacturerField = z.enum([
  "id",
  "uuid",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "name",
]);

/**
 * ProductField schema (Mon Nov 03 2025)
 */
export const ProductField = z.enum([
  "id",
  "uuid",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "parentId",
  "categoryId",
  "manufacturerId",
  "name",
  "slug",
  "model",
  "description",
  "upc",
  "sku",
  "active",
  "type",
  "types",
]);

/**
 * PriceLevelField schema (Mon Nov 03 2025)
 */
export const PriceLevelField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "name",
  "slug",
  "description",
  "taxrate",
]);

/**
 * PriceField schema (Mon Nov 03 2025)
 */
export const PriceField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "productId",
  "priceLevelId",
  "price",
]);

/**
 * QuantityField schema (Mon Nov 03 2025)
 */
export const QuantityField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "storeId",
  "productId",
  "quantity",
  "minQuantity",
]);

/**
 * SerialNumberField schema (Mon Nov 03 2025)
 */
export const SerialNumberField = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "updatedBy",
  "readonly",
  "storeId",
  "productId",
  "serialNumber",
  "inStock",
]);

/**
 * ProductTypeFilter schema (Mon Nov 03 2025)
 */
export const ProductTypeFilter = z
  .object({
    equals: ProductType,
    in: ProductType.array(),
    not: ProductType,
    notIn: ProductType.array(),
  })
  .partial();

/**
 * ProductTypeArrayFilter schema (Mon Nov 03 2025)
 */
export const ProductTypeArrayFilter = z
  .object({
    equals: ProductType.array(),
    has: ProductType,
    hasEvery: ProductType.array(),
    hasSome: ProductType.array(),
    isEmpty: P.bool,
  })
  .partial();

/**
 * StoreOmit schema (Mon Nov 03 2025)
 */
export const StoreOmit = z
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

/**
 * CategoryOmit schema (Mon Nov 03 2025)
 */
export const CategoryOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    parentId: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
  })
  .partial();

/**
 * TagOmit schema (Mon Nov 03 2025)
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

/**
 * ProductTagOmit schema (Mon Nov 03 2025)
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

/**
 * ManufacturerOmit schema (Mon Nov 03 2025)
 */
export const ManufacturerOmit = z
  .object({
    id: P.bool,
    uuid: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    name: P.bool,
  })
  .partial();

/**
 * ProductOmit schema (Mon Nov 03 2025)
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
    parentId: P.bool,
    categoryId: P.bool,
    manufacturerId: P.bool,
    name: P.bool,
    slug: P.bool,
    model: P.bool,
    description: P.bool,
    upc: P.bool,
    sku: P.bool,
    active: P.bool,
    type: P.bool,
    types: P.bool,
  })
  .partial();

/**
 * PriceLevelOmit schema (Mon Nov 03 2025)
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
  })
  .partial();

/**
 * PriceOmit schema (Mon Nov 03 2025)
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

/**
 * QuantityOmit schema (Mon Nov 03 2025)
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

/**
 * SerialNumberOmit schema (Mon Nov 03 2025)
 */
export const SerialNumberOmit = z
  .object({
    id: P.bool,
    createdAt: P.bool,
    updatedAt: P.bool,
    deletedAt: P.bool,
    updatedBy: P.bool,
    readonly: P.bool,
    storeId: P.bool,
    productId: P.bool,
    serialNumber: P.bool,
    inStock: P.bool,
  })
  .partial();
export type ProductType = z.infer<typeof ProductType>;
export type StoreField = z.infer<typeof StoreField>;
export type CategoryField = z.infer<typeof CategoryField>;
export type TagField = z.infer<typeof TagField>;
export type ProductTagField = z.infer<typeof ProductTagField>;
export type ManufacturerField = z.infer<typeof ManufacturerField>;
export type ProductField = z.infer<typeof ProductField>;
export type PriceLevelField = z.infer<typeof PriceLevelField>;
export type PriceField = z.infer<typeof PriceField>;
export type QuantityField = z.infer<typeof QuantityField>;
export type SerialNumberField = z.infer<typeof SerialNumberField>;
export type ProductTypeFilter = z.infer<typeof ProductTypeFilter>;
export type ProductTypeArrayFilter = z.infer<typeof ProductTypeArrayFilter>;
export type StoreOmit = z.infer<typeof StoreOmit>;
export type CategoryOmit = z.infer<typeof CategoryOmit>;
export type TagOmit = z.infer<typeof TagOmit>;
export type ProductTagOmit = z.infer<typeof ProductTagOmit>;
export type ManufacturerOmit = z.infer<typeof ManufacturerOmit>;
export type ProductOmit = z.infer<typeof ProductOmit>;
export type PriceLevelOmit = z.infer<typeof PriceLevelOmit>;
export type PriceOmit = z.infer<typeof PriceOmit>;
export type QuantityOmit = z.infer<typeof QuantityOmit>;
export type SerialNumberOmit = z.infer<typeof SerialNumberOmit>;
