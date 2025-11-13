import { z } from 'zod';
import * as P from '@puq/zod';

  /**
   * OperationType schema (Wed Nov 12 2025)
   */
export const OperationType = z.enum([ 'READ', 'WRITE', 'UPDATE', 'DELETE' ])
export type OperationTypeType = z.infer<typeof OperationType>; 

  /**
   * OperatorType schema (Wed Nov 12 2025)
   */
export const OperatorType = z.enum([ 'USER', 'SYSTEM' ])
export type OperatorTypeType = z.infer<typeof OperatorType>; 

  /**
   * StoreField schema (Wed Nov 12 2025)
   */
export const StoreField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'slug', 'readonly' ])
export type StoreFieldType = z.infer<typeof StoreField>; 

  /**
   * ShelfField schema (Wed Nov 12 2025)
   */
export const ShelfField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'aisle', 'rack', 'level', 'storeId', 'readonly' ])
export type ShelfFieldType = z.infer<typeof ShelfField>; 

  /**
   * CategoryField schema (Wed Nov 12 2025)
   */
export const CategoryField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'slug', 'parentId', 'readonly' ])
export type CategoryFieldType = z.infer<typeof CategoryField>; 

  /**
   * TagField schema (Wed Nov 12 2025)
   */
export const TagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'name' ])
export type TagFieldType = z.infer<typeof TagField>; 

  /**
   * ProductTagField schema (Wed Nov 12 2025)
   */
export const ProductTagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'productId', 'tagId' ])
export type ProductTagFieldType = z.infer<typeof ProductTagField>; 

  /**
   * ProductField schema (Wed Nov 12 2025)
   */
export const ProductField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'slug', 'sku', 'upc', 'model', 'categoryId', 'typeId', 'parentId', 'readonly' ])
export type ProductFieldType = z.infer<typeof ProductField>; 

  /**
   * QuantityField schema (Wed Nov 12 2025)
   */
export const QuantityField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'quantity', 'minQuantity', 'productId', 'storeId', 'readonly' ])
export type QuantityFieldType = z.infer<typeof QuantityField>; 

  /**
   * SerialNumberField schema (Wed Nov 12 2025)
   */
export const SerialNumberField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'serialNumber', 'isInStock', 'productId', 'storeId', 'readonly' ])
export type SerialNumberFieldType = z.infer<typeof SerialNumberField>; 

  /**
   * PriceField schema (Wed Nov 12 2025)
   */
export const PriceField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'price', 'effectiveFrom', 'effectiveTo', 'productId', 'readonly' ])
export type PriceFieldType = z.infer<typeof PriceField>; 

  /**
   * ProductTypeField schema (Wed Nov 12 2025)
   */
export const ProductTypeField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'readonly' ])
export type ProductTypeFieldType = z.infer<typeof ProductTypeField>; 

  /**
   * JurisdictionField schema (Wed Nov 12 2025)
   */
export const JurisdictionField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'fipsCode', 'name', 'level', 'parentId', 'readonly' ])
export type JurisdictionFieldType = z.infer<typeof JurisdictionField>; 

  /**
   * TaxRateField schema (Wed Nov 12 2025)
   */
export const TaxRateField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'percentRate', 'fixedRate', 'description', 'effectiveFrom', 'effectiveTo', 'jurisdictionId', 'productTypeId', 'readonly' ])
export type TaxRateFieldType = z.infer<typeof TaxRateField>; 

  /**
   * LogField schema (Wed Nov 12 2025)
   */
export const LogField = z.enum([ 'id', 'timestamp', 'operatorId', 'operatorType', 'operationType', 'recordName', 'recordId', 'change' ])
export type LogFieldType = z.infer<typeof LogField>; 

  /**
   * OperationTypeFilter schema (Wed Nov 12 2025)
   */
export const OperationTypeFilter = z.object({ 
      equals: OperationType,
      in: OperationType.array(),
      not: OperationType,
      notIn: OperationType.array()
  }).partial()
export type OperationTypeFilterType = z.infer<typeof OperationTypeFilter>; 

  /**
   * OperationTypeArrayFilter schema (Wed Nov 12 2025)
   */
export const OperationTypeArrayFilter = z.object({ 
      equals: OperationType.array(),
      has: OperationType,
      hasEvery: OperationType.array(),
      hasSome: OperationType.array(),
      isEmpty: P.bool
    }).partial()
export type OperationTypeArrayFilterType = z.infer<typeof OperationTypeArrayFilter>; 

  /**
   * OperatorTypeFilter schema (Wed Nov 12 2025)
   */
export const OperatorTypeFilter = z.object({ 
      equals: OperatorType,
      in: OperatorType.array(),
      not: OperatorType,
      notIn: OperatorType.array()
  }).partial()
export type OperatorTypeFilterType = z.infer<typeof OperatorTypeFilter>; 

  /**
   * OperatorTypeArrayFilter schema (Wed Nov 12 2025)
   */
export const OperatorTypeArrayFilter = z.object({ 
      equals: OperatorType.array(),
      has: OperatorType,
      hasEvery: OperatorType.array(),
      hasSome: OperatorType.array(),
      isEmpty: P.bool
    }).partial()
export type OperatorTypeArrayFilterType = z.infer<typeof OperatorTypeArrayFilter>; 

  /**
   * StoreOmit schema (Wed Nov 12 2025)
   */
export const StoreOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool, description: P.bool, slug: P.bool, readonly: P.bool }).partial()
export type StoreOmitType = z.infer<typeof StoreOmit>; 

  /**
   * ShelfOmit schema (Wed Nov 12 2025)
   */
export const ShelfOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool, description: P.bool, aisle: P.bool, rack: P.bool, level: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type ShelfOmitType = z.infer<typeof ShelfOmit>; 

  /**
   * CategoryOmit schema (Wed Nov 12 2025)
   */
export const CategoryOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool, description: P.bool, slug: P.bool, parentId: P.bool, readonly: P.bool }).partial()
export type CategoryOmitType = z.infer<typeof CategoryOmit>; 

  /**
   * TagOmit schema (Wed Nov 12 2025)
   */
export const TagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool }).partial()
export type TagOmitType = z.infer<typeof TagOmit>; 

  /**
   * ProductTagOmit schema (Wed Nov 12 2025)
   */
export const ProductTagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, productId: P.bool, tagId: P.bool }).partial()
export type ProductTagOmitType = z.infer<typeof ProductTagOmit>; 

  /**
   * ProductOmit schema (Wed Nov 12 2025)
   */
export const ProductOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool, description: P.bool, slug: P.bool, sku: P.bool, upc: P.bool, model: P.bool, categoryId: P.bool, typeId: P.bool, parentId: P.bool, readonly: P.bool }).partial()
export type ProductOmitType = z.infer<typeof ProductOmit>; 

  /**
   * QuantityOmit schema (Wed Nov 12 2025)
   */
export const QuantityOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, quantity: P.bool, minQuantity: P.bool, productId: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type QuantityOmitType = z.infer<typeof QuantityOmit>; 

  /**
   * SerialNumberOmit schema (Wed Nov 12 2025)
   */
export const SerialNumberOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, serialNumber: P.bool, isInStock: P.bool, productId: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type SerialNumberOmitType = z.infer<typeof SerialNumberOmit>; 

  /**
   * PriceOmit schema (Wed Nov 12 2025)
   */
export const PriceOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, price: P.bool, effectiveFrom: P.bool, effectiveTo: P.bool, productId: P.bool, readonly: P.bool }).partial()
export type PriceOmitType = z.infer<typeof PriceOmit>; 

  /**
   * ProductTypeOmit schema (Wed Nov 12 2025)
   */
export const ProductTypeOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool, description: P.bool, readonly: P.bool }).partial()
export type ProductTypeOmitType = z.infer<typeof ProductTypeOmit>; 

  /**
   * JurisdictionOmit schema (Wed Nov 12 2025)
   */
export const JurisdictionOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, fipsCode: P.bool, name: P.bool, level: P.bool, parentId: P.bool, readonly: P.bool }).partial()
export type JurisdictionOmitType = z.infer<typeof JurisdictionOmit>; 

  /**
   * TaxRateOmit schema (Wed Nov 12 2025)
   */
export const TaxRateOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, percentRate: P.bool, fixedRate: P.bool, description: P.bool, effectiveFrom: P.bool, effectiveTo: P.bool, jurisdictionId: P.bool, productTypeId: P.bool, readonly: P.bool }).partial()
export type TaxRateOmitType = z.infer<typeof TaxRateOmit>; 

  /**
   * LogOmit schema (Wed Nov 12 2025)
   */
export const LogOmit = z.object({ id: P.bool, timestamp: P.bool, operatorId: P.bool, operatorType: P.bool, operationType: P.bool, recordName: P.bool, recordId: P.bool, change: P.bool }).partial()
export type LogOmitType = z.infer<typeof LogOmit>; 

  /**
   * StoreSelectOwn schema (Wed Nov 12 2025)
   */
export const StoreSelectOwn = StoreOmit
export type StoreSelectOwnType = z.infer<typeof StoreSelectOwn>; 

  /**
   * ShelfSelectOwn schema (Wed Nov 12 2025)
   */
export const ShelfSelectOwn = ShelfOmit
export type ShelfSelectOwnType = z.infer<typeof ShelfSelectOwn>; 

  /**
   * CategorySelectOwn schema (Wed Nov 12 2025)
   */
export const CategorySelectOwn = CategoryOmit
export type CategorySelectOwnType = z.infer<typeof CategorySelectOwn>; 

  /**
   * TagSelectOwn schema (Wed Nov 12 2025)
   */
export const TagSelectOwn = TagOmit
export type TagSelectOwnType = z.infer<typeof TagSelectOwn>; 

  /**
   * ProductTagSelectOwn schema (Wed Nov 12 2025)
   */
export const ProductTagSelectOwn = ProductTagOmit
export type ProductTagSelectOwnType = z.infer<typeof ProductTagSelectOwn>; 

  /**
   * ProductSelectOwn schema (Wed Nov 12 2025)
   */
export const ProductSelectOwn = ProductOmit
export type ProductSelectOwnType = z.infer<typeof ProductSelectOwn>; 

  /**
   * QuantitySelectOwn schema (Wed Nov 12 2025)
   */
export const QuantitySelectOwn = QuantityOmit
export type QuantitySelectOwnType = z.infer<typeof QuantitySelectOwn>; 

  /**
   * SerialNumberSelectOwn schema (Wed Nov 12 2025)
   */
export const SerialNumberSelectOwn = SerialNumberOmit
export type SerialNumberSelectOwnType = z.infer<typeof SerialNumberSelectOwn>; 

  /**
   * PriceSelectOwn schema (Wed Nov 12 2025)
   */
export const PriceSelectOwn = PriceOmit
export type PriceSelectOwnType = z.infer<typeof PriceSelectOwn>; 

  /**
   * ProductTypeSelectOwn schema (Wed Nov 12 2025)
   */
export const ProductTypeSelectOwn = ProductTypeOmit
export type ProductTypeSelectOwnType = z.infer<typeof ProductTypeSelectOwn>; 

  /**
   * JurisdictionSelectOwn schema (Wed Nov 12 2025)
   */
export const JurisdictionSelectOwn = JurisdictionOmit
export type JurisdictionSelectOwnType = z.infer<typeof JurisdictionSelectOwn>; 

  /**
   * TaxRateSelectOwn schema (Wed Nov 12 2025)
   */
export const TaxRateSelectOwn = TaxRateOmit
export type TaxRateSelectOwnType = z.infer<typeof TaxRateSelectOwn>; 

  /**
   * LogSelectOwn schema (Wed Nov 12 2025)
   */
export const LogSelectOwn = LogOmit
export type LogSelectOwnType = z.infer<typeof LogSelectOwn>; 

  /**
   * StoreInclude schema (Wed Nov 12 2025)
   */
export const StoreInclude = z.object({ quantities: z.object({ select :QuantitySelectOwn }).or(P.bool), serials: z.object({ select :SerialNumberSelectOwn }).or(P.bool), shelves: z.object({ select :ShelfSelectOwn }).or(P.bool) }).partial()
export type StoreIncludeType = z.infer<typeof StoreInclude>; 

  /**
   * ShelfInclude schema (Wed Nov 12 2025)
   */
export const ShelfInclude = z.object({ store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type ShelfIncludeType = z.infer<typeof ShelfInclude>; 

  /**
   * CategoryInclude schema (Wed Nov 12 2025)
   */
export const CategoryInclude = z.object({ parent: z.object({ select :CategorySelectOwn }).or(P.bool), children: z.object({ select :CategorySelectOwn }).or(P.bool), products: z.object({ select :ProductSelectOwn }).or(P.bool) }).partial()
export type CategoryIncludeType = z.infer<typeof CategoryInclude>; 

  /**
   * TagInclude schema (Wed Nov 12 2025)
   */
export const TagInclude = z.object({ productTags: z.object({ select :ProductTagSelectOwn }).or(P.bool) }).partial()
export type TagIncludeType = z.infer<typeof TagInclude>; 

  /**
   * ProductTagInclude schema (Wed Nov 12 2025)
   */
export const ProductTagInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), tag: z.object({ select :TagSelectOwn }).or(P.bool) }).partial()
export type ProductTagIncludeType = z.infer<typeof ProductTagInclude>; 

  /**
   * ProductInclude schema (Wed Nov 12 2025)
   */
export const ProductInclude = z.object({ category: z.object({ select :CategorySelectOwn }).or(P.bool), type: z.object({ select :ProductTypeSelectOwn }).or(P.bool), parent: z.object({ select :ProductSelectOwn }).or(P.bool), variants: z.object({ select :ProductSelectOwn }).or(P.bool), quantities: z.object({ select :QuantitySelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool), productTags: z.object({ select :ProductTagSelectOwn }).or(P.bool), serialNumbers: z.object({ select :SerialNumberSelectOwn }).or(P.bool) }).partial()
export type ProductIncludeType = z.infer<typeof ProductInclude>; 

  /**
   * QuantityInclude schema (Wed Nov 12 2025)
   */
export const QuantityInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type QuantityIncludeType = z.infer<typeof QuantityInclude>; 

  /**
   * SerialNumberInclude schema (Wed Nov 12 2025)
   */
export const SerialNumberInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type SerialNumberIncludeType = z.infer<typeof SerialNumberInclude>; 

  /**
   * PriceInclude schema (Wed Nov 12 2025)
   */
export const PriceInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool) }).partial()
export type PriceIncludeType = z.infer<typeof PriceInclude>; 

  /**
   * ProductTypeInclude schema (Wed Nov 12 2025)
   */
export const ProductTypeInclude = z.object({ products: z.object({ select :ProductSelectOwn }).or(P.bool), taxRates: z.object({ select :TaxRateSelectOwn }).or(P.bool) }).partial()
export type ProductTypeIncludeType = z.infer<typeof ProductTypeInclude>; 

  /**
   * JurisdictionInclude schema (Wed Nov 12 2025)
   */
export const JurisdictionInclude = z.object({ parent: z.object({ select :JurisdictionSelectOwn }).or(P.bool), children: z.object({ select :JurisdictionSelectOwn }).or(P.bool), taxRates: z.object({ select :TaxRateSelectOwn }).or(P.bool) }).partial()
export type JurisdictionIncludeType = z.infer<typeof JurisdictionInclude>; 

  /**
   * TaxRateInclude schema (Wed Nov 12 2025)
   */
export const TaxRateInclude = z.object({ jurisdiction: z.object({ select :JurisdictionSelectOwn }).or(P.bool), productType: z.object({ select :ProductTypeSelectOwn }).or(P.bool) }).partial()
export type TaxRateIncludeType = z.infer<typeof TaxRateInclude>; 

  /**
   * LogInclude schema (Wed Nov 12 2025)
   */
export const LogInclude = z.object({  }).partial()
export type LogIncludeType = z.infer<typeof LogInclude>; 

  /**
   * StoreOrderByOwn schema (Wed Nov 12 2025)
   */
export const StoreOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir, description: P.dir, slug: P.dir, readonly: P.dir 
  }).partial()
export type StoreOrderByOwnType = z.infer<typeof StoreOrderByOwn>; 

  /**
   * ShelfOrderByOwn schema (Wed Nov 12 2025)
   */
export const ShelfOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir, description: P.dir, aisle: P.dir, rack: P.dir, level: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type ShelfOrderByOwnType = z.infer<typeof ShelfOrderByOwn>; 

  /**
   * CategoryOrderByOwn schema (Wed Nov 12 2025)
   */
export const CategoryOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir, description: P.dir, slug: P.dir, parentId: P.dir, readonly: P.dir 
  }).partial()
export type CategoryOrderByOwnType = z.infer<typeof CategoryOrderByOwn>; 

  /**
   * TagOrderByOwn schema (Wed Nov 12 2025)
   */
export const TagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir 
  }).partial()
export type TagOrderByOwnType = z.infer<typeof TagOrderByOwn>; 

  /**
   * ProductTagOrderByOwn schema (Wed Nov 12 2025)
   */
export const ProductTagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, productId: P.dir, tagId: P.dir 
  }).partial()
export type ProductTagOrderByOwnType = z.infer<typeof ProductTagOrderByOwn>; 

  /**
   * ProductOrderByOwn schema (Wed Nov 12 2025)
   */
export const ProductOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir, description: P.dir, slug: P.dir, sku: P.dir, upc: P.dir, model: P.dir, categoryId: P.dir, typeId: P.dir, parentId: P.dir, readonly: P.dir 
  }).partial()
export type ProductOrderByOwnType = z.infer<typeof ProductOrderByOwn>; 

  /**
   * QuantityOrderByOwn schema (Wed Nov 12 2025)
   */
export const QuantityOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, quantity: P.dir, minQuantity: P.dir, productId: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type QuantityOrderByOwnType = z.infer<typeof QuantityOrderByOwn>; 

  /**
   * SerialNumberOrderByOwn schema (Wed Nov 12 2025)
   */
export const SerialNumberOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, serialNumber: P.dir, isInStock: P.dir, productId: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type SerialNumberOrderByOwnType = z.infer<typeof SerialNumberOrderByOwn>; 

  /**
   * PriceOrderByOwn schema (Wed Nov 12 2025)
   */
export const PriceOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, price: P.dir, effectiveFrom: P.dir, effectiveTo: P.dir, productId: P.dir, readonly: P.dir 
  }).partial()
export type PriceOrderByOwnType = z.infer<typeof PriceOrderByOwn>; 

  /**
   * ProductTypeOrderByOwn schema (Wed Nov 12 2025)
   */
export const ProductTypeOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir, description: P.dir, readonly: P.dir 
  }).partial()
export type ProductTypeOrderByOwnType = z.infer<typeof ProductTypeOrderByOwn>; 

  /**
   * JurisdictionOrderByOwn schema (Wed Nov 12 2025)
   */
export const JurisdictionOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, fipsCode: P.dir, name: P.dir, level: P.dir, parentId: P.dir, readonly: P.dir 
  }).partial()
export type JurisdictionOrderByOwnType = z.infer<typeof JurisdictionOrderByOwn>; 

  /**
   * TaxRateOrderByOwn schema (Wed Nov 12 2025)
   */
export const TaxRateOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, percentRate: P.dir, fixedRate: P.dir, description: P.dir, effectiveFrom: P.dir, effectiveTo: P.dir, jurisdictionId: P.dir, productTypeId: P.dir, readonly: P.dir 
  }).partial()
export type TaxRateOrderByOwnType = z.infer<typeof TaxRateOrderByOwn>; 

  /**
   * LogOrderByOwn schema (Wed Nov 12 2025)
   */
export const LogOrderByOwn = z.object({ 
    id: P.dir, timestamp: P.dir, operatorId: P.dir, operatorType: P.dir, operationType: P.dir, recordName: P.dir, recordId: P.dir, change: P.dir 
  }).partial()
export type LogOrderByOwnType = z.infer<typeof LogOrderByOwn>; 

  /**
   * StoreOrderBy schema (Wed Nov 12 2025)
   */
export const StoreOrderBy = z.object({
    ...StoreOrderByOwn.shape, 
    quantities: P.orderByCount, serials: P.orderByCount, shelves: P.orderByCount 
  }).partial()
export type StoreOrderByType = z.infer<typeof StoreOrderBy>; 

  /**
   * ShelfOrderBy schema (Wed Nov 12 2025)
   */
export const ShelfOrderBy = z.object({
    ...ShelfOrderByOwn.shape, 
    store: StoreOrderByOwn 
  }).partial()
export type ShelfOrderByType = z.infer<typeof ShelfOrderBy>; 

  /**
   * CategoryOrderBy schema (Wed Nov 12 2025)
   */
export const CategoryOrderBy = z.object({
    ...CategoryOrderByOwn.shape, 
    parent: CategoryOrderByOwn, children: P.orderByCount, products: P.orderByCount 
  }).partial()
export type CategoryOrderByType = z.infer<typeof CategoryOrderBy>; 

  /**
   * TagOrderBy schema (Wed Nov 12 2025)
   */
export const TagOrderBy = z.object({
    ...TagOrderByOwn.shape, 
    productTags: P.orderByCount 
  }).partial()
export type TagOrderByType = z.infer<typeof TagOrderBy>; 

  /**
   * ProductTagOrderBy schema (Wed Nov 12 2025)
   */
export const ProductTagOrderBy = z.object({
    ...ProductTagOrderByOwn.shape, 
    product: ProductOrderByOwn, tag: TagOrderByOwn 
  }).partial()
export type ProductTagOrderByType = z.infer<typeof ProductTagOrderBy>; 

  /**
   * ProductOrderBy schema (Wed Nov 12 2025)
   */
export const ProductOrderBy = z.object({
    ...ProductOrderByOwn.shape, 
    category: CategoryOrderByOwn, type: ProductTypeOrderByOwn, parent: ProductOrderByOwn, variants: P.orderByCount, quantities: P.orderByCount, prices: P.orderByCount, productTags: P.orderByCount, serialNumbers: P.orderByCount 
  }).partial()
export type ProductOrderByType = z.infer<typeof ProductOrderBy>; 

  /**
   * QuantityOrderBy schema (Wed Nov 12 2025)
   */
export const QuantityOrderBy = z.object({
    ...QuantityOrderByOwn.shape, 
    product: ProductOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type QuantityOrderByType = z.infer<typeof QuantityOrderBy>; 

  /**
   * SerialNumberOrderBy schema (Wed Nov 12 2025)
   */
export const SerialNumberOrderBy = z.object({
    ...SerialNumberOrderByOwn.shape, 
    product: ProductOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type SerialNumberOrderByType = z.infer<typeof SerialNumberOrderBy>; 

  /**
   * PriceOrderBy schema (Wed Nov 12 2025)
   */
export const PriceOrderBy = z.object({
    ...PriceOrderByOwn.shape, 
    product: ProductOrderByOwn 
  }).partial()
export type PriceOrderByType = z.infer<typeof PriceOrderBy>; 

  /**
   * ProductTypeOrderBy schema (Wed Nov 12 2025)
   */
export const ProductTypeOrderBy = z.object({
    ...ProductTypeOrderByOwn.shape, 
    products: P.orderByCount, taxRates: P.orderByCount 
  }).partial()
export type ProductTypeOrderByType = z.infer<typeof ProductTypeOrderBy>; 

  /**
   * JurisdictionOrderBy schema (Wed Nov 12 2025)
   */
export const JurisdictionOrderBy = z.object({
    ...JurisdictionOrderByOwn.shape, 
    parent: JurisdictionOrderByOwn, children: P.orderByCount, taxRates: P.orderByCount 
  }).partial()
export type JurisdictionOrderByType = z.infer<typeof JurisdictionOrderBy>; 

  /**
   * TaxRateOrderBy schema (Wed Nov 12 2025)
   */
export const TaxRateOrderBy = z.object({
    ...TaxRateOrderByOwn.shape, 
    jurisdiction: JurisdictionOrderByOwn, productType: ProductTypeOrderByOwn 
  }).partial()
export type TaxRateOrderByType = z.infer<typeof TaxRateOrderBy>; 

  /**
   * LogOrderBy schema (Wed Nov 12 2025)
   */
export const LogOrderBy = z.object({
    ...LogOrderByOwn.shape, 
     
  }).partial()
export type LogOrderByType = z.infer<typeof LogOrderBy>; 

  /**
   * StoreWhereOwn schema (Wed Nov 12 2025)
   */
export const StoreWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter, description: P.strFilter, slug: P.strFilter, readonly: P.boolFilter }).partial()
export type StoreWhereOwnType = z.infer<typeof StoreWhereOwn>; 

  /**
   * ShelfWhereOwn schema (Wed Nov 12 2025)
   */
export const ShelfWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter, description: P.strFilter, aisle: P.strFilter, rack: P.intFilter, level: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type ShelfWhereOwnType = z.infer<typeof ShelfWhereOwn>; 

  /**
   * CategoryWhereOwn schema (Wed Nov 12 2025)
   */
export const CategoryWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter, description: P.strFilter, slug: P.strFilter, parentId: P.intFilter, readonly: P.boolFilter }).partial()
export type CategoryWhereOwnType = z.infer<typeof CategoryWhereOwn>; 

  /**
   * TagWhereOwn schema (Wed Nov 12 2025)
   */
export const TagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter }).partial()
export type TagWhereOwnType = z.infer<typeof TagWhereOwn>; 

  /**
   * ProductTagWhereOwn schema (Wed Nov 12 2025)
   */
export const ProductTagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, productId: P.intFilter, tagId: P.intFilter }).partial()
export type ProductTagWhereOwnType = z.infer<typeof ProductTagWhereOwn>; 

  /**
   * ProductWhereOwn schema (Wed Nov 12 2025)
   */
export const ProductWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter, description: P.strFilter, slug: P.strFilter, sku: P.strFilter, upc: P.strFilter, model: P.strFilter, categoryId: P.intFilter, typeId: P.intFilter, parentId: P.intFilter, readonly: P.boolFilter }).partial()
export type ProductWhereOwnType = z.infer<typeof ProductWhereOwn>; 

  /**
   * QuantityWhereOwn schema (Wed Nov 12 2025)
   */
export const QuantityWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, quantity: P.intFilter, minQuantity: P.intFilter, productId: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type QuantityWhereOwnType = z.infer<typeof QuantityWhereOwn>; 

  /**
   * SerialNumberWhereOwn schema (Wed Nov 12 2025)
   */
export const SerialNumberWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, serialNumber: P.strFilter, isInStock: P.boolFilter, productId: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type SerialNumberWhereOwnType = z.infer<typeof SerialNumberWhereOwn>; 

  /**
   * PriceWhereOwn schema (Wed Nov 12 2025)
   */
export const PriceWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, price: P.numFilter, effectiveFrom: P.datetimeFilter, effectiveTo: P.datetimeFilter, productId: P.intFilter, readonly: P.boolFilter }).partial()
export type PriceWhereOwnType = z.infer<typeof PriceWhereOwn>; 

  /**
   * ProductTypeWhereOwn schema (Wed Nov 12 2025)
   */
export const ProductTypeWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter, description: P.strFilter, readonly: P.boolFilter }).partial()
export type ProductTypeWhereOwnType = z.infer<typeof ProductTypeWhereOwn>; 

  /**
   * JurisdictionWhereOwn schema (Wed Nov 12 2025)
   */
export const JurisdictionWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, fipsCode: P.strFilter, name: P.strFilter, level: P.strFilter, parentId: P.intFilter, readonly: P.boolFilter }).partial()
export type JurisdictionWhereOwnType = z.infer<typeof JurisdictionWhereOwn>; 

  /**
   * TaxRateWhereOwn schema (Wed Nov 12 2025)
   */
export const TaxRateWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, percentRate: P.numFilter, fixedRate: P.numFilter, description: P.strFilter, effectiveFrom: P.datetimeFilter, effectiveTo: P.datetimeFilter, jurisdictionId: P.intFilter, productTypeId: P.intFilter, readonly: P.boolFilter }).partial()
export type TaxRateWhereOwnType = z.infer<typeof TaxRateWhereOwn>; 

  /**
   * LogWhereOwn schema (Wed Nov 12 2025)
   */
export const LogWhereOwn = z.object({ id: P.intFilter, timestamp: P.datetimeFilter, operatorId: P.strFilter, operatorType: OperatorTypeFilter, operationType: OperationTypeFilter, recordName: P.strFilter, recordId: P.intFilter, change: P.strFilter }).partial()
export type LogWhereOwnType = z.infer<typeof LogWhereOwn>; 

  /**
   * StoreWhere schema (Wed Nov 12 2025)
   */
export const StoreWhere = z.object({ ...StoreWhereOwn.shape,quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), serials: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), shelves: z.object({ 
          some: ShelfWhereOwn,
          every: ShelfWhereOwn,
          none: ShelfWhereOwn
        }).partial(),AND: StoreWhereOwn,OR:  StoreWhereOwn.array(),NOT: StoreWhereOwn.or(StoreWhereOwn.array()) }).partial()
export type StoreWhereType = z.infer<typeof StoreWhere>; 

  /**
   * ShelfWhere schema (Wed Nov 12 2025)
   */
export const ShelfWhere = z.object({ ...ShelfWhereOwn.shape,store: StoreWhereOwn.partial(),AND: ShelfWhereOwn,OR:  ShelfWhereOwn.array(),NOT: ShelfWhereOwn.or(ShelfWhereOwn.array()) }).partial()
export type ShelfWhereType = z.infer<typeof ShelfWhere>; 

  /**
   * CategoryWhere schema (Wed Nov 12 2025)
   */
export const CategoryWhere = z.object({ ...CategoryWhereOwn.shape,parent: CategoryWhereOwn.partial(), children: z.object({ 
          some: CategoryWhereOwn,
          every: CategoryWhereOwn,
          none: CategoryWhereOwn
        }).partial(), products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(),AND: CategoryWhereOwn,OR:  CategoryWhereOwn.array(),NOT: CategoryWhereOwn.or(CategoryWhereOwn.array()) }).partial()
export type CategoryWhereType = z.infer<typeof CategoryWhere>; 

  /**
   * TagWhere schema (Wed Nov 12 2025)
   */
export const TagWhere = z.object({ ...TagWhereOwn.shape,productTags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(),AND: TagWhereOwn,OR:  TagWhereOwn.array(),NOT: TagWhereOwn.or(TagWhereOwn.array()) }).partial()
export type TagWhereType = z.infer<typeof TagWhere>; 

  /**
   * ProductTagWhere schema (Wed Nov 12 2025)
   */
export const ProductTagWhere = z.object({ ...ProductTagWhereOwn.shape,product: ProductWhereOwn.partial(), tag: TagWhereOwn.partial(),AND: ProductTagWhereOwn,OR:  ProductTagWhereOwn.array(),NOT: ProductTagWhereOwn.or(ProductTagWhereOwn.array()) }).partial()
export type ProductTagWhereType = z.infer<typeof ProductTagWhere>; 

  /**
   * ProductWhere schema (Wed Nov 12 2025)
   */
export const ProductWhere = z.object({ ...ProductWhereOwn.shape,category: CategoryWhereOwn.partial(), type: ProductTypeWhereOwn.partial(), parent: ProductWhereOwn.partial(), variants: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), productTags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(), serialNumbers: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(),AND: ProductWhereOwn,OR:  ProductWhereOwn.array(),NOT: ProductWhereOwn.or(ProductWhereOwn.array()) }).partial()
export type ProductWhereType = z.infer<typeof ProductWhere>; 

  /**
   * QuantityWhere schema (Wed Nov 12 2025)
   */
export const QuantityWhere = z.object({ ...QuantityWhereOwn.shape,product: ProductWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: QuantityWhereOwn,OR:  QuantityWhereOwn.array(),NOT: QuantityWhereOwn.or(QuantityWhereOwn.array()) }).partial()
export type QuantityWhereType = z.infer<typeof QuantityWhere>; 

  /**
   * SerialNumberWhere schema (Wed Nov 12 2025)
   */
export const SerialNumberWhere = z.object({ ...SerialNumberWhereOwn.shape,product: ProductWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: SerialNumberWhereOwn,OR:  SerialNumberWhereOwn.array(),NOT: SerialNumberWhereOwn.or(SerialNumberWhereOwn.array()) }).partial()
export type SerialNumberWhereType = z.infer<typeof SerialNumberWhere>; 

  /**
   * PriceWhere schema (Wed Nov 12 2025)
   */
export const PriceWhere = z.object({ ...PriceWhereOwn.shape,product: ProductWhereOwn.partial(),AND: PriceWhereOwn,OR:  PriceWhereOwn.array(),NOT: PriceWhereOwn.or(PriceWhereOwn.array()) }).partial()
export type PriceWhereType = z.infer<typeof PriceWhere>; 

  /**
   * ProductTypeWhere schema (Wed Nov 12 2025)
   */
export const ProductTypeWhere = z.object({ ...ProductTypeWhereOwn.shape,products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), taxRates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(),AND: ProductTypeWhereOwn,OR:  ProductTypeWhereOwn.array(),NOT: ProductTypeWhereOwn.or(ProductTypeWhereOwn.array()) }).partial()
export type ProductTypeWhereType = z.infer<typeof ProductTypeWhere>; 

  /**
   * JurisdictionWhere schema (Wed Nov 12 2025)
   */
export const JurisdictionWhere = z.object({ ...JurisdictionWhereOwn.shape,parent: JurisdictionWhereOwn.partial(), children: z.object({ 
          some: JurisdictionWhereOwn,
          every: JurisdictionWhereOwn,
          none: JurisdictionWhereOwn
        }).partial(), taxRates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(),AND: JurisdictionWhereOwn,OR:  JurisdictionWhereOwn.array(),NOT: JurisdictionWhereOwn.or(JurisdictionWhereOwn.array()) }).partial()
export type JurisdictionWhereType = z.infer<typeof JurisdictionWhere>; 

  /**
   * TaxRateWhere schema (Wed Nov 12 2025)
   */
export const TaxRateWhere = z.object({ ...TaxRateWhereOwn.shape,jurisdiction: JurisdictionWhereOwn.partial(), productType: ProductTypeWhereOwn.partial(),AND: TaxRateWhereOwn,OR:  TaxRateWhereOwn.array(),NOT: TaxRateWhereOwn.or(TaxRateWhereOwn.array()) }).partial()
export type TaxRateWhereType = z.infer<typeof TaxRateWhere>; 

  /**
   * LogWhere schema (Wed Nov 12 2025)
   */
export const LogWhere = z.object({ ...LogWhereOwn.shape,AND: LogWhereOwn,OR:  LogWhereOwn.array(),NOT: LogWhereOwn.or(LogWhereOwn.array()) }).partial()
export type LogWhereType = z.infer<typeof LogWhere>; 

  /**
   * StoreQueryOwn schema (Wed Nov 12 2025)
   */
export const StoreQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: StoreField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, StoreOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, StoreWhere)
  }).partial()
export type StoreQueryOwnType = z.infer<typeof StoreQueryOwn>; 

  /**
   * ShelfQueryOwn schema (Wed Nov 12 2025)
   */
export const ShelfQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ShelfField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ShelfOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ShelfWhere)
  }).partial()
export type ShelfQueryOwnType = z.infer<typeof ShelfQueryOwn>; 

  /**
   * CategoryQueryOwn schema (Wed Nov 12 2025)
   */
export const CategoryQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: CategoryField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, CategoryOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryWhere)
  }).partial()
export type CategoryQueryOwnType = z.infer<typeof CategoryQueryOwn>; 

  /**
   * TagQueryOwn schema (Wed Nov 12 2025)
   */
export const TagQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: TagField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, TagOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, TagWhere)
  }).partial()
export type TagQueryOwnType = z.infer<typeof TagQueryOwn>; 

  /**
   * ProductTagQueryOwn schema (Wed Nov 12 2025)
   */
export const ProductTagQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ProductTagField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ProductTagOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTagWhere)
  }).partial()
export type ProductTagQueryOwnType = z.infer<typeof ProductTagQueryOwn>; 

  /**
   * ProductQueryOwn schema (Wed Nov 12 2025)
   */
export const ProductQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ProductField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ProductOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ProductWhere)
  }).partial()
export type ProductQueryOwnType = z.infer<typeof ProductQueryOwn>; 

  /**
   * QuantityQueryOwn schema (Wed Nov 12 2025)
   */
export const QuantityQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: QuantityField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, QuantityOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, QuantityWhere)
  }).partial()
export type QuantityQueryOwnType = z.infer<typeof QuantityQueryOwn>; 

  /**
   * SerialNumberQueryOwn schema (Wed Nov 12 2025)
   */
export const SerialNumberQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: SerialNumberField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, SerialNumberOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, SerialNumberWhere)
  }).partial()
export type SerialNumberQueryOwnType = z.infer<typeof SerialNumberQueryOwn>; 

  /**
   * PriceQueryOwn schema (Wed Nov 12 2025)
   */
export const PriceQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: PriceField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, PriceOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, PriceWhere)
  }).partial()
export type PriceQueryOwnType = z.infer<typeof PriceQueryOwn>; 

  /**
   * ProductTypeQueryOwn schema (Wed Nov 12 2025)
   */
export const ProductTypeQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ProductTypeField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ProductTypeOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeWhere)
  }).partial()
export type ProductTypeQueryOwnType = z.infer<typeof ProductTypeQueryOwn>; 

  /**
   * JurisdictionQueryOwn schema (Wed Nov 12 2025)
   */
export const JurisdictionQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: JurisdictionField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, JurisdictionOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, JurisdictionWhere)
  }).partial()
export type JurisdictionQueryOwnType = z.infer<typeof JurisdictionQueryOwn>; 

  /**
   * TaxRateQueryOwn schema (Wed Nov 12 2025)
   */
export const TaxRateQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: TaxRateField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, TaxRateOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, TaxRateWhere)
  }).partial()
export type TaxRateQueryOwnType = z.infer<typeof TaxRateQueryOwn>; 

  /**
   * LogQueryOwn schema (Wed Nov 12 2025)
   */
export const LogQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: LogField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, LogOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, LogWhere)
  }).partial()
export type LogQueryOwnType = z.infer<typeof LogQueryOwn>; 

  /**
   * StoreQueryOne schema (Wed Nov 12 2025)
   */
export const StoreQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, StoreInclude),
    where:    z.preprocess(P.parseJsonOrReturn, StoreWhere)
  }).partial()
export type StoreQueryOneType = z.infer<typeof StoreQueryOne>; 

  /**
   * ShelfQueryOne schema (Wed Nov 12 2025)
   */
export const ShelfQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ShelfSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ShelfInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ShelfWhere)
  }).partial()
export type ShelfQueryOneType = z.infer<typeof ShelfQueryOne>; 

  /**
   * CategoryQueryOne schema (Wed Nov 12 2025)
   */
export const CategoryQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategorySelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CategoryInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryWhere)
  }).partial()
export type CategoryQueryOneType = z.infer<typeof CategoryQueryOne>; 

  /**
   * TagQueryOne schema (Wed Nov 12 2025)
   */
export const TagQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TagSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, TagInclude),
    where:    z.preprocess(P.parseJsonOrReturn, TagWhere)
  }).partial()
export type TagQueryOneType = z.infer<typeof TagQueryOne>; 

  /**
   * ProductTagQueryOne schema (Wed Nov 12 2025)
   */
export const ProductTagQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTagInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTagWhere)
  }).partial()
export type ProductTagQueryOneType = z.infer<typeof ProductTagQueryOne>; 

  /**
   * ProductQueryOne schema (Wed Nov 12 2025)
   */
export const ProductQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductWhere)
  }).partial()
export type ProductQueryOneType = z.infer<typeof ProductQueryOne>; 

  /**
   * QuantityQueryOne schema (Wed Nov 12 2025)
   */
export const QuantityQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, QuantityInclude),
    where:    z.preprocess(P.parseJsonOrReturn, QuantityWhere)
  }).partial()
export type QuantityQueryOneType = z.infer<typeof QuantityQueryOne>; 

  /**
   * SerialNumberQueryOne schema (Wed Nov 12 2025)
   */
export const SerialNumberQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, SerialNumberInclude),
    where:    z.preprocess(P.parseJsonOrReturn, SerialNumberWhere)
  }).partial()
export type SerialNumberQueryOneType = z.infer<typeof SerialNumberQueryOne>; 

  /**
   * PriceQueryOne schema (Wed Nov 12 2025)
   */
export const PriceQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, PriceInclude),
    where:    z.preprocess(P.parseJsonOrReturn, PriceWhere)
  }).partial()
export type PriceQueryOneType = z.infer<typeof PriceQueryOne>; 

  /**
   * ProductTypeQueryOne schema (Wed Nov 12 2025)
   */
export const ProductTypeQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTypeInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeWhere)
  }).partial()
export type ProductTypeQueryOneType = z.infer<typeof ProductTypeQueryOne>; 

  /**
   * JurisdictionQueryOne schema (Wed Nov 12 2025)
   */
export const JurisdictionQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, JurisdictionInclude),
    where:    z.preprocess(P.parseJsonOrReturn, JurisdictionWhere)
  }).partial()
export type JurisdictionQueryOneType = z.infer<typeof JurisdictionQueryOne>; 

  /**
   * TaxRateQueryOne schema (Wed Nov 12 2025)
   */
export const TaxRateQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, TaxRateInclude),
    where:    z.preprocess(P.parseJsonOrReturn, TaxRateWhere)
  }).partial()
export type TaxRateQueryOneType = z.infer<typeof TaxRateQueryOne>; 

  /**
   * LogQueryOne schema (Wed Nov 12 2025)
   */
export const LogQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, LogInclude),
    where:    z.preprocess(P.parseJsonOrReturn, LogWhere)
  }).partial()
export type LogQueryOneType = z.infer<typeof LogQueryOne>; 

  /**
   * StoreQuery schema (Wed Nov 12 2025)
   */
export const StoreQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, StoreInclude   ),
    ...StoreQueryOwn.shape 
  }).partial()
export type StoreQueryType = z.infer<typeof StoreQuery>; 

  /**
   * ShelfQuery schema (Wed Nov 12 2025)
   */
export const ShelfQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ShelfSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ShelfInclude   ),
    ...ShelfQueryOwn.shape 
  }).partial()
export type ShelfQueryType = z.infer<typeof ShelfQuery>; 

  /**
   * CategoryQuery schema (Wed Nov 12 2025)
   */
export const CategoryQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategorySelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CategoryInclude   ),
    ...CategoryQueryOwn.shape 
  }).partial()
export type CategoryQueryType = z.infer<typeof CategoryQuery>; 

  /**
   * TagQuery schema (Wed Nov 12 2025)
   */
export const TagQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TagSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, TagInclude   ),
    ...TagQueryOwn.shape 
  }).partial()
export type TagQueryType = z.infer<typeof TagQuery>; 

  /**
   * ProductTagQuery schema (Wed Nov 12 2025)
   */
export const ProductTagQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTagInclude   ),
    ...ProductTagQueryOwn.shape 
  }).partial()
export type ProductTagQueryType = z.infer<typeof ProductTagQuery>; 

  /**
   * ProductQuery schema (Wed Nov 12 2025)
   */
export const ProductQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductInclude   ),
    ...ProductQueryOwn.shape 
  }).partial()
export type ProductQueryType = z.infer<typeof ProductQuery>; 

  /**
   * QuantityQuery schema (Wed Nov 12 2025)
   */
export const QuantityQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, QuantityInclude   ),
    ...QuantityQueryOwn.shape 
  }).partial()
export type QuantityQueryType = z.infer<typeof QuantityQuery>; 

  /**
   * SerialNumberQuery schema (Wed Nov 12 2025)
   */
export const SerialNumberQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, SerialNumberInclude   ),
    ...SerialNumberQueryOwn.shape 
  }).partial()
export type SerialNumberQueryType = z.infer<typeof SerialNumberQuery>; 

  /**
   * PriceQuery schema (Wed Nov 12 2025)
   */
export const PriceQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, PriceInclude   ),
    ...PriceQueryOwn.shape 
  }).partial()
export type PriceQueryType = z.infer<typeof PriceQuery>; 

  /**
   * ProductTypeQuery schema (Wed Nov 12 2025)
   */
export const ProductTypeQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTypeInclude   ),
    ...ProductTypeQueryOwn.shape 
  }).partial()
export type ProductTypeQueryType = z.infer<typeof ProductTypeQuery>; 

  /**
   * JurisdictionQuery schema (Wed Nov 12 2025)
   */
export const JurisdictionQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, JurisdictionInclude   ),
    ...JurisdictionQueryOwn.shape 
  }).partial()
export type JurisdictionQueryType = z.infer<typeof JurisdictionQuery>; 

  /**
   * TaxRateQuery schema (Wed Nov 12 2025)
   */
export const TaxRateQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, TaxRateInclude   ),
    ...TaxRateQueryOwn.shape 
  }).partial()
export type TaxRateQueryType = z.infer<typeof TaxRateQuery>; 

  /**
   * LogQuery schema (Wed Nov 12 2025)
   */
export const LogQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, LogInclude   ),
    ...LogQueryOwn.shape 
  }).partial()
export type LogQueryType = z.infer<typeof LogQuery>; 

  /**
   * StoreSelect schema (Wed Nov 12 2025)
   */
export const StoreSelect = z.object({...StoreSelectOwn.shape,  }).partial()
export type StoreSelectType = z.infer<typeof StoreSelect>; 

  /**
   * ShelfSelect schema (Wed Nov 12 2025)
   */
export const ShelfSelect = z.object({...ShelfSelectOwn.shape,  }).partial()
export type ShelfSelectType = z.infer<typeof ShelfSelect>; 

  /**
   * CategorySelect schema (Wed Nov 12 2025)
   */
export const CategorySelect = z.object({...CategorySelectOwn.shape,  }).partial()
export type CategorySelectType = z.infer<typeof CategorySelect>; 

  /**
   * TagSelect schema (Wed Nov 12 2025)
   */
export const TagSelect = z.object({...TagSelectOwn.shape,  }).partial()
export type TagSelectType = z.infer<typeof TagSelect>; 

  /**
   * ProductTagSelect schema (Wed Nov 12 2025)
   */
export const ProductTagSelect = z.object({...ProductTagSelectOwn.shape,  }).partial()
export type ProductTagSelectType = z.infer<typeof ProductTagSelect>; 

  /**
   * ProductSelect schema (Wed Nov 12 2025)
   */
export const ProductSelect = z.object({...ProductSelectOwn.shape,  }).partial()
export type ProductSelectType = z.infer<typeof ProductSelect>; 

  /**
   * QuantitySelect schema (Wed Nov 12 2025)
   */
export const QuantitySelect = z.object({...QuantitySelectOwn.shape,  }).partial()
export type QuantitySelectType = z.infer<typeof QuantitySelect>; 

  /**
   * SerialNumberSelect schema (Wed Nov 12 2025)
   */
export const SerialNumberSelect = z.object({...SerialNumberSelectOwn.shape,  }).partial()
export type SerialNumberSelectType = z.infer<typeof SerialNumberSelect>; 

  /**
   * PriceSelect schema (Wed Nov 12 2025)
   */
export const PriceSelect = z.object({...PriceSelectOwn.shape,  }).partial()
export type PriceSelectType = z.infer<typeof PriceSelect>; 

  /**
   * ProductTypeSelect schema (Wed Nov 12 2025)
   */
export const ProductTypeSelect = z.object({...ProductTypeSelectOwn.shape,  }).partial()
export type ProductTypeSelectType = z.infer<typeof ProductTypeSelect>; 

  /**
   * JurisdictionSelect schema (Wed Nov 12 2025)
   */
export const JurisdictionSelect = z.object({...JurisdictionSelectOwn.shape,  }).partial()
export type JurisdictionSelectType = z.infer<typeof JurisdictionSelect>; 

  /**
   * TaxRateSelect schema (Wed Nov 12 2025)
   */
export const TaxRateSelect = z.object({...TaxRateSelectOwn.shape,  }).partial()
export type TaxRateSelectType = z.infer<typeof TaxRateSelect>; 

  /**
   * LogSelect schema (Wed Nov 12 2025)
   */
export const LogSelect = z.object({...LogSelectOwn.shape,  }).partial()
export type LogSelectType = z.infer<typeof LogSelect>; 

  /**
   * StoreProjection schema (Wed Nov 12 2025)
   */
export const StoreProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, StoreSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, StoreInclude) }),
        z.object({})
    ])
export type StoreProjectionType = z.infer<typeof StoreProjection>; 

  /**
   * ShelfProjection schema (Wed Nov 12 2025)
   */
export const ShelfProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ShelfSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ShelfInclude) }),
        z.object({})
    ])
export type ShelfProjectionType = z.infer<typeof ShelfProjection>; 

  /**
   * CategoryProjection schema (Wed Nov 12 2025)
   */
export const CategoryProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CategorySelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CategoryInclude) }),
        z.object({})
    ])
export type CategoryProjectionType = z.infer<typeof CategoryProjection>; 

  /**
   * TagProjection schema (Wed Nov 12 2025)
   */
export const TagProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, TagSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, TagInclude) }),
        z.object({})
    ])
export type TagProjectionType = z.infer<typeof TagProjection>; 

  /**
   * ProductTagProjection schema (Wed Nov 12 2025)
   */
export const ProductTagProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTagInclude) }),
        z.object({})
    ])
export type ProductTagProjectionType = z.infer<typeof ProductTagProjection>; 

  /**
   * ProductProjection schema (Wed Nov 12 2025)
   */
export const ProductProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductInclude) }),
        z.object({})
    ])
export type ProductProjectionType = z.infer<typeof ProductProjection>; 

  /**
   * QuantityProjection schema (Wed Nov 12 2025)
   */
export const QuantityProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, QuantitySelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, QuantityInclude) }),
        z.object({})
    ])
export type QuantityProjectionType = z.infer<typeof QuantityProjection>; 

  /**
   * SerialNumberProjection schema (Wed Nov 12 2025)
   */
export const SerialNumberProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, SerialNumberInclude) }),
        z.object({})
    ])
export type SerialNumberProjectionType = z.infer<typeof SerialNumberProjection>; 

  /**
   * PriceProjection schema (Wed Nov 12 2025)
   */
export const PriceProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, PriceSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, PriceInclude) }),
        z.object({})
    ])
export type PriceProjectionType = z.infer<typeof PriceProjection>; 

  /**
   * ProductTypeProjection schema (Wed Nov 12 2025)
   */
export const ProductTypeProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTypeInclude) }),
        z.object({})
    ])
export type ProductTypeProjectionType = z.infer<typeof ProductTypeProjection>; 

  /**
   * JurisdictionProjection schema (Wed Nov 12 2025)
   */
export const JurisdictionProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, JurisdictionInclude) }),
        z.object({})
    ])
export type JurisdictionProjectionType = z.infer<typeof JurisdictionProjection>; 

  /**
   * TaxRateProjection schema (Wed Nov 12 2025)
   */
export const TaxRateProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, TaxRateInclude) }),
        z.object({})
    ])
export type TaxRateProjectionType = z.infer<typeof TaxRateProjection>; 

  /**
   * LogProjection schema (Wed Nov 12 2025)
   */
export const LogProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, LogSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, LogInclude) }),
        z.object({})
    ])
export type LogProjectionType = z.infer<typeof LogProjection>; 

  /**
   * StoreCreateOwn schema (Wed Nov 12 2025)
   */
export const StoreCreateOwn = z.object({ name: P.short,slug: P.slug,readonly: P.bool.optional() })
export type StoreCreateOwnType = z.infer<typeof StoreCreateOwn>; 

  /**
   * ShelfCreateOwn schema (Wed Nov 12 2025)
   */
export const ShelfCreateOwn = z.object({ name: P.short,aisle: P.str,rack: P.int,level: P.int,storeId: P.int,readonly: P.bool.optional() })
export type ShelfCreateOwnType = z.infer<typeof ShelfCreateOwn>; 

  /**
   * CategoryCreateOwn schema (Wed Nov 12 2025)
   */
export const CategoryCreateOwn = z.object({ name: P.short,slug: P.slug,readonly: P.bool.optional() })
export type CategoryCreateOwnType = z.infer<typeof CategoryCreateOwn>; 

  /**
   * TagCreateOwn schema (Wed Nov 12 2025)
   */
export const TagCreateOwn = z.object({ name: P.short })
export type TagCreateOwnType = z.infer<typeof TagCreateOwn>; 

  /**
   * ProductTagCreateOwn schema (Wed Nov 12 2025)
   */
export const ProductTagCreateOwn = z.object({ productId: P.int,tagId: P.int })
export type ProductTagCreateOwnType = z.infer<typeof ProductTagCreateOwn>; 

  /**
   * ProductCreateOwn schema (Wed Nov 12 2025)
   */
export const ProductCreateOwn = z.object({ name: P.short,slug: P.slug,sku: P.str,upc: P.str,typeId: P.int,readonly: P.bool.optional() })
export type ProductCreateOwnType = z.infer<typeof ProductCreateOwn>; 

  /**
   * QuantityCreateOwn schema (Wed Nov 12 2025)
   */
export const QuantityCreateOwn = z.object({ quantity: P.int,productId: P.int,storeId: P.int,readonly: P.bool.optional() })
export type QuantityCreateOwnType = z.infer<typeof QuantityCreateOwn>; 

  /**
   * SerialNumberCreateOwn schema (Wed Nov 12 2025)
   */
export const SerialNumberCreateOwn = z.object({ serialNumber: P.str,isInStock: P.bool.optional(),productId: P.int,storeId: P.int,readonly: P.bool.optional() })
export type SerialNumberCreateOwnType = z.infer<typeof SerialNumberCreateOwn>; 

  /**
   * PriceCreateOwn schema (Wed Nov 12 2025)
   */
export const PriceCreateOwn = z.object({ price: P.currency,effectiveFrom: P.datetime,productId: P.int,readonly: P.bool.optional() })
export type PriceCreateOwnType = z.infer<typeof PriceCreateOwn>; 

  /**
   * ProductTypeCreateOwn schema (Wed Nov 12 2025)
   */
export const ProductTypeCreateOwn = z.object({ name: P.short,readonly: P.bool.optional() })
export type ProductTypeCreateOwnType = z.infer<typeof ProductTypeCreateOwn>; 

  /**
   * JurisdictionCreateOwn schema (Wed Nov 12 2025)
   */
export const JurisdictionCreateOwn = z.object({ fipsCode: P.str,name: P.short,level: P.str,readonly: P.bool.optional() })
export type JurisdictionCreateOwnType = z.infer<typeof JurisdictionCreateOwn>; 

  /**
   * TaxRateCreateOwn schema (Wed Nov 12 2025)
   */
export const TaxRateCreateOwn = z.object({ percentRate: P.num,fixedRate: P.num,effectiveFrom: P.datetime,jurisdictionId: P.int,productTypeId: P.int,readonly: P.bool.optional() })
export type TaxRateCreateOwnType = z.infer<typeof TaxRateCreateOwn>; 

  /**
   * LogCreateOwn schema (Wed Nov 12 2025)
   */
export const LogCreateOwn = z.object({ timestamp: P.datetime.optional(),operatorId: P.str,operatorType: OperatorType,operationType: OperationType,recordName: P.str,recordId: P.int,change: P.json })
export type LogCreateOwnType = z.infer<typeof LogCreateOwn>; 

  /**
   * StoreCreate schema (Wed Nov 12 2025)
   */
export const StoreCreate = z.object({ name: P.short, description: P.long.optional(), slug: P.slug, quantities: P.connectMany.optional(), serials: P.connectMany.optional(), shelves: P.connectMany.optional(), readonly: P.bool.optional() })
export type StoreCreateType = z.infer<typeof StoreCreate>; 

  /**
   * StoreUpdate schema (Wed Nov 12 2025)
   */
export const StoreUpdate = StoreCreate.clone().partial()
export type StoreUpdateType = z.infer<typeof StoreUpdate>; 

  /**
   * ShelfCreate schema (Wed Nov 12 2025)
   */
export const ShelfCreate = z.object({ name: P.short, description: P.long.optional(), aisle: P.str, rack: P.int, level: P.int, storeId: P.int, readonly: P.bool.optional() })
export type ShelfCreateType = z.infer<typeof ShelfCreate>; 

  /**
   * ShelfUpdate schema (Wed Nov 12 2025)
   */
export const ShelfUpdate = ShelfCreate.clone().partial()
export type ShelfUpdateType = z.infer<typeof ShelfUpdate>; 

  /**
   * CategoryCreate schema (Wed Nov 12 2025)
   */
export const CategoryCreate = z.object({ name: P.short, description: P.long.optional(), slug: P.slug, parentId: P.int.optional(), children: P.connectMany.optional(), products: P.connectMany.optional(), readonly: P.bool.optional() })
export type CategoryCreateType = z.infer<typeof CategoryCreate>; 

  /**
   * CategoryUpdate schema (Wed Nov 12 2025)
   */
export const CategoryUpdate = CategoryCreate.clone().partial()
export type CategoryUpdateType = z.infer<typeof CategoryUpdate>; 

  /**
   * TagCreate schema (Wed Nov 12 2025)
   */
export const TagCreate = z.object({ name: P.short, productTags: P.connectMany.optional() })
export type TagCreateType = z.infer<typeof TagCreate>; 

  /**
   * TagUpdate schema (Wed Nov 12 2025)
   */
export const TagUpdate = TagCreate.clone().partial()
export type TagUpdateType = z.infer<typeof TagUpdate>; 

  /**
   * ProductTagCreate schema (Wed Nov 12 2025)
   */
export const ProductTagCreate = z.object({ productId: P.int, tagId: P.int })
export type ProductTagCreateType = z.infer<typeof ProductTagCreate>; 

  /**
   * ProductTagUpdate schema (Wed Nov 12 2025)
   */
export const ProductTagUpdate = ProductTagCreate.clone().partial()
export type ProductTagUpdateType = z.infer<typeof ProductTagUpdate>; 

  /**
   * ProductCreate schema (Wed Nov 12 2025)
   */
export const ProductCreate = z.object({ name: P.short, description: P.long.optional(), slug: P.slug, sku: P.str, upc: P.str, model: P.str.optional(), categoryId: P.int.optional(), typeId: P.int, parentId: P.int.optional(), variants: P.connectMany.optional(), quantities: P.connectMany.optional(), prices: P.connectMany.optional(), productTags: P.connectMany.optional(), serialNumbers: P.connectMany.optional(), readonly: P.bool.optional() })
export type ProductCreateType = z.infer<typeof ProductCreate>; 

  /**
   * ProductUpdate schema (Wed Nov 12 2025)
   */
export const ProductUpdate = ProductCreate.clone().partial()
export type ProductUpdateType = z.infer<typeof ProductUpdate>; 

  /**
   * QuantityCreate schema (Wed Nov 12 2025)
   */
export const QuantityCreate = z.object({ quantity: P.int, minQuantity: P.int.optional(), productId: P.int, storeId: P.int, readonly: P.bool.optional() })
export type QuantityCreateType = z.infer<typeof QuantityCreate>; 

  /**
   * QuantityUpdate schema (Wed Nov 12 2025)
   */
export const QuantityUpdate = QuantityCreate.clone().partial()
export type QuantityUpdateType = z.infer<typeof QuantityUpdate>; 

  /**
   * SerialNumberCreate schema (Wed Nov 12 2025)
   */
export const SerialNumberCreate = z.object({ serialNumber: P.str, isInStock: P.bool.optional(), productId: P.int, storeId: P.int, readonly: P.bool.optional() })
export type SerialNumberCreateType = z.infer<typeof SerialNumberCreate>; 

  /**
   * SerialNumberUpdate schema (Wed Nov 12 2025)
   */
export const SerialNumberUpdate = SerialNumberCreate.clone().partial()
export type SerialNumberUpdateType = z.infer<typeof SerialNumberUpdate>; 

  /**
   * PriceCreate schema (Wed Nov 12 2025)
   */
export const PriceCreate = z.object({ price: P.currency, effectiveFrom: P.datetime, effectiveTo: P.datetime.optional(), productId: P.int, readonly: P.bool.optional() })
export type PriceCreateType = z.infer<typeof PriceCreate>; 

  /**
   * PriceUpdate schema (Wed Nov 12 2025)
   */
export const PriceUpdate = PriceCreate.clone().partial()
export type PriceUpdateType = z.infer<typeof PriceUpdate>; 

  /**
   * ProductTypeCreate schema (Wed Nov 12 2025)
   */
export const ProductTypeCreate = z.object({ name: P.short, description: P.long.optional(), products: P.connectMany.optional(), taxRates: P.connectMany.optional(), readonly: P.bool.optional() })
export type ProductTypeCreateType = z.infer<typeof ProductTypeCreate>; 

  /**
   * ProductTypeUpdate schema (Wed Nov 12 2025)
   */
export const ProductTypeUpdate = ProductTypeCreate.clone().partial()
export type ProductTypeUpdateType = z.infer<typeof ProductTypeUpdate>; 

  /**
   * JurisdictionCreate schema (Wed Nov 12 2025)
   */
export const JurisdictionCreate = z.object({ fipsCode: P.str, name: P.short, level: P.str, parentId: P.int.optional(), children: P.connectMany.optional(), taxRates: P.connectMany.optional(), readonly: P.bool.optional() })
export type JurisdictionCreateType = z.infer<typeof JurisdictionCreate>; 

  /**
   * JurisdictionUpdate schema (Wed Nov 12 2025)
   */
export const JurisdictionUpdate = JurisdictionCreate.clone().partial()
export type JurisdictionUpdateType = z.infer<typeof JurisdictionUpdate>; 

  /**
   * TaxRateCreate schema (Wed Nov 12 2025)
   */
export const TaxRateCreate = z.object({ percentRate: P.num, fixedRate: P.num, description: P.long.optional(), effectiveFrom: P.datetime, effectiveTo: P.datetime.optional(), jurisdictionId: P.int, productTypeId: P.int, readonly: P.bool.optional() })
export type TaxRateCreateType = z.infer<typeof TaxRateCreate>; 

  /**
   * TaxRateUpdate schema (Wed Nov 12 2025)
   */
export const TaxRateUpdate = TaxRateCreate.clone().partial()
export type TaxRateUpdateType = z.infer<typeof TaxRateUpdate>; 

  /**
   * LogCreate schema (Wed Nov 12 2025)
   */
export const LogCreate = z.object({ timestamp: P.datetime.optional(), operatorId: P.str, operatorType: OperatorType, operationType: OperationType, recordName: P.str, recordId: P.int, change: P.json })
export type LogCreateType = z.infer<typeof LogCreate>; 

  /**
   * LogUpdate schema (Wed Nov 12 2025)
   */
export const LogUpdate = LogCreate.clone().partial()
export type LogUpdateType = z.infer<typeof LogUpdate>; 