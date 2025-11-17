import { z } from 'zod';
import * as P from '@puq/zod';

  /**
   * AttributeValueType schema (Mon Nov 17 2025)
   */
export const AttributeValueType = z.enum([ 'TEXT', 'NUMBER' ])
export type AttributeValueTypeType = z.infer<typeof AttributeValueType>; 

  /**
   * DiscountValueType schema (Mon Nov 17 2025)
   */
export const DiscountValueType = z.enum([ 'FIXED', 'PERCENT' ])
export type DiscountValueTypeType = z.infer<typeof DiscountValueType>; 

  /**
   * OperatorType schema (Mon Nov 17 2025)
   */
export const OperatorType = z.enum([ 'USER', 'SYSTEM' ])
export type OperatorTypeType = z.infer<typeof OperatorType>; 

  /**
   * UserField schema (Mon Nov 17 2025)
   */
export const UserField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'displayName' ])
export type UserFieldType = z.infer<typeof UserField>; 

  /**
   * CustomerField schema (Mon Nov 17 2025)
   */
export const CustomerField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly' ])
export type CustomerFieldType = z.infer<typeof CustomerField>; 

  /**
   * CustomerGroupField schema (Mon Nov 17 2025)
   */
export const CustomerGroupField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'displayName' ])
export type CustomerGroupFieldType = z.infer<typeof CustomerGroupField>; 

  /**
   * StoreField schema (Mon Nov 17 2025)
   */
export const StoreField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'slug', 'description', 'priceLevelId' ])
export type StoreFieldType = z.infer<typeof StoreField>; 

  /**
   * ShelfField schema (Mon Nov 17 2025)
   */
export const ShelfField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'description', 'aisle', 'rack', 'level', 'storeId' ])
export type ShelfFieldType = z.infer<typeof ShelfField>; 

  /**
   * CategoryField schema (Mon Nov 17 2025)
   */
export const CategoryField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'slug', 'description', 'parentId' ])
export type CategoryFieldType = z.infer<typeof CategoryField>; 

  /**
   * TagField schema (Mon Nov 17 2025)
   */
export const TagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'slug' ])
export type TagFieldType = z.infer<typeof TagField>; 

  /**
   * ProductTagField schema (Mon Nov 17 2025)
   */
export const ProductTagField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'productId', 'tagId' ])
export type ProductTagFieldType = z.infer<typeof ProductTagField>; 

  /**
   * AttributeField schema (Mon Nov 17 2025)
   */
export const AttributeField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'description', 'valueType' ])
export type AttributeFieldType = z.infer<typeof AttributeField>; 

  /**
   * ProductAttributeField schema (Mon Nov 17 2025)
   */
export const ProductAttributeField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'value', 'attributeId', 'productId' ])
export type ProductAttributeFieldType = z.infer<typeof ProductAttributeField>; 

  /**
   * ProductField schema (Mon Nov 17 2025)
   */
export const ProductField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'slug', 'description', 'sku', 'upc', 'model', 'categoryId', 'typeId', 'parentId' ])
export type ProductFieldType = z.infer<typeof ProductField>; 

  /**
   * QuantityField schema (Mon Nov 17 2025)
   */
export const QuantityField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'quantity', 'minQuantity', 'productId', 'storeId', 'readonly' ])
export type QuantityFieldType = z.infer<typeof QuantityField>; 

  /**
   * SerialNumberField schema (Mon Nov 17 2025)
   */
export const SerialNumberField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'serial', 'inStock', 'productId', 'storeId' ])
export type SerialNumberFieldType = z.infer<typeof SerialNumberField>; 

  /**
   * PriceLevelField schema (Mon Nov 17 2025)
   */
export const PriceLevelField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'description', 'taxRateId' ])
export type PriceLevelFieldType = z.infer<typeof PriceLevelField>; 

  /**
   * PriceField schema (Mon Nov 17 2025)
   */
export const PriceField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'price', 'startDate', 'endDate', 'productId', 'customerId', 'storeId', 'customerGroupId', 'priceLevelId' ])
export type PriceFieldType = z.infer<typeof PriceField>; 

  /**
   * DiscountField schema (Mon Nov 17 2025)
   */
export const DiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'code', 'description', 'value', 'valueType', 'startDate', 'endDate', 'minQuantity', 'minSubtotal' ])
export type DiscountFieldType = z.infer<typeof DiscountField>; 

  /**
   * ProductDiscountField schema (Mon Nov 17 2025)
   */
export const ProductDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'productId', 'discountId', 'priority' ])
export type ProductDiscountFieldType = z.infer<typeof ProductDiscountField>; 

  /**
   * StoreDiscountField schema (Mon Nov 17 2025)
   */
export const StoreDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'discountId', 'storeId', 'priority' ])
export type StoreDiscountFieldType = z.infer<typeof StoreDiscountField>; 

  /**
   * CategoryDiscountField schema (Mon Nov 17 2025)
   */
export const CategoryDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'categoryId', 'discountId', 'priority' ])
export type CategoryDiscountFieldType = z.infer<typeof CategoryDiscountField>; 

  /**
   * ProductTypeDiscountField schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'productTypeId', 'discountId', 'priority' ])
export type ProductTypeDiscountFieldType = z.infer<typeof ProductTypeDiscountField>; 

  /**
   * CustomerDiscountField schema (Mon Nov 17 2025)
   */
export const CustomerDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'customerId', 'discountId', 'priority' ])
export type CustomerDiscountFieldType = z.infer<typeof CustomerDiscountField>; 

  /**
   * CustomerGroupDiscountField schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'customerGroupId', 'discountId', 'priority' ])
export type CustomerGroupDiscountFieldType = z.infer<typeof CustomerGroupDiscountField>; 

  /**
   * ProductTypeField schema (Mon Nov 17 2025)
   */
export const ProductTypeField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'description' ])
export type ProductTypeFieldType = z.infer<typeof ProductTypeField>; 

  /**
   * JurisdictionField schema (Mon Nov 17 2025)
   */
export const JurisdictionField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'code', 'name', 'level', 'parentId' ])
export type JurisdictionFieldType = z.infer<typeof JurisdictionField>; 

  /**
   * TaxRateField schema (Mon Nov 17 2025)
   */
export const TaxRateField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'readonly', 'name', 'description', 'percentRate', 'fixedRate', 'startDate', 'endDate', 'jurisdictionId', 'productTypeId' ])
export type TaxRateFieldType = z.infer<typeof TaxRateField>; 

  /**
   * LogField schema (Mon Nov 17 2025)
   */
export const LogField = z.enum([ 'id', 'readonly', 'timestamp', 'operatorId', 'operatorType', 'operationName', 'recordName', 'recordId', 'difference', 'successful' ])
export type LogFieldType = z.infer<typeof LogField>; 

  /**
   * AttributeValueTypeFilter schema (Mon Nov 17 2025)
   */
export const AttributeValueTypeFilter = z.object({ 
      equals: AttributeValueType,
      in: AttributeValueType.array(),
      not: AttributeValueType,
      notIn: AttributeValueType.array()
  }).partial()
export type AttributeValueTypeFilterType = z.infer<typeof AttributeValueTypeFilter>; 

  /**
   * AttributeValueTypeArrayFilter schema (Mon Nov 17 2025)
   */
export const AttributeValueTypeArrayFilter = z.object({ 
      equals: AttributeValueType.array(),
      has: AttributeValueType,
      hasEvery: AttributeValueType.array(),
      hasSome: AttributeValueType.array(),
      isEmpty: P.bool
    }).partial()
export type AttributeValueTypeArrayFilterType = z.infer<typeof AttributeValueTypeArrayFilter>; 

  /**
   * DiscountValueTypeFilter schema (Mon Nov 17 2025)
   */
export const DiscountValueTypeFilter = z.object({ 
      equals: DiscountValueType,
      in: DiscountValueType.array(),
      not: DiscountValueType,
      notIn: DiscountValueType.array()
  }).partial()
export type DiscountValueTypeFilterType = z.infer<typeof DiscountValueTypeFilter>; 

  /**
   * DiscountValueTypeArrayFilter schema (Mon Nov 17 2025)
   */
export const DiscountValueTypeArrayFilter = z.object({ 
      equals: DiscountValueType.array(),
      has: DiscountValueType,
      hasEvery: DiscountValueType.array(),
      hasSome: DiscountValueType.array(),
      isEmpty: P.bool
    }).partial()
export type DiscountValueTypeArrayFilterType = z.infer<typeof DiscountValueTypeArrayFilter>; 

  /**
   * OperatorTypeFilter schema (Mon Nov 17 2025)
   */
export const OperatorTypeFilter = z.object({ 
      equals: OperatorType,
      in: OperatorType.array(),
      not: OperatorType,
      notIn: OperatorType.array()
  }).partial()
export type OperatorTypeFilterType = z.infer<typeof OperatorTypeFilter>; 

  /**
   * OperatorTypeArrayFilter schema (Mon Nov 17 2025)
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
   * UserOmit schema (Mon Nov 17 2025)
   */
export const UserOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, displayName: P.bool }).partial()
export type UserOmitType = z.infer<typeof UserOmit>; 

  /**
   * CustomerOmit schema (Mon Nov 17 2025)
   */
export const CustomerOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool }).partial()
export type CustomerOmitType = z.infer<typeof CustomerOmit>; 

  /**
   * CustomerGroupOmit schema (Mon Nov 17 2025)
   */
export const CustomerGroupOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, displayName: P.bool }).partial()
export type CustomerGroupOmitType = z.infer<typeof CustomerGroupOmit>; 

  /**
   * StoreOmit schema (Mon Nov 17 2025)
   */
export const StoreOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, slug: P.bool, description: P.bool, priceLevelId: P.bool }).partial()
export type StoreOmitType = z.infer<typeof StoreOmit>; 

  /**
   * ShelfOmit schema (Mon Nov 17 2025)
   */
export const ShelfOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, description: P.bool, aisle: P.bool, rack: P.bool, level: P.bool, storeId: P.bool }).partial()
export type ShelfOmitType = z.infer<typeof ShelfOmit>; 

  /**
   * CategoryOmit schema (Mon Nov 17 2025)
   */
export const CategoryOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, slug: P.bool, description: P.bool, parentId: P.bool }).partial()
export type CategoryOmitType = z.infer<typeof CategoryOmit>; 

  /**
   * TagOmit schema (Mon Nov 17 2025)
   */
export const TagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, slug: P.bool }).partial()
export type TagOmitType = z.infer<typeof TagOmit>; 

  /**
   * ProductTagOmit schema (Mon Nov 17 2025)
   */
export const ProductTagOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, productId: P.bool, tagId: P.bool }).partial()
export type ProductTagOmitType = z.infer<typeof ProductTagOmit>; 

  /**
   * AttributeOmit schema (Mon Nov 17 2025)
   */
export const AttributeOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, description: P.bool, valueType: P.bool }).partial()
export type AttributeOmitType = z.infer<typeof AttributeOmit>; 

  /**
   * ProductAttributeOmit schema (Mon Nov 17 2025)
   */
export const ProductAttributeOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, value: P.bool, attributeId: P.bool, productId: P.bool }).partial()
export type ProductAttributeOmitType = z.infer<typeof ProductAttributeOmit>; 

  /**
   * ProductOmit schema (Mon Nov 17 2025)
   */
export const ProductOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, slug: P.bool, description: P.bool, sku: P.bool, upc: P.bool, model: P.bool, categoryId: P.bool, typeId: P.bool, parentId: P.bool }).partial()
export type ProductOmitType = z.infer<typeof ProductOmit>; 

  /**
   * QuantityOmit schema (Mon Nov 17 2025)
   */
export const QuantityOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, quantity: P.bool, minQuantity: P.bool, productId: P.bool, storeId: P.bool, readonly: P.bool }).partial()
export type QuantityOmitType = z.infer<typeof QuantityOmit>; 

  /**
   * SerialNumberOmit schema (Mon Nov 17 2025)
   */
export const SerialNumberOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, serial: P.bool, inStock: P.bool, productId: P.bool, storeId: P.bool }).partial()
export type SerialNumberOmitType = z.infer<typeof SerialNumberOmit>; 

  /**
   * PriceLevelOmit schema (Mon Nov 17 2025)
   */
export const PriceLevelOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, description: P.bool, taxRateId: P.bool }).partial()
export type PriceLevelOmitType = z.infer<typeof PriceLevelOmit>; 

  /**
   * PriceOmit schema (Mon Nov 17 2025)
   */
export const PriceOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, price: P.bool, startDate: P.bool, endDate: P.bool, productId: P.bool, customerId: P.bool, storeId: P.bool, customerGroupId: P.bool, priceLevelId: P.bool }).partial()
export type PriceOmitType = z.infer<typeof PriceOmit>; 

  /**
   * DiscountOmit schema (Mon Nov 17 2025)
   */
export const DiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, code: P.bool, description: P.bool, value: P.bool, valueType: P.bool, startDate: P.bool, endDate: P.bool, minQuantity: P.bool, minSubtotal: P.bool }).partial()
export type DiscountOmitType = z.infer<typeof DiscountOmit>; 

  /**
   * ProductDiscountOmit schema (Mon Nov 17 2025)
   */
export const ProductDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, productId: P.bool, discountId: P.bool, priority: P.bool }).partial()
export type ProductDiscountOmitType = z.infer<typeof ProductDiscountOmit>; 

  /**
   * StoreDiscountOmit schema (Mon Nov 17 2025)
   */
export const StoreDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, discountId: P.bool, storeId: P.bool, priority: P.bool }).partial()
export type StoreDiscountOmitType = z.infer<typeof StoreDiscountOmit>; 

  /**
   * CategoryDiscountOmit schema (Mon Nov 17 2025)
   */
export const CategoryDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, categoryId: P.bool, discountId: P.bool, priority: P.bool }).partial()
export type CategoryDiscountOmitType = z.infer<typeof CategoryDiscountOmit>; 

  /**
   * ProductTypeDiscountOmit schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, productTypeId: P.bool, discountId: P.bool, priority: P.bool }).partial()
export type ProductTypeDiscountOmitType = z.infer<typeof ProductTypeDiscountOmit>; 

  /**
   * CustomerDiscountOmit schema (Mon Nov 17 2025)
   */
export const CustomerDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, customerId: P.bool, discountId: P.bool, priority: P.bool }).partial()
export type CustomerDiscountOmitType = z.infer<typeof CustomerDiscountOmit>; 

  /**
   * CustomerGroupDiscountOmit schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, customerGroupId: P.bool, discountId: P.bool, priority: P.bool }).partial()
export type CustomerGroupDiscountOmitType = z.infer<typeof CustomerGroupDiscountOmit>; 

  /**
   * ProductTypeOmit schema (Mon Nov 17 2025)
   */
export const ProductTypeOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, description: P.bool }).partial()
export type ProductTypeOmitType = z.infer<typeof ProductTypeOmit>; 

  /**
   * JurisdictionOmit schema (Mon Nov 17 2025)
   */
export const JurisdictionOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, code: P.bool, name: P.bool, level: P.bool, parentId: P.bool }).partial()
export type JurisdictionOmitType = z.infer<typeof JurisdictionOmit>; 

  /**
   * TaxRateOmit schema (Mon Nov 17 2025)
   */
export const TaxRateOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, readonly: P.bool, name: P.bool, description: P.bool, percentRate: P.bool, fixedRate: P.bool, startDate: P.bool, endDate: P.bool, jurisdictionId: P.bool, productTypeId: P.bool }).partial()
export type TaxRateOmitType = z.infer<typeof TaxRateOmit>; 

  /**
   * LogOmit schema (Mon Nov 17 2025)
   */
export const LogOmit = z.object({ id: P.bool, readonly: P.bool, timestamp: P.bool, operatorId: P.bool, operatorType: P.bool, operationName: P.bool, recordName: P.bool, recordId: P.bool, difference: P.bool, successful: P.bool }).partial()
export type LogOmitType = z.infer<typeof LogOmit>; 

  /**
   * UserSelectOwn schema (Mon Nov 17 2025)
   */
export const UserSelectOwn = UserOmit
export type UserSelectOwnType = z.infer<typeof UserSelectOwn>; 

  /**
   * CustomerSelectOwn schema (Mon Nov 17 2025)
   */
export const CustomerSelectOwn = CustomerOmit
export type CustomerSelectOwnType = z.infer<typeof CustomerSelectOwn>; 

  /**
   * CustomerGroupSelectOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupSelectOwn = CustomerGroupOmit
export type CustomerGroupSelectOwnType = z.infer<typeof CustomerGroupSelectOwn>; 

  /**
   * StoreSelectOwn schema (Mon Nov 17 2025)
   */
export const StoreSelectOwn = StoreOmit
export type StoreSelectOwnType = z.infer<typeof StoreSelectOwn>; 

  /**
   * ShelfSelectOwn schema (Mon Nov 17 2025)
   */
export const ShelfSelectOwn = ShelfOmit
export type ShelfSelectOwnType = z.infer<typeof ShelfSelectOwn>; 

  /**
   * CategorySelectOwn schema (Mon Nov 17 2025)
   */
export const CategorySelectOwn = CategoryOmit
export type CategorySelectOwnType = z.infer<typeof CategorySelectOwn>; 

  /**
   * TagSelectOwn schema (Mon Nov 17 2025)
   */
export const TagSelectOwn = TagOmit
export type TagSelectOwnType = z.infer<typeof TagSelectOwn>; 

  /**
   * ProductTagSelectOwn schema (Mon Nov 17 2025)
   */
export const ProductTagSelectOwn = ProductTagOmit
export type ProductTagSelectOwnType = z.infer<typeof ProductTagSelectOwn>; 

  /**
   * AttributeSelectOwn schema (Mon Nov 17 2025)
   */
export const AttributeSelectOwn = AttributeOmit
export type AttributeSelectOwnType = z.infer<typeof AttributeSelectOwn>; 

  /**
   * ProductAttributeSelectOwn schema (Mon Nov 17 2025)
   */
export const ProductAttributeSelectOwn = ProductAttributeOmit
export type ProductAttributeSelectOwnType = z.infer<typeof ProductAttributeSelectOwn>; 

  /**
   * ProductSelectOwn schema (Mon Nov 17 2025)
   */
export const ProductSelectOwn = ProductOmit
export type ProductSelectOwnType = z.infer<typeof ProductSelectOwn>; 

  /**
   * QuantitySelectOwn schema (Mon Nov 17 2025)
   */
export const QuantitySelectOwn = QuantityOmit
export type QuantitySelectOwnType = z.infer<typeof QuantitySelectOwn>; 

  /**
   * SerialNumberSelectOwn schema (Mon Nov 17 2025)
   */
export const SerialNumberSelectOwn = SerialNumberOmit
export type SerialNumberSelectOwnType = z.infer<typeof SerialNumberSelectOwn>; 

  /**
   * PriceLevelSelectOwn schema (Mon Nov 17 2025)
   */
export const PriceLevelSelectOwn = PriceLevelOmit
export type PriceLevelSelectOwnType = z.infer<typeof PriceLevelSelectOwn>; 

  /**
   * PriceSelectOwn schema (Mon Nov 17 2025)
   */
export const PriceSelectOwn = PriceOmit
export type PriceSelectOwnType = z.infer<typeof PriceSelectOwn>; 

  /**
   * DiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const DiscountSelectOwn = DiscountOmit
export type DiscountSelectOwnType = z.infer<typeof DiscountSelectOwn>; 

  /**
   * ProductDiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const ProductDiscountSelectOwn = ProductDiscountOmit
export type ProductDiscountSelectOwnType = z.infer<typeof ProductDiscountSelectOwn>; 

  /**
   * StoreDiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const StoreDiscountSelectOwn = StoreDiscountOmit
export type StoreDiscountSelectOwnType = z.infer<typeof StoreDiscountSelectOwn>; 

  /**
   * CategoryDiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const CategoryDiscountSelectOwn = CategoryDiscountOmit
export type CategoryDiscountSelectOwnType = z.infer<typeof CategoryDiscountSelectOwn>; 

  /**
   * ProductTypeDiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountSelectOwn = ProductTypeDiscountOmit
export type ProductTypeDiscountSelectOwnType = z.infer<typeof ProductTypeDiscountSelectOwn>; 

  /**
   * CustomerDiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const CustomerDiscountSelectOwn = CustomerDiscountOmit
export type CustomerDiscountSelectOwnType = z.infer<typeof CustomerDiscountSelectOwn>; 

  /**
   * CustomerGroupDiscountSelectOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountSelectOwn = CustomerGroupDiscountOmit
export type CustomerGroupDiscountSelectOwnType = z.infer<typeof CustomerGroupDiscountSelectOwn>; 

  /**
   * ProductTypeSelectOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeSelectOwn = ProductTypeOmit
export type ProductTypeSelectOwnType = z.infer<typeof ProductTypeSelectOwn>; 

  /**
   * JurisdictionSelectOwn schema (Mon Nov 17 2025)
   */
export const JurisdictionSelectOwn = JurisdictionOmit
export type JurisdictionSelectOwnType = z.infer<typeof JurisdictionSelectOwn>; 

  /**
   * TaxRateSelectOwn schema (Mon Nov 17 2025)
   */
export const TaxRateSelectOwn = TaxRateOmit
export type TaxRateSelectOwnType = z.infer<typeof TaxRateSelectOwn>; 

  /**
   * LogSelectOwn schema (Mon Nov 17 2025)
   */
export const LogSelectOwn = LogOmit
export type LogSelectOwnType = z.infer<typeof LogSelectOwn>; 

  /**
   * UserInclude schema (Mon Nov 17 2025)
   */
export const UserInclude = z.any()
export type UserIncludeType = z.infer<typeof UserInclude>; 

  /**
   * CustomerInclude schema (Mon Nov 17 2025)
   */
export const CustomerInclude = z.object({ discounts: z.object({ select :CustomerDiscountSelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool) }).partial()
export type CustomerIncludeType = z.infer<typeof CustomerInclude>; 

  /**
   * CustomerGroupInclude schema (Mon Nov 17 2025)
   */
export const CustomerGroupInclude = z.object({ discounts: z.object({ select :CustomerGroupDiscountSelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool) }).partial()
export type CustomerGroupIncludeType = z.infer<typeof CustomerGroupInclude>; 

  /**
   * StoreInclude schema (Mon Nov 17 2025)
   */
export const StoreInclude = z.object({ priceLevel: z.object({ select :PriceLevelSelectOwn }).or(P.bool), quantities: z.object({ select :QuantitySelectOwn }).or(P.bool), serials: z.object({ select :SerialNumberSelectOwn }).or(P.bool), shelves: z.object({ select :ShelfSelectOwn }).or(P.bool), discounts: z.object({ select :StoreDiscountSelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool) }).partial()
export type StoreIncludeType = z.infer<typeof StoreInclude>; 

  /**
   * ShelfInclude schema (Mon Nov 17 2025)
   */
export const ShelfInclude = z.object({ store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type ShelfIncludeType = z.infer<typeof ShelfInclude>; 

  /**
   * CategoryInclude schema (Mon Nov 17 2025)
   */
export const CategoryInclude = z.object({ parent: z.object({ select :CategorySelectOwn }).or(P.bool), children: z.object({ select :CategorySelectOwn }).or(P.bool), products: z.object({ select :ProductSelectOwn }).or(P.bool), discounts: z.object({ select :CategoryDiscountSelectOwn }).or(P.bool) }).partial()
export type CategoryIncludeType = z.infer<typeof CategoryInclude>; 

  /**
   * TagInclude schema (Mon Nov 17 2025)
   */
export const TagInclude = z.object({ tags: z.object({ select :ProductTagSelectOwn }).or(P.bool) }).partial()
export type TagIncludeType = z.infer<typeof TagInclude>; 

  /**
   * ProductTagInclude schema (Mon Nov 17 2025)
   */
export const ProductTagInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), tag: z.object({ select :TagSelectOwn }).or(P.bool) }).partial()
export type ProductTagIncludeType = z.infer<typeof ProductTagInclude>; 

  /**
   * AttributeInclude schema (Mon Nov 17 2025)
   */
export const AttributeInclude = z.object({ products: z.object({ select :ProductAttributeSelectOwn }).or(P.bool) }).partial()
export type AttributeIncludeType = z.infer<typeof AttributeInclude>; 

  /**
   * ProductAttributeInclude schema (Mon Nov 17 2025)
   */
export const ProductAttributeInclude = z.object({ attribute: z.object({ select :AttributeSelectOwn }).or(P.bool), product: z.object({ select :ProductSelectOwn }).or(P.bool) }).partial()
export type ProductAttributeIncludeType = z.infer<typeof ProductAttributeInclude>; 

  /**
   * ProductInclude schema (Mon Nov 17 2025)
   */
export const ProductInclude = z.object({ category: z.object({ select :CategorySelectOwn }).or(P.bool), attributes: z.object({ select :ProductAttributeSelectOwn }).or(P.bool), type: z.object({ select :ProductTypeSelectOwn }).or(P.bool), parent: z.object({ select :ProductSelectOwn }).or(P.bool), variants: z.object({ select :ProductSelectOwn }).or(P.bool), quantities: z.object({ select :QuantitySelectOwn }).or(P.bool), serials: z.object({ select :SerialNumberSelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool), tags: z.object({ select :ProductTagSelectOwn }).or(P.bool), discounts: z.object({ select :ProductDiscountSelectOwn }).or(P.bool) }).partial()
export type ProductIncludeType = z.infer<typeof ProductInclude>; 

  /**
   * QuantityInclude schema (Mon Nov 17 2025)
   */
export const QuantityInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type QuantityIncludeType = z.infer<typeof QuantityInclude>; 

  /**
   * SerialNumberInclude schema (Mon Nov 17 2025)
   */
export const SerialNumberInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type SerialNumberIncludeType = z.infer<typeof SerialNumberInclude>; 

  /**
   * PriceLevelInclude schema (Mon Nov 17 2025)
   */
export const PriceLevelInclude = z.object({ taxrate: z.object({ select :TaxRateSelectOwn }).or(P.bool), prices: z.object({ select :PriceSelectOwn }).or(P.bool), stores: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type PriceLevelIncludeType = z.infer<typeof PriceLevelInclude>; 

  /**
   * PriceInclude schema (Mon Nov 17 2025)
   */
export const PriceInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), customer: z.object({ select :CustomerSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool), customerGroup: z.object({ select :CustomerGroupSelectOwn }).or(P.bool), priceLevel: z.object({ select :PriceLevelSelectOwn }).or(P.bool) }).partial()
export type PriceIncludeType = z.infer<typeof PriceInclude>; 

  /**
   * DiscountInclude schema (Mon Nov 17 2025)
   */
export const DiscountInclude = z.any()
export type DiscountIncludeType = z.infer<typeof DiscountInclude>; 

  /**
   * ProductDiscountInclude schema (Mon Nov 17 2025)
   */
export const ProductDiscountInclude = z.object({ product: z.object({ select :ProductSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type ProductDiscountIncludeType = z.infer<typeof ProductDiscountInclude>; 

  /**
   * StoreDiscountInclude schema (Mon Nov 17 2025)
   */
export const StoreDiscountInclude = z.object({ discount: z.object({ select :DiscountSelectOwn }).or(P.bool), store: z.object({ select :StoreSelectOwn }).or(P.bool) }).partial()
export type StoreDiscountIncludeType = z.infer<typeof StoreDiscountInclude>; 

  /**
   * CategoryDiscountInclude schema (Mon Nov 17 2025)
   */
export const CategoryDiscountInclude = z.object({ category: z.object({ select :CategorySelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type CategoryDiscountIncludeType = z.infer<typeof CategoryDiscountInclude>; 

  /**
   * ProductTypeDiscountInclude schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountInclude = z.object({ productType: z.object({ select :ProductTypeSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type ProductTypeDiscountIncludeType = z.infer<typeof ProductTypeDiscountInclude>; 

  /**
   * CustomerDiscountInclude schema (Mon Nov 17 2025)
   */
export const CustomerDiscountInclude = z.object({ customer: z.object({ select :CustomerSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type CustomerDiscountIncludeType = z.infer<typeof CustomerDiscountInclude>; 

  /**
   * CustomerGroupDiscountInclude schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountInclude = z.object({ customerGroup: z.object({ select :CustomerGroupSelectOwn }).or(P.bool), discount: z.object({ select :DiscountSelectOwn }).or(P.bool) }).partial()
export type CustomerGroupDiscountIncludeType = z.infer<typeof CustomerGroupDiscountInclude>; 

  /**
   * ProductTypeInclude schema (Mon Nov 17 2025)
   */
export const ProductTypeInclude = z.object({ products: z.object({ select :ProductSelectOwn }).or(P.bool), rates: z.object({ select :TaxRateSelectOwn }).or(P.bool), discounts: z.object({ select :ProductTypeDiscountSelectOwn }).or(P.bool) }).partial()
export type ProductTypeIncludeType = z.infer<typeof ProductTypeInclude>; 

  /**
   * JurisdictionInclude schema (Mon Nov 17 2025)
   */
export const JurisdictionInclude = z.object({ parent: z.object({ select :JurisdictionSelectOwn }).or(P.bool), children: z.object({ select :JurisdictionSelectOwn }).or(P.bool), rates: z.object({ select :TaxRateSelectOwn }).or(P.bool) }).partial()
export type JurisdictionIncludeType = z.infer<typeof JurisdictionInclude>; 

  /**
   * TaxRateInclude schema (Mon Nov 17 2025)
   */
export const TaxRateInclude = z.object({ jurisdiction: z.object({ select :JurisdictionSelectOwn }).or(P.bool), productType: z.object({ select :ProductTypeSelectOwn }).or(P.bool), priceLevels: z.object({ select :PriceLevelSelectOwn }).or(P.bool) }).partial()
export type TaxRateIncludeType = z.infer<typeof TaxRateInclude>; 

  /**
   * LogInclude schema (Mon Nov 17 2025)
   */
export const LogInclude = z.any()
export type LogIncludeType = z.infer<typeof LogInclude>; 

  /**
   * UserOrderByOwn schema (Mon Nov 17 2025)
   */
export const UserOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, displayName: P.dir 
  }).partial()
export type UserOrderByOwnType = z.infer<typeof UserOrderByOwn>; 

  /**
   * CustomerOrderByOwn schema (Mon Nov 17 2025)
   */
export const CustomerOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir 
  }).partial()
export type CustomerOrderByOwnType = z.infer<typeof CustomerOrderByOwn>; 

  /**
   * CustomerGroupOrderByOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, displayName: P.dir 
  }).partial()
export type CustomerGroupOrderByOwnType = z.infer<typeof CustomerGroupOrderByOwn>; 

  /**
   * StoreOrderByOwn schema (Mon Nov 17 2025)
   */
export const StoreOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, slug: P.dir, description: P.dir, priceLevelId: P.dir 
  }).partial()
export type StoreOrderByOwnType = z.infer<typeof StoreOrderByOwn>; 

  /**
   * ShelfOrderByOwn schema (Mon Nov 17 2025)
   */
export const ShelfOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, description: P.dir, aisle: P.dir, rack: P.dir, level: P.dir, storeId: P.dir 
  }).partial()
export type ShelfOrderByOwnType = z.infer<typeof ShelfOrderByOwn>; 

  /**
   * CategoryOrderByOwn schema (Mon Nov 17 2025)
   */
export const CategoryOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, slug: P.dir, description: P.dir, parentId: P.dir 
  }).partial()
export type CategoryOrderByOwnType = z.infer<typeof CategoryOrderByOwn>; 

  /**
   * TagOrderByOwn schema (Mon Nov 17 2025)
   */
export const TagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, slug: P.dir 
  }).partial()
export type TagOrderByOwnType = z.infer<typeof TagOrderByOwn>; 

  /**
   * ProductTagOrderByOwn schema (Mon Nov 17 2025)
   */
export const ProductTagOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, productId: P.dir, tagId: P.dir 
  }).partial()
export type ProductTagOrderByOwnType = z.infer<typeof ProductTagOrderByOwn>; 

  /**
   * AttributeOrderByOwn schema (Mon Nov 17 2025)
   */
export const AttributeOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, description: P.dir, valueType: P.dir 
  }).partial()
export type AttributeOrderByOwnType = z.infer<typeof AttributeOrderByOwn>; 

  /**
   * ProductAttributeOrderByOwn schema (Mon Nov 17 2025)
   */
export const ProductAttributeOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, value: P.dir, attributeId: P.dir, productId: P.dir 
  }).partial()
export type ProductAttributeOrderByOwnType = z.infer<typeof ProductAttributeOrderByOwn>; 

  /**
   * ProductOrderByOwn schema (Mon Nov 17 2025)
   */
export const ProductOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, slug: P.dir, description: P.dir, sku: P.dir, upc: P.dir, model: P.dir, categoryId: P.dir, typeId: P.dir, parentId: P.dir 
  }).partial()
export type ProductOrderByOwnType = z.infer<typeof ProductOrderByOwn>; 

  /**
   * QuantityOrderByOwn schema (Mon Nov 17 2025)
   */
export const QuantityOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, quantity: P.dir, minQuantity: P.dir, productId: P.dir, storeId: P.dir, readonly: P.dir 
  }).partial()
export type QuantityOrderByOwnType = z.infer<typeof QuantityOrderByOwn>; 

  /**
   * SerialNumberOrderByOwn schema (Mon Nov 17 2025)
   */
export const SerialNumberOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, serial: P.dir, inStock: P.dir, productId: P.dir, storeId: P.dir 
  }).partial()
export type SerialNumberOrderByOwnType = z.infer<typeof SerialNumberOrderByOwn>; 

  /**
   * PriceLevelOrderByOwn schema (Mon Nov 17 2025)
   */
export const PriceLevelOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, description: P.dir, taxRateId: P.dir 
  }).partial()
export type PriceLevelOrderByOwnType = z.infer<typeof PriceLevelOrderByOwn>; 

  /**
   * PriceOrderByOwn schema (Mon Nov 17 2025)
   */
export const PriceOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, price: P.dir, startDate: P.dir, endDate: P.dir, productId: P.dir, customerId: P.dir, storeId: P.dir, customerGroupId: P.dir, priceLevelId: P.dir 
  }).partial()
export type PriceOrderByOwnType = z.infer<typeof PriceOrderByOwn>; 

  /**
   * DiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const DiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, code: P.dir, description: P.dir, value: P.dir, valueType: P.dir, startDate: P.dir, endDate: P.dir, minQuantity: P.dir, minSubtotal: P.dir 
  }).partial()
export type DiscountOrderByOwnType = z.infer<typeof DiscountOrderByOwn>; 

  /**
   * ProductDiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const ProductDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, productId: P.dir, discountId: P.dir, priority: P.dir 
  }).partial()
export type ProductDiscountOrderByOwnType = z.infer<typeof ProductDiscountOrderByOwn>; 

  /**
   * StoreDiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const StoreDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, discountId: P.dir, storeId: P.dir, priority: P.dir 
  }).partial()
export type StoreDiscountOrderByOwnType = z.infer<typeof StoreDiscountOrderByOwn>; 

  /**
   * CategoryDiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const CategoryDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, categoryId: P.dir, discountId: P.dir, priority: P.dir 
  }).partial()
export type CategoryDiscountOrderByOwnType = z.infer<typeof CategoryDiscountOrderByOwn>; 

  /**
   * ProductTypeDiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, productTypeId: P.dir, discountId: P.dir, priority: P.dir 
  }).partial()
export type ProductTypeDiscountOrderByOwnType = z.infer<typeof ProductTypeDiscountOrderByOwn>; 

  /**
   * CustomerDiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const CustomerDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, customerId: P.dir, discountId: P.dir, priority: P.dir 
  }).partial()
export type CustomerDiscountOrderByOwnType = z.infer<typeof CustomerDiscountOrderByOwn>; 

  /**
   * CustomerGroupDiscountOrderByOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, customerGroupId: P.dir, discountId: P.dir, priority: P.dir 
  }).partial()
export type CustomerGroupDiscountOrderByOwnType = z.infer<typeof CustomerGroupDiscountOrderByOwn>; 

  /**
   * ProductTypeOrderByOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, description: P.dir 
  }).partial()
export type ProductTypeOrderByOwnType = z.infer<typeof ProductTypeOrderByOwn>; 

  /**
   * JurisdictionOrderByOwn schema (Mon Nov 17 2025)
   */
export const JurisdictionOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, code: P.dir, name: P.dir, level: P.dir, parentId: P.dir 
  }).partial()
export type JurisdictionOrderByOwnType = z.infer<typeof JurisdictionOrderByOwn>; 

  /**
   * TaxRateOrderByOwn schema (Mon Nov 17 2025)
   */
export const TaxRateOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, readonly: P.dir, name: P.dir, description: P.dir, percentRate: P.dir, fixedRate: P.dir, startDate: P.dir, endDate: P.dir, jurisdictionId: P.dir, productTypeId: P.dir 
  }).partial()
export type TaxRateOrderByOwnType = z.infer<typeof TaxRateOrderByOwn>; 

  /**
   * LogOrderByOwn schema (Mon Nov 17 2025)
   */
export const LogOrderByOwn = z.object({ 
    id: P.dir, readonly: P.dir, timestamp: P.dir, operatorId: P.dir, operatorType: P.dir, operationName: P.dir, recordName: P.dir, recordId: P.dir, difference: P.dir, successful: P.dir 
  }).partial()
export type LogOrderByOwnType = z.infer<typeof LogOrderByOwn>; 

  /**
   * UserOrderBy schema (Mon Nov 17 2025)
   */
export const UserOrderBy = z.object({
    ...UserOrderByOwn.shape, 
     
  }).partial()
export type UserOrderByType = z.infer<typeof UserOrderBy>; 

  /**
   * CustomerOrderBy schema (Mon Nov 17 2025)
   */
export const CustomerOrderBy = z.object({
    ...CustomerOrderByOwn.shape, 
    discounts: P.orderByCount, prices: P.orderByCount 
  }).partial()
export type CustomerOrderByType = z.infer<typeof CustomerOrderBy>; 

  /**
   * CustomerGroupOrderBy schema (Mon Nov 17 2025)
   */
export const CustomerGroupOrderBy = z.object({
    ...CustomerGroupOrderByOwn.shape, 
    discounts: P.orderByCount, prices: P.orderByCount 
  }).partial()
export type CustomerGroupOrderByType = z.infer<typeof CustomerGroupOrderBy>; 

  /**
   * StoreOrderBy schema (Mon Nov 17 2025)
   */
export const StoreOrderBy = z.object({
    ...StoreOrderByOwn.shape, 
    priceLevel: PriceLevelOrderByOwn, quantities: P.orderByCount, serials: P.orderByCount, shelves: P.orderByCount, discounts: P.orderByCount, prices: P.orderByCount 
  }).partial()
export type StoreOrderByType = z.infer<typeof StoreOrderBy>; 

  /**
   * ShelfOrderBy schema (Mon Nov 17 2025)
   */
export const ShelfOrderBy = z.object({
    ...ShelfOrderByOwn.shape, 
    store: StoreOrderByOwn 
  }).partial()
export type ShelfOrderByType = z.infer<typeof ShelfOrderBy>; 

  /**
   * CategoryOrderBy schema (Mon Nov 17 2025)
   */
export const CategoryOrderBy = z.object({
    ...CategoryOrderByOwn.shape, 
    parent: CategoryOrderByOwn, children: P.orderByCount, products: P.orderByCount, discounts: P.orderByCount 
  }).partial()
export type CategoryOrderByType = z.infer<typeof CategoryOrderBy>; 

  /**
   * TagOrderBy schema (Mon Nov 17 2025)
   */
export const TagOrderBy = z.object({
    ...TagOrderByOwn.shape, 
    tags: P.orderByCount 
  }).partial()
export type TagOrderByType = z.infer<typeof TagOrderBy>; 

  /**
   * ProductTagOrderBy schema (Mon Nov 17 2025)
   */
export const ProductTagOrderBy = z.object({
    ...ProductTagOrderByOwn.shape, 
    product: ProductOrderByOwn, tag: TagOrderByOwn 
  }).partial()
export type ProductTagOrderByType = z.infer<typeof ProductTagOrderBy>; 

  /**
   * AttributeOrderBy schema (Mon Nov 17 2025)
   */
export const AttributeOrderBy = z.object({
    ...AttributeOrderByOwn.shape, 
    products: P.orderByCount 
  }).partial()
export type AttributeOrderByType = z.infer<typeof AttributeOrderBy>; 

  /**
   * ProductAttributeOrderBy schema (Mon Nov 17 2025)
   */
export const ProductAttributeOrderBy = z.object({
    ...ProductAttributeOrderByOwn.shape, 
    attribute: AttributeOrderByOwn, product: ProductOrderByOwn 
  }).partial()
export type ProductAttributeOrderByType = z.infer<typeof ProductAttributeOrderBy>; 

  /**
   * ProductOrderBy schema (Mon Nov 17 2025)
   */
export const ProductOrderBy = z.object({
    ...ProductOrderByOwn.shape, 
    category: CategoryOrderByOwn, attributes: P.orderByCount, type: ProductTypeOrderByOwn, parent: ProductOrderByOwn, variants: P.orderByCount, quantities: P.orderByCount, serials: P.orderByCount, prices: P.orderByCount, tags: P.orderByCount, discounts: P.orderByCount 
  }).partial()
export type ProductOrderByType = z.infer<typeof ProductOrderBy>; 

  /**
   * QuantityOrderBy schema (Mon Nov 17 2025)
   */
export const QuantityOrderBy = z.object({
    ...QuantityOrderByOwn.shape, 
    product: ProductOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type QuantityOrderByType = z.infer<typeof QuantityOrderBy>; 

  /**
   * SerialNumberOrderBy schema (Mon Nov 17 2025)
   */
export const SerialNumberOrderBy = z.object({
    ...SerialNumberOrderByOwn.shape, 
    product: ProductOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type SerialNumberOrderByType = z.infer<typeof SerialNumberOrderBy>; 

  /**
   * PriceLevelOrderBy schema (Mon Nov 17 2025)
   */
export const PriceLevelOrderBy = z.object({
    ...PriceLevelOrderByOwn.shape, 
    taxrate: TaxRateOrderByOwn, prices: P.orderByCount, stores: P.orderByCount 
  }).partial()
export type PriceLevelOrderByType = z.infer<typeof PriceLevelOrderBy>; 

  /**
   * PriceOrderBy schema (Mon Nov 17 2025)
   */
export const PriceOrderBy = z.object({
    ...PriceOrderByOwn.shape, 
    product: ProductOrderByOwn, customer: CustomerOrderByOwn, store: StoreOrderByOwn, customerGroup: CustomerGroupOrderByOwn, priceLevel: PriceLevelOrderByOwn 
  }).partial()
export type PriceOrderByType = z.infer<typeof PriceOrderBy>; 

  /**
   * DiscountOrderBy schema (Mon Nov 17 2025)
   */
export const DiscountOrderBy = z.object({
    ...DiscountOrderByOwn.shape, 
     
  }).partial()
export type DiscountOrderByType = z.infer<typeof DiscountOrderBy>; 

  /**
   * ProductDiscountOrderBy schema (Mon Nov 17 2025)
   */
export const ProductDiscountOrderBy = z.object({
    ...ProductDiscountOrderByOwn.shape, 
    product: ProductOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type ProductDiscountOrderByType = z.infer<typeof ProductDiscountOrderBy>; 

  /**
   * StoreDiscountOrderBy schema (Mon Nov 17 2025)
   */
export const StoreDiscountOrderBy = z.object({
    ...StoreDiscountOrderByOwn.shape, 
    discount: DiscountOrderByOwn, store: StoreOrderByOwn 
  }).partial()
export type StoreDiscountOrderByType = z.infer<typeof StoreDiscountOrderBy>; 

  /**
   * CategoryDiscountOrderBy schema (Mon Nov 17 2025)
   */
export const CategoryDiscountOrderBy = z.object({
    ...CategoryDiscountOrderByOwn.shape, 
    category: CategoryOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type CategoryDiscountOrderByType = z.infer<typeof CategoryDiscountOrderBy>; 

  /**
   * ProductTypeDiscountOrderBy schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountOrderBy = z.object({
    ...ProductTypeDiscountOrderByOwn.shape, 
    productType: ProductTypeOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type ProductTypeDiscountOrderByType = z.infer<typeof ProductTypeDiscountOrderBy>; 

  /**
   * CustomerDiscountOrderBy schema (Mon Nov 17 2025)
   */
export const CustomerDiscountOrderBy = z.object({
    ...CustomerDiscountOrderByOwn.shape, 
    customer: CustomerOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type CustomerDiscountOrderByType = z.infer<typeof CustomerDiscountOrderBy>; 

  /**
   * CustomerGroupDiscountOrderBy schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountOrderBy = z.object({
    ...CustomerGroupDiscountOrderByOwn.shape, 
    customerGroup: CustomerGroupOrderByOwn, discount: DiscountOrderByOwn 
  }).partial()
export type CustomerGroupDiscountOrderByType = z.infer<typeof CustomerGroupDiscountOrderBy>; 

  /**
   * ProductTypeOrderBy schema (Mon Nov 17 2025)
   */
export const ProductTypeOrderBy = z.object({
    ...ProductTypeOrderByOwn.shape, 
    products: P.orderByCount, rates: P.orderByCount, discounts: P.orderByCount 
  }).partial()
export type ProductTypeOrderByType = z.infer<typeof ProductTypeOrderBy>; 

  /**
   * JurisdictionOrderBy schema (Mon Nov 17 2025)
   */
export const JurisdictionOrderBy = z.object({
    ...JurisdictionOrderByOwn.shape, 
    parent: JurisdictionOrderByOwn, children: P.orderByCount, rates: P.orderByCount 
  }).partial()
export type JurisdictionOrderByType = z.infer<typeof JurisdictionOrderBy>; 

  /**
   * TaxRateOrderBy schema (Mon Nov 17 2025)
   */
export const TaxRateOrderBy = z.object({
    ...TaxRateOrderByOwn.shape, 
    jurisdiction: JurisdictionOrderByOwn, productType: ProductTypeOrderByOwn, priceLevels: P.orderByCount 
  }).partial()
export type TaxRateOrderByType = z.infer<typeof TaxRateOrderBy>; 

  /**
   * LogOrderBy schema (Mon Nov 17 2025)
   */
export const LogOrderBy = z.object({
    ...LogOrderByOwn.shape, 
     
  }).partial()
export type LogOrderByType = z.infer<typeof LogOrderBy>; 

  /**
   * UserWhereOwn schema (Mon Nov 17 2025)
   */
export const UserWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, displayName: P.strFilter }).partial()
export type UserWhereOwnType = z.infer<typeof UserWhereOwn>; 

  /**
   * CustomerWhereOwn schema (Mon Nov 17 2025)
   */
export const CustomerWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter }).partial()
export type CustomerWhereOwnType = z.infer<typeof CustomerWhereOwn>; 

  /**
   * CustomerGroupWhereOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, displayName: P.strFilter }).partial()
export type CustomerGroupWhereOwnType = z.infer<typeof CustomerGroupWhereOwn>; 

  /**
   * StoreWhereOwn schema (Mon Nov 17 2025)
   */
export const StoreWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter, priceLevelId: P.intFilter }).partial()
export type StoreWhereOwnType = z.infer<typeof StoreWhereOwn>; 

  /**
   * ShelfWhereOwn schema (Mon Nov 17 2025)
   */
export const ShelfWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, description: P.strFilter, aisle: P.strFilter, rack: P.intFilter, level: P.intFilter, storeId: P.intFilter }).partial()
export type ShelfWhereOwnType = z.infer<typeof ShelfWhereOwn>; 

  /**
   * CategoryWhereOwn schema (Mon Nov 17 2025)
   */
export const CategoryWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter, parentId: P.intFilter }).partial()
export type CategoryWhereOwnType = z.infer<typeof CategoryWhereOwn>; 

  /**
   * TagWhereOwn schema (Mon Nov 17 2025)
   */
export const TagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter }).partial()
export type TagWhereOwnType = z.infer<typeof TagWhereOwn>; 

  /**
   * ProductTagWhereOwn schema (Mon Nov 17 2025)
   */
export const ProductTagWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, productId: P.intFilter, tagId: P.intFilter }).partial()
export type ProductTagWhereOwnType = z.infer<typeof ProductTagWhereOwn>; 

  /**
   * AttributeWhereOwn schema (Mon Nov 17 2025)
   */
export const AttributeWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, description: P.strFilter, valueType: AttributeValueTypeFilter }).partial()
export type AttributeWhereOwnType = z.infer<typeof AttributeWhereOwn>; 

  /**
   * ProductAttributeWhereOwn schema (Mon Nov 17 2025)
   */
export const ProductAttributeWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, value: P.strFilter, attributeId: P.intFilter, productId: P.intFilter }).partial()
export type ProductAttributeWhereOwnType = z.infer<typeof ProductAttributeWhereOwn>; 

  /**
   * ProductWhereOwn schema (Mon Nov 17 2025)
   */
export const ProductWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, slug: P.strFilter, description: P.strFilter, sku: P.strFilter, upc: P.strFilter, model: P.strFilter, categoryId: P.intFilter, typeId: P.intFilter, parentId: P.intFilter }).partial()
export type ProductWhereOwnType = z.infer<typeof ProductWhereOwn>; 

  /**
   * QuantityWhereOwn schema (Mon Nov 17 2025)
   */
export const QuantityWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, quantity: P.intFilter, minQuantity: P.intFilter, productId: P.intFilter, storeId: P.intFilter, readonly: P.boolFilter }).partial()
export type QuantityWhereOwnType = z.infer<typeof QuantityWhereOwn>; 

  /**
   * SerialNumberWhereOwn schema (Mon Nov 17 2025)
   */
export const SerialNumberWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, serial: P.strFilter, inStock: P.boolFilter, productId: P.intFilter, storeId: P.intFilter }).partial()
export type SerialNumberWhereOwnType = z.infer<typeof SerialNumberWhereOwn>; 

  /**
   * PriceLevelWhereOwn schema (Mon Nov 17 2025)
   */
export const PriceLevelWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, description: P.strFilter, taxRateId: P.intFilter }).partial()
export type PriceLevelWhereOwnType = z.infer<typeof PriceLevelWhereOwn>; 

  /**
   * PriceWhereOwn schema (Mon Nov 17 2025)
   */
export const PriceWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, price: P.numFilter, startDate: P.datetimeFilter, endDate: P.datetimeFilter, productId: P.intFilter, customerId: P.intFilter, storeId: P.intFilter, customerGroupId: P.intFilter, priceLevelId: P.intFilter }).partial()
export type PriceWhereOwnType = z.infer<typeof PriceWhereOwn>; 

  /**
   * DiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const DiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, code: P.strFilter, description: P.strFilter, value: P.numFilter, valueType: DiscountValueTypeFilter, startDate: P.datetimeFilter, endDate: P.datetimeFilter, minQuantity: P.intFilter, minSubtotal: P.numFilter }).partial()
export type DiscountWhereOwnType = z.infer<typeof DiscountWhereOwn>; 

  /**
   * ProductDiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const ProductDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, productId: P.intFilter, discountId: P.intFilter, priority: P.intFilter }).partial()
export type ProductDiscountWhereOwnType = z.infer<typeof ProductDiscountWhereOwn>; 

  /**
   * StoreDiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const StoreDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, discountId: P.intFilter, storeId: P.intFilter, priority: P.intFilter }).partial()
export type StoreDiscountWhereOwnType = z.infer<typeof StoreDiscountWhereOwn>; 

  /**
   * CategoryDiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const CategoryDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, categoryId: P.intFilter, discountId: P.intFilter, priority: P.intFilter }).partial()
export type CategoryDiscountWhereOwnType = z.infer<typeof CategoryDiscountWhereOwn>; 

  /**
   * ProductTypeDiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, productTypeId: P.intFilter, discountId: P.intFilter, priority: P.intFilter }).partial()
export type ProductTypeDiscountWhereOwnType = z.infer<typeof ProductTypeDiscountWhereOwn>; 

  /**
   * CustomerDiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const CustomerDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, customerId: P.intFilter, discountId: P.intFilter, priority: P.intFilter }).partial()
export type CustomerDiscountWhereOwnType = z.infer<typeof CustomerDiscountWhereOwn>; 

  /**
   * CustomerGroupDiscountWhereOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, customerGroupId: P.intFilter, discountId: P.intFilter, priority: P.intFilter }).partial()
export type CustomerGroupDiscountWhereOwnType = z.infer<typeof CustomerGroupDiscountWhereOwn>; 

  /**
   * ProductTypeWhereOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, description: P.strFilter }).partial()
export type ProductTypeWhereOwnType = z.infer<typeof ProductTypeWhereOwn>; 

  /**
   * JurisdictionWhereOwn schema (Mon Nov 17 2025)
   */
export const JurisdictionWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, code: P.strFilter, name: P.strFilter, level: P.strFilter, parentId: P.intFilter }).partial()
export type JurisdictionWhereOwnType = z.infer<typeof JurisdictionWhereOwn>; 

  /**
   * TaxRateWhereOwn schema (Mon Nov 17 2025)
   */
export const TaxRateWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, readonly: P.boolFilter, name: P.strFilter, description: P.strFilter, percentRate: P.numFilter, fixedRate: P.numFilter, startDate: P.datetimeFilter, endDate: P.datetimeFilter, jurisdictionId: P.intFilter, productTypeId: P.intFilter }).partial()
export type TaxRateWhereOwnType = z.infer<typeof TaxRateWhereOwn>; 

  /**
   * LogWhereOwn schema (Mon Nov 17 2025)
   */
export const LogWhereOwn = z.object({ id: P.intFilter, readonly: P.boolFilter, timestamp: P.datetimeFilter, operatorId: P.strFilter, operatorType: OperatorTypeFilter, operationName: P.strFilter, recordName: P.strFilter, recordId: P.intFilter, difference: P.jsonFilter, successful: P.boolFilter }).partial()
export type LogWhereOwnType = z.infer<typeof LogWhereOwn>; 

  /**
   * UserWhere schema (Mon Nov 17 2025)
   */
export const UserWhere = z.object({ ...UserWhereOwn.shape,AND: UserWhereOwn,OR:  UserWhereOwn.array(),NOT: UserWhereOwn.or(UserWhereOwn.array()) }).partial()
export type UserWhereType = z.infer<typeof UserWhere>; 

  /**
   * CustomerWhere schema (Mon Nov 17 2025)
   */
export const CustomerWhere = z.object({ ...CustomerWhereOwn.shape,discounts: z.object({ 
          some: CustomerDiscountWhereOwn,
          every: CustomerDiscountWhereOwn,
          none: CustomerDiscountWhereOwn
        }).partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(),AND: CustomerWhereOwn,OR:  CustomerWhereOwn.array(),NOT: CustomerWhereOwn.or(CustomerWhereOwn.array()) }).partial()
export type CustomerWhereType = z.infer<typeof CustomerWhere>; 

  /**
   * CustomerGroupWhere schema (Mon Nov 17 2025)
   */
export const CustomerGroupWhere = z.object({ ...CustomerGroupWhereOwn.shape,discounts: z.object({ 
          some: CustomerGroupDiscountWhereOwn,
          every: CustomerGroupDiscountWhereOwn,
          none: CustomerGroupDiscountWhereOwn
        }).partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(),AND: CustomerGroupWhereOwn,OR:  CustomerGroupWhereOwn.array(),NOT: CustomerGroupWhereOwn.or(CustomerGroupWhereOwn.array()) }).partial()
export type CustomerGroupWhereType = z.infer<typeof CustomerGroupWhere>; 

  /**
   * StoreWhere schema (Mon Nov 17 2025)
   */
export const StoreWhere = z.object({ ...StoreWhereOwn.shape,priceLevel: PriceLevelWhereOwn.partial(), quantities: z.object({ 
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
        }).partial(), discounts: z.object({ 
          some: StoreDiscountWhereOwn,
          every: StoreDiscountWhereOwn,
          none: StoreDiscountWhereOwn
        }).partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(),AND: StoreWhereOwn,OR:  StoreWhereOwn.array(),NOT: StoreWhereOwn.or(StoreWhereOwn.array()) }).partial()
export type StoreWhereType = z.infer<typeof StoreWhere>; 

  /**
   * ShelfWhere schema (Mon Nov 17 2025)
   */
export const ShelfWhere = z.object({ ...ShelfWhereOwn.shape,store: StoreWhereOwn.partial(),AND: ShelfWhereOwn,OR:  ShelfWhereOwn.array(),NOT: ShelfWhereOwn.or(ShelfWhereOwn.array()) }).partial()
export type ShelfWhereType = z.infer<typeof ShelfWhere>; 

  /**
   * CategoryWhere schema (Mon Nov 17 2025)
   */
export const CategoryWhere = z.object({ ...CategoryWhereOwn.shape,parent: CategoryWhereOwn.partial(), children: z.object({ 
          some: CategoryWhereOwn,
          every: CategoryWhereOwn,
          none: CategoryWhereOwn
        }).partial(), products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), discounts: z.object({ 
          some: CategoryDiscountWhereOwn,
          every: CategoryDiscountWhereOwn,
          none: CategoryDiscountWhereOwn
        }).partial(),AND: CategoryWhereOwn,OR:  CategoryWhereOwn.array(),NOT: CategoryWhereOwn.or(CategoryWhereOwn.array()) }).partial()
export type CategoryWhereType = z.infer<typeof CategoryWhere>; 

  /**
   * TagWhere schema (Mon Nov 17 2025)
   */
export const TagWhere = z.object({ ...TagWhereOwn.shape,tags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(),AND: TagWhereOwn,OR:  TagWhereOwn.array(),NOT: TagWhereOwn.or(TagWhereOwn.array()) }).partial()
export type TagWhereType = z.infer<typeof TagWhere>; 

  /**
   * ProductTagWhere schema (Mon Nov 17 2025)
   */
export const ProductTagWhere = z.object({ ...ProductTagWhereOwn.shape,product: ProductWhereOwn.partial(), tag: TagWhereOwn.partial(),AND: ProductTagWhereOwn,OR:  ProductTagWhereOwn.array(),NOT: ProductTagWhereOwn.or(ProductTagWhereOwn.array()) }).partial()
export type ProductTagWhereType = z.infer<typeof ProductTagWhere>; 

  /**
   * AttributeWhere schema (Mon Nov 17 2025)
   */
export const AttributeWhere = z.object({ ...AttributeWhereOwn.shape,products: z.object({ 
          some: ProductAttributeWhereOwn,
          every: ProductAttributeWhereOwn,
          none: ProductAttributeWhereOwn
        }).partial(),AND: AttributeWhereOwn,OR:  AttributeWhereOwn.array(),NOT: AttributeWhereOwn.or(AttributeWhereOwn.array()) }).partial()
export type AttributeWhereType = z.infer<typeof AttributeWhere>; 

  /**
   * ProductAttributeWhere schema (Mon Nov 17 2025)
   */
export const ProductAttributeWhere = z.object({ ...ProductAttributeWhereOwn.shape,attribute: AttributeWhereOwn.partial(), product: ProductWhereOwn.partial(),AND: ProductAttributeWhereOwn,OR:  ProductAttributeWhereOwn.array(),NOT: ProductAttributeWhereOwn.or(ProductAttributeWhereOwn.array()) }).partial()
export type ProductAttributeWhereType = z.infer<typeof ProductAttributeWhere>; 

  /**
   * ProductWhere schema (Mon Nov 17 2025)
   */
export const ProductWhere = z.object({ ...ProductWhereOwn.shape,category: CategoryWhereOwn.partial(), attributes: z.object({ 
          some: ProductAttributeWhereOwn,
          every: ProductAttributeWhereOwn,
          none: ProductAttributeWhereOwn
        }).partial(), type: ProductTypeWhereOwn.partial(), parent: ProductWhereOwn.partial(), variants: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), quantities: z.object({ 
          some: QuantityWhereOwn,
          every: QuantityWhereOwn,
          none: QuantityWhereOwn
        }).partial(), serials: z.object({ 
          some: SerialNumberWhereOwn,
          every: SerialNumberWhereOwn,
          none: SerialNumberWhereOwn
        }).partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), tags: z.object({ 
          some: ProductTagWhereOwn,
          every: ProductTagWhereOwn,
          none: ProductTagWhereOwn
        }).partial(), discounts: z.object({ 
          some: ProductDiscountWhereOwn,
          every: ProductDiscountWhereOwn,
          none: ProductDiscountWhereOwn
        }).partial(),AND: ProductWhereOwn,OR:  ProductWhereOwn.array(),NOT: ProductWhereOwn.or(ProductWhereOwn.array()) }).partial()
export type ProductWhereType = z.infer<typeof ProductWhere>; 

  /**
   * QuantityWhere schema (Mon Nov 17 2025)
   */
export const QuantityWhere = z.object({ ...QuantityWhereOwn.shape,product: ProductWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: QuantityWhereOwn,OR:  QuantityWhereOwn.array(),NOT: QuantityWhereOwn.or(QuantityWhereOwn.array()) }).partial()
export type QuantityWhereType = z.infer<typeof QuantityWhere>; 

  /**
   * SerialNumberWhere schema (Mon Nov 17 2025)
   */
export const SerialNumberWhere = z.object({ ...SerialNumberWhereOwn.shape,product: ProductWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: SerialNumberWhereOwn,OR:  SerialNumberWhereOwn.array(),NOT: SerialNumberWhereOwn.or(SerialNumberWhereOwn.array()) }).partial()
export type SerialNumberWhereType = z.infer<typeof SerialNumberWhere>; 

  /**
   * PriceLevelWhere schema (Mon Nov 17 2025)
   */
export const PriceLevelWhere = z.object({ ...PriceLevelWhereOwn.shape,taxrate: TaxRateWhereOwn.partial(), prices: z.object({ 
          some: PriceWhereOwn,
          every: PriceWhereOwn,
          none: PriceWhereOwn
        }).partial(), stores: z.object({ 
          some: StoreWhereOwn,
          every: StoreWhereOwn,
          none: StoreWhereOwn
        }).partial(),AND: PriceLevelWhereOwn,OR:  PriceLevelWhereOwn.array(),NOT: PriceLevelWhereOwn.or(PriceLevelWhereOwn.array()) }).partial()
export type PriceLevelWhereType = z.infer<typeof PriceLevelWhere>; 

  /**
   * PriceWhere schema (Mon Nov 17 2025)
   */
export const PriceWhere = z.object({ ...PriceWhereOwn.shape,product: ProductWhereOwn.partial(), customer: CustomerWhereOwn.partial(), store: StoreWhereOwn.partial(), customerGroup: CustomerGroupWhereOwn.partial(), priceLevel: PriceLevelWhereOwn.partial(),AND: PriceWhereOwn,OR:  PriceWhereOwn.array(),NOT: PriceWhereOwn.or(PriceWhereOwn.array()) }).partial()
export type PriceWhereType = z.infer<typeof PriceWhere>; 

  /**
   * DiscountWhere schema (Mon Nov 17 2025)
   */
export const DiscountWhere = z.object({ ...DiscountWhereOwn.shape,AND: DiscountWhereOwn,OR:  DiscountWhereOwn.array(),NOT: DiscountWhereOwn.or(DiscountWhereOwn.array()) }).partial()
export type DiscountWhereType = z.infer<typeof DiscountWhere>; 

  /**
   * ProductDiscountWhere schema (Mon Nov 17 2025)
   */
export const ProductDiscountWhere = z.object({ ...ProductDiscountWhereOwn.shape,product: ProductWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: ProductDiscountWhereOwn,OR:  ProductDiscountWhereOwn.array(),NOT: ProductDiscountWhereOwn.or(ProductDiscountWhereOwn.array()) }).partial()
export type ProductDiscountWhereType = z.infer<typeof ProductDiscountWhere>; 

  /**
   * StoreDiscountWhere schema (Mon Nov 17 2025)
   */
export const StoreDiscountWhere = z.object({ ...StoreDiscountWhereOwn.shape,discount: DiscountWhereOwn.partial(), store: StoreWhereOwn.partial(),AND: StoreDiscountWhereOwn,OR:  StoreDiscountWhereOwn.array(),NOT: StoreDiscountWhereOwn.or(StoreDiscountWhereOwn.array()) }).partial()
export type StoreDiscountWhereType = z.infer<typeof StoreDiscountWhere>; 

  /**
   * CategoryDiscountWhere schema (Mon Nov 17 2025)
   */
export const CategoryDiscountWhere = z.object({ ...CategoryDiscountWhereOwn.shape,category: CategoryWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: CategoryDiscountWhereOwn,OR:  CategoryDiscountWhereOwn.array(),NOT: CategoryDiscountWhereOwn.or(CategoryDiscountWhereOwn.array()) }).partial()
export type CategoryDiscountWhereType = z.infer<typeof CategoryDiscountWhere>; 

  /**
   * ProductTypeDiscountWhere schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountWhere = z.object({ ...ProductTypeDiscountWhereOwn.shape,productType: ProductTypeWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: ProductTypeDiscountWhereOwn,OR:  ProductTypeDiscountWhereOwn.array(),NOT: ProductTypeDiscountWhereOwn.or(ProductTypeDiscountWhereOwn.array()) }).partial()
export type ProductTypeDiscountWhereType = z.infer<typeof ProductTypeDiscountWhere>; 

  /**
   * CustomerDiscountWhere schema (Mon Nov 17 2025)
   */
export const CustomerDiscountWhere = z.object({ ...CustomerDiscountWhereOwn.shape,customer: CustomerWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: CustomerDiscountWhereOwn,OR:  CustomerDiscountWhereOwn.array(),NOT: CustomerDiscountWhereOwn.or(CustomerDiscountWhereOwn.array()) }).partial()
export type CustomerDiscountWhereType = z.infer<typeof CustomerDiscountWhere>; 

  /**
   * CustomerGroupDiscountWhere schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountWhere = z.object({ ...CustomerGroupDiscountWhereOwn.shape,customerGroup: CustomerGroupWhereOwn.partial(), discount: DiscountWhereOwn.partial(),AND: CustomerGroupDiscountWhereOwn,OR:  CustomerGroupDiscountWhereOwn.array(),NOT: CustomerGroupDiscountWhereOwn.or(CustomerGroupDiscountWhereOwn.array()) }).partial()
export type CustomerGroupDiscountWhereType = z.infer<typeof CustomerGroupDiscountWhere>; 

  /**
   * ProductTypeWhere schema (Mon Nov 17 2025)
   */
export const ProductTypeWhere = z.object({ ...ProductTypeWhereOwn.shape,products: z.object({ 
          some: ProductWhereOwn,
          every: ProductWhereOwn,
          none: ProductWhereOwn
        }).partial(), rates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(), discounts: z.object({ 
          some: ProductTypeDiscountWhereOwn,
          every: ProductTypeDiscountWhereOwn,
          none: ProductTypeDiscountWhereOwn
        }).partial(),AND: ProductTypeWhereOwn,OR:  ProductTypeWhereOwn.array(),NOT: ProductTypeWhereOwn.or(ProductTypeWhereOwn.array()) }).partial()
export type ProductTypeWhereType = z.infer<typeof ProductTypeWhere>; 

  /**
   * JurisdictionWhere schema (Mon Nov 17 2025)
   */
export const JurisdictionWhere = z.object({ ...JurisdictionWhereOwn.shape,parent: JurisdictionWhereOwn.partial(), children: z.object({ 
          some: JurisdictionWhereOwn,
          every: JurisdictionWhereOwn,
          none: JurisdictionWhereOwn
        }).partial(), rates: z.object({ 
          some: TaxRateWhereOwn,
          every: TaxRateWhereOwn,
          none: TaxRateWhereOwn
        }).partial(),AND: JurisdictionWhereOwn,OR:  JurisdictionWhereOwn.array(),NOT: JurisdictionWhereOwn.or(JurisdictionWhereOwn.array()) }).partial()
export type JurisdictionWhereType = z.infer<typeof JurisdictionWhere>; 

  /**
   * TaxRateWhere schema (Mon Nov 17 2025)
   */
export const TaxRateWhere = z.object({ ...TaxRateWhereOwn.shape,jurisdiction: JurisdictionWhereOwn.partial(), productType: ProductTypeWhereOwn.partial(), priceLevels: z.object({ 
          some: PriceLevelWhereOwn,
          every: PriceLevelWhereOwn,
          none: PriceLevelWhereOwn
        }).partial(),AND: TaxRateWhereOwn,OR:  TaxRateWhereOwn.array(),NOT: TaxRateWhereOwn.or(TaxRateWhereOwn.array()) }).partial()
export type TaxRateWhereType = z.infer<typeof TaxRateWhere>; 

  /**
   * LogWhere schema (Mon Nov 17 2025)
   */
export const LogWhere = z.object({ ...LogWhereOwn.shape,AND: LogWhereOwn,OR:  LogWhereOwn.array(),NOT: LogWhereOwn.or(LogWhereOwn.array()) }).partial()
export type LogWhereType = z.infer<typeof LogWhere>; 

  /**
   * UserQueryOwn schema (Mon Nov 17 2025)
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
   * CustomerQueryOwn schema (Mon Nov 17 2025)
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
   * CustomerGroupQueryOwn schema (Mon Nov 17 2025)
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
   * StoreQueryOwn schema (Mon Nov 17 2025)
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
   * ShelfQueryOwn schema (Mon Nov 17 2025)
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
   * CategoryQueryOwn schema (Mon Nov 17 2025)
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
   * TagQueryOwn schema (Mon Nov 17 2025)
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
   * ProductTagQueryOwn schema (Mon Nov 17 2025)
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
   * AttributeQueryOwn schema (Mon Nov 17 2025)
   */
export const AttributeQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: AttributeField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, AttributeOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, AttributeWhere)
  }).partial()
export type AttributeQueryOwnType = z.infer<typeof AttributeQueryOwn>; 

  /**
   * ProductAttributeQueryOwn schema (Mon Nov 17 2025)
   */
export const ProductAttributeQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: ProductAttributeField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, ProductAttributeOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, ProductAttributeWhere)
  }).partial()
export type ProductAttributeQueryOwnType = z.infer<typeof ProductAttributeQueryOwn>; 

  /**
   * ProductQueryOwn schema (Mon Nov 17 2025)
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
   * QuantityQueryOwn schema (Mon Nov 17 2025)
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
   * SerialNumberQueryOwn schema (Mon Nov 17 2025)
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
   * PriceLevelQueryOwn schema (Mon Nov 17 2025)
   */
export const PriceLevelQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: PriceLevelField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, PriceLevelOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, PriceLevelWhere)
  }).partial()
export type PriceLevelQueryOwnType = z.infer<typeof PriceLevelQueryOwn>; 

  /**
   * PriceQueryOwn schema (Mon Nov 17 2025)
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
   * DiscountQueryOwn schema (Mon Nov 17 2025)
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
   * ProductDiscountQueryOwn schema (Mon Nov 17 2025)
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
   * StoreDiscountQueryOwn schema (Mon Nov 17 2025)
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
   * CategoryDiscountQueryOwn schema (Mon Nov 17 2025)
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
   * ProductTypeDiscountQueryOwn schema (Mon Nov 17 2025)
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
   * CustomerDiscountQueryOwn schema (Mon Nov 17 2025)
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
   * CustomerGroupDiscountQueryOwn schema (Mon Nov 17 2025)
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
   * ProductTypeQueryOwn schema (Mon Nov 17 2025)
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
   * JurisdictionQueryOwn schema (Mon Nov 17 2025)
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
   * TaxRateQueryOwn schema (Mon Nov 17 2025)
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
   * LogQueryOwn schema (Mon Nov 17 2025)
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
   * UserQueryOne schema (Mon Nov 17 2025)
   */
export const UserQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, UserInclude),
    where:    z.preprocess(P.parseJsonOrReturn, UserWhere)
  }).partial()
export type UserQueryOneType = z.infer<typeof UserQueryOne>; 

  /**
   * CustomerQueryOne schema (Mon Nov 17 2025)
   */
export const CustomerQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerWhere)
  }).partial()
export type CustomerQueryOneType = z.infer<typeof CustomerQueryOne>; 

  /**
   * CustomerGroupQueryOne schema (Mon Nov 17 2025)
   */
export const CustomerGroupQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerGroupInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerGroupWhere)
  }).partial()
export type CustomerGroupQueryOneType = z.infer<typeof CustomerGroupQueryOne>; 

  /**
   * StoreQueryOne schema (Mon Nov 17 2025)
   */
export const StoreQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, StoreInclude),
    where:    z.preprocess(P.parseJsonOrReturn, StoreWhere)
  }).partial()
export type StoreQueryOneType = z.infer<typeof StoreQueryOne>; 

  /**
   * ShelfQueryOne schema (Mon Nov 17 2025)
   */
export const ShelfQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ShelfSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ShelfInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ShelfWhere)
  }).partial()
export type ShelfQueryOneType = z.infer<typeof ShelfQueryOne>; 

  /**
   * CategoryQueryOne schema (Mon Nov 17 2025)
   */
export const CategoryQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategorySelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CategoryInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryWhere)
  }).partial()
export type CategoryQueryOneType = z.infer<typeof CategoryQueryOne>; 

  /**
   * TagQueryOne schema (Mon Nov 17 2025)
   */
export const TagQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TagSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, TagInclude),
    where:    z.preprocess(P.parseJsonOrReturn, TagWhere)
  }).partial()
export type TagQueryOneType = z.infer<typeof TagQueryOne>; 

  /**
   * ProductTagQueryOne schema (Mon Nov 17 2025)
   */
export const ProductTagQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTagInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTagWhere)
  }).partial()
export type ProductTagQueryOneType = z.infer<typeof ProductTagQueryOne>; 

  /**
   * AttributeQueryOne schema (Mon Nov 17 2025)
   */
export const AttributeQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AttributeSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, AttributeOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, AttributeInclude),
    where:    z.preprocess(P.parseJsonOrReturn, AttributeWhere)
  }).partial()
export type AttributeQueryOneType = z.infer<typeof AttributeQueryOne>; 

  /**
   * ProductAttributeQueryOne schema (Mon Nov 17 2025)
   */
export const ProductAttributeQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductAttributeSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductAttributeOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductAttributeInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductAttributeWhere)
  }).partial()
export type ProductAttributeQueryOneType = z.infer<typeof ProductAttributeQueryOne>; 

  /**
   * ProductQueryOne schema (Mon Nov 17 2025)
   */
export const ProductQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductWhere)
  }).partial()
export type ProductQueryOneType = z.infer<typeof ProductQueryOne>; 

  /**
   * QuantityQueryOne schema (Mon Nov 17 2025)
   */
export const QuantityQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, QuantityInclude),
    where:    z.preprocess(P.parseJsonOrReturn, QuantityWhere)
  }).partial()
export type QuantityQueryOneType = z.infer<typeof QuantityQueryOne>; 

  /**
   * SerialNumberQueryOne schema (Mon Nov 17 2025)
   */
export const SerialNumberQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, SerialNumberInclude),
    where:    z.preprocess(P.parseJsonOrReturn, SerialNumberWhere)
  }).partial()
export type SerialNumberQueryOneType = z.infer<typeof SerialNumberQueryOne>; 

  /**
   * PriceLevelQueryOne schema (Mon Nov 17 2025)
   */
export const PriceLevelQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceLevelSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, PriceLevelOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, PriceLevelInclude),
    where:    z.preprocess(P.parseJsonOrReturn, PriceLevelWhere)
  }).partial()
export type PriceLevelQueryOneType = z.infer<typeof PriceLevelQueryOne>; 

  /**
   * PriceQueryOne schema (Mon Nov 17 2025)
   */
export const PriceQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, PriceInclude),
    where:    z.preprocess(P.parseJsonOrReturn, PriceWhere)
  }).partial()
export type PriceQueryOneType = z.infer<typeof PriceQueryOne>; 

  /**
   * DiscountQueryOne schema (Mon Nov 17 2025)
   */
export const DiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, DiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, DiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, DiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, DiscountWhere)
  }).partial()
export type DiscountQueryOneType = z.infer<typeof DiscountQueryOne>; 

  /**
   * ProductDiscountQueryOne schema (Mon Nov 17 2025)
   */
export const ProductDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductDiscountWhere)
  }).partial()
export type ProductDiscountQueryOneType = z.infer<typeof ProductDiscountQueryOne>; 

  /**
   * StoreDiscountQueryOne schema (Mon Nov 17 2025)
   */
export const StoreDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, StoreDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, StoreDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, StoreDiscountWhere)
  }).partial()
export type StoreDiscountQueryOneType = z.infer<typeof StoreDiscountQueryOne>; 

  /**
   * CategoryDiscountQueryOne schema (Mon Nov 17 2025)
   */
export const CategoryDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategoryDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CategoryDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CategoryDiscountWhere)
  }).partial()
export type CategoryDiscountQueryOneType = z.infer<typeof CategoryDiscountQueryOne>; 

  /**
   * ProductTypeDiscountQueryOne schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountWhere)
  }).partial()
export type ProductTypeDiscountQueryOneType = z.infer<typeof ProductTypeDiscountQueryOne>; 

  /**
   * CustomerDiscountQueryOne schema (Mon Nov 17 2025)
   */
export const CustomerDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerDiscountWhere)
  }).partial()
export type CustomerDiscountQueryOneType = z.infer<typeof CustomerDiscountQueryOne>; 

  /**
   * CustomerGroupDiscountQueryOne schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountInclude),
    where:    z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountWhere)
  }).partial()
export type CustomerGroupDiscountQueryOneType = z.infer<typeof CustomerGroupDiscountQueryOne>; 

  /**
   * ProductTypeQueryOne schema (Mon Nov 17 2025)
   */
export const ProductTypeQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, ProductTypeInclude),
    where:    z.preprocess(P.parseJsonOrReturn, ProductTypeWhere)
  }).partial()
export type ProductTypeQueryOneType = z.infer<typeof ProductTypeQueryOne>; 

  /**
   * JurisdictionQueryOne schema (Mon Nov 17 2025)
   */
export const JurisdictionQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, JurisdictionInclude),
    where:    z.preprocess(P.parseJsonOrReturn, JurisdictionWhere)
  }).partial()
export type JurisdictionQueryOneType = z.infer<typeof JurisdictionQueryOne>; 

  /**
   * TaxRateQueryOne schema (Mon Nov 17 2025)
   */
export const TaxRateQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, TaxRateInclude),
    where:    z.preprocess(P.parseJsonOrReturn, TaxRateWhere)
  }).partial()
export type TaxRateQueryOneType = z.infer<typeof TaxRateQueryOne>; 

  /**
   * LogQueryOne schema (Mon Nov 17 2025)
   */
export const LogQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, LogInclude),
    where:    z.preprocess(P.parseJsonOrReturn, LogWhere)
  }).partial()
export type LogQueryOneType = z.infer<typeof LogQueryOne>; 

  /**
   * UserQuery schema (Mon Nov 17 2025)
   */
export const UserQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, UserInclude   ),
    ...UserQueryOwn.shape 
  }).partial()
export type UserQueryType = z.infer<typeof UserQuery>; 

  /**
   * CustomerQuery schema (Mon Nov 17 2025)
   */
export const CustomerQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerInclude   ),
    ...CustomerQueryOwn.shape 
  }).partial()
export type CustomerQueryType = z.infer<typeof CustomerQuery>; 

  /**
   * CustomerGroupQuery schema (Mon Nov 17 2025)
   */
export const CustomerGroupQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupInclude   ),
    ...CustomerGroupQueryOwn.shape 
  }).partial()
export type CustomerGroupQueryType = z.infer<typeof CustomerGroupQuery>; 

  /**
   * StoreQuery schema (Mon Nov 17 2025)
   */
export const StoreQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, StoreInclude   ),
    ...StoreQueryOwn.shape 
  }).partial()
export type StoreQueryType = z.infer<typeof StoreQuery>; 

  /**
   * ShelfQuery schema (Mon Nov 17 2025)
   */
export const ShelfQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ShelfSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ShelfInclude   ),
    ...ShelfQueryOwn.shape 
  }).partial()
export type ShelfQueryType = z.infer<typeof ShelfQuery>; 

  /**
   * CategoryQuery schema (Mon Nov 17 2025)
   */
export const CategoryQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategorySelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CategoryInclude   ),
    ...CategoryQueryOwn.shape 
  }).partial()
export type CategoryQueryType = z.infer<typeof CategoryQuery>; 

  /**
   * TagQuery schema (Mon Nov 17 2025)
   */
export const TagQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TagSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, TagInclude   ),
    ...TagQueryOwn.shape 
  }).partial()
export type TagQueryType = z.infer<typeof TagQuery>; 

  /**
   * ProductTagQuery schema (Mon Nov 17 2025)
   */
export const ProductTagQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTagInclude   ),
    ...ProductTagQueryOwn.shape 
  }).partial()
export type ProductTagQueryType = z.infer<typeof ProductTagQuery>; 

  /**
   * AttributeQuery schema (Mon Nov 17 2025)
   */
export const AttributeQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AttributeSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, AttributeOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, AttributeInclude   ),
    ...AttributeQueryOwn.shape 
  }).partial()
export type AttributeQueryType = z.infer<typeof AttributeQuery>; 

  /**
   * ProductAttributeQuery schema (Mon Nov 17 2025)
   */
export const ProductAttributeQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductAttributeSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductAttributeOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductAttributeInclude   ),
    ...ProductAttributeQueryOwn.shape 
  }).partial()
export type ProductAttributeQueryType = z.infer<typeof ProductAttributeQuery>; 

  /**
   * ProductQuery schema (Mon Nov 17 2025)
   */
export const ProductQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductInclude   ),
    ...ProductQueryOwn.shape 
  }).partial()
export type ProductQueryType = z.infer<typeof ProductQuery>; 

  /**
   * QuantityQuery schema (Mon Nov 17 2025)
   */
export const QuantityQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, QuantitySelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, QuantityInclude   ),
    ...QuantityQueryOwn.shape 
  }).partial()
export type QuantityQueryType = z.infer<typeof QuantityQuery>; 

  /**
   * SerialNumberQuery schema (Mon Nov 17 2025)
   */
export const SerialNumberQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, SerialNumberInclude   ),
    ...SerialNumberQueryOwn.shape 
  }).partial()
export type SerialNumberQueryType = z.infer<typeof SerialNumberQuery>; 

  /**
   * PriceLevelQuery schema (Mon Nov 17 2025)
   */
export const PriceLevelQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceLevelSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, PriceLevelOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, PriceLevelInclude   ),
    ...PriceLevelQueryOwn.shape 
  }).partial()
export type PriceLevelQueryType = z.infer<typeof PriceLevelQuery>; 

  /**
   * PriceQuery schema (Mon Nov 17 2025)
   */
export const PriceQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PriceSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, PriceInclude   ),
    ...PriceQueryOwn.shape 
  }).partial()
export type PriceQueryType = z.infer<typeof PriceQuery>; 

  /**
   * DiscountQuery schema (Mon Nov 17 2025)
   */
export const DiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, DiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, DiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, DiscountInclude   ),
    ...DiscountQueryOwn.shape 
  }).partial()
export type DiscountQueryType = z.infer<typeof DiscountQuery>; 

  /**
   * ProductDiscountQuery schema (Mon Nov 17 2025)
   */
export const ProductDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductDiscountInclude   ),
    ...ProductDiscountQueryOwn.shape 
  }).partial()
export type ProductDiscountQueryType = z.infer<typeof ProductDiscountQuery>; 

  /**
   * StoreDiscountQuery schema (Mon Nov 17 2025)
   */
export const StoreDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, StoreDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, StoreDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, StoreDiscountInclude   ),
    ...StoreDiscountQueryOwn.shape 
  }).partial()
export type StoreDiscountQueryType = z.infer<typeof StoreDiscountQuery>; 

  /**
   * CategoryDiscountQuery schema (Mon Nov 17 2025)
   */
export const CategoryDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CategoryDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CategoryDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CategoryDiscountInclude   ),
    ...CategoryDiscountQueryOwn.shape 
  }).partial()
export type CategoryDiscountQueryType = z.infer<typeof CategoryDiscountQuery>; 

  /**
   * ProductTypeDiscountQuery schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountInclude   ),
    ...ProductTypeDiscountQueryOwn.shape 
  }).partial()
export type ProductTypeDiscountQueryType = z.infer<typeof ProductTypeDiscountQuery>; 

  /**
   * CustomerDiscountQuery schema (Mon Nov 17 2025)
   */
export const CustomerDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerDiscountInclude   ),
    ...CustomerDiscountQueryOwn.shape 
  }).partial()
export type CustomerDiscountQueryType = z.infer<typeof CustomerDiscountQuery>; 

  /**
   * CustomerGroupDiscountQuery schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountInclude   ),
    ...CustomerGroupDiscountQueryOwn.shape 
  }).partial()
export type CustomerGroupDiscountQueryType = z.infer<typeof CustomerGroupDiscountQuery>; 

  /**
   * ProductTypeQuery schema (Mon Nov 17 2025)
   */
export const ProductTypeQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, ProductTypeInclude   ),
    ...ProductTypeQueryOwn.shape 
  }).partial()
export type ProductTypeQueryType = z.infer<typeof ProductTypeQuery>; 

  /**
   * JurisdictionQuery schema (Mon Nov 17 2025)
   */
export const JurisdictionQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, JurisdictionInclude   ),
    ...JurisdictionQueryOwn.shape 
  }).partial()
export type JurisdictionQueryType = z.infer<typeof JurisdictionQuery>; 

  /**
   * TaxRateQuery schema (Mon Nov 17 2025)
   */
export const TaxRateQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, TaxRateInclude   ),
    ...TaxRateQueryOwn.shape 
  }).partial()
export type TaxRateQueryType = z.infer<typeof TaxRateQuery>; 

  /**
   * LogQuery schema (Mon Nov 17 2025)
   */
export const LogQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, LogInclude   ),
    ...LogQueryOwn.shape 
  }).partial()
export type LogQueryType = z.infer<typeof LogQuery>; 

  /**
   * UserSelect schema (Mon Nov 17 2025)
   */
export const UserSelect = z.object({...UserSelectOwn.shape,  }).partial()
export type UserSelectType = z.infer<typeof UserSelect>; 

  /**
   * CustomerSelect schema (Mon Nov 17 2025)
   */
export const CustomerSelect = z.object({...CustomerSelectOwn.shape,  }).partial()
export type CustomerSelectType = z.infer<typeof CustomerSelect>; 

  /**
   * CustomerGroupSelect schema (Mon Nov 17 2025)
   */
export const CustomerGroupSelect = z.object({...CustomerGroupSelectOwn.shape,  }).partial()
export type CustomerGroupSelectType = z.infer<typeof CustomerGroupSelect>; 

  /**
   * StoreSelect schema (Mon Nov 17 2025)
   */
export const StoreSelect = z.object({...StoreSelectOwn.shape,  }).partial()
export type StoreSelectType = z.infer<typeof StoreSelect>; 

  /**
   * ShelfSelect schema (Mon Nov 17 2025)
   */
export const ShelfSelect = z.object({...ShelfSelectOwn.shape,  }).partial()
export type ShelfSelectType = z.infer<typeof ShelfSelect>; 

  /**
   * CategorySelect schema (Mon Nov 17 2025)
   */
export const CategorySelect = z.object({...CategorySelectOwn.shape,  }).partial()
export type CategorySelectType = z.infer<typeof CategorySelect>; 

  /**
   * TagSelect schema (Mon Nov 17 2025)
   */
export const TagSelect = z.object({...TagSelectOwn.shape,  }).partial()
export type TagSelectType = z.infer<typeof TagSelect>; 

  /**
   * ProductTagSelect schema (Mon Nov 17 2025)
   */
export const ProductTagSelect = z.object({...ProductTagSelectOwn.shape,  }).partial()
export type ProductTagSelectType = z.infer<typeof ProductTagSelect>; 

  /**
   * AttributeSelect schema (Mon Nov 17 2025)
   */
export const AttributeSelect = z.object({...AttributeSelectOwn.shape,  }).partial()
export type AttributeSelectType = z.infer<typeof AttributeSelect>; 

  /**
   * ProductAttributeSelect schema (Mon Nov 17 2025)
   */
export const ProductAttributeSelect = z.object({...ProductAttributeSelectOwn.shape,  }).partial()
export type ProductAttributeSelectType = z.infer<typeof ProductAttributeSelect>; 

  /**
   * ProductSelect schema (Mon Nov 17 2025)
   */
export const ProductSelect = z.object({...ProductSelectOwn.shape,  }).partial()
export type ProductSelectType = z.infer<typeof ProductSelect>; 

  /**
   * QuantitySelect schema (Mon Nov 17 2025)
   */
export const QuantitySelect = z.object({...QuantitySelectOwn.shape,  }).partial()
export type QuantitySelectType = z.infer<typeof QuantitySelect>; 

  /**
   * SerialNumberSelect schema (Mon Nov 17 2025)
   */
export const SerialNumberSelect = z.object({...SerialNumberSelectOwn.shape,  }).partial()
export type SerialNumberSelectType = z.infer<typeof SerialNumberSelect>; 

  /**
   * PriceLevelSelect schema (Mon Nov 17 2025)
   */
export const PriceLevelSelect = z.object({...PriceLevelSelectOwn.shape,  }).partial()
export type PriceLevelSelectType = z.infer<typeof PriceLevelSelect>; 

  /**
   * PriceSelect schema (Mon Nov 17 2025)
   */
export const PriceSelect = z.object({...PriceSelectOwn.shape,  }).partial()
export type PriceSelectType = z.infer<typeof PriceSelect>; 

  /**
   * DiscountSelect schema (Mon Nov 17 2025)
   */
export const DiscountSelect = z.object({...DiscountSelectOwn.shape,  }).partial()
export type DiscountSelectType = z.infer<typeof DiscountSelect>; 

  /**
   * ProductDiscountSelect schema (Mon Nov 17 2025)
   */
export const ProductDiscountSelect = z.object({...ProductDiscountSelectOwn.shape,  }).partial()
export type ProductDiscountSelectType = z.infer<typeof ProductDiscountSelect>; 

  /**
   * StoreDiscountSelect schema (Mon Nov 17 2025)
   */
export const StoreDiscountSelect = z.object({...StoreDiscountSelectOwn.shape,  }).partial()
export type StoreDiscountSelectType = z.infer<typeof StoreDiscountSelect>; 

  /**
   * CategoryDiscountSelect schema (Mon Nov 17 2025)
   */
export const CategoryDiscountSelect = z.object({...CategoryDiscountSelectOwn.shape,  }).partial()
export type CategoryDiscountSelectType = z.infer<typeof CategoryDiscountSelect>; 

  /**
   * ProductTypeDiscountSelect schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountSelect = z.object({...ProductTypeDiscountSelectOwn.shape,  }).partial()
export type ProductTypeDiscountSelectType = z.infer<typeof ProductTypeDiscountSelect>; 

  /**
   * CustomerDiscountSelect schema (Mon Nov 17 2025)
   */
export const CustomerDiscountSelect = z.object({...CustomerDiscountSelectOwn.shape,  }).partial()
export type CustomerDiscountSelectType = z.infer<typeof CustomerDiscountSelect>; 

  /**
   * CustomerGroupDiscountSelect schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountSelect = z.object({...CustomerGroupDiscountSelectOwn.shape,  }).partial()
export type CustomerGroupDiscountSelectType = z.infer<typeof CustomerGroupDiscountSelect>; 

  /**
   * ProductTypeSelect schema (Mon Nov 17 2025)
   */
export const ProductTypeSelect = z.object({...ProductTypeSelectOwn.shape,  }).partial()
export type ProductTypeSelectType = z.infer<typeof ProductTypeSelect>; 

  /**
   * JurisdictionSelect schema (Mon Nov 17 2025)
   */
export const JurisdictionSelect = z.object({...JurisdictionSelectOwn.shape,  }).partial()
export type JurisdictionSelectType = z.infer<typeof JurisdictionSelect>; 

  /**
   * TaxRateSelect schema (Mon Nov 17 2025)
   */
export const TaxRateSelect = z.object({...TaxRateSelectOwn.shape,  }).partial()
export type TaxRateSelectType = z.infer<typeof TaxRateSelect>; 

  /**
   * LogSelect schema (Mon Nov 17 2025)
   */
export const LogSelect = z.object({...LogSelectOwn.shape,  }).partial()
export type LogSelectType = z.infer<typeof LogSelect>; 

  /**
   * UserProjection schema (Mon Nov 17 2025)
   */
export const UserProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, UserSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, UserInclude) }),
        z.object({})
    ])
export type UserProjectionType = z.infer<typeof UserProjection>; 

  /**
   * CustomerProjection schema (Mon Nov 17 2025)
   */
export const CustomerProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerInclude) }),
        z.object({})
    ])
export type CustomerProjectionType = z.infer<typeof CustomerProjection>; 

  /**
   * CustomerGroupProjection schema (Mon Nov 17 2025)
   */
export const CustomerGroupProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupInclude) }),
        z.object({})
    ])
export type CustomerGroupProjectionType = z.infer<typeof CustomerGroupProjection>; 

  /**
   * StoreProjection schema (Mon Nov 17 2025)
   */
export const StoreProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, StoreSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, StoreOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, StoreInclude) }),
        z.object({})
    ])
export type StoreProjectionType = z.infer<typeof StoreProjection>; 

  /**
   * ShelfProjection schema (Mon Nov 17 2025)
   */
export const ShelfProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ShelfSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ShelfOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ShelfInclude) }),
        z.object({})
    ])
export type ShelfProjectionType = z.infer<typeof ShelfProjection>; 

  /**
   * CategoryProjection schema (Mon Nov 17 2025)
   */
export const CategoryProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CategorySelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CategoryOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CategoryInclude) }),
        z.object({})
    ])
export type CategoryProjectionType = z.infer<typeof CategoryProjection>; 

  /**
   * TagProjection schema (Mon Nov 17 2025)
   */
export const TagProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, TagSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, TagOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, TagInclude) }),
        z.object({})
    ])
export type TagProjectionType = z.infer<typeof TagProjection>; 

  /**
   * ProductTagProjection schema (Mon Nov 17 2025)
   */
export const ProductTagProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTagSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTagOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTagInclude) }),
        z.object({})
    ])
export type ProductTagProjectionType = z.infer<typeof ProductTagProjection>; 

  /**
   * AttributeProjection schema (Mon Nov 17 2025)
   */
export const AttributeProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, AttributeSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, AttributeOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, AttributeInclude) }),
        z.object({})
    ])
export type AttributeProjectionType = z.infer<typeof AttributeProjection>; 

  /**
   * ProductAttributeProjection schema (Mon Nov 17 2025)
   */
export const ProductAttributeProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductAttributeSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductAttributeOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductAttributeInclude) }),
        z.object({})
    ])
export type ProductAttributeProjectionType = z.infer<typeof ProductAttributeProjection>; 

  /**
   * ProductProjection schema (Mon Nov 17 2025)
   */
export const ProductProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductInclude) }),
        z.object({})
    ])
export type ProductProjectionType = z.infer<typeof ProductProjection>; 

  /**
   * QuantityProjection schema (Mon Nov 17 2025)
   */
export const QuantityProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, QuantitySelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, QuantityOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, QuantityInclude) }),
        z.object({})
    ])
export type QuantityProjectionType = z.infer<typeof QuantityProjection>; 

  /**
   * SerialNumberProjection schema (Mon Nov 17 2025)
   */
export const SerialNumberProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, SerialNumberSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, SerialNumberOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, SerialNumberInclude) }),
        z.object({})
    ])
export type SerialNumberProjectionType = z.infer<typeof SerialNumberProjection>; 

  /**
   * PriceLevelProjection schema (Mon Nov 17 2025)
   */
export const PriceLevelProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, PriceLevelSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, PriceLevelOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, PriceLevelInclude) }),
        z.object({})
    ])
export type PriceLevelProjectionType = z.infer<typeof PriceLevelProjection>; 

  /**
   * PriceProjection schema (Mon Nov 17 2025)
   */
export const PriceProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, PriceSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, PriceOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, PriceInclude) }),
        z.object({})
    ])
export type PriceProjectionType = z.infer<typeof PriceProjection>; 

  /**
   * DiscountProjection schema (Mon Nov 17 2025)
   */
export const DiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, DiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, DiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, DiscountInclude) }),
        z.object({})
    ])
export type DiscountProjectionType = z.infer<typeof DiscountProjection>; 

  /**
   * ProductDiscountProjection schema (Mon Nov 17 2025)
   */
export const ProductDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductDiscountInclude) }),
        z.object({})
    ])
export type ProductDiscountProjectionType = z.infer<typeof ProductDiscountProjection>; 

  /**
   * StoreDiscountProjection schema (Mon Nov 17 2025)
   */
export const StoreDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, StoreDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, StoreDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, StoreDiscountInclude) }),
        z.object({})
    ])
export type StoreDiscountProjectionType = z.infer<typeof StoreDiscountProjection>; 

  /**
   * CategoryDiscountProjection schema (Mon Nov 17 2025)
   */
export const CategoryDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CategoryDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CategoryDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CategoryDiscountInclude) }),
        z.object({})
    ])
export type CategoryDiscountProjectionType = z.infer<typeof CategoryDiscountProjection>; 

  /**
   * ProductTypeDiscountProjection schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTypeDiscountInclude) }),
        z.object({})
    ])
export type ProductTypeDiscountProjectionType = z.infer<typeof ProductTypeDiscountProjection>; 

  /**
   * CustomerDiscountProjection schema (Mon Nov 17 2025)
   */
export const CustomerDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerDiscountInclude) }),
        z.object({})
    ])
export type CustomerDiscountProjectionType = z.infer<typeof CustomerDiscountProjection>; 

  /**
   * CustomerGroupDiscountProjection schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, CustomerGroupDiscountInclude) }),
        z.object({})
    ])
export type CustomerGroupDiscountProjectionType = z.infer<typeof CustomerGroupDiscountProjection>; 

  /**
   * ProductTypeProjection schema (Mon Nov 17 2025)
   */
export const ProductTypeProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, ProductTypeSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, ProductTypeOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, ProductTypeInclude) }),
        z.object({})
    ])
export type ProductTypeProjectionType = z.infer<typeof ProductTypeProjection>; 

  /**
   * JurisdictionProjection schema (Mon Nov 17 2025)
   */
export const JurisdictionProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, JurisdictionSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, JurisdictionOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, JurisdictionInclude) }),
        z.object({})
    ])
export type JurisdictionProjectionType = z.infer<typeof JurisdictionProjection>; 

  /**
   * TaxRateProjection schema (Mon Nov 17 2025)
   */
export const TaxRateProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, TaxRateSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, TaxRateOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, TaxRateInclude) }),
        z.object({})
    ])
export type TaxRateProjectionType = z.infer<typeof TaxRateProjection>; 

  /**
   * LogProjection schema (Mon Nov 17 2025)
   */
export const LogProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, LogSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, LogInclude) }),
        z.object({})
    ])
export type LogProjectionType = z.infer<typeof LogProjection>; 

  /**
   * UserCreateOwn schema (Mon Nov 17 2025)
   */
export const UserCreateOwn = z.object({ uuid: P.uuid,readonly: P.bool.optional() })
export type UserCreateOwnType = z.infer<typeof UserCreateOwn>; 

  /**
   * CustomerCreateOwn schema (Mon Nov 17 2025)
   */
export const CustomerCreateOwn = z.object({ uuid: P.uuid,readonly: P.bool.optional() })
export type CustomerCreateOwnType = z.infer<typeof CustomerCreateOwn>; 

  /**
   * CustomerGroupCreateOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupCreateOwn = z.object({ uuid: P.uuid,readonly: P.bool.optional() })
export type CustomerGroupCreateOwnType = z.infer<typeof CustomerGroupCreateOwn>; 

  /**
   * StoreCreateOwn schema (Mon Nov 17 2025)
   */
export const StoreCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,priceLevelId: P.int })
export type StoreCreateOwnType = z.infer<typeof StoreCreateOwn>; 

  /**
   * ShelfCreateOwn schema (Mon Nov 17 2025)
   */
export const ShelfCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,aisle: P.str,rack: P.int,level: P.int,storeId: P.int })
export type ShelfCreateOwnType = z.infer<typeof ShelfCreateOwn>; 

  /**
   * CategoryCreateOwn schema (Mon Nov 17 2025)
   */
export const CategoryCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type CategoryCreateOwnType = z.infer<typeof CategoryCreateOwn>; 

  /**
   * TagCreateOwn schema (Mon Nov 17 2025)
   */
export const TagCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type TagCreateOwnType = z.infer<typeof TagCreateOwn>; 

  /**
   * ProductTagCreateOwn schema (Mon Nov 17 2025)
   */
export const ProductTagCreateOwn = z.object({ readonly: P.bool.optional(),productId: P.int,tagId: P.int })
export type ProductTagCreateOwnType = z.infer<typeof ProductTagCreateOwn>; 

  /**
   * AttributeCreateOwn schema (Mon Nov 17 2025)
   */
export const AttributeCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,valueType: AttributeValueType.optional() })
export type AttributeCreateOwnType = z.infer<typeof AttributeCreateOwn>; 

  /**
   * ProductAttributeCreateOwn schema (Mon Nov 17 2025)
   */
export const ProductAttributeCreateOwn = z.object({ readonly: P.bool.optional(),value: P.str,attributeId: P.int,productId: P.int })
export type ProductAttributeCreateOwnType = z.infer<typeof ProductAttributeCreateOwn>; 

  /**
   * ProductCreateOwn schema (Mon Nov 17 2025)
   */
export const ProductCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,sku: P.str,upc: P.str })
export type ProductCreateOwnType = z.infer<typeof ProductCreateOwn>; 

  /**
   * QuantityCreateOwn schema (Mon Nov 17 2025)
   */
export const QuantityCreateOwn = z.object({ quantity: P.int,productId: P.int,storeId: P.int,readonly: P.bool.optional() })
export type QuantityCreateOwnType = z.infer<typeof QuantityCreateOwn>; 

  /**
   * SerialNumberCreateOwn schema (Mon Nov 17 2025)
   */
export const SerialNumberCreateOwn = z.object({ readonly: P.bool.optional(),serial: P.str,inStock: P.bool.optional(),productId: P.int,storeId: P.int })
export type SerialNumberCreateOwnType = z.infer<typeof SerialNumberCreateOwn>; 

  /**
   * PriceLevelCreateOwn schema (Mon Nov 17 2025)
   */
export const PriceLevelCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,taxRateId: P.int })
export type PriceLevelCreateOwnType = z.infer<typeof PriceLevelCreateOwn>; 

  /**
   * PriceCreateOwn schema (Mon Nov 17 2025)
   */
export const PriceCreateOwn = z.object({ readonly: P.bool.optional(),price: P.currency,startDate: P.datetime,productId: P.int })
export type PriceCreateOwnType = z.infer<typeof PriceCreateOwn>; 

  /**
   * DiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const DiscountCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,code: P.str,valueType: DiscountValueType.optional(),startDate: P.datetime })
export type DiscountCreateOwnType = z.infer<typeof DiscountCreateOwn>; 

  /**
   * ProductDiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const ProductDiscountCreateOwn = z.object({ readonly: P.bool.optional(),productId: P.int,discountId: P.int,priority: P.int.optional() })
export type ProductDiscountCreateOwnType = z.infer<typeof ProductDiscountCreateOwn>; 

  /**
   * StoreDiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const StoreDiscountCreateOwn = z.object({ readonly: P.bool.optional(),discountId: P.int,storeId: P.int,priority: P.int.optional() })
export type StoreDiscountCreateOwnType = z.infer<typeof StoreDiscountCreateOwn>; 

  /**
   * CategoryDiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const CategoryDiscountCreateOwn = z.object({ readonly: P.bool.optional(),categoryId: P.int,discountId: P.int,priority: P.int.optional() })
export type CategoryDiscountCreateOwnType = z.infer<typeof CategoryDiscountCreateOwn>; 

  /**
   * ProductTypeDiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountCreateOwn = z.object({ readonly: P.bool.optional(),productTypeId: P.int,discountId: P.int,priority: P.int.optional() })
export type ProductTypeDiscountCreateOwnType = z.infer<typeof ProductTypeDiscountCreateOwn>; 

  /**
   * CustomerDiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const CustomerDiscountCreateOwn = z.object({ readonly: P.bool.optional(),customerId: P.int,discountId: P.int,priority: P.int.optional() })
export type CustomerDiscountCreateOwnType = z.infer<typeof CustomerDiscountCreateOwn>; 

  /**
   * CustomerGroupDiscountCreateOwn schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountCreateOwn = z.object({ readonly: P.bool.optional(),customerGroupId: P.int,discountId: P.int,priority: P.int.optional() })
export type CustomerGroupDiscountCreateOwnType = z.infer<typeof CustomerGroupDiscountCreateOwn>; 

  /**
   * ProductTypeCreateOwn schema (Mon Nov 17 2025)
   */
export const ProductTypeCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type ProductTypeCreateOwnType = z.infer<typeof ProductTypeCreateOwn>; 

  /**
   * JurisdictionCreateOwn schema (Mon Nov 17 2025)
   */
export const JurisdictionCreateOwn = z.object({ readonly: P.bool.optional(),code: P.str,name: P.short,level: P.str })
export type JurisdictionCreateOwnType = z.infer<typeof JurisdictionCreateOwn>; 

  /**
   * TaxRateCreateOwn schema (Mon Nov 17 2025)
   */
export const TaxRateCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short,percentRate: P.num.optional(),fixedRate: P.num.optional(),startDate: P.datetime,jurisdictionId: P.int,productTypeId: P.int })
export type TaxRateCreateOwnType = z.infer<typeof TaxRateCreateOwn>; 

  /**
   * LogCreateOwn schema (Mon Nov 17 2025)
   */
export const LogCreateOwn = z.object({ readonly: P.bool.optional(),timestamp: P.datetime.optional(),operatorType: OperatorType.optional(),operationName: P.str,recordName: P.str,successful: P.bool.optional() })
export type LogCreateOwnType = z.infer<typeof LogCreateOwn>; 

  /**
   * UserCreate schema (Mon Nov 17 2025)
   */
export const UserCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), readonly: P.bool.optional(), displayName: P.str.optional() })
export type UserCreateType = z.infer<typeof UserCreate>; 

  /**
   * UserUpdate schema (Mon Nov 17 2025)
   */
export const UserUpdate = UserCreate.clone().partial()
export type UserUpdateType = z.infer<typeof UserUpdate>; 

  /**
   * CustomerCreate schema (Mon Nov 17 2025)
   */
export const CustomerCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), readonly: P.bool.optional(), discounts: P.connectMany.optional(), prices: P.connectMany.optional() })
export type CustomerCreateType = z.infer<typeof CustomerCreate>; 

  /**
   * CustomerUpdate schema (Mon Nov 17 2025)
   */
export const CustomerUpdate = CustomerCreate.clone().partial()
export type CustomerUpdateType = z.infer<typeof CustomerUpdate>; 

  /**
   * CustomerGroupCreate schema (Mon Nov 17 2025)
   */
export const CustomerGroupCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), readonly: P.bool.optional(), displayName: P.str.optional(), discounts: P.connectMany.optional(), prices: P.connectMany.optional() })
export type CustomerGroupCreateType = z.infer<typeof CustomerGroupCreate>; 

  /**
   * CustomerGroupUpdate schema (Mon Nov 17 2025)
   */
export const CustomerGroupUpdate = CustomerGroupCreate.clone().partial()
export type CustomerGroupUpdateType = z.infer<typeof CustomerGroupUpdate>; 

  /**
   * StoreCreate schema (Mon Nov 17 2025)
   */
export const StoreCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), priceLevelId: P.int, quantities: P.connectMany.optional(), serials: P.connectMany.optional(), shelves: P.connectMany.optional(), discounts: P.connectMany.optional(), prices: P.connectMany.optional() })
export type StoreCreateType = z.infer<typeof StoreCreate>; 

  /**
   * StoreUpdate schema (Mon Nov 17 2025)
   */
export const StoreUpdate = StoreCreate.clone().partial()
export type StoreUpdateType = z.infer<typeof StoreUpdate>; 

  /**
   * ShelfCreate schema (Mon Nov 17 2025)
   */
export const ShelfCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), aisle: P.str, rack: P.int, level: P.int, storeId: P.int })
export type ShelfCreateType = z.infer<typeof ShelfCreate>; 

  /**
   * ShelfUpdate schema (Mon Nov 17 2025)
   */
export const ShelfUpdate = ShelfCreate.clone().partial()
export type ShelfUpdateType = z.infer<typeof ShelfUpdate>; 

  /**
   * CategoryCreate schema (Mon Nov 17 2025)
   */
export const CategoryCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), parentId: P.int.optional(), children: P.connectMany.optional(), products: P.connectMany.optional(), discounts: P.connectMany.optional() })
export type CategoryCreateType = z.infer<typeof CategoryCreate>; 

  /**
   * CategoryUpdate schema (Mon Nov 17 2025)
   */
export const CategoryUpdate = CategoryCreate.clone().partial()
export type CategoryUpdateType = z.infer<typeof CategoryUpdate>; 

  /**
   * TagCreate schema (Mon Nov 17 2025)
   */
export const TagCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, tags: P.connectMany.optional() })
export type TagCreateType = z.infer<typeof TagCreate>; 

  /**
   * TagUpdate schema (Mon Nov 17 2025)
   */
export const TagUpdate = TagCreate.clone().partial()
export type TagUpdateType = z.infer<typeof TagUpdate>; 

  /**
   * ProductTagCreate schema (Mon Nov 17 2025)
   */
export const ProductTagCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), productId: P.int, tagId: P.int })
export type ProductTagCreateType = z.infer<typeof ProductTagCreate>; 

  /**
   * ProductTagUpdate schema (Mon Nov 17 2025)
   */
export const ProductTagUpdate = ProductTagCreate.clone().partial()
export type ProductTagUpdateType = z.infer<typeof ProductTagUpdate>; 

  /**
   * AttributeCreate schema (Mon Nov 17 2025)
   */
export const AttributeCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), valueType: AttributeValueType.optional(), products: P.connectMany.optional() })
export type AttributeCreateType = z.infer<typeof AttributeCreate>; 

  /**
   * AttributeUpdate schema (Mon Nov 17 2025)
   */
export const AttributeUpdate = AttributeCreate.clone().partial()
export type AttributeUpdateType = z.infer<typeof AttributeUpdate>; 

  /**
   * ProductAttributeCreate schema (Mon Nov 17 2025)
   */
export const ProductAttributeCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), value: P.str, attributeId: P.int, productId: P.int })
export type ProductAttributeCreateType = z.infer<typeof ProductAttributeCreate>; 

  /**
   * ProductAttributeUpdate schema (Mon Nov 17 2025)
   */
export const ProductAttributeUpdate = ProductAttributeCreate.clone().partial()
export type ProductAttributeUpdateType = z.infer<typeof ProductAttributeUpdate>; 

  /**
   * ProductCreate schema (Mon Nov 17 2025)
   */
export const ProductCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), sku: P.str, upc: P.str, model: P.str.optional(), categoryId: P.int.optional(), attributes: P.connectMany.optional(), typeId: P.int.optional(), parentId: P.int.optional(), variants: P.connectMany.optional(), quantities: P.connectMany.optional(), serials: P.connectMany.optional(), prices: P.connectMany.optional(), tags: P.connectMany.optional(), discounts: P.connectMany.optional() })
export type ProductCreateType = z.infer<typeof ProductCreate>; 

  /**
   * ProductUpdate schema (Mon Nov 17 2025)
   */
export const ProductUpdate = ProductCreate.clone().partial()
export type ProductUpdateType = z.infer<typeof ProductUpdate>; 

  /**
   * QuantityCreate schema (Mon Nov 17 2025)
   */
export const QuantityCreate = z.object({ updatedById: P.int.optional(), quantity: P.int, minQuantity: P.int.optional(), productId: P.int, storeId: P.int, readonly: P.bool.optional() })
export type QuantityCreateType = z.infer<typeof QuantityCreate>; 

  /**
   * QuantityUpdate schema (Mon Nov 17 2025)
   */
export const QuantityUpdate = QuantityCreate.clone().partial()
export type QuantityUpdateType = z.infer<typeof QuantityUpdate>; 

  /**
   * SerialNumberCreate schema (Mon Nov 17 2025)
   */
export const SerialNumberCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), serial: P.str, inStock: P.bool.optional(), productId: P.int, storeId: P.int })
export type SerialNumberCreateType = z.infer<typeof SerialNumberCreate>; 

  /**
   * SerialNumberUpdate schema (Mon Nov 17 2025)
   */
export const SerialNumberUpdate = SerialNumberCreate.clone().partial()
export type SerialNumberUpdateType = z.infer<typeof SerialNumberUpdate>; 

  /**
   * PriceLevelCreate schema (Mon Nov 17 2025)
   */
export const PriceLevelCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), taxRateId: P.int, prices: P.connectMany.optional(), stores: P.connectMany.optional() })
export type PriceLevelCreateType = z.infer<typeof PriceLevelCreate>; 

  /**
   * PriceLevelUpdate schema (Mon Nov 17 2025)
   */
export const PriceLevelUpdate = PriceLevelCreate.clone().partial()
export type PriceLevelUpdateType = z.infer<typeof PriceLevelUpdate>; 

  /**
   * PriceCreate schema (Mon Nov 17 2025)
   */
export const PriceCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), price: P.currency, startDate: P.datetime, endDate: P.datetime.optional(), productId: P.int, customerId: P.int.optional(), storeId: P.int.optional(), customerGroupId: P.int.optional(), priceLevelId: P.int.optional() })
export type PriceCreateType = z.infer<typeof PriceCreate>; 

  /**
   * PriceUpdate schema (Mon Nov 17 2025)
   */
export const PriceUpdate = PriceCreate.clone().partial()
export type PriceUpdateType = z.infer<typeof PriceUpdate>; 

  /**
   * DiscountCreate schema (Mon Nov 17 2025)
   */
export const DiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, code: P.str, description: P.long.optional(), value: P.num.optional(), valueType: DiscountValueType.optional(), startDate: P.datetime, endDate: P.datetime.optional(), minQuantity: P.int.optional(), minSubtotal: P.num.optional() })
export type DiscountCreateType = z.infer<typeof DiscountCreate>; 

  /**
   * DiscountUpdate schema (Mon Nov 17 2025)
   */
export const DiscountUpdate = DiscountCreate.clone().partial()
export type DiscountUpdateType = z.infer<typeof DiscountUpdate>; 

  /**
   * ProductDiscountCreate schema (Mon Nov 17 2025)
   */
export const ProductDiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), productId: P.int, discountId: P.int, priority: P.int.optional() })
export type ProductDiscountCreateType = z.infer<typeof ProductDiscountCreate>; 

  /**
   * ProductDiscountUpdate schema (Mon Nov 17 2025)
   */
export const ProductDiscountUpdate = ProductDiscountCreate.clone().partial()
export type ProductDiscountUpdateType = z.infer<typeof ProductDiscountUpdate>; 

  /**
   * StoreDiscountCreate schema (Mon Nov 17 2025)
   */
export const StoreDiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), discountId: P.int, storeId: P.int, priority: P.int.optional() })
export type StoreDiscountCreateType = z.infer<typeof StoreDiscountCreate>; 

  /**
   * StoreDiscountUpdate schema (Mon Nov 17 2025)
   */
export const StoreDiscountUpdate = StoreDiscountCreate.clone().partial()
export type StoreDiscountUpdateType = z.infer<typeof StoreDiscountUpdate>; 

  /**
   * CategoryDiscountCreate schema (Mon Nov 17 2025)
   */
export const CategoryDiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), categoryId: P.int, discountId: P.int, priority: P.int.optional() })
export type CategoryDiscountCreateType = z.infer<typeof CategoryDiscountCreate>; 

  /**
   * CategoryDiscountUpdate schema (Mon Nov 17 2025)
   */
export const CategoryDiscountUpdate = CategoryDiscountCreate.clone().partial()
export type CategoryDiscountUpdateType = z.infer<typeof CategoryDiscountUpdate>; 

  /**
   * ProductTypeDiscountCreate schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), productTypeId: P.int, discountId: P.int, priority: P.int.optional() })
export type ProductTypeDiscountCreateType = z.infer<typeof ProductTypeDiscountCreate>; 

  /**
   * ProductTypeDiscountUpdate schema (Mon Nov 17 2025)
   */
export const ProductTypeDiscountUpdate = ProductTypeDiscountCreate.clone().partial()
export type ProductTypeDiscountUpdateType = z.infer<typeof ProductTypeDiscountUpdate>; 

  /**
   * CustomerDiscountCreate schema (Mon Nov 17 2025)
   */
export const CustomerDiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), customerId: P.int, discountId: P.int, priority: P.int.optional() })
export type CustomerDiscountCreateType = z.infer<typeof CustomerDiscountCreate>; 

  /**
   * CustomerDiscountUpdate schema (Mon Nov 17 2025)
   */
export const CustomerDiscountUpdate = CustomerDiscountCreate.clone().partial()
export type CustomerDiscountUpdateType = z.infer<typeof CustomerDiscountUpdate>; 

  /**
   * CustomerGroupDiscountCreate schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), customerGroupId: P.int, discountId: P.int, priority: P.int.optional() })
export type CustomerGroupDiscountCreateType = z.infer<typeof CustomerGroupDiscountCreate>; 

  /**
   * CustomerGroupDiscountUpdate schema (Mon Nov 17 2025)
   */
export const CustomerGroupDiscountUpdate = CustomerGroupDiscountCreate.clone().partial()
export type CustomerGroupDiscountUpdateType = z.infer<typeof CustomerGroupDiscountUpdate>; 

  /**
   * ProductTypeCreate schema (Mon Nov 17 2025)
   */
export const ProductTypeCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), products: P.connectMany.optional(), rates: P.connectMany.optional(), discounts: P.connectMany.optional() })
export type ProductTypeCreateType = z.infer<typeof ProductTypeCreate>; 

  /**
   * ProductTypeUpdate schema (Mon Nov 17 2025)
   */
export const ProductTypeUpdate = ProductTypeCreate.clone().partial()
export type ProductTypeUpdateType = z.infer<typeof ProductTypeUpdate>; 

  /**
   * JurisdictionCreate schema (Mon Nov 17 2025)
   */
export const JurisdictionCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), code: P.str, name: P.short, level: P.str, parentId: P.int.optional(), children: P.connectMany.optional(), rates: P.connectMany.optional() })
export type JurisdictionCreateType = z.infer<typeof JurisdictionCreate>; 

  /**
   * JurisdictionUpdate schema (Mon Nov 17 2025)
   */
export const JurisdictionUpdate = JurisdictionCreate.clone().partial()
export type JurisdictionUpdateType = z.infer<typeof JurisdictionUpdate>; 

  /**
   * TaxRateCreate schema (Mon Nov 17 2025)
   */
export const TaxRateCreate = z.object({ updatedById: P.int.optional(), readonly: P.bool.optional(), name: P.short, description: P.long.optional(), percentRate: P.num.optional(), fixedRate: P.num.optional(), startDate: P.datetime, endDate: P.datetime.optional(), jurisdictionId: P.int, productTypeId: P.int, priceLevels: P.connectMany.optional() })
export type TaxRateCreateType = z.infer<typeof TaxRateCreate>; 

  /**
   * TaxRateUpdate schema (Mon Nov 17 2025)
   */
export const TaxRateUpdate = TaxRateCreate.clone().partial()
export type TaxRateUpdateType = z.infer<typeof TaxRateUpdate>; 

  /**
   * LogCreate schema (Mon Nov 17 2025)
   */
export const LogCreate = z.object({ readonly: P.bool.optional(), timestamp: P.datetime.optional(), operatorId: P.str.optional(), operatorType: OperatorType.optional(), operationName: P.str, recordName: P.str, recordId: P.int.optional(), difference: P.json.optional(), successful: P.bool.optional() })
export type LogCreateType = z.infer<typeof LogCreate>; 

  /**
   * LogUpdate schema (Mon Nov 17 2025)
   */
export const LogUpdate = LogCreate.clone().partial()
export type LogUpdateType = z.infer<typeof LogUpdate>; 