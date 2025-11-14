import { z } from 'zod';
import * as P from '@puq/zod';

  /**
   * DiscountType schema (Fri Nov 14 2025)
   */
export const DiscountType = z.enum([ 'FIXED_VALUE', 'PERCENT_VALUE', 'FREE_SHIPPING', 'NEXT_PURCHASE' ])
export type DiscountTypeType = z.infer<typeof DiscountType>; 

  /**
   * DiscountTarget schema (Fri Nov 14 2025)
   */
export const DiscountTarget = z.enum([ 'ALL_PRODUCTS', 'SINGLE_PRODUCT', 'PRODUCT_CATEGORY', 'PRODUCT_TYPE' ])
export type DiscountTargetType = z.infer<typeof DiscountTarget>; 

  /**
   * OperatorType schema (Fri Nov 14 2025)
   */
export const OperatorType = z.enum([ 'USER', 'SYSTEM' ])
export type OperatorTypeType = z.infer<typeof OperatorType>; 

  /**
   * UserField schema (Fri Nov 14 2025)
   */
export const UserField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'displayName', 'updatedById' ])
export type UserFieldType = z.infer<typeof UserField>; 

  /**
   * CustomerField schema (Fri Nov 14 2025)
   */
export const CustomerField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly' ])
export type CustomerFieldType = z.infer<typeof CustomerField>; 

  /**
   * CustomerGroupField schema (Fri Nov 14 2025)
   */
export const CustomerGroupField = z.enum([ 'id', 'uuid', 'displayName', 'createdAt', 'updatedAt', 'deletedAt', 'readonly', 'updatedById' ])
export type CustomerGroupFieldType = z.infer<typeof CustomerGroupField>; 

  /**
   * StoreField schema (Fri Nov 14 2025)
   */
export const StoreField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'slug', 'readonly', 'updatedById' ])
export type StoreFieldType = z.infer<typeof StoreField>; 

  /**
   * ShelfField schema (Fri Nov 14 2025)
   */
export const ShelfField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'description', 'aisle', 'rack', 'level', 'storeId', 'readonly' ])
export type ShelfFieldType = z.infer<typeof ShelfField>; 

  /**
   * CategoryField schema (Fri Nov 14 2025)
   */
export const CategoryField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'description', 'slug', 'parentId', 'readonly' ])
export type CategoryFieldType = z.infer<typeof CategoryField>; 

  /**
   * TagField schema (Fri Nov 14 2025)
   */
export const TagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'slug' ])
export type TagFieldType = z.infer<typeof TagField>; 

  /**
   * ProductTagField schema (Fri Nov 14 2025)
   */
export const ProductTagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'productId', 'tagId' ])
export type ProductTagFieldType = z.infer<typeof ProductTagField>; 

  /**
   * ProductField schema (Fri Nov 14 2025)
   */
export const ProductField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'description', 'slug', 'sku', 'upc', 'model', 'categoryId', 'typeId', 'parentId', 'readonly' ])
export type ProductFieldType = z.infer<typeof ProductField>; 

  /**
   * QuantityField schema (Fri Nov 14 2025)
   */
export const QuantityField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'quantity', 'minQuantity', 'productId', 'storeId', 'readonly' ])
export type QuantityFieldType = z.infer<typeof QuantityField>; 

  /**
   * SerialNumberField schema (Fri Nov 14 2025)
   */
export const SerialNumberField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'serialNumber', 'isInStock', 'productId', 'storeId', 'readonly' ])
export type SerialNumberFieldType = z.infer<typeof SerialNumberField>; 

  /**
   * PriceField schema (Fri Nov 14 2025)
   */
export const PriceField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'price', 'effectiveFrom', 'effectiveTo', 'productId', 'readonly' ])
export type PriceFieldType = z.infer<typeof PriceField>; 

  /**
   * DiscountField schema (Fri Nov 14 2025)
   */
export const DiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'code', 'description', 'discountValue', 'minQuantity', 'minSubtotal', 'effectiveFrom', 'effectiveTo', 'target', 'productId', 'readonly' ])
export type DiscountFieldType = z.infer<typeof DiscountField>; 

  /**
   * ProductDiscountField schema (Fri Nov 14 2025)
   */
export const ProductDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'productId', 'discountId', 'readonly' ])
export type ProductDiscountFieldType = z.infer<typeof ProductDiscountField>; 

  /**
   * StoreDiscountField schema (Fri Nov 14 2025)
   */
export const StoreDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'discountId', 'storeId', 'readonly' ])
export type StoreDiscountFieldType = z.infer<typeof StoreDiscountField>; 

  /**
   * CategoryDiscountField schema (Fri Nov 14 2025)
   */
export const CategoryDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'categoryId', 'discountId', 'readonly' ])
export type CategoryDiscountFieldType = z.infer<typeof CategoryDiscountField>; 

  /**
   * ProductTypeDiscountField schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'productTypeId', 'discountId', 'readonly' ])
export type ProductTypeDiscountFieldType = z.infer<typeof ProductTypeDiscountField>; 

  /**
   * CustomerDiscountField schema (Fri Nov 14 2025)
   */
export const CustomerDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'customerId', 'discountId', 'readonly' ])
export type CustomerDiscountFieldType = z.infer<typeof CustomerDiscountField>; 

  /**
   * CustomerGroupDiscountField schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'customerGroupId', 'discountId' ])
export type CustomerGroupDiscountFieldType = z.infer<typeof CustomerGroupDiscountField>; 

  /**
   * ProductTypeField schema (Fri Nov 14 2025)
   */
export const ProductTypeField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'description', 'readonly' ])
export type ProductTypeFieldType = z.infer<typeof ProductTypeField>; 

  /**
   * JurisdictionField schema (Fri Nov 14 2025)
   */
export const JurisdictionField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'fipsCode', 'name', 'level', 'parentId', 'readonly', 'updatedById' ])
export type JurisdictionFieldType = z.infer<typeof JurisdictionField>; 

  /**
   * TaxRateField schema (Fri Nov 14 2025)
   */
export const TaxRateField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'percentRate', 'fixedRate', 'description', 'effectiveFrom', 'effectiveTo', 'jurisdictionId', 'productTypeId', 'readonly' ])
export type TaxRateFieldType = z.infer<typeof TaxRateField>; 

  /**
   * LogField schema (Fri Nov 14 2025)
   */
export const LogField = z.enum([ 'id', 'timestamp', 'operatorId', 'operatorType', 'operationName', 'recordName', 'recordId', 'difference', 'readonly', 'successful' ])
export type LogFieldType = z.infer<typeof LogField>; 

  /**
   * DiscountTypeFilter schema (Fri Nov 14 2025)
   */
export const DiscountTypeFilter = z.object({ 
      equals: DiscountType,
      in: DiscountType.array(),
      not: DiscountType,
      notIn: DiscountType.array()
  }).partial()
export type DiscountTypeFilterType = z.infer<typeof DiscountTypeFilter>; 

  /**
   * DiscountTypeArrayFilter schema (Fri Nov 14 2025)
   */
export const DiscountTypeArrayFilter = z.object({ 
      equals: DiscountType.array(),
      has: DiscountType,
      hasEvery: DiscountType.array(),
      hasSome: DiscountType.array(),
      isEmpty: P.bool
    }).partial()
export type DiscountTypeArrayFilterType = z.infer<typeof DiscountTypeArrayFilter>; 

  /**
   * DiscountTargetFilter schema (Fri Nov 14 2025)
   */
export const DiscountTargetFilter = z.object({ 
      equals: DiscountTarget,
      in: DiscountTarget.array(),
      not: DiscountTarget,
      notIn: DiscountTarget.array()
  }).partial()
export type DiscountTargetFilterType = z.infer<typeof DiscountTargetFilter>; 

  /**
   * DiscountTargetArrayFilter schema (Fri Nov 14 2025)
   */
export const DiscountTargetArrayFilter = z.object({ 
      equals: DiscountTarget.array(),
      has: DiscountTarget,
      hasEvery: DiscountTarget.array(),
      hasSome: DiscountTarget.array(),
      isEmpty: P.bool
    }).partial()
export type DiscountTargetArrayFilterType = z.infer<typeof DiscountTargetArrayFilter>; 

  /**
   * OperatorTypeFilter schema (Fri Nov 14 2025)
   */
export const OperatorTypeFilter = z.object({ 
      equals: OperatorType,
      in: OperatorType.array(),
      not: OperatorType,
      notIn: OperatorType.array()
  }).partial()
export type OperatorTypeFilterType = z.infer<typeof OperatorTypeFilter>; 

  /**
   * OperatorTypeArrayFilter schema (Fri Nov 14 2025)
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
   * UserOmit schema (Fri Nov 14 2025)
   */
export const UserOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, displayName: P.bool, updatedById: P.bool }).partial()
export type UserOmitType = z.infer<typeof UserOmit>; 

  /**
   * CustomerOmit schema (Fri Nov 14 2025)
   */
export const CustomerOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool }).partial()
export type CustomerOmitType = z.infer<typeof CustomerOmit>; 

  /**
   * CustomerGroupOmit schema (Fri Nov 14 2025)
   */
export const CustomerGroupOmit = z.object({ id: P.bool, uuid: P.bool, displayName: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, readonly: P.bool, updatedById: P.bool }).partial()
export type CustomerGroupOmitType = z.infer<typeof CustomerGroupOmit>; 

  /**
   * StoreOmit schema (Fri Nov 14 2025)
   */
export const StoreOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, name: P.bool, description: P.bool, slug: P.bool, readonly: P.bool, updatedById: P.bool }).partial()
export type StoreOmitType = z.infer<typeof StoreOmit>; 

  /**
   * ShelfOmit schema (Fri Nov 14 2025)
   */
export const ShelfOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, description: P.bool, aisle: P.bool, rack: P.bool, level: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type ShelfOmitType = z.infer<typeof ShelfOmit>; 

  /**
   * CategoryOmit schema (Fri Nov 14 2025)
   */
export const CategoryOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, description: P.bool, slug: P.bool, parentId: P.bool, readonly: P.bool }).partial()
export type CategoryOmitType = z.infer<typeof CategoryOmit>; 

  /**
   * TagOmit schema (Fri Nov 14 2025)
   */
export const TagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, slug: P.bool }).partial()
export type TagOmitType = z.infer<typeof TagOmit>; 

  /**
   * ProductTagOmit schema (Fri Nov 14 2025)
   */
export const ProductTagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, productId: P.bool, tagId: P.bool }).partial()
export type ProductTagOmitType = z.infer<typeof ProductTagOmit>; 

  /**
   * ProductOmit schema (Fri Nov 14 2025)
   */
export const ProductOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, description: P.bool, slug: P.bool, sku: P.bool, upc: P.bool, model: P.bool, categoryId: P.bool, typeId: P.bool, parentId: P.bool, readonly: P.bool }).partial()
export type ProductOmitType = z.infer<typeof ProductOmit>; 

  /**
   * QuantityOmit schema (Fri Nov 14 2025)
   */
export const QuantityOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, quantity: P.bool, minQuantity: P.bool, productId: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type QuantityOmitType = z.infer<typeof QuantityOmit>; 

  /**
   * SerialNumberOmit schema (Fri Nov 14 2025)
   */
export const SerialNumberOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, serialNumber: P.bool, isInStock: P.bool, productId: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type SerialNumberOmitType = z.infer<typeof SerialNumberOmit>; 

  /**
   * PriceOmit schema (Fri Nov 14 2025)
   */
export const PriceOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, price: P.bool, effectiveFrom: P.bool, effectiveTo: P.bool, productId: P.bool, readonly: P.bool }).partial()
export type PriceOmitType = z.infer<typeof PriceOmit>; 

  /**
   * DiscountOmit schema (Fri Nov 14 2025)
   */
export const DiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, code: P.bool, description: P.bool, discountValue: P.bool, minQuantity: P.bool, minSubtotal: P.bool, effectiveFrom: P.bool, effectiveTo: P.bool, target: P.bool, productId: P.bool, readonly: P.bool }).partial()
export type DiscountOmitType = z.infer<typeof DiscountOmit>; 

  /**
   * ProductDiscountOmit schema (Fri Nov 14 2025)
   */
export const ProductDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, productId: P.bool, discountId: P.bool, readonly: P.bool }).partial()
export type ProductDiscountOmitType = z.infer<typeof ProductDiscountOmit>; 

  /**
   * StoreDiscountOmit schema (Fri Nov 14 2025)
   */
export const StoreDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, discountId: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type StoreDiscountOmitType = z.infer<typeof StoreDiscountOmit>; 

  /**
   * CategoryDiscountOmit schema (Fri Nov 14 2025)
   */
export const CategoryDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, categoryId: P.bool, discountId: P.bool, readonly: P.bool }).partial()
export type CategoryDiscountOmitType = z.infer<typeof CategoryDiscountOmit>; 

  /**
   * ProductTypeDiscountOmit schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, productTypeId: P.bool, discountId: P.bool, readonly: P.bool }).partial()
export type ProductTypeDiscountOmitType = z.infer<typeof ProductTypeDiscountOmit>; 

  /**
   * CustomerDiscountOmit schema (Fri Nov 14 2025)
   */
export const CustomerDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, customerId: P.bool, discountId: P.bool, readonly: P.bool }).partial()
export type CustomerDiscountOmitType = z.infer<typeof CustomerDiscountOmit>; 

  /**
   * CustomerGroupDiscountOmit schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, customerGroupId: P.bool, discountId: P.bool }).partial()
export type CustomerGroupDiscountOmitType = z.infer<typeof CustomerGroupDiscountOmit>; 

  /**
   * ProductTypeOmit schema (Fri Nov 14 2025)
   */
export const ProductTypeOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, description: P.bool, readonly: P.bool }).partial()
export type ProductTypeOmitType = z.infer<typeof ProductTypeOmit>; 

  /**
   * JurisdictionOmit schema (Fri Nov 14 2025)
   */
export const JurisdictionOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, fipsCode: P.bool, name: P.bool, level: P.bool, parentId: P.bool, readonly: P.bool, updatedById: P.bool }).partial()
export type JurisdictionOmitType = z.infer<typeof JurisdictionOmit>; 

  /**
   * TaxRateOmit schema (Fri Nov 14 2025)
   */
export const TaxRateOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, percentRate: P.bool, fixedRate: P.bool, description: P.bool, effectiveFrom: P.bool, effectiveTo: P.bool, jurisdictionId: P.bool, productTypeId: P.bool, readonly: P.bool }).partial()
export type TaxRateOmitType = z.infer<typeof TaxRateOmit>; 

  /**
   * LogOmit schema (Fri Nov 14 2025)
   */
export const LogOmit = z.object({ id: P.bool, timestamp: P.bool, operatorId: P.bool, operatorType: P.bool, operationName: P.bool, recordName: P.bool, recordId: P.bool, difference: P.bool, readonly: P.bool, successful: P.bool }).partial()
export type LogOmitType = z.infer<typeof LogOmit>; 

  /**
   * UserSelectOwn schema (Fri Nov 14 2025)
   */
export const UserSelectOwn = UserOmit
export type UserSelectOwnType = z.infer<typeof UserSelectOwn>; 

  /**
   * CustomerSelectOwn schema (Fri Nov 14 2025)
   */
export const CustomerSelectOwn = CustomerOmit
export type CustomerSelectOwnType = z.infer<typeof CustomerSelectOwn>; 

  /**
   * CustomerGroupSelectOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupSelectOwn = CustomerGroupOmit
export type CustomerGroupSelectOwnType = z.infer<typeof CustomerGroupSelectOwn>; 

  /**
   * StoreSelectOwn schema (Fri Nov 14 2025)
   */
export const StoreSelectOwn = StoreOmit
export type StoreSelectOwnType = z.infer<typeof StoreSelectOwn>; 

  /**
   * ShelfSelectOwn schema (Fri Nov 14 2025)
   */
export const ShelfSelectOwn = ShelfOmit
export type ShelfSelectOwnType = z.infer<typeof ShelfSelectOwn>; 

  /**
   * CategorySelectOwn schema (Fri Nov 14 2025)
   */
export const CategorySelectOwn = CategoryOmit
export type CategorySelectOwnType = z.infer<typeof CategorySelectOwn>; 

  /**
   * TagSelectOwn schema (Fri Nov 14 2025)
   */
export const TagSelectOwn = TagOmit
export type TagSelectOwnType = z.infer<typeof TagSelectOwn>; 

  /**
   * ProductTagSelectOwn schema (Fri Nov 14 2025)
   */
export const ProductTagSelectOwn = ProductTagOmit
export type ProductTagSelectOwnType = z.infer<typeof ProductTagSelectOwn>; 

  /**
   * ProductSelectOwn schema (Fri Nov 14 2025)
   */
export const ProductSelectOwn = ProductOmit
export type ProductSelectOwnType = z.infer<typeof ProductSelectOwn>; 

  /**
   * QuantitySelectOwn schema (Fri Nov 14 2025)
   */
export const QuantitySelectOwn = QuantityOmit
export type QuantitySelectOwnType = z.infer<typeof QuantitySelectOwn>; 

  /**
   * SerialNumberSelectOwn schema (Fri Nov 14 2025)
   */
export const SerialNumberSelectOwn = SerialNumberOmit
export type SerialNumberSelectOwnType = z.infer<typeof SerialNumberSelectOwn>; 

  /**
   * PriceSelectOwn schema (Fri Nov 14 2025)
   */
export const PriceSelectOwn = PriceOmit
export type PriceSelectOwnType = z.infer<typeof PriceSelectOwn>; 

  /**
   * DiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const DiscountSelectOwn = DiscountOmit
export type DiscountSelectOwnType = z.infer<typeof DiscountSelectOwn>; 

  /**
   * ProductDiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const ProductDiscountSelectOwn = ProductDiscountOmit
export type ProductDiscountSelectOwnType = z.infer<typeof ProductDiscountSelectOwn>; 

  /**
   * StoreDiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const StoreDiscountSelectOwn = StoreDiscountOmit
export type StoreDiscountSelectOwnType = z.infer<typeof StoreDiscountSelectOwn>; 

  /**
   * CategoryDiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const CategoryDiscountSelectOwn = CategoryDiscountOmit
export type CategoryDiscountSelectOwnType = z.infer<typeof CategoryDiscountSelectOwn>; 

  /**
   * ProductTypeDiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountSelectOwn = ProductTypeDiscountOmit
export type ProductTypeDiscountSelectOwnType = z.infer<typeof ProductTypeDiscountSelectOwn>; 

  /**
   * CustomerDiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const CustomerDiscountSelectOwn = CustomerDiscountOmit
export type CustomerDiscountSelectOwnType = z.infer<typeof CustomerDiscountSelectOwn>; 

  /**
   * CustomerGroupDiscountSelectOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountSelectOwn = CustomerGroupDiscountOmit
export type CustomerGroupDiscountSelectOwnType = z.infer<typeof CustomerGroupDiscountSelectOwn>; 

  /**
   * ProductTypeSelectOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeSelectOwn = ProductTypeOmit
export type ProductTypeSelectOwnType = z.infer<typeof ProductTypeSelectOwn>; 

  /**
   * JurisdictionSelectOwn schema (Fri Nov 14 2025)
   */
export const JurisdictionSelectOwn = JurisdictionOmit
export type JurisdictionSelectOwnType = z.infer<typeof JurisdictionSelectOwn>; 

  /**
   * TaxRateSelectOwn schema (Fri Nov 14 2025)
   */
export const TaxRateSelectOwn = TaxRateOmit
export type TaxRateSelectOwnType = z.infer<typeof TaxRateSelectOwn>; 

  /**
   * LogSelectOwn schema (Fri Nov 14 2025)
   */
export const LogSelectOwn = LogOmit
export type LogSelectOwnType = z.infer<typeof LogSelectOwn>; 

  /**
   * UserInclude schema (Fri Nov 14 2025)
   */
export const UserInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), updatedCustomers: z.object({ select :CustomerSelectOwn }).or(P.bool), updatedStores: z.object({ select :StoreSelectOwn }).or(P.bool), updatedShelves: z.object({ select :ShelfSelectOwn }).or(P.bool), updatedCategories: z.object({ select :CategorySelectOwn }).or(P.bool), updatedTags: z.object({ select :TagSelectOwn }).or(P.bool), updatedProducttags: z.object({ select :ProductTagSelectOwn }).or(P.bool), updatedProducts: z.object({ select :ProductSelectOwn }).or(P.bool), updatedQuantities: z.object({ select :QuantitySelectOwn }).or(P.bool), updatedSerialnumbers: z.object({ select :SerialNumberSelectOwn }).or(P.bool), updatedPrices: z.object({ select :PriceSelectOwn }).or(P.bool), updatedDiscounts: z.object({ select :DiscountSelectOwn }).or(P.bool), updatedProducttypes: z.object({ select :ProductTypeSelectOwn }).or(P.bool), updatedJurisdictions: z.object({ select :JurisdictionSelectOwn }).or(P.bool), updatedTaxrates: z.object({ select :TaxRateSelectOwn }).or(P.bool), updatedUsers: z.object({ select :UserSelectOwn }).or(P.bool), updatedCustomerGroups: z.object({ select :CustomerGroupSelectOwn }).or(P.bool) }).partial()
export type UserIncludeType = z.infer<typeof UserInclude>; 

  /**
   * CustomerInclude schema (Fri Nov 14 2025)
   */
export const CustomerInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), customerDiscounts: z.object({ select :CustomerDiscountSelectOwn }).or(P.bool) }).partial()
export type CustomerIncludeType = z.infer<typeof CustomerInclude>; 

  /**
   * CustomerGroupInclude schema (Fri Nov 14 2025)
   */
export const CustomerGroupInclude = z.object({ customerGroupDiscounts: z.object({ select :CustomerGroupDiscountSelectOwn }).or(P.bool), updatedBy: z.object({ select :UserSelectOwn }).or(P.bool) }).partial()
export type CustomerGroupIncludeType = z.infer<typeof CustomerGroupInclude>; 

  /**
   * StoreInclude schema (Fri Nov 14 2025)
   */
export const StoreInclude = z.object({ quantities: z.object({ select :QuantitySelectOwn }).or(P.bool), serialNumbers: z.object({ select :SerialNumberSelectOwn }).or(P.bool), shelves: z.object({ select :ShelfSelectOwn }).or(P.bool), storeDiscounts: z.object({ select :StoreDiscountSelectOwn }).or(P.bool), updatedBy: z.object({ select :UserSelectOwn }).or(P.bool) }).partial()
export type StoreIncludeType = z.infer<typeof StoreInclude>; 

  /**
   * ShelfInclude schema (Fri Nov 14 2025)
   */
export const ShelfInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type ShelfIncludeType = z.infer<typeof ShelfInclude>; 

  /**
   * CategoryInclude schema (Fri Nov 14 2025)
   */
export const CategoryInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), parent: z.object({ select :CategorySelectOwn }).or(P.bool), children: z.object({ select :CategorySelectOwn }).or(P.bool), products: z.object({ select :ProductSelectOwn }).or(P.bool), categoryDiscounts: z.object({ select :CategoryDiscountSelectOwn }).or(P.bool) }).partial()
export type CategoryIncludeType = z.infer<typeof CategoryInclude>; 

  /**
   * TagInclude schema (Fri Nov 14 2025)
   */
export const TagInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), productTags: z.object({ select :ProductTagSelectOwn }).or(P.bool) }).partial()
export type TagIncludeType = z.infer<typeof TagInclude>; 

  /**
   * ProductTagInclude schema (Fri Nov 14 2025)
   */
export const ProductTagInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), product: z.object({ select :ProductSelectOwn }).or(P.bool), tag: z.object({ select :TagSelectOwn }).or(P.bool) }).partial()
export type ProductTagIncludeType = z.infer<typeof ProductTagInclude>; 

  /**
   * ProductInclude schema (Fri Nov 14 2025)
   */
export const ProductInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), category: z.object({ select :CategorySelectOwn }).or(P.bool), type: z.object({ select :ProductTypeSelectOwn }).or(P.bool), parent: z.object({ select :ProductSelectOwn }).or(P.bool), variants: z.object({ select :ProductSelectOwn }).or(P.bool), quantities: z.object({ select :QuantitySelectOwn }).or(P.bool), serialNumbers: z.object({ select :SerialNumberSelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool), productTags: z.object({ select :ProductTagSelectOwn }).or(P.bool), discounts: z.object({ select :ProductDiscountSelectOwn }).or(P.bool), ownDiscounts: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type ProductIncludeType = z.infer<typeof ProductInclude>; 

  /**
   * QuantityInclude schema (Fri Nov 14 2025)
   */
export const QuantityInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), product: z.object({ select :ProductSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type QuantityIncludeType = z.infer<typeof QuantityInclude>; 

  /**
   * SerialNumberInclude schema (Fri Nov 14 2025)
   */
export const SerialNumberInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), product: z.object({ select :ProductSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type SerialNumberIncludeType = z.infer<typeof SerialNumberInclude>; 

  /**
   * PriceInclude schema (Fri Nov 14 2025)
   */
export const PriceInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), product: z.object({ select :ProductSelectOwn }).or(P.bool) }).partial()
export type PriceIncludeType = z.infer<typeof PriceInclude>; 

  /**
   * DiscountInclude schema (Fri Nov 14 2025)
   */
export const DiscountInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), product: z.object({ select :ProductSelectOwn }).or(P.bool), productDiscounts: z.object({ select :ProductDiscountSelectOwn }).or(P.bool), storeDiscounts: z.object({ select :StoreDiscountSelectOwn }).or(P.bool), categoryDiscounts: z.object({ select :CategoryDiscountSelectOwn }).or(P.bool), productTypeDiscounts: z.object({ select :ProductTypeDiscountSelectOwn }).or(P.bool), customerDiscounts: z.object({ select :CustomerDiscountSelectOwn }).or(P.bool), customerGroupDiscounts: z.object({ select :CustomerGroupDiscountSelectOwn }).or(P.bool) }).partial()
export type DiscountIncludeType = z.infer<typeof DiscountInclude>; 

  /**
   * ProductDiscountInclude schema (Fri Nov 14 2025)
   */
export const ProductDiscountInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type ProductDiscountIncludeType = z.infer<typeof ProductDiscountInclude>; 

  /**
   * StoreDiscountInclude schema (Fri Nov 14 2025)
   */
export const StoreDiscountInclude = z.object({ discount: z.object({ select :DiscountSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type StoreDiscountIncludeType = z.infer<typeof StoreDiscountInclude>; 

  /**
   * CategoryDiscountInclude schema (Fri Nov 14 2025)
   */
export const CategoryDiscountInclude = z.object({ category: z.object({ select :CategorySelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type CategoryDiscountIncludeType = z.infer<typeof CategoryDiscountInclude>; 

  /**
   * ProductTypeDiscountInclude schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountInclude = z.object({ productType: z.object({ select :ProductTypeSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type ProductTypeDiscountIncludeType = z.infer<typeof ProductTypeDiscountInclude>; 

  /**
   * CustomerDiscountInclude schema (Fri Nov 14 2025)
   */
export const CustomerDiscountInclude = z.object({ customer: z.object({ select :CustomerSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type CustomerDiscountIncludeType = z.infer<typeof CustomerDiscountInclude>; 

  /**
   * CustomerGroupDiscountInclude schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountInclude = z.object({ customerGroup: z.object({ select :CustomerGroupSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type CustomerGroupDiscountIncludeType = z.infer<typeof CustomerGroupDiscountInclude>; 

  /**
   * ProductTypeInclude schema (Fri Nov 14 2025)
   */
export const ProductTypeInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), products: z.object({ select :ProductSelectOwn }).or(P.bool), taxRates: z.object({ select :TaxRateSelectOwn }).or(P.bool), productTypeDiscounts: z.object({ select :ProductTypeDiscountSelectOwn }).or(P.bool) }).partial()
export type ProductTypeIncludeType = z.infer<typeof ProductTypeInclude>; 

  /**
   * JurisdictionInclude schema (Fri Nov 14 2025)
   */
export const JurisdictionInclude = z.object({ parent: z.object({ select :JurisdictionSelectOwn }).or(P.bool), children: z.object({ select :JurisdictionSelectOwn }).or(P.bool), taxRates: z.object({ select :TaxRateSelectOwn }).or(P.bool), updatedBy: z.object({ select :UserSelectOwn }).or(P.bool) }).partial()
export type JurisdictionIncludeType = z.infer<typeof JurisdictionInclude>; 

  /**
   * TaxRateInclude schema (Fri Nov 14 2025)
   */
export const TaxRateInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), jurisdiction: z.object({ select :JurisdictionSelectOwn }).or(P.bool), productType: z.object({ select :ProductTypeSelectOwn }).or(P.bool) }).partial()
export type TaxRateIncludeType = z.infer<typeof TaxRateInclude>; 

  /**
   * LogInclude schema (Fri Nov 14 2025)
   */
export const LogInclude = z.any()
export type LogIncludeType = z.infer<typeof LogInclude>; 

  /**
   * UserOrderByOwn schema (Fri Nov 14 2025)
   */
export const UserOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, displayName: P.dir, updatedById: P.dir 
  }).partial()
export type UserOrderByOwnType = z.infer<typeof UserOrderByOwn>; 

  /**
   * CustomerOrderByOwn schema (Fri Nov 14 2025)
   */
export const CustomerOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir 
  }).partial()
export type CustomerOrderByOwnType = z.infer<typeof CustomerOrderByOwn>; 

  /**
   * CustomerGroupOrderByOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, displayName: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, readonly: P.dir, updatedById: P.dir 
  }).partial()
export type CustomerGroupOrderByOwnType = z.infer<typeof CustomerGroupOrderByOwn>; 

  /**
   * StoreOrderByOwn schema (Fri Nov 14 2025)
   */
export const StoreOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, name: P.dir, description: P.dir, slug: P.dir, readonly: P.dir, updatedById: P.dir 
  }).partial()
export type StoreOrderByOwnType = z.infer<typeof StoreOrderByOwn>; 

  /**
   * ShelfOrderByOwn schema (Fri Nov 14 2025)
   */
export const ShelfOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, description: P.dir, aisle: P.dir, rack: P.dir, level: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type ShelfOrderByOwnType = z.infer<typeof ShelfOrderByOwn>; 

  /**
   * CategoryOrderByOwn schema (Fri Nov 14 2025)
   */
export const CategoryOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, description: P.dir, slug: P.dir, parentId: P.dir, readonly: P.dir 
  }).partial()
export type CategoryOrderByOwnType = z.infer<typeof CategoryOrderByOwn>; 

  /**
   * TagOrderByOwn schema (Fri Nov 14 2025)
   */
export const TagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, slug: P.dir 
  }).partial()
export type TagOrderByOwnType = z.infer<typeof TagOrderByOwn>; 

  /**
   * ProductTagOrderByOwn schema (Fri Nov 14 2025)
   */
export const ProductTagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, productId: P.dir, tagId: P.dir 
  }).partial()
export type ProductTagOrderByOwnType = z.infer<typeof ProductTagOrderByOwn>; 

  /**
   * ProductOrderByOwn schema (Fri Nov 14 2025)
   */
export const ProductOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, description: P.dir, slug: P.dir, sku: P.dir, upc: P.dir, model: P.dir, categoryId: P.dir, typeId: P.dir, parentId: P.dir, readonly: P.dir 
  }).partial()
export type ProductOrderByOwnType = z.infer<typeof ProductOrderByOwn>; 

  /**
   * QuantityOrderByOwn schema (Fri Nov 14 2025)
   */
export const QuantityOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, quantity: P.dir, minQuantity: P.dir, productId: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type QuantityOrderByOwnType = z.infer<typeof QuantityOrderByOwn>; 

  /**
   * SerialNumberOrderByOwn schema (Fri Nov 14 2025)
   */
export const SerialNumberOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, serialNumber: P.dir, isInStock: P.dir, productId: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type SerialNumberOrderByOwnType = z.infer<typeof SerialNumberOrderByOwn>; 

  /**
   * PriceOrderByOwn schema (Fri Nov 14 2025)
   */
export const PriceOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, price: P.dir, effectiveFrom: P.dir, effectiveTo: P.dir, productId: P.dir, readonly: P.dir 
  }).partial()
export type PriceOrderByOwnType = z.infer<typeof PriceOrderByOwn>; 

  /**
   * DiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const DiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, code: P.dir, description: P.dir, discountValue: P.dir, minQuantity: P.dir, minSubtotal: P.dir, effectiveFrom: P.dir, effectiveTo: P.dir, target: P.dir, productId: P.dir, readonly: P.dir 
  }).partial()
export type DiscountOrderByOwnType = z.infer<typeof DiscountOrderByOwn>; 

  /**
   * ProductDiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const ProductDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, productId: P.dir, discountId: P.dir, readonly: P.dir 
  }).partial()
export type ProductDiscountOrderByOwnType = z.infer<typeof ProductDiscountOrderByOwn>; 

  /**
   * StoreDiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const StoreDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, discountId: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type StoreDiscountOrderByOwnType = z.infer<typeof StoreDiscountOrderByOwn>; 

  /**
   * CategoryDiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const CategoryDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, categoryId: P.dir, discountId: P.dir, readonly: P.dir 
  }).partial()
export type CategoryDiscountOrderByOwnType = z.infer<typeof CategoryDiscountOrderByOwn>; 

  /**
   * ProductTypeDiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, productTypeId: P.dir, discountId: P.dir, readonly: P.dir 
  }).partial()
export type ProductTypeDiscountOrderByOwnType = z.infer<typeof ProductTypeDiscountOrderByOwn>; 

  /**
   * CustomerDiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const CustomerDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, customerId: P.dir, discountId: P.dir, readonly: P.dir 
  }).partial()
export type CustomerDiscountOrderByOwnType = z.infer<typeof CustomerDiscountOrderByOwn>; 

  /**
   * CustomerGroupDiscountOrderByOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, customerGroupId: P.dir, discountId: P.dir 
  }).partial()
export type CustomerGroupDiscountOrderByOwnType = z.infer<typeof CustomerGroupDiscountOrderByOwn>; 

  /**
   * ProductTypeOrderByOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, description: P.dir, readonly: P.dir 
  }).partial()
export type ProductTypeOrderByOwnType = z.infer<typeof ProductTypeOrderByOwn>; 

  /**
   * JurisdictionOrderByOwn schema (Fri Nov 14 2025)
   */
export const JurisdictionOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, fipsCode: P.dir, name: P.dir, level: P.dir, parentId: P.dir, readonly: P.dir, updatedById: P.dir 
  }).partial()
export type JurisdictionOrderByOwnType = z.infer<typeof JurisdictionOrderByOwn>; 

  /**
   * TaxRateOrderByOwn schema (Fri Nov 14 2025)
   */
export const TaxRateOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, percentRate: P.dir, fixedRate: P.dir, description: P.dir, effectiveFrom: P.dir, effectiveTo: P.dir, jurisdictionId: P.dir, productTypeId: P.dir, readonly: P.dir 
  }).partial()
export type TaxRateOrderByOwnType = z.infer<typeof TaxRateOrderByOwn>; 

  /**
   * LogOrderByOwn schema (Fri Nov 14 2025)
   */
export const LogOrderByOwn = z.object({ 
    id: P.dir, timestamp: P.dir, operatorId: P.dir, operatorType: P.dir, operationName: P.dir, recordName: P.dir, recordId: P.dir, difference: P.dir, readonly: P.dir, successful: P.dir 
  }).partial()
export type LogOrderByOwnType = z.infer<typeof LogOrderByOwn>; 

  /**
   * UserOrderBy schema (Fri Nov 14 2025)
   */
export const UserOrderBy = z.object({
    ...UserOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, updatedCustomers: P.orderByCount, updatedStores: P.orderByCount, updatedShelves: P.orderByCount, updatedCategories: P.orderByCount, updatedTags: P.orderByCount, updatedProducttags: P.orderByCount, updatedProducts: P.orderByCount, updatedQuantities: P.orderByCount, updatedSerialnumbers: P.orderByCount, updatedPrices: P.orderByCount, updatedDiscounts: P.orderByCount, updatedProducttypes: P.orderByCount, updatedJurisdictions: P.orderByCount, updatedTaxrates: P.orderByCount, updatedUsers: P.orderByCount, updatedCustomerGroups: P.orderByCount 
  }).partial()
export type UserOrderByType = z.infer<typeof UserOrderBy>; 

  /**
   * CustomerOrderBy schema (Fri Nov 14 2025)
   */
export const CustomerOrderBy = z.object({
    ...CustomerOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, customerDiscounts: P.orderByCount 
  }).partial()
export type CustomerOrderByType = z.infer<typeof CustomerOrderBy>; 

  /**
   * CustomerGroupOrderBy schema (Fri Nov 14 2025)
   */
export const CustomerGroupOrderBy = z.object({
    ...CustomerGroupOrderByOwn.shape, 
    customerGroupDiscounts: P.orderByCount, updatedBy: UserOrderByOwn 
  }).partial()
export type CustomerGroupOrderByType = z.infer<typeof CustomerGroupOrderBy>; 

  /**
   * StoreOrderBy schema (Fri Nov 14 2025)
   */
export const StoreOrderBy = z.object({
    ...StoreOrderByOwn.shape, 
    quantities: P.orderByCount, serialNumbers: P.orderByCount, shelves: P.orderByCount, storeDiscounts: P.orderByCount, updatedBy: UserOrderByOwn 
  }).partial()
export type StoreOrderByType = z.infer<typeof StoreOrderBy>; 

  /**
   * ShelfOrderBy schema (Fri Nov 14 2025)
   */
export const ShelfOrderBy = z.object({
    ...ShelfOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type ShelfOrderByType = z.infer<typeof ShelfOrderBy>; 

  /**
   * CategoryOrderBy schema (Fri Nov 14 2025)
   */
export const CategoryOrderBy = z.object({
    ...CategoryOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, parent: CategoryOrderByOwn, children: P.orderByCount, products: P.orderByCount, categoryDiscounts: P.orderByCount 
  }).partial()
export type CategoryOrderByType = z.infer<typeof CategoryOrderBy>; 

  /**
   * TagOrderBy schema (Fri Nov 14 2025)
   */
export const TagOrderBy = z.object({
    ...TagOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, productTags: P.orderByCount 
  }).partial()
export type TagOrderByType = z.infer<typeof TagOrderBy>; 

  /**
   * ProductTagOrderBy schema (Fri Nov 14 2025)
   */
export const ProductTagOrderBy = z.object({
    ...ProductTagOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, product: ProductOrderByOwn, tag: TagOrderByOwn 
  }).partial()
export type ProductTagOrderByType = z.infer<typeof ProductTagOrderBy>; 

  /**
   * ProductOrderBy schema (Fri Nov 14 2025)
   */
export const ProductOrderBy = z.object({
    ...ProductOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, category: CategoryOrderByOwn, type: ProductTypeOrderByOwn, parent: ProductOrderByOwn, variants: P.orderByCount, quantities: P.orderByCount, serialNumbers: P.orderByCount, prices: P.orderByCount, productTags: P.orderByCount, discounts: P.orderByCount, ownDiscounts: P.orderByCount 
  }).partial()
export type ProductOrderByType = z.infer<typeof ProductOrderBy>; 

  /**
   * QuantityOrderBy schema (Fri Nov 14 2025)
   */
export const QuantityOrderBy = z.object({
    ...QuantityOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, product: ProductOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type QuantityOrderByType = z.infer<typeof QuantityOrderBy>; 

  /**
   * SerialNumberOrderBy schema (Fri Nov 14 2025)
   */
export const SerialNumberOrderBy = z.object({
    ...SerialNumberOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, product: ProductOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type SerialNumberOrderByType = z.infer<typeof SerialNumberOrderBy>; 

  /**
   * PriceOrderBy schema (Fri Nov 14 2025)
   */
export const PriceOrderBy = z.object({
    ...PriceOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, product: ProductOrderByOwn 
  }).partial()
export type PriceOrderByType = z.infer<typeof PriceOrderBy>; 

  /**
   * DiscountOrderBy schema (Fri Nov 14 2025)
   */
export const DiscountOrderBy = z.object({
    ...DiscountOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, product: ProductOrderByOwn, productDiscounts: P.orderByCount, storeDiscounts: P.orderByCount, categoryDiscounts: P.orderByCount, productTypeDiscounts: P.orderByCount, customerDiscounts: P.orderByCount, customerGroupDiscounts: P.orderByCount 
  }).partial()
export type DiscountOrderByType = z.infer<typeof DiscountOrderBy>; 

  /**
   * ProductDiscountOrderBy schema (Fri Nov 14 2025)
   */
export const ProductDiscountOrderBy = z.object({
    ...ProductDiscountOrderByOwn.shape, 
    product: ProductOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type ProductDiscountOrderByType = z.infer<typeof ProductDiscountOrderBy>; 

  /**
   * StoreDiscountOrderBy schema (Fri Nov 14 2025)
   */
export const StoreDiscountOrderBy = z.object({
    ...StoreDiscountOrderByOwn.shape, 
    discount: DiscountOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type StoreDiscountOrderByType = z.infer<typeof StoreDiscountOrderBy>; 

  /**
   * CategoryDiscountOrderBy schema (Fri Nov 14 2025)
   */
export const CategoryDiscountOrderBy = z.object({
    ...CategoryDiscountOrderByOwn.shape, 
    category: CategoryOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type CategoryDiscountOrderByType = z.infer<typeof CategoryDiscountOrderBy>; 

  /**
   * ProductTypeDiscountOrderBy schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountOrderBy = z.object({
    ...ProductTypeDiscountOrderByOwn.shape, 
    productType: ProductTypeOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type ProductTypeDiscountOrderByType = z.infer<typeof ProductTypeDiscountOrderBy>; 

  /**
   * CustomerDiscountOrderBy schema (Fri Nov 14 2025)
   */
export const CustomerDiscountOrderBy = z.object({
    ...CustomerDiscountOrderByOwn.shape, 
    customer: CustomerOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type CustomerDiscountOrderByType = z.infer<typeof CustomerDiscountOrderBy>; 

  /**
   * CustomerGroupDiscountOrderBy schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountOrderBy = z.object({
    ...CustomerGroupDiscountOrderByOwn.shape, 
    customerGroup: CustomerGroupOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type CustomerGroupDiscountOrderByType = z.infer<typeof CustomerGroupDiscountOrderBy>; 

  /**
   * ProductTypeOrderBy schema (Fri Nov 14 2025)
   */
export const ProductTypeOrderBy = z.object({
    ...ProductTypeOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, products: P.orderByCount, taxRates: P.orderByCount, productTypeDiscounts: P.orderByCount 
  }).partial()
export type ProductTypeOrderByType = z.infer<typeof ProductTypeOrderBy>; 

  /**
   * JurisdictionOrderBy schema (Fri Nov 14 2025)
   */
export const JurisdictionOrderBy = z.object({
    ...JurisdictionOrderByOwn.shape, 
    parent: JurisdictionOrderByOwn, children: P.orderByCount, taxRates: P.orderByCount, updatedBy: UserOrderByOwn 
  }).partial()
export type JurisdictionOrderByType = z.infer<typeof JurisdictionOrderBy>; 

  /**
   * TaxRateOrderBy schema (Fri Nov 14 2025)
   */
export const TaxRateOrderBy = z.object({
    ...TaxRateOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, jurisdiction: JurisdictionOrderByOwn, productType: ProductTypeOrderByOwn 
  }).partial()
export type TaxRateOrderByType = z.infer<typeof TaxRateOrderBy>; 

  /**
   * LogOrderBy schema (Fri Nov 14 2025)
   */
export const LogOrderBy = z.object({
    ...LogOrderByOwn.shape, 
     
  }).partial()
export type LogOrderByType = z.infer<typeof LogOrderBy>; 

  /**
   * UserWhereOwn schema (Fri Nov 14 2025)
   */
export const UserWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, displayName: P.strFilter, updatedById: P.intFilter }).partial()
export type UserWhereOwnType = z.infer<typeof UserWhereOwn>; 

  /**
   * CustomerWhereOwn schema (Fri Nov 14 2025)
   */
export const CustomerWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter }).partial()
export type CustomerWhereOwnType = z.infer<typeof CustomerWhereOwn>; 

  /**
   * CustomerGroupWhereOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, displayName: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, readonly: P.boolFilter, updatedById: P.intFilter }).partial()
export type CustomerGroupWhereOwnType = z.infer<typeof CustomerGroupWhereOwn>; 

  /**
   * StoreWhereOwn schema (Fri Nov 14 2025)
   */
export const StoreWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, name: P.strFilter, description: P.strFilter, slug: P.strFilter, readonly: P.boolFilter, updatedById: P.intFilter }).partial()
export type StoreWhereOwnType = z.infer<typeof StoreWhereOwn>; 

  /**
   * ShelfWhereOwn schema (Fri Nov 14 2025)
   */
export const ShelfWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, description: P.strFilter, aisle: P.strFilter, rack: P.intFilter, level: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type ShelfWhereOwnType = z.infer<typeof ShelfWhereOwn>; 

  /**
   * CategoryWhereOwn schema (Fri Nov 14 2025)
   */
export const CategoryWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, description: P.strFilter, slug: P.strFilter, parentId: P.intFilter, readonly: P.boolFilter }).partial()
export type CategoryWhereOwnType = z.infer<typeof CategoryWhereOwn>; 

  /**
   * TagWhereOwn schema (Fri Nov 14 2025)
   */
export const TagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, slug: P.strFilter }).partial()
export type TagWhereOwnType = z.infer<typeof TagWhereOwn>; 

  /**
   * ProductTagWhereOwn schema (Fri Nov 14 2025)
   */
export const ProductTagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, productId: P.intFilter, tagId: P.intFilter }).partial()
export type ProductTagWhereOwnType = z.infer<typeof ProductTagWhereOwn>; 

  /**
   * ProductWhereOwn schema (Fri Nov 14 2025)
   */
export const ProductWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, description: P.strFilter, slug: P.strFilter, sku: P.strFilter, upc: P.strFilter, model: P.strFilter, categoryId: P.intFilter, typeId: P.intFilter, parentId: P.intFilter, readonly: P.boolFilter }).partial()
export type ProductWhereOwnType = z.infer<typeof ProductWhereOwn>; 

  /**
   * QuantityWhereOwn schema (Fri Nov 14 2025)
   */
export const QuantityWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, quantity: P.intFilter, minQuantity: P.intFilter, productId: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type QuantityWhereOwnType = z.infer<typeof QuantityWhereOwn>; 

  /**
   * SerialNumberWhereOwn schema (Fri Nov 14 2025)
   */
export const SerialNumberWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, serialNumber: P.strFilter, isInStock: P.boolFilter, productId: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type SerialNumberWhereOwnType = z.infer<typeof SerialNumberWhereOwn>; 

  /**
   * PriceWhereOwn schema (Fri Nov 14 2025)
   */
export const PriceWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, price: P.numFilter, effectiveFrom: P.datetimeFilter, effectiveTo: P.datetimeFilter, productId: P.intFilter, readonly: P.boolFilter }).partial()
export type PriceWhereOwnType = z.infer<typeof PriceWhereOwn>; 

  /**
   * DiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const DiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, code: P.strFilter, description: P.strFilter, discountValue: P.numFilter, minQuantity: P.intFilter, minSubtotal: P.numFilter, effectiveFrom: P.datetimeFilter, effectiveTo: P.datetimeFilter, target: DiscountTargetFilter, productId: P.intFilter, readonly: P.boolFilter }).partial()
export type DiscountWhereOwnType = z.infer<typeof DiscountWhereOwn>; 

  /**
   * ProductDiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const ProductDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, productId: P.intFilter, discountId: P.intFilter, readonly: P.boolFilter }).partial()
export type ProductDiscountWhereOwnType = z.infer<typeof ProductDiscountWhereOwn>; 

  /**
   * StoreDiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const StoreDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, discountId: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type StoreDiscountWhereOwnType = z.infer<typeof StoreDiscountWhereOwn>; 

  /**
   * CategoryDiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const CategoryDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, categoryId: P.intFilter, discountId: P.intFilter, readonly: P.boolFilter }).partial()
export type CategoryDiscountWhereOwnType = z.infer<typeof CategoryDiscountWhereOwn>; 

  /**
   * ProductTypeDiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, productTypeId: P.intFilter, discountId: P.intFilter, readonly: P.boolFilter }).partial()
export type ProductTypeDiscountWhereOwnType = z.infer<typeof ProductTypeDiscountWhereOwn>; 

  /**
   * CustomerDiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const CustomerDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, customerId: P.intFilter, discountId: P.intFilter, readonly: P.boolFilter }).partial()
export type CustomerDiscountWhereOwnType = z.infer<typeof CustomerDiscountWhereOwn>; 

  /**
   * CustomerGroupDiscountWhereOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, customerGroupId: P.intFilter, discountId: P.intFilter }).partial()
export type CustomerGroupDiscountWhereOwnType = z.infer<typeof CustomerGroupDiscountWhereOwn>; 

  /**
   * ProductTypeWhereOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, description: P.strFilter, readonly: P.boolFilter }).partial()
export type ProductTypeWhereOwnType = z.infer<typeof ProductTypeWhereOwn>; 

  /**
   * JurisdictionWhereOwn schema (Fri Nov 14 2025)
   */
export const JurisdictionWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, fipsCode: P.strFilter, name: P.strFilter, level: P.strFilter, parentId: P.intFilter, readonly: P.boolFilter, updatedById: P.intFilter }).partial()
export type JurisdictionWhereOwnType = z.infer<typeof JurisdictionWhereOwn>; 

  /**
   * TaxRateWhereOwn schema (Fri Nov 14 2025)
   */
export const TaxRateWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, percentRate: P.numFilter, fixedRate: P.numFilter, description: P.strFilter, effectiveFrom: P.datetimeFilter, effectiveTo: P.datetimeFilter, jurisdictionId: P.intFilter, productTypeId: P.intFilter, readonly: P.boolFilter }).partial()
export type TaxRateWhereOwnType = z.infer<typeof TaxRateWhereOwn>; 

  /**
   * LogWhereOwn schema (Fri Nov 14 2025)
   */
export const LogWhereOwn = z.object({ id: P.intFilter, timestamp: P.datetimeFilter, operatorId: P.strFilter, operatorType: OperatorTypeFilter, operationName: P.strFilter, recordName: P.strFilter, recordId: P.intFilter, difference: P.jsonFilter, readonly: P.boolFilter, successful: P.boolFilter }).partial()
export type LogWhereOwnType = z.infer<typeof LogWhereOwn>; 

  /**
   * UserWhere schema (Fri Nov 14 2025)
   */
export const UserWhere = z.object({ ...UserWhereOwn.shape,updatedBy: UserWhereOwn.partial(), updatedCustomers: z.object({ 
          some: CustomerWhereOwn,
          every: CustomerWhereOwn,
          none: CustomerWhereOwn
        }).partial(), updatedStores: z.object({ 
          some: StoreWhereOwn,
          every: StoreWhereOwn,
          none: StoreWhereOwn
        }).partial(), updatedShelves: z.object({ 
          some: ShelfWhereOwn,
          every: ShelfWhereOwn,
          none: ShelfWhereOwn
        }).partial(), updatedCategories: z.object({ 
          some: CategoryWhereOwn,
          every: CategoryWhereOwn,
          none: CategoryWhereOwn
        }).partial(), updatedTags: z.object({ 
          some: TagWhereOwn,
          every: TagWhereOwn,
          none: TagWhereOwn
        }).partial(), updatedProducttags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(), updatedProducts: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), updatedQuantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), updatedSerialnumbers: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), updatedPrices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), updatedDiscounts: z.object({ 
          some: DiscountWhereOwn,
          every: DiscountWhereOwn,
          none: DiscountWhereOwn
        }).partial(), updatedProducttypes: z.object({ 
          some: ProductTypeWhereOwn,
          every: ProductTypeWhereOwn,
          none: ProductTypeWhereOwn
        }).partial(), updatedJurisdictions: z.object({ 
          some: JurisdictionWhereOwn,
          every: JurisdictionWhereOwn,
          none: JurisdictionWhereOwn
        }).partial(), updatedTaxrates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(), updatedUsers: z.object({ 
          some: UserWhereOwn,
          every: UserWhereOwn,
          none: UserWhereOwn
        }).partial(), updatedCustomerGroups: z.object({ 
          some: CustomerGroupWhereOwn,
          every: CustomerGroupWhereOwn,
          none: CustomerGroupWhereOwn
        }).partial(),AND: UserWhereOwn,OR:  UserWhereOwn.array(),NOT: UserWhereOwn.or(UserWhereOwn.array()) }).partial()
export type UserWhereType = z.infer<typeof UserWhere>; 

  /**
   * CustomerWhere schema (Fri Nov 14 2025)
   */
export const CustomerWhere = z.object({ ...CustomerWhereOwn.shape,updatedBy: UserWhereOwn.partial(), customerDiscounts: z.object({ 
          some: CustomerDiscountWhereOwn,
          every: CustomerDiscountWhereOwn,
          none: CustomerDiscountWhereOwn
        }).partial(),AND: CustomerWhereOwn,OR:  CustomerWhereOwn.array(),NOT: CustomerWhereOwn.or(CustomerWhereOwn.array()) }).partial()
export type CustomerWhereType = z.infer<typeof CustomerWhere>; 

  /**
   * CustomerGroupWhere schema (Fri Nov 14 2025)
   */
export const CustomerGroupWhere = z.object({ ...CustomerGroupWhereOwn.shape,customerGroupDiscounts: z.object({ 
          some: CustomerGroupDiscountWhereOwn,
          every: CustomerGroupDiscountWhereOwn,
          none: CustomerGroupDiscountWhereOwn
        }).partial(), updatedBy: UserWhereOwn.partial(),AND: CustomerGroupWhereOwn,OR:  CustomerGroupWhereOwn.array(),NOT: CustomerGroupWhereOwn.or(CustomerGroupWhereOwn.array()) }).partial()
export type CustomerGroupWhereType = z.infer<typeof CustomerGroupWhere>; 

  /**
   * StoreWhere schema (Fri Nov 14 2025)
   */
export const StoreWhere = z.object({ ...StoreWhereOwn.shape,quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), serialNumbers: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), shelves: z.object({ 
          some: ShelfWhereOwn,
          every: ShelfWhereOwn,
          none: ShelfWhereOwn
        }).partial(), storeDiscounts: z.object({ 
          some: StoreDiscountWhereOwn,
          every: StoreDiscountWhereOwn,
          none: StoreDiscountWhereOwn
        }).partial(), updatedBy: UserWhereOwn.partial(),AND: StoreWhereOwn,OR:  StoreWhereOwn.array(),NOT: StoreWhereOwn.or(StoreWhereOwn.array()) }).partial()
export type StoreWhereType = z.infer<typeof StoreWhere>; 

  /**
   * ShelfWhere schema (Fri Nov 14 2025)
   */
export const ShelfWhere = z.object({ ...ShelfWhereOwn.shape,updatedBy: UserWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: ShelfWhereOwn,OR:  ShelfWhereOwn.array(),NOT: ShelfWhereOwn.or(ShelfWhereOwn.array()) }).partial()
export type ShelfWhereType = z.infer<typeof ShelfWhere>; 

  /**
   * CategoryWhere schema (Fri Nov 14 2025)
   */
export const CategoryWhere = z.object({ ...CategoryWhereOwn.shape,updatedBy: UserWhereOwn.partial(), parent: CategoryWhereOwn.partial(), children: z.object({ 
          some: CategoryWhereOwn,
          every: CategoryWhereOwn,
          none: CategoryWhereOwn
        }).partial(), products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), categoryDiscounts: z.object({ 
          some: CategoryDiscountWhereOwn,
          every: CategoryDiscountWhereOwn,
          none: CategoryDiscountWhereOwn
        }).partial(),AND: CategoryWhereOwn,OR:  CategoryWhereOwn.array(),NOT: CategoryWhereOwn.or(CategoryWhereOwn.array()) }).partial()
export type CategoryWhereType = z.infer<typeof CategoryWhere>; 

  /**
   * TagWhere schema (Fri Nov 14 2025)
   */
export const TagWhere = z.object({ ...TagWhereOwn.shape,updatedBy: UserWhereOwn.partial(), productTags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(),AND: TagWhereOwn,OR:  TagWhereOwn.array(),NOT: TagWhereOwn.or(TagWhereOwn.array()) }).partial()
export type TagWhereType = z.infer<typeof TagWhere>; 

  /**
   * ProductTagWhere schema (Fri Nov 14 2025)
   */
export const ProductTagWhere = z.object({ ...ProductTagWhereOwn.shape,updatedBy: UserWhereOwn.partial(), product: ProductWhereOwn.partial(), tag: TagWhereOwn.partial(),AND: ProductTagWhereOwn,OR:  ProductTagWhereOwn.array(),NOT: ProductTagWhereOwn.or(ProductTagWhereOwn.array()) }).partial()
export type ProductTagWhereType = z.infer<typeof ProductTagWhere>; 

  /**
   * ProductWhere schema (Fri Nov 14 2025)
   */
export const ProductWhere = z.object({ ...ProductWhereOwn.shape,updatedBy: UserWhereOwn.partial(), category: CategoryWhereOwn.partial(), type: ProductTypeWhereOwn.partial(), parent: ProductWhereOwn.partial(), variants: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), serialNumbers: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), productTags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(), discounts: z.object({ 
          some: ProductDiscountWhereOwn,
          every: ProductDiscountWhereOwn,
          none: ProductDiscountWhereOwn
        }).partial(), ownDiscounts: z.object({ 
          some: DiscountWhereOwn,
          every: DiscountWhereOwn,
          none: DiscountWhereOwn
        }).partial(),AND: ProductWhereOwn,OR:  ProductWhereOwn.array(),NOT: ProductWhereOwn.or(ProductWhereOwn.array()) }).partial()
export type ProductWhereType = z.infer<typeof ProductWhere>; 

  /**
   * QuantityWhere schema (Fri Nov 14 2025)
   */
export const QuantityWhere = z.object({ ...QuantityWhereOwn.shape,updatedBy: UserWhereOwn.partial(), product: ProductWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: QuantityWhereOwn,OR:  QuantityWhereOwn.array(),NOT: QuantityWhereOwn.or(QuantityWhereOwn.array()) }).partial()
export type QuantityWhereType = z.infer<typeof QuantityWhere>; 

  /**
   * SerialNumberWhere schema (Fri Nov 14 2025)
   */
export const SerialNumberWhere = z.object({ ...SerialNumberWhereOwn.shape,updatedBy: UserWhereOwn.partial(), product: ProductWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: SerialNumberWhereOwn,OR:  SerialNumberWhereOwn.array(),NOT: SerialNumberWhereOwn.or(SerialNumberWhereOwn.array()) }).partial()
export type SerialNumberWhereType = z.infer<typeof SerialNumberWhere>; 

  /**
   * PriceWhere schema (Fri Nov 14 2025)
   */
export const PriceWhere = z.object({ ...PriceWhereOwn.shape,updatedBy: UserWhereOwn.partial(), product: ProductWhereOwn.partial(),AND: PriceWhereOwn,OR:  PriceWhereOwn.array(),NOT: PriceWhereOwn.or(PriceWhereOwn.array()) }).partial()
export type PriceWhereType = z.infer<typeof PriceWhere>; 

  /**
   * DiscountWhere schema (Fri Nov 14 2025)
   */
export const DiscountWhere = z.object({ ...DiscountWhereOwn.shape,updatedBy: UserWhereOwn.partial(), product: ProductWhereOwn.partial(), productDiscounts: z.object({ 
          some: ProductDiscountWhereOwn,
          every: ProductDiscountWhereOwn,
          none: ProductDiscountWhereOwn
        }).partial(), storeDiscounts: z.object({ 
          some: StoreDiscountWhereOwn,
          every: StoreDiscountWhereOwn,
          none: StoreDiscountWhereOwn
        }).partial(), categoryDiscounts: z.object({ 
          some: CategoryDiscountWhereOwn,
          every: CategoryDiscountWhereOwn,
          none: CategoryDiscountWhereOwn
        }).partial(), productTypeDiscounts: z.object({ 
          some: ProductTypeDiscountWhereOwn,
          every: ProductTypeDiscountWhereOwn,
          none: ProductTypeDiscountWhereOwn
        }).partial(), customerDiscounts: z.object({ 
          some: CustomerDiscountWhereOwn,
          every: CustomerDiscountWhereOwn,
          none: CustomerDiscountWhereOwn
        }).partial(), customerGroupDiscounts: z.object({ 
          some: CustomerGroupDiscountWhereOwn,
          every: CustomerGroupDiscountWhereOwn,
          none: CustomerGroupDiscountWhereOwn
        }).partial(),AND: DiscountWhereOwn,OR:  DiscountWhereOwn.array(),NOT: DiscountWhereOwn.or(DiscountWhereOwn.array()) }).partial()
export type DiscountWhereType = z.infer<typeof DiscountWhere>; 

  /**
   * ProductDiscountWhere schema (Fri Nov 14 2025)
   */
export const ProductDiscountWhere = z.object({ ...ProductDiscountWhereOwn.shape,product: ProductWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: ProductDiscountWhereOwn,OR:  ProductDiscountWhereOwn.array(),NOT: ProductDiscountWhereOwn.or(ProductDiscountWhereOwn.array()) }).partial()
export type ProductDiscountWhereType = z.infer<typeof ProductDiscountWhere>; 

  /**
   * StoreDiscountWhere schema (Fri Nov 14 2025)
   */
export const StoreDiscountWhere = z.object({ ...StoreDiscountWhereOwn.shape,discount: DiscountWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: StoreDiscountWhereOwn,OR:  StoreDiscountWhereOwn.array(),NOT: StoreDiscountWhereOwn.or(StoreDiscountWhereOwn.array()) }).partial()
export type StoreDiscountWhereType = z.infer<typeof StoreDiscountWhere>; 

  /**
   * CategoryDiscountWhere schema (Fri Nov 14 2025)
   */
export const CategoryDiscountWhere = z.object({ ...CategoryDiscountWhereOwn.shape,category: CategoryWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: CategoryDiscountWhereOwn,OR:  CategoryDiscountWhereOwn.array(),NOT: CategoryDiscountWhereOwn.or(CategoryDiscountWhereOwn.array()) }).partial()
export type CategoryDiscountWhereType = z.infer<typeof CategoryDiscountWhere>; 

  /**
   * ProductTypeDiscountWhere schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountWhere = z.object({ ...ProductTypeDiscountWhereOwn.shape,productType: ProductTypeWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: ProductTypeDiscountWhereOwn,OR:  ProductTypeDiscountWhereOwn.array(),NOT: ProductTypeDiscountWhereOwn.or(ProductTypeDiscountWhereOwn.array()) }).partial()
export type ProductTypeDiscountWhereType = z.infer<typeof ProductTypeDiscountWhere>; 

  /**
   * CustomerDiscountWhere schema (Fri Nov 14 2025)
   */
export const CustomerDiscountWhere = z.object({ ...CustomerDiscountWhereOwn.shape,customer: CustomerWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: CustomerDiscountWhereOwn,OR:  CustomerDiscountWhereOwn.array(),NOT: CustomerDiscountWhereOwn.or(CustomerDiscountWhereOwn.array()) }).partial()
export type CustomerDiscountWhereType = z.infer<typeof CustomerDiscountWhere>; 

  /**
   * CustomerGroupDiscountWhere schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountWhere = z.object({ ...CustomerGroupDiscountWhereOwn.shape,customerGroup: CustomerGroupWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: CustomerGroupDiscountWhereOwn,OR:  CustomerGroupDiscountWhereOwn.array(),NOT: CustomerGroupDiscountWhereOwn.or(CustomerGroupDiscountWhereOwn.array()) }).partial()
export type CustomerGroupDiscountWhereType = z.infer<typeof CustomerGroupDiscountWhere>; 

  /**
   * ProductTypeWhere schema (Fri Nov 14 2025)
   */
export const ProductTypeWhere = z.object({ ...ProductTypeWhereOwn.shape,updatedBy: UserWhereOwn.partial(), products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), taxRates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(), productTypeDiscounts: z.object({ 
          some: ProductTypeDiscountWhereOwn,
          every: ProductTypeDiscountWhereOwn,
          none: ProductTypeDiscountWhereOwn
        }).partial(),AND: ProductTypeWhereOwn,OR:  ProductTypeWhereOwn.array(),NOT: ProductTypeWhereOwn.or(ProductTypeWhereOwn.array()) }).partial()
export type ProductTypeWhereType = z.infer<typeof ProductTypeWhere>; 

  /**
   * JurisdictionWhere schema (Fri Nov 14 2025)
   */
export const JurisdictionWhere = z.object({ ...JurisdictionWhereOwn.shape,parent: JurisdictionWhereOwn.partial(), children: z.object({ 
          some: JurisdictionWhereOwn,
          every: JurisdictionWhereOwn,
          none: JurisdictionWhereOwn
        }).partial(), taxRates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(), updatedBy: UserWhereOwn.partial(),AND: JurisdictionWhereOwn,OR:  JurisdictionWhereOwn.array(),NOT: JurisdictionWhereOwn.or(JurisdictionWhereOwn.array()) }).partial()
export type JurisdictionWhereType = z.infer<typeof JurisdictionWhere>; 

  /**
   * TaxRateWhere schema (Fri Nov 14 2025)
   */
export const TaxRateWhere = z.object({ ...TaxRateWhereOwn.shape,updatedBy: UserWhereOwn.partial(), jurisdiction: JurisdictionWhereOwn.partial(), productType: ProductTypeWhereOwn.partial(),AND: TaxRateWhereOwn,OR:  TaxRateWhereOwn.array(),NOT: TaxRateWhereOwn.or(TaxRateWhereOwn.array()) }).partial()
export type TaxRateWhereType = z.infer<typeof TaxRateWhere>; 

  /**
   * LogWhere schema (Fri Nov 14 2025)
   */
export const LogWhere = z.object({ ...LogWhereOwn.shape,AND: LogWhereOwn,OR:  LogWhereOwn.array(),NOT: LogWhereOwn.or(LogWhereOwn.array()) }).partial()
export type LogWhereType = z.infer<typeof LogWhere>; 

  /**
   * UserQueryOwn schema (Fri Nov 14 2025)
   */
export const UserQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: UserField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, UserOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, UserWhere)
  }).partial()
export type UserQueryOwnType = z.infer<typeof UserQueryOwn>; 

  /**
   * CustomerQueryOwn schema (Fri Nov 14 2025)
   */
export const CustomerQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: CustomerField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, CustomerOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerWhere)
  }).partial()
export type CustomerQueryOwnType = z.infer<typeof CustomerQueryOwn>; 

  /**
   * CustomerGroupQueryOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: CustomerGroupField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, CustomerGroupOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerGroupWhere)
  }).partial()
export type CustomerGroupQueryOwnType = z.infer<typeof CustomerGroupQueryOwn>; 

  /**
   * StoreQueryOwn schema (Fri Nov 14 2025)
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
   * ShelfQueryOwn schema (Fri Nov 14 2025)
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
   * CategoryQueryOwn schema (Fri Nov 14 2025)
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
   * TagQueryOwn schema (Fri Nov 14 2025)
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
   * ProductTagQueryOwn schema (Fri Nov 14 2025)
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
   * ProductQueryOwn schema (Fri Nov 14 2025)
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
   * QuantityQueryOwn schema (Fri Nov 14 2025)
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
   * SerialNumberQueryOwn schema (Fri Nov 14 2025)
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
   * PriceQueryOwn schema (Fri Nov 14 2025)
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
   * DiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const DiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: DiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, DiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, DiscountWhere)
  }).partial()
export type DiscountQueryOwnType = z.infer<typeof DiscountQueryOwn>; 

  /**
   * ProductDiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const ProductDiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ProductDiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ProductDiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ProductDiscountWhere)
  }).partial()
export type ProductDiscountQueryOwnType = z.infer<typeof ProductDiscountQueryOwn>; 

  /**
   * StoreDiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const StoreDiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: StoreDiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, StoreDiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, StoreDiscountWhere)
  }).partial()
export type StoreDiscountQueryOwnType = z.infer<typeof StoreDiscountQueryOwn>; 

  /**
   * CategoryDiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const CategoryDiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: CategoryDiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, CategoryDiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryDiscountWhere)
  }).partial()
export type CategoryDiscountQueryOwnType = z.infer<typeof CategoryDiscountQueryOwn>; 

  /**
   * ProductTypeDiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ProductTypeDiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountWhere)
  }).partial()
export type ProductTypeDiscountQueryOwnType = z.infer<typeof ProductTypeDiscountQueryOwn>; 

  /**
   * CustomerDiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const CustomerDiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: CustomerDiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, CustomerDiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerDiscountWhere)
  }).partial()
export type CustomerDiscountQueryOwnType = z.infer<typeof CustomerDiscountQueryOwn>; 

  /**
   * CustomerGroupDiscountQueryOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: CustomerGroupDiscountField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountWhere)
  }).partial()
export type CustomerGroupDiscountQueryOwnType = z.infer<typeof CustomerGroupDiscountQueryOwn>; 

  /**
   * ProductTypeQueryOwn schema (Fri Nov 14 2025)
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
   * JurisdictionQueryOwn schema (Fri Nov 14 2025)
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
   * TaxRateQueryOwn schema (Fri Nov 14 2025)
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
   * LogQueryOwn schema (Fri Nov 14 2025)
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
   * UserQueryOne schema (Fri Nov 14 2025)
   */
export const UserQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, UserInclude),
    where:    z.preprocess(P.parseJsonOrReturn, UserWhere)
  }).partial()
export type UserQueryOneType = z.infer<typeof UserQueryOne>; 

  /**
   * CustomerQueryOne schema (Fri Nov 14 2025)
   */
export const CustomerQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerWhere)
  }).partial()
export type CustomerQueryOneType = z.infer<typeof CustomerQueryOne>; 

  /**
   * CustomerGroupQueryOne schema (Fri Nov 14 2025)
   */
export const CustomerGroupQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerGroupInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerGroupWhere)
  }).partial()
export type CustomerGroupQueryOneType = z.infer<typeof CustomerGroupQueryOne>; 

  /**
   * StoreQueryOne schema (Fri Nov 14 2025)
   */
export const StoreQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, StoreInclude),
    where:    z.preprocess(P.parseJsonOrReturn, StoreWhere)
  }).partial()
export type StoreQueryOneType = z.infer<typeof StoreQueryOne>; 

  /**
   * ShelfQueryOne schema (Fri Nov 14 2025)
   */
export const ShelfQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ShelfSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ShelfInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ShelfWhere)
  }).partial()
export type ShelfQueryOneType = z.infer<typeof ShelfQueryOne>; 

  /**
   * CategoryQueryOne schema (Fri Nov 14 2025)
   */
export const CategoryQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategorySelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CategoryInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryWhere)
  }).partial()
export type CategoryQueryOneType = z.infer<typeof CategoryQueryOne>; 

  /**
   * TagQueryOne schema (Fri Nov 14 2025)
   */
export const TagQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TagSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, TagInclude),
    where:    z.preprocess(P.parseJsonOrReturn, TagWhere)
  }).partial()
export type TagQueryOneType = z.infer<typeof TagQueryOne>; 

  /**
   * ProductTagQueryOne schema (Fri Nov 14 2025)
   */
export const ProductTagQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTagInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTagWhere)
  }).partial()
export type ProductTagQueryOneType = z.infer<typeof ProductTagQueryOne>; 

  /**
   * ProductQueryOne schema (Fri Nov 14 2025)
   */
export const ProductQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductWhere)
  }).partial()
export type ProductQueryOneType = z.infer<typeof ProductQueryOne>; 

  /**
   * QuantityQueryOne schema (Fri Nov 14 2025)
   */
export const QuantityQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, QuantityInclude),
    where:    z.preprocess(P.parseJsonOrReturn, QuantityWhere)
  }).partial()
export type QuantityQueryOneType = z.infer<typeof QuantityQueryOne>; 

  /**
   * SerialNumberQueryOne schema (Fri Nov 14 2025)
   */
export const SerialNumberQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, SerialNumberInclude),
    where:    z.preprocess(P.parseJsonOrReturn, SerialNumberWhere)
  }).partial()
export type SerialNumberQueryOneType = z.infer<typeof SerialNumberQueryOne>; 

  /**
   * PriceQueryOne schema (Fri Nov 14 2025)
   */
export const PriceQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, PriceInclude),
    where:    z.preprocess(P.parseJsonOrReturn, PriceWhere)
  }).partial()
export type PriceQueryOneType = z.infer<typeof PriceQueryOne>; 

  /**
   * DiscountQueryOne schema (Fri Nov 14 2025)
   */
export const DiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, DiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, DiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, DiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, DiscountWhere)
  }).partial()
export type DiscountQueryOneType = z.infer<typeof DiscountQueryOne>; 

  /**
   * ProductDiscountQueryOne schema (Fri Nov 14 2025)
   */
export const ProductDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductDiscountWhere)
  }).partial()
export type ProductDiscountQueryOneType = z.infer<typeof ProductDiscountQueryOne>; 

  /**
   * StoreDiscountQueryOne schema (Fri Nov 14 2025)
   */
export const StoreDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, StoreDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, StoreDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, StoreDiscountWhere)
  }).partial()
export type StoreDiscountQueryOneType = z.infer<typeof StoreDiscountQueryOne>; 

  /**
   * CategoryDiscountQueryOne schema (Fri Nov 14 2025)
   */
export const CategoryDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategoryDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CategoryDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryDiscountWhere)
  }).partial()
export type CategoryDiscountQueryOneType = z.infer<typeof CategoryDiscountQueryOne>; 

  /**
   * ProductTypeDiscountQueryOne schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountWhere)
  }).partial()
export type ProductTypeDiscountQueryOneType = z.infer<typeof ProductTypeDiscountQueryOne>; 

  /**
   * CustomerDiscountQueryOne schema (Fri Nov 14 2025)
   */
export const CustomerDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerDiscountWhere)
  }).partial()
export type CustomerDiscountQueryOneType = z.infer<typeof CustomerDiscountQueryOne>; 

  /**
   * CustomerGroupDiscountQueryOne schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountWhere)
  }).partial()
export type CustomerGroupDiscountQueryOneType = z.infer<typeof CustomerGroupDiscountQueryOne>; 

  /**
   * ProductTypeQueryOne schema (Fri Nov 14 2025)
   */
export const ProductTypeQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTypeInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeWhere)
  }).partial()
export type ProductTypeQueryOneType = z.infer<typeof ProductTypeQueryOne>; 

  /**
   * JurisdictionQueryOne schema (Fri Nov 14 2025)
   */
export const JurisdictionQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, JurisdictionInclude),
    where:    z.preprocess(P.parseJsonOrReturn, JurisdictionWhere)
  }).partial()
export type JurisdictionQueryOneType = z.infer<typeof JurisdictionQueryOne>; 

  /**
   * TaxRateQueryOne schema (Fri Nov 14 2025)
   */
export const TaxRateQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, TaxRateInclude),
    where:    z.preprocess(P.parseJsonOrReturn, TaxRateWhere)
  }).partial()
export type TaxRateQueryOneType = z.infer<typeof TaxRateQueryOne>; 

  /**
   * LogQueryOne schema (Fri Nov 14 2025)
   */
export const LogQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, LogInclude),
    where:    z.preprocess(P.parseJsonOrReturn, LogWhere)
  }).partial()
export type LogQueryOneType = z.infer<typeof LogQueryOne>; 

  /**
   * UserQuery schema (Fri Nov 14 2025)
   */
export const UserQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, UserInclude   ),
    ...UserQueryOwn.shape 
  }).partial()
export type UserQueryType = z.infer<typeof UserQuery>; 

  /**
   * CustomerQuery schema (Fri Nov 14 2025)
   */
export const CustomerQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerInclude   ),
    ...CustomerQueryOwn.shape 
  }).partial()
export type CustomerQueryType = z.infer<typeof CustomerQuery>; 

  /**
   * CustomerGroupQuery schema (Fri Nov 14 2025)
   */
export const CustomerGroupQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupInclude   ),
    ...CustomerGroupQueryOwn.shape 
  }).partial()
export type CustomerGroupQueryType = z.infer<typeof CustomerGroupQuery>; 

  /**
   * StoreQuery schema (Fri Nov 14 2025)
   */
export const StoreQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, StoreInclude   ),
    ...StoreQueryOwn.shape 
  }).partial()
export type StoreQueryType = z.infer<typeof StoreQuery>; 

  /**
   * ShelfQuery schema (Fri Nov 14 2025)
   */
export const ShelfQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ShelfSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ShelfInclude   ),
    ...ShelfQueryOwn.shape 
  }).partial()
export type ShelfQueryType = z.infer<typeof ShelfQuery>; 

  /**
   * CategoryQuery schema (Fri Nov 14 2025)
   */
export const CategoryQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategorySelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CategoryInclude   ),
    ...CategoryQueryOwn.shape 
  }).partial()
export type CategoryQueryType = z.infer<typeof CategoryQuery>; 

  /**
   * TagQuery schema (Fri Nov 14 2025)
   */
export const TagQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TagSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, TagInclude   ),
    ...TagQueryOwn.shape 
  }).partial()
export type TagQueryType = z.infer<typeof TagQuery>; 

  /**
   * ProductTagQuery schema (Fri Nov 14 2025)
   */
export const ProductTagQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTagInclude   ),
    ...ProductTagQueryOwn.shape 
  }).partial()
export type ProductTagQueryType = z.infer<typeof ProductTagQuery>; 

  /**
   * ProductQuery schema (Fri Nov 14 2025)
   */
export const ProductQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductInclude   ),
    ...ProductQueryOwn.shape 
  }).partial()
export type ProductQueryType = z.infer<typeof ProductQuery>; 

  /**
   * QuantityQuery schema (Fri Nov 14 2025)
   */
export const QuantityQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, QuantityInclude   ),
    ...QuantityQueryOwn.shape 
  }).partial()
export type QuantityQueryType = z.infer<typeof QuantityQuery>; 

  /**
   * SerialNumberQuery schema (Fri Nov 14 2025)
   */
export const SerialNumberQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, SerialNumberInclude   ),
    ...SerialNumberQueryOwn.shape 
  }).partial()
export type SerialNumberQueryType = z.infer<typeof SerialNumberQuery>; 

  /**
   * PriceQuery schema (Fri Nov 14 2025)
   */
export const PriceQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, PriceInclude   ),
    ...PriceQueryOwn.shape 
  }).partial()
export type PriceQueryType = z.infer<typeof PriceQuery>; 

  /**
   * DiscountQuery schema (Fri Nov 14 2025)
   */
export const DiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, DiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, DiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, DiscountInclude   ),
    ...DiscountQueryOwn.shape 
  }).partial()
export type DiscountQueryType = z.infer<typeof DiscountQuery>; 

  /**
   * ProductDiscountQuery schema (Fri Nov 14 2025)
   */
export const ProductDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductDiscountInclude   ),
    ...ProductDiscountQueryOwn.shape 
  }).partial()
export type ProductDiscountQueryType = z.infer<typeof ProductDiscountQuery>; 

  /**
   * StoreDiscountQuery schema (Fri Nov 14 2025)
   */
export const StoreDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, StoreDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, StoreDiscountInclude   ),
    ...StoreDiscountQueryOwn.shape 
  }).partial()
export type StoreDiscountQueryType = z.infer<typeof StoreDiscountQuery>; 

  /**
   * CategoryDiscountQuery schema (Fri Nov 14 2025)
   */
export const CategoryDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategoryDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CategoryDiscountInclude   ),
    ...CategoryDiscountQueryOwn.shape 
  }).partial()
export type CategoryDiscountQueryType = z.infer<typeof CategoryDiscountQuery>; 

  /**
   * ProductTypeDiscountQuery schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountInclude   ),
    ...ProductTypeDiscountQueryOwn.shape 
  }).partial()
export type ProductTypeDiscountQueryType = z.infer<typeof ProductTypeDiscountQuery>; 

  /**
   * CustomerDiscountQuery schema (Fri Nov 14 2025)
   */
export const CustomerDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerDiscountInclude   ),
    ...CustomerDiscountQueryOwn.shape 
  }).partial()
export type CustomerDiscountQueryType = z.infer<typeof CustomerDiscountQuery>; 

  /**
   * CustomerGroupDiscountQuery schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountInclude   ),
    ...CustomerGroupDiscountQueryOwn.shape 
  }).partial()
export type CustomerGroupDiscountQueryType = z.infer<typeof CustomerGroupDiscountQuery>; 

  /**
   * ProductTypeQuery schema (Fri Nov 14 2025)
   */
export const ProductTypeQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTypeInclude   ),
    ...ProductTypeQueryOwn.shape 
  }).partial()
export type ProductTypeQueryType = z.infer<typeof ProductTypeQuery>; 

  /**
   * JurisdictionQuery schema (Fri Nov 14 2025)
   */
export const JurisdictionQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, JurisdictionInclude   ),
    ...JurisdictionQueryOwn.shape 
  }).partial()
export type JurisdictionQueryType = z.infer<typeof JurisdictionQuery>; 

  /**
   * TaxRateQuery schema (Fri Nov 14 2025)
   */
export const TaxRateQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, TaxRateInclude   ),
    ...TaxRateQueryOwn.shape 
  }).partial()
export type TaxRateQueryType = z.infer<typeof TaxRateQuery>; 

  /**
   * LogQuery schema (Fri Nov 14 2025)
   */
export const LogQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, LogInclude   ),
    ...LogQueryOwn.shape 
  }).partial()
export type LogQueryType = z.infer<typeof LogQuery>; 

  /**
   * UserSelect schema (Fri Nov 14 2025)
   */
export const UserSelect = z.object({...UserSelectOwn.shape,  }).partial()
export type UserSelectType = z.infer<typeof UserSelect>; 

  /**
   * CustomerSelect schema (Fri Nov 14 2025)
   */
export const CustomerSelect = z.object({...CustomerSelectOwn.shape,  }).partial()
export type CustomerSelectType = z.infer<typeof CustomerSelect>; 

  /**
   * CustomerGroupSelect schema (Fri Nov 14 2025)
   */
export const CustomerGroupSelect = z.object({...CustomerGroupSelectOwn.shape,  }).partial()
export type CustomerGroupSelectType = z.infer<typeof CustomerGroupSelect>; 

  /**
   * StoreSelect schema (Fri Nov 14 2025)
   */
export const StoreSelect = z.object({...StoreSelectOwn.shape,  }).partial()
export type StoreSelectType = z.infer<typeof StoreSelect>; 

  /**
   * ShelfSelect schema (Fri Nov 14 2025)
   */
export const ShelfSelect = z.object({...ShelfSelectOwn.shape,  }).partial()
export type ShelfSelectType = z.infer<typeof ShelfSelect>; 

  /**
   * CategorySelect schema (Fri Nov 14 2025)
   */
export const CategorySelect = z.object({...CategorySelectOwn.shape,  }).partial()
export type CategorySelectType = z.infer<typeof CategorySelect>; 

  /**
   * TagSelect schema (Fri Nov 14 2025)
   */
export const TagSelect = z.object({...TagSelectOwn.shape,  }).partial()
export type TagSelectType = z.infer<typeof TagSelect>; 

  /**
   * ProductTagSelect schema (Fri Nov 14 2025)
   */
export const ProductTagSelect = z.object({...ProductTagSelectOwn.shape,  }).partial()
export type ProductTagSelectType = z.infer<typeof ProductTagSelect>; 

  /**
   * ProductSelect schema (Fri Nov 14 2025)
   */
export const ProductSelect = z.object({...ProductSelectOwn.shape,  }).partial()
export type ProductSelectType = z.infer<typeof ProductSelect>; 

  /**
   * QuantitySelect schema (Fri Nov 14 2025)
   */
export const QuantitySelect = z.object({...QuantitySelectOwn.shape,  }).partial()
export type QuantitySelectType = z.infer<typeof QuantitySelect>; 

  /**
   * SerialNumberSelect schema (Fri Nov 14 2025)
   */
export const SerialNumberSelect = z.object({...SerialNumberSelectOwn.shape,  }).partial()
export type SerialNumberSelectType = z.infer<typeof SerialNumberSelect>; 

  /**
   * PriceSelect schema (Fri Nov 14 2025)
   */
export const PriceSelect = z.object({...PriceSelectOwn.shape,  }).partial()
export type PriceSelectType = z.infer<typeof PriceSelect>; 

  /**
   * DiscountSelect schema (Fri Nov 14 2025)
   */
export const DiscountSelect = z.object({...DiscountSelectOwn.shape,  }).partial()
export type DiscountSelectType = z.infer<typeof DiscountSelect>; 

  /**
   * ProductDiscountSelect schema (Fri Nov 14 2025)
   */
export const ProductDiscountSelect = z.object({...ProductDiscountSelectOwn.shape,  }).partial()
export type ProductDiscountSelectType = z.infer<typeof ProductDiscountSelect>; 

  /**
   * StoreDiscountSelect schema (Fri Nov 14 2025)
   */
export const StoreDiscountSelect = z.object({...StoreDiscountSelectOwn.shape,  }).partial()
export type StoreDiscountSelectType = z.infer<typeof StoreDiscountSelect>; 

  /**
   * CategoryDiscountSelect schema (Fri Nov 14 2025)
   */
export const CategoryDiscountSelect = z.object({...CategoryDiscountSelectOwn.shape,  }).partial()
export type CategoryDiscountSelectType = z.infer<typeof CategoryDiscountSelect>; 

  /**
   * ProductTypeDiscountSelect schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountSelect = z.object({...ProductTypeDiscountSelectOwn.shape,  }).partial()
export type ProductTypeDiscountSelectType = z.infer<typeof ProductTypeDiscountSelect>; 

  /**
   * CustomerDiscountSelect schema (Fri Nov 14 2025)
   */
export const CustomerDiscountSelect = z.object({...CustomerDiscountSelectOwn.shape,  }).partial()
export type CustomerDiscountSelectType = z.infer<typeof CustomerDiscountSelect>; 

  /**
   * CustomerGroupDiscountSelect schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountSelect = z.object({...CustomerGroupDiscountSelectOwn.shape,  }).partial()
export type CustomerGroupDiscountSelectType = z.infer<typeof CustomerGroupDiscountSelect>; 

  /**
   * ProductTypeSelect schema (Fri Nov 14 2025)
   */
export const ProductTypeSelect = z.object({...ProductTypeSelectOwn.shape,  }).partial()
export type ProductTypeSelectType = z.infer<typeof ProductTypeSelect>; 

  /**
   * JurisdictionSelect schema (Fri Nov 14 2025)
   */
export const JurisdictionSelect = z.object({...JurisdictionSelectOwn.shape,  }).partial()
export type JurisdictionSelectType = z.infer<typeof JurisdictionSelect>; 

  /**
   * TaxRateSelect schema (Fri Nov 14 2025)
   */
export const TaxRateSelect = z.object({...TaxRateSelectOwn.shape,  }).partial()
export type TaxRateSelectType = z.infer<typeof TaxRateSelect>; 

  /**
   * LogSelect schema (Fri Nov 14 2025)
   */
export const LogSelect = z.object({...LogSelectOwn.shape,  }).partial()
export type LogSelectType = z.infer<typeof LogSelect>; 

  /**
   * UserProjection schema (Fri Nov 14 2025)
   */
export const UserProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, UserSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, UserInclude) }),
        z.object({})
    ])
export type UserProjectionType = z.infer<typeof UserProjection>; 

  /**
   * CustomerProjection schema (Fri Nov 14 2025)
   */
export const CustomerProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerInclude) }),
        z.object({})
    ])
export type CustomerProjectionType = z.infer<typeof CustomerProjection>; 

  /**
   * CustomerGroupProjection schema (Fri Nov 14 2025)
   */
export const CustomerGroupProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupInclude) }),
        z.object({})
    ])
export type CustomerGroupProjectionType = z.infer<typeof CustomerGroupProjection>; 

  /**
   * StoreProjection schema (Fri Nov 14 2025)
   */
export const StoreProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, StoreSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, StoreInclude) }),
        z.object({})
    ])
export type StoreProjectionType = z.infer<typeof StoreProjection>; 

  /**
   * ShelfProjection schema (Fri Nov 14 2025)
   */
export const ShelfProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ShelfSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ShelfInclude) }),
        z.object({})
    ])
export type ShelfProjectionType = z.infer<typeof ShelfProjection>; 

  /**
   * CategoryProjection schema (Fri Nov 14 2025)
   */
export const CategoryProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CategorySelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CategoryInclude) }),
        z.object({})
    ])
export type CategoryProjectionType = z.infer<typeof CategoryProjection>; 

  /**
   * TagProjection schema (Fri Nov 14 2025)
   */
export const TagProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, TagSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, TagInclude) }),
        z.object({})
    ])
export type TagProjectionType = z.infer<typeof TagProjection>; 

  /**
   * ProductTagProjection schema (Fri Nov 14 2025)
   */
export const ProductTagProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTagInclude) }),
        z.object({})
    ])
export type ProductTagProjectionType = z.infer<typeof ProductTagProjection>; 

  /**
   * ProductProjection schema (Fri Nov 14 2025)
   */
export const ProductProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductInclude) }),
        z.object({})
    ])
export type ProductProjectionType = z.infer<typeof ProductProjection>; 

  /**
   * QuantityProjection schema (Fri Nov 14 2025)
   */
export const QuantityProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, QuantitySelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, QuantityInclude) }),
        z.object({})
    ])
export type QuantityProjectionType = z.infer<typeof QuantityProjection>; 

  /**
   * SerialNumberProjection schema (Fri Nov 14 2025)
   */
export const SerialNumberProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, SerialNumberInclude) }),
        z.object({})
    ])
export type SerialNumberProjectionType = z.infer<typeof SerialNumberProjection>; 

  /**
   * PriceProjection schema (Fri Nov 14 2025)
   */
export const PriceProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, PriceSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, PriceInclude) }),
        z.object({})
    ])
export type PriceProjectionType = z.infer<typeof PriceProjection>; 

  /**
   * DiscountProjection schema (Fri Nov 14 2025)
   */
export const DiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, DiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, DiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, DiscountInclude) }),
        z.object({})
    ])
export type DiscountProjectionType = z.infer<typeof DiscountProjection>; 

  /**
   * ProductDiscountProjection schema (Fri Nov 14 2025)
   */
export const ProductDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductDiscountInclude) }),
        z.object({})
    ])
export type ProductDiscountProjectionType = z.infer<typeof ProductDiscountProjection>; 

  /**
   * StoreDiscountProjection schema (Fri Nov 14 2025)
   */
export const StoreDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, StoreDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, StoreDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, StoreDiscountInclude) }),
        z.object({})
    ])
export type StoreDiscountProjectionType = z.infer<typeof StoreDiscountProjection>; 

  /**
   * CategoryDiscountProjection schema (Fri Nov 14 2025)
   */
export const CategoryDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CategoryDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CategoryDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CategoryDiscountInclude) }),
        z.object({})
    ])
export type CategoryDiscountProjectionType = z.infer<typeof CategoryDiscountProjection>; 

  /**
   * ProductTypeDiscountProjection schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountInclude) }),
        z.object({})
    ])
export type ProductTypeDiscountProjectionType = z.infer<typeof ProductTypeDiscountProjection>; 

  /**
   * CustomerDiscountProjection schema (Fri Nov 14 2025)
   */
export const CustomerDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerDiscountInclude) }),
        z.object({})
    ])
export type CustomerDiscountProjectionType = z.infer<typeof CustomerDiscountProjection>; 

  /**
   * CustomerGroupDiscountProjection schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountInclude) }),
        z.object({})
    ])
export type CustomerGroupDiscountProjectionType = z.infer<typeof CustomerGroupDiscountProjection>; 

  /**
   * ProductTypeProjection schema (Fri Nov 14 2025)
   */
export const ProductTypeProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTypeInclude) }),
        z.object({})
    ])
export type ProductTypeProjectionType = z.infer<typeof ProductTypeProjection>; 

  /**
   * JurisdictionProjection schema (Fri Nov 14 2025)
   */
export const JurisdictionProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, JurisdictionInclude) }),
        z.object({})
    ])
export type JurisdictionProjectionType = z.infer<typeof JurisdictionProjection>; 

  /**
   * TaxRateProjection schema (Fri Nov 14 2025)
   */
export const TaxRateProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, TaxRateInclude) }),
        z.object({})
    ])
export type TaxRateProjectionType = z.infer<typeof TaxRateProjection>; 

  /**
   * LogProjection schema (Fri Nov 14 2025)
   */
export const LogProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, LogSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, LogInclude) }),
        z.object({})
    ])
export type LogProjectionType = z.infer<typeof LogProjection>; 

  /**
   * UserCreateOwn schema (Fri Nov 14 2025)
   */
export const UserCreateOwn = z.object({ uuid: P.uuid })
export type UserCreateOwnType = z.infer<typeof UserCreateOwn>; 

  /**
   * CustomerCreateOwn schema (Fri Nov 14 2025)
   */
export const CustomerCreateOwn = z.object({ uuid: P.uuid,readonly: P.bool.optional() })
export type CustomerCreateOwnType = z.infer<typeof CustomerCreateOwn>; 

  /**
   * CustomerGroupCreateOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupCreateOwn = z.object({ uuid: P.uuid,readonly: P.bool.optional() })
export type CustomerGroupCreateOwnType = z.infer<typeof CustomerGroupCreateOwn>; 

  /**
   * StoreCreateOwn schema (Fri Nov 14 2025)
   */
export const StoreCreateOwn = z.object({ name: P.short,readonly: P.bool.optional() })
export type StoreCreateOwnType = z.infer<typeof StoreCreateOwn>; 

  /**
   * ShelfCreateOwn schema (Fri Nov 14 2025)
   */
export const ShelfCreateOwn = z.object({ name: P.short,aisle: P.str,rack: P.int,level: P.int,storeId: P.int,readonly: P.bool.optional() })
export type ShelfCreateOwnType = z.infer<typeof ShelfCreateOwn>; 

  /**
   * CategoryCreateOwn schema (Fri Nov 14 2025)
   */
export const CategoryCreateOwn = z.object({ name: P.short,readonly: P.bool.optional() })
export type CategoryCreateOwnType = z.infer<typeof CategoryCreateOwn>; 

  /**
   * TagCreateOwn schema (Fri Nov 14 2025)
   */
export const TagCreateOwn = z.object({ name: P.short })
export type TagCreateOwnType = z.infer<typeof TagCreateOwn>; 

  /**
   * ProductTagCreateOwn schema (Fri Nov 14 2025)
   */
export const ProductTagCreateOwn = z.object({ productId: P.int,tagId: P.int })
export type ProductTagCreateOwnType = z.infer<typeof ProductTagCreateOwn>; 

  /**
   * ProductCreateOwn schema (Fri Nov 14 2025)
   */
export const ProductCreateOwn = z.object({ name: P.short,sku: P.str,upc: P.str,readonly: P.bool.optional() })
export type ProductCreateOwnType = z.infer<typeof ProductCreateOwn>; 

  /**
   * QuantityCreateOwn schema (Fri Nov 14 2025)
   */
export const QuantityCreateOwn = z.object({ quantity: P.int,productId: P.int,storeId: P.int,readonly: P.bool.optional() })
export type QuantityCreateOwnType = z.infer<typeof QuantityCreateOwn>; 

  /**
   * SerialNumberCreateOwn schema (Fri Nov 14 2025)
   */
export const SerialNumberCreateOwn = z.object({ serialNumber: P.str,isInStock: P.bool.optional(),productId: P.int,storeId: P.int,readonly: P.bool.optional() })
export type SerialNumberCreateOwnType = z.infer<typeof SerialNumberCreateOwn>; 

  /**
   * PriceCreateOwn schema (Fri Nov 14 2025)
   */
export const PriceCreateOwn = z.object({ price: P.currency,effectiveFrom: P.datetime,productId: P.int,readonly: P.bool.optional() })
export type PriceCreateOwnType = z.infer<typeof PriceCreateOwn>; 

  /**
   * DiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const DiscountCreateOwn = z.object({ name: P.short,code: P.str,effectiveFrom: P.datetime,target: DiscountTarget,readonly: P.bool.optional() })
export type DiscountCreateOwnType = z.infer<typeof DiscountCreateOwn>; 

  /**
   * ProductDiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const ProductDiscountCreateOwn = z.object({ productId: P.int,discountId: P.int,readonly: P.bool.optional() })
export type ProductDiscountCreateOwnType = z.infer<typeof ProductDiscountCreateOwn>; 

  /**
   * StoreDiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const StoreDiscountCreateOwn = z.object({ discountId: P.int,storeId: P.int,readonly: P.bool.optional() })
export type StoreDiscountCreateOwnType = z.infer<typeof StoreDiscountCreateOwn>; 

  /**
   * CategoryDiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const CategoryDiscountCreateOwn = z.object({ categoryId: P.int,discountId: P.int,readonly: P.bool.optional() })
export type CategoryDiscountCreateOwnType = z.infer<typeof CategoryDiscountCreateOwn>; 

  /**
   * ProductTypeDiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountCreateOwn = z.object({ productTypeId: P.int,discountId: P.int,readonly: P.bool.optional() })
export type ProductTypeDiscountCreateOwnType = z.infer<typeof ProductTypeDiscountCreateOwn>; 

  /**
   * CustomerDiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const CustomerDiscountCreateOwn = z.object({ customerId: P.int,discountId: P.int,readonly: P.bool.optional() })
export type CustomerDiscountCreateOwnType = z.infer<typeof CustomerDiscountCreateOwn>; 

  /**
   * CustomerGroupDiscountCreateOwn schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountCreateOwn = z.object({ customerGroupId: P.int,discountId: P.int })
export type CustomerGroupDiscountCreateOwnType = z.infer<typeof CustomerGroupDiscountCreateOwn>; 

  /**
   * ProductTypeCreateOwn schema (Fri Nov 14 2025)
   */
export const ProductTypeCreateOwn = z.object({ name: P.short,readonly: P.bool.optional() })
export type ProductTypeCreateOwnType = z.infer<typeof ProductTypeCreateOwn>; 

  /**
   * JurisdictionCreateOwn schema (Fri Nov 14 2025)
   */
export const JurisdictionCreateOwn = z.object({ fipsCode: P.str,name: P.short,level: P.str,readonly: P.bool.optional() })
export type JurisdictionCreateOwnType = z.infer<typeof JurisdictionCreateOwn>; 

  /**
   * TaxRateCreateOwn schema (Fri Nov 14 2025)
   */
export const TaxRateCreateOwn = z.object({ percentRate: P.num,fixedRate: P.num,effectiveFrom: P.datetime,jurisdictionId: P.int,productTypeId: P.int,readonly: P.bool.optional() })
export type TaxRateCreateOwnType = z.infer<typeof TaxRateCreateOwn>; 

  /**
   * LogCreateOwn schema (Fri Nov 14 2025)
   */
export const LogCreateOwn = z.object({ timestamp: P.datetime.optional(),operationName: P.str,recordName: P.str,readonly: P.bool.optional(),successful: P.bool.optional() })
export type LogCreateOwnType = z.infer<typeof LogCreateOwn>; 

  /**
   * UserCreate schema (Fri Nov 14 2025)
   */
export const UserCreate = z.object({ uuid: P.uuid, displayName: P.str.optional(), updatedById: P.int.optional(), updatedCustomers: P.connectMany.optional(), updatedStores: P.connectMany.optional(), updatedShelves: P.connectMany.optional(), updatedCategories: P.connectMany.optional(), updatedTags: P.connectMany.optional(), updatedProducttags: P.connectMany.optional(), updatedProducts: P.connectMany.optional(), updatedQuantities: P.connectMany.optional(), updatedSerialnumbers: P.connectMany.optional(), updatedPrices: P.connectMany.optional(), updatedDiscounts: P.connectMany.optional(), updatedProducttypes: P.connectMany.optional(), updatedJurisdictions: P.connectMany.optional(), updatedTaxrates: P.connectMany.optional(), updatedUsers: P.connectMany.optional(), updatedCustomerGroups: P.connectMany.optional() })
export type UserCreateType = z.infer<typeof UserCreate>; 

  /**
   * UserUpdate schema (Fri Nov 14 2025)
   */
export const UserUpdate = UserCreate.clone().partial()
export type UserUpdateType = z.infer<typeof UserUpdate>; 

  /**
   * CustomerCreate schema (Fri Nov 14 2025)
   */
export const CustomerCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), customerDiscounts: P.connectMany.optional(), readonly: P.bool.optional() })
export type CustomerCreateType = z.infer<typeof CustomerCreate>; 

  /**
   * CustomerUpdate schema (Fri Nov 14 2025)
   */
export const CustomerUpdate = CustomerCreate.clone().partial()
export type CustomerUpdateType = z.infer<typeof CustomerUpdate>; 

  /**
   * CustomerGroupCreate schema (Fri Nov 14 2025)
   */
export const CustomerGroupCreate = z.object({ uuid: P.uuid, displayName: P.str.optional(), customerGroupDiscounts: P.connectMany.optional(), readonly: P.bool.optional(), updatedById: P.int.optional() })
export type CustomerGroupCreateType = z.infer<typeof CustomerGroupCreate>; 

  /**
   * CustomerGroupUpdate schema (Fri Nov 14 2025)
   */
export const CustomerGroupUpdate = CustomerGroupCreate.clone().partial()
export type CustomerGroupUpdateType = z.infer<typeof CustomerGroupUpdate>; 

  /**
   * StoreCreate schema (Fri Nov 14 2025)
   */
export const StoreCreate = z.object({ name: P.short, description: P.long.optional(), quantities: P.connectMany.optional(), serialNumbers: P.connectMany.optional(), shelves: P.connectMany.optional(), readonly: P.bool.optional(), storeDiscounts: P.connectMany.optional(), updatedById: P.int.optional() })
export type StoreCreateType = z.infer<typeof StoreCreate>; 

  /**
   * StoreUpdate schema (Fri Nov 14 2025)
   */
export const StoreUpdate = StoreCreate.clone().partial()
export type StoreUpdateType = z.infer<typeof StoreUpdate>; 

  /**
   * ShelfCreate schema (Fri Nov 14 2025)
   */
export const ShelfCreate = z.object({ updatedById: P.int.optional(), name: P.short, description: P.long.optional(), aisle: P.str, rack: P.int, level: P.int, storeId: P.int, readonly: P.bool.optional() })
export type ShelfCreateType = z.infer<typeof ShelfCreate>; 

  /**
   * ShelfUpdate schema (Fri Nov 14 2025)
   */
export const ShelfUpdate = ShelfCreate.clone().partial()
export type ShelfUpdateType = z.infer<typeof ShelfUpdate>; 

  /**
   * CategoryCreate schema (Fri Nov 14 2025)
   */
export const CategoryCreate = z.object({ updatedById: P.int.optional(), name: P.short, description: P.long.optional(), parentId: P.int.optional(), children: P.connectMany.optional(), products: P.connectMany.optional(), categoryDiscounts: P.connectMany.optional(), readonly: P.bool.optional() })
export type CategoryCreateType = z.infer<typeof CategoryCreate>; 

  /**
   * CategoryUpdate schema (Fri Nov 14 2025)
   */
export const CategoryUpdate = CategoryCreate.clone().partial()
export type CategoryUpdateType = z.infer<typeof CategoryUpdate>; 

  /**
   * TagCreate schema (Fri Nov 14 2025)
   */
export const TagCreate = z.object({ updatedById: P.int.optional(), name: P.short, productTags: P.connectMany.optional() })
export type TagCreateType = z.infer<typeof TagCreate>; 

  /**
   * TagUpdate schema (Fri Nov 14 2025)
   */
export const TagUpdate = TagCreate.clone().partial()
export type TagUpdateType = z.infer<typeof TagUpdate>; 

  /**
   * ProductTagCreate schema (Fri Nov 14 2025)
   */
export const ProductTagCreate = z.object({ updatedById: P.int.optional(), productId: P.int, tagId: P.int })
export type ProductTagCreateType = z.infer<typeof ProductTagCreate>; 

  /**
   * ProductTagUpdate schema (Fri Nov 14 2025)
   */
export const ProductTagUpdate = ProductTagCreate.clone().partial()
export type ProductTagUpdateType = z.infer<typeof ProductTagUpdate>; 

  /**
   * ProductCreate schema (Fri Nov 14 2025)
   */
export const ProductCreate = z.object({ updatedById: P.int.optional(), name: P.short, description: P.long.optional(), sku: P.str, upc: P.str, model: P.str.optional(), categoryId: P.int.optional(), typeId: P.int.optional(), parentId: P.int.optional(), variants: P.connectMany.optional(), quantities: P.connectMany.optional(), serialNumbers: P.connectMany.optional(), prices: P.connectMany.optional(), productTags: P.connectMany.optional(), discounts: P.connectMany.optional(), ownDiscounts: P.connectMany.optional(), readonly: P.bool.optional() })
export type ProductCreateType = z.infer<typeof ProductCreate>; 

  /**
   * ProductUpdate schema (Fri Nov 14 2025)
   */
export const ProductUpdate = ProductCreate.clone().partial()
export type ProductUpdateType = z.infer<typeof ProductUpdate>; 

  /**
   * QuantityCreate schema (Fri Nov 14 2025)
   */
export const QuantityCreate = z.object({ updatedById: P.int.optional(), quantity: P.int, minQuantity: P.int.optional(), productId: P.int, storeId: P.int, readonly: P.bool.optional() })
export type QuantityCreateType = z.infer<typeof QuantityCreate>; 

  /**
   * QuantityUpdate schema (Fri Nov 14 2025)
   */
export const QuantityUpdate = QuantityCreate.clone().partial()
export type QuantityUpdateType = z.infer<typeof QuantityUpdate>; 

  /**
   * SerialNumberCreate schema (Fri Nov 14 2025)
   */
export const SerialNumberCreate = z.object({ updatedById: P.int.optional(), serialNumber: P.str, isInStock: P.bool.optional(), productId: P.int, storeId: P.int, readonly: P.bool.optional() })
export type SerialNumberCreateType = z.infer<typeof SerialNumberCreate>; 

  /**
   * SerialNumberUpdate schema (Fri Nov 14 2025)
   */
export const SerialNumberUpdate = SerialNumberCreate.clone().partial()
export type SerialNumberUpdateType = z.infer<typeof SerialNumberUpdate>; 

  /**
   * PriceCreate schema (Fri Nov 14 2025)
   */
export const PriceCreate = z.object({ updatedById: P.int.optional(), price: P.currency, effectiveFrom: P.datetime, effectiveTo: P.datetime.optional(), productId: P.int, readonly: P.bool.optional() })
export type PriceCreateType = z.infer<typeof PriceCreate>; 

  /**
   * PriceUpdate schema (Fri Nov 14 2025)
   */
export const PriceUpdate = PriceCreate.clone().partial()
export type PriceUpdateType = z.infer<typeof PriceUpdate>; 

  /**
   * DiscountCreate schema (Fri Nov 14 2025)
   */
export const DiscountCreate = z.object({ updatedById: P.int.optional(), name: P.short, code: P.str, description: P.long.optional(), discountValue: P.num.optional(), minQuantity: P.int.optional(), minSubtotal: P.num.optional(), effectiveFrom: P.datetime, effectiveTo: P.datetime.optional(), target: DiscountTarget, productId: P.int.optional(), productDiscounts: P.connectMany.optional(), storeDiscounts: P.connectMany.optional(), categoryDiscounts: P.connectMany.optional(), productTypeDiscounts: P.connectMany.optional(), customerDiscounts: P.connectMany.optional(), customerGroupDiscounts: P.connectMany.optional(), readonly: P.bool.optional() })
export type DiscountCreateType = z.infer<typeof DiscountCreate>; 

  /**
   * DiscountUpdate schema (Fri Nov 14 2025)
   */
export const DiscountUpdate = DiscountCreate.clone().partial()
export type DiscountUpdateType = z.infer<typeof DiscountUpdate>; 

  /**
   * ProductDiscountCreate schema (Fri Nov 14 2025)
   */
export const ProductDiscountCreate = z.object({ productId: P.int, discountId: P.int, readonly: P.bool.optional() })
export type ProductDiscountCreateType = z.infer<typeof ProductDiscountCreate>; 

  /**
   * ProductDiscountUpdate schema (Fri Nov 14 2025)
   */
export const ProductDiscountUpdate = ProductDiscountCreate.clone().partial()
export type ProductDiscountUpdateType = z.infer<typeof ProductDiscountUpdate>; 

  /**
   * StoreDiscountCreate schema (Fri Nov 14 2025)
   */
export const StoreDiscountCreate = z.object({ discountId: P.int, storeId: P.int, readonly: P.bool.optional() })
export type StoreDiscountCreateType = z.infer<typeof StoreDiscountCreate>; 

  /**
   * StoreDiscountUpdate schema (Fri Nov 14 2025)
   */
export const StoreDiscountUpdate = StoreDiscountCreate.clone().partial()
export type StoreDiscountUpdateType = z.infer<typeof StoreDiscountUpdate>; 

  /**
   * CategoryDiscountCreate schema (Fri Nov 14 2025)
   */
export const CategoryDiscountCreate = z.object({ categoryId: P.int, discountId: P.int, readonly: P.bool.optional() })
export type CategoryDiscountCreateType = z.infer<typeof CategoryDiscountCreate>; 

  /**
   * CategoryDiscountUpdate schema (Fri Nov 14 2025)
   */
export const CategoryDiscountUpdate = CategoryDiscountCreate.clone().partial()
export type CategoryDiscountUpdateType = z.infer<typeof CategoryDiscountUpdate>; 

  /**
   * ProductTypeDiscountCreate schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountCreate = z.object({ productTypeId: P.int, discountId: P.int, readonly: P.bool.optional() })
export type ProductTypeDiscountCreateType = z.infer<typeof ProductTypeDiscountCreate>; 

  /**
   * ProductTypeDiscountUpdate schema (Fri Nov 14 2025)
   */
export const ProductTypeDiscountUpdate = ProductTypeDiscountCreate.clone().partial()
export type ProductTypeDiscountUpdateType = z.infer<typeof ProductTypeDiscountUpdate>; 

  /**
   * CustomerDiscountCreate schema (Fri Nov 14 2025)
   */
export const CustomerDiscountCreate = z.object({ customerId: P.int, discountId: P.int, readonly: P.bool.optional() })
export type CustomerDiscountCreateType = z.infer<typeof CustomerDiscountCreate>; 

  /**
   * CustomerDiscountUpdate schema (Fri Nov 14 2025)
   */
export const CustomerDiscountUpdate = CustomerDiscountCreate.clone().partial()
export type CustomerDiscountUpdateType = z.infer<typeof CustomerDiscountUpdate>; 

  /**
   * CustomerGroupDiscountCreate schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountCreate = z.object({ customerGroupId: P.int, discountId: P.int })
export type CustomerGroupDiscountCreateType = z.infer<typeof CustomerGroupDiscountCreate>; 

  /**
   * CustomerGroupDiscountUpdate schema (Fri Nov 14 2025)
   */
export const CustomerGroupDiscountUpdate = CustomerGroupDiscountCreate.clone().partial()
export type CustomerGroupDiscountUpdateType = z.infer<typeof CustomerGroupDiscountUpdate>; 

  /**
   * ProductTypeCreate schema (Fri Nov 14 2025)
   */
export const ProductTypeCreate = z.object({ updatedById: P.int.optional(), name: P.short, description: P.long.optional(), products: P.connectMany.optional(), taxRates: P.connectMany.optional(), productTypeDiscounts: P.connectMany.optional(), readonly: P.bool.optional() })
export type ProductTypeCreateType = z.infer<typeof ProductTypeCreate>; 

  /**
   * ProductTypeUpdate schema (Fri Nov 14 2025)
   */
export const ProductTypeUpdate = ProductTypeCreate.clone().partial()
export type ProductTypeUpdateType = z.infer<typeof ProductTypeUpdate>; 

  /**
   * JurisdictionCreate schema (Fri Nov 14 2025)
   */
export const JurisdictionCreate = z.object({ fipsCode: P.str, name: P.short, level: P.str, parentId: P.int.optional(), children: P.connectMany.optional(), taxRates: P.connectMany.optional(), readonly: P.bool.optional(), updatedById: P.int.optional() })
export type JurisdictionCreateType = z.infer<typeof JurisdictionCreate>; 

  /**
   * JurisdictionUpdate schema (Fri Nov 14 2025)
   */
export const JurisdictionUpdate = JurisdictionCreate.clone().partial()
export type JurisdictionUpdateType = z.infer<typeof JurisdictionUpdate>; 

  /**
   * TaxRateCreate schema (Fri Nov 14 2025)
   */
export const TaxRateCreate = z.object({ updatedById: P.int.optional(), percentRate: P.num, fixedRate: P.num, description: P.long.optional(), effectiveFrom: P.datetime, effectiveTo: P.datetime.optional(), jurisdictionId: P.int, productTypeId: P.int, readonly: P.bool.optional() })
export type TaxRateCreateType = z.infer<typeof TaxRateCreate>; 

  /**
   * TaxRateUpdate schema (Fri Nov 14 2025)
   */
export const TaxRateUpdate = TaxRateCreate.clone().partial()
export type TaxRateUpdateType = z.infer<typeof TaxRateUpdate>; 

  /**
   * LogCreate schema (Fri Nov 14 2025)
   */
export const LogCreate = z.object({ timestamp: P.datetime.optional(), operatorId: P.str.optional(), operatorType: OperatorType.optional(), operationName: P.str, recordName: P.str, recordId: P.int.optional(), difference: P.json.optional(), readonly: P.bool.optional(), successful: P.bool.optional() })
export type LogCreateType = z.infer<typeof LogCreate>; 

  /**
   * LogUpdate schema (Fri Nov 14 2025)
   */
export const LogUpdate = LogCreate.clone().partial()
export type LogUpdateType = z.infer<typeof LogUpdate>; 