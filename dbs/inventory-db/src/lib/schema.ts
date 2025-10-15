import PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const DiscountTargetTypeSchema = z.enum(["STORE","PRICE_LEVEL","CATEGORY","PRODUCT","VARIANT","STORE_CATEGORY","STORE_PRODUCT","STORE_VARIANT","PRICE_LEVEL_CATEGORY","PRICE_LEVEL_PRODUCT","PRICE_LEVEL_VARIANT"])

export const ValueTypeSchema = z.enum(["PERCENT","FIXED"])

export const DiscountTypeSchema = z.enum(["SIMPLE","VOLUME","FREE_SHIPPING","ORDER_TOTAL"])

export const TimeUnitSchema = z.enum(["SECOND","MINUTE","HOUR","DAY","MONTH","YEAR","DECADE","LIFE_TIME"])


      export const CategoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
parentId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
parent: z.boolean(),
children: z.boolean(),
products: z.boolean(),
discountTargets: z.boolean()
      }).partial()
      


      export const ProductOwnProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
isActive: z.boolean(),
uuid: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
variants: z.boolean(),
categories: z.boolean(),
discounts: z.boolean(),
warranties: z.boolean()
      }).partial()
      


      export const ProductCategoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
productId: z.boolean(),
categoryId: z.boolean(),
product: z.boolean(),
category: z.boolean()
      }).partial()
      


      export const VariantOwnProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
productId: z.boolean(),
sku: z.boolean(),
upc: z.boolean(),
product: z.boolean(),
attributes: z.boolean(),
prices: z.boolean(),
quantities: z.boolean(),
discounts: z.boolean(),
serrialNumbers: z.boolean(),
warranties: z.boolean()
      }).partial()
      


      export const AttributeCategoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
attributes: z.boolean()
      }).partial()
      


      export const AttributeOwnProjectionSchema = z.object({ 
          id: z.boolean(),
categoryId: z.boolean(),
name: z.boolean(),
description: z.boolean(),
category: z.boolean(),
unites: z.boolean(),
values: z.boolean()
      }).partial()
      


      export const UnitOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
symbol: z.boolean(),
attributes: z.boolean()
      }).partial()
      


      export const AttributeUnitOwnProjectionSchema = z.object({ 
          id: z.boolean(),
attributeId: z.boolean(),
unitId: z.boolean(),
attribute: z.boolean(),
unit: z.boolean()
      }).partial()
      


      export const AttributeValueOwnProjectionSchema = z.object({ 
          id: z.boolean(),
attributeId: z.boolean(),
variantId: z.boolean(),
textValue: z.boolean(),
booleanValue: z.boolean(),
floatValue: z.boolean(),
variant: z.boolean(),
attribute: z.boolean()
      }).partial()
      


      export const CurrencyOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
code: z.boolean(),
symbol: z.boolean(),
priceLevels: z.boolean()
      }).partial()
      


      export const PriceLevelOwnProjectionSchema = z.object({ 
          id: z.boolean(),
currencyId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
taxrate: z.boolean(),
notes: z.boolean(),
currency: z.boolean(),
stores: z.boolean(),
prices: z.boolean(),
discounts: z.boolean()
      }).partial()
      


      export const PriceOwnProjectionSchema = z.object({ 
          id: z.boolean(),
variantId: z.boolean(),
priceLevelId: z.boolean(),
price: z.boolean(),
cost: z.boolean(),
description: z.boolean(),
variant: z.boolean(),
priceLevel: z.boolean()
      }).partial()
      


      export const QuantityOwnProjectionSchema = z.object({ 
          id: z.boolean(),
variantId: z.boolean(),
storeId: z.boolean(),
quantity: z.boolean(),
alertThreshold: z.boolean(),
variant: z.boolean(),
store: z.boolean()
      }).partial()
      


      export const SerialNumberOwnProjectionSchema = z.object({ 
          id: z.boolean(),
variantId: z.boolean(),
storeId: z.boolean(),
serialNumber: z.boolean(),
inStock: z.boolean(),
variant: z.boolean(),
store: z.boolean()
      }).partial()
      


      export const DiscountOwnProjectionSchema = z.object({ 
          id: z.boolean(),
code: z.boolean(),
type: z.boolean(),
valueType: z.boolean(),
value: z.boolean(),
minQuantity: z.boolean(),
maxQuantity: z.boolean(),
minOrderTotal: z.boolean(),
maxOrderTotal: z.boolean(),
startDate: z.boolean(),
endDate: z.boolean(),
usageLimit: z.boolean(),
usageCount: z.boolean(),
targets: z.boolean()
      }).partial()
      


      export const DiscountTargetOwnProjectionSchema = z.object({ 
          id: z.boolean(),
type: z.boolean(),
discountId: z.boolean(),
storeId: z.boolean(),
productId: z.boolean(),
variantId: z.boolean(),
priceLevelId: z.boolean(),
categoryId: z.boolean(),
discount: z.boolean(),
store: z.boolean(),
category: z.boolean(),
priceLevel: z.boolean(),
product: z.boolean(),
variant: z.boolean()
      }).partial()
      


      export const StoreOwnProjectionSchema = z.object({ 
          id: z.boolean(),
priceLevelId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
priceLevel: z.boolean(),
quantities: z.boolean(),
discounts: z.boolean(),
serialNumbers: z.boolean()
      }).partial()
      


      export const WarrantyPolicyOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
duration: z.boolean(),
durationUnit: z.boolean(),
products: z.boolean()
      }).partial()
      


      export const ProductWarrantyOwnProjectionSchema = z.object({ 
          id: z.boolean(),
productId: z.boolean(),
variantId: z.boolean(),
policyId: z.boolean(),
product: z.boolean(),
variant: z.boolean(),
policy: z.boolean()
      }).partial()
      


    export const CategoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
parentId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema
    }).partial()


    export const ProductOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
isActive:PZ.BooleanFilterSchema,
uuid:PZ.StringFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const ProductCategoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
productId:PZ.IntegerFilterSchema,
categoryId:PZ.IntegerFilterSchema
    }).partial()


    export const VariantOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
uuid:PZ.StringFilterSchema,
productId:PZ.IntegerFilterSchema,
sku:PZ.StringFilterSchema,
upc:PZ.StringFilterSchema
    }).partial()


    export const AttributeCategoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema
    }).partial()


    export const AttributeOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
categoryId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const UnitOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
symbol:PZ.StringFilterSchema
    }).partial()


    export const AttributeUnitOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
attributeId:PZ.IntegerFilterSchema,
unitId:PZ.IntegerFilterSchema
    }).partial()


    export const AttributeValueOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
attributeId:PZ.IntegerFilterSchema,
variantId:PZ.IntegerFilterSchema,
textValue:PZ.StringFilterSchema,
booleanValue:PZ.BooleanFilterSchema,
floatValue:{}
    }).partial()


    export const CurrencyOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
code:PZ.StringFilterSchema,
symbol:PZ.StringFilterSchema
    }).partial()


    export const PriceLevelOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
currencyId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
taxrate:PZ.NumberFilterSchema,
notes:PZ.StringFilterSchema
    }).partial()


    export const PriceOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
variantId:PZ.IntegerFilterSchema,
priceLevelId:PZ.IntegerFilterSchema,
price:PZ.NumberFilterSchema,
cost:PZ.NumberFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const QuantityOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
variantId:PZ.IntegerFilterSchema,
storeId:PZ.IntegerFilterSchema,
quantity:PZ.IntegerFilterSchema,
alertThreshold:PZ.IntegerFilterSchema
    }).partial()


    export const SerialNumberOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
variantId:PZ.IntegerFilterSchema,
storeId:PZ.IntegerFilterSchema,
serialNumber:PZ.StringFilterSchema,
inStock:PZ.BooleanFilterSchema
    }).partial()


    export const DiscountOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
code:PZ.StringFilterSchema,
type:DiscountTypeSchema,
valueType:ValueTypeSchema,
value:PZ.NumberFilterSchema,
minQuantity:PZ.IntegerFilterSchema,
maxQuantity:PZ.IntegerFilterSchema,
minOrderTotal:PZ.NumberFilterSchema,
maxOrderTotal:PZ.NumberFilterSchema,
startDate:PZ.DateTimeFilterSchema,
endDate:PZ.DateTimeFilterSchema,
usageLimit:PZ.IntegerFilterSchema,
usageCount:PZ.IntegerFilterSchema
    }).partial()


    export const DiscountTargetOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
type:DiscountTargetTypeSchema,
discountId:PZ.IntegerFilterSchema,
storeId:PZ.IntegerFilterSchema,
productId:PZ.IntegerFilterSchema,
variantId:PZ.IntegerFilterSchema,
priceLevelId:PZ.IntegerFilterSchema,
categoryId:PZ.IntegerFilterSchema
    }).partial()


    export const StoreOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
priceLevelId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const WarrantyPolicyOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
duration:PZ.IntegerFilterSchema,
durationUnit:TimeUnitSchema
    }).partial()


    export const ProductWarrantyOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
productId:PZ.IntegerFilterSchema,
variantId:PZ.IntegerFilterSchema,
policyId:PZ.IntegerFilterSchema
    }).partial()


    export const CategoryOwnQueryOneSchema = z.object({ 
        where:CategoryOwnWhereSchema, 
        select: CategoryOwnProjectionSchema, 
        omit: CategoryOwnProjectionSchema, 
    }).partial()
    


    export const CategoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CategoryOwnWhereSchema,
      select: CategoryOwnProjectionSchema, 
      omit: CategoryOwnProjectionSchema, 
    }).partial()
    


    export const ProductOwnQueryOneSchema = z.object({ 
        where:ProductOwnWhereSchema, 
        select: ProductOwnProjectionSchema, 
        omit: ProductOwnProjectionSchema, 
    }).partial()
    


    export const ProductOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProductOwnWhereSchema,
      select: ProductOwnProjectionSchema, 
      omit: ProductOwnProjectionSchema, 
    }).partial()
    


    export const ProductCategoryOwnQueryOneSchema = z.object({ 
        where:ProductCategoryOwnWhereSchema, 
        select: ProductCategoryOwnProjectionSchema, 
        omit: ProductCategoryOwnProjectionSchema, 
    }).partial()
    


    export const ProductCategoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProductCategoryOwnWhereSchema,
      select: ProductCategoryOwnProjectionSchema, 
      omit: ProductCategoryOwnProjectionSchema, 
    }).partial()
    


    export const VariantOwnQueryOneSchema = z.object({ 
        where:VariantOwnWhereSchema, 
        select: VariantOwnProjectionSchema, 
        omit: VariantOwnProjectionSchema, 
    }).partial()
    


    export const VariantOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: VariantOwnWhereSchema,
      select: VariantOwnProjectionSchema, 
      omit: VariantOwnProjectionSchema, 
    }).partial()
    


    export const AttributeCategoryOwnQueryOneSchema = z.object({ 
        where:AttributeCategoryOwnWhereSchema, 
        select: AttributeCategoryOwnProjectionSchema, 
        omit: AttributeCategoryOwnProjectionSchema, 
    }).partial()
    


    export const AttributeCategoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeCategoryOwnWhereSchema,
      select: AttributeCategoryOwnProjectionSchema, 
      omit: AttributeCategoryOwnProjectionSchema, 
    }).partial()
    


    export const AttributeOwnQueryOneSchema = z.object({ 
        where:AttributeOwnWhereSchema, 
        select: AttributeOwnProjectionSchema, 
        omit: AttributeOwnProjectionSchema, 
    }).partial()
    


    export const AttributeOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeOwnWhereSchema,
      select: AttributeOwnProjectionSchema, 
      omit: AttributeOwnProjectionSchema, 
    }).partial()
    


    export const UnitOwnQueryOneSchema = z.object({ 
        where:UnitOwnWhereSchema, 
        select: UnitOwnProjectionSchema, 
        omit: UnitOwnProjectionSchema, 
    }).partial()
    


    export const UnitOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: UnitOwnWhereSchema,
      select: UnitOwnProjectionSchema, 
      omit: UnitOwnProjectionSchema, 
    }).partial()
    


    export const AttributeUnitOwnQueryOneSchema = z.object({ 
        where:AttributeUnitOwnWhereSchema, 
        select: AttributeUnitOwnProjectionSchema, 
        omit: AttributeUnitOwnProjectionSchema, 
    }).partial()
    


    export const AttributeUnitOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeUnitOwnWhereSchema,
      select: AttributeUnitOwnProjectionSchema, 
      omit: AttributeUnitOwnProjectionSchema, 
    }).partial()
    


    export const AttributeValueOwnQueryOneSchema = z.object({ 
        where:AttributeValueOwnWhereSchema, 
        select: AttributeValueOwnProjectionSchema, 
        omit: AttributeValueOwnProjectionSchema, 
    }).partial()
    


    export const AttributeValueOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeValueOwnWhereSchema,
      select: AttributeValueOwnProjectionSchema, 
      omit: AttributeValueOwnProjectionSchema, 
    }).partial()
    


    export const CurrencyOwnQueryOneSchema = z.object({ 
        where:CurrencyOwnWhereSchema, 
        select: CurrencyOwnProjectionSchema, 
        omit: CurrencyOwnProjectionSchema, 
    }).partial()
    


    export const CurrencyOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CurrencyOwnWhereSchema,
      select: CurrencyOwnProjectionSchema, 
      omit: CurrencyOwnProjectionSchema, 
    }).partial()
    


    export const PriceLevelOwnQueryOneSchema = z.object({ 
        where:PriceLevelOwnWhereSchema, 
        select: PriceLevelOwnProjectionSchema, 
        omit: PriceLevelOwnProjectionSchema, 
    }).partial()
    


    export const PriceLevelOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriceLevelOwnWhereSchema,
      select: PriceLevelOwnProjectionSchema, 
      omit: PriceLevelOwnProjectionSchema, 
    }).partial()
    


    export const PriceOwnQueryOneSchema = z.object({ 
        where:PriceOwnWhereSchema, 
        select: PriceOwnProjectionSchema, 
        omit: PriceOwnProjectionSchema, 
    }).partial()
    


    export const PriceOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriceOwnWhereSchema,
      select: PriceOwnProjectionSchema, 
      omit: PriceOwnProjectionSchema, 
    }).partial()
    


    export const QuantityOwnQueryOneSchema = z.object({ 
        where:QuantityOwnWhereSchema, 
        select: QuantityOwnProjectionSchema, 
        omit: QuantityOwnProjectionSchema, 
    }).partial()
    


    export const QuantityOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: QuantityOwnWhereSchema,
      select: QuantityOwnProjectionSchema, 
      omit: QuantityOwnProjectionSchema, 
    }).partial()
    


    export const SerialNumberOwnQueryOneSchema = z.object({ 
        where:SerialNumberOwnWhereSchema, 
        select: SerialNumberOwnProjectionSchema, 
        omit: SerialNumberOwnProjectionSchema, 
    }).partial()
    


    export const SerialNumberOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: SerialNumberOwnWhereSchema,
      select: SerialNumberOwnProjectionSchema, 
      omit: SerialNumberOwnProjectionSchema, 
    }).partial()
    


    export const DiscountOwnQueryOneSchema = z.object({ 
        where:DiscountOwnWhereSchema, 
        select: DiscountOwnProjectionSchema, 
        omit: DiscountOwnProjectionSchema, 
    }).partial()
    


    export const DiscountOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: DiscountOwnWhereSchema,
      select: DiscountOwnProjectionSchema, 
      omit: DiscountOwnProjectionSchema, 
    }).partial()
    


    export const DiscountTargetOwnQueryOneSchema = z.object({ 
        where:DiscountTargetOwnWhereSchema, 
        select: DiscountTargetOwnProjectionSchema, 
        omit: DiscountTargetOwnProjectionSchema, 
    }).partial()
    


    export const DiscountTargetOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: DiscountTargetOwnWhereSchema,
      select: DiscountTargetOwnProjectionSchema, 
      omit: DiscountTargetOwnProjectionSchema, 
    }).partial()
    


    export const StoreOwnQueryOneSchema = z.object({ 
        where:StoreOwnWhereSchema, 
        select: StoreOwnProjectionSchema, 
        omit: StoreOwnProjectionSchema, 
    }).partial()
    


    export const StoreOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StoreOwnWhereSchema,
      select: StoreOwnProjectionSchema, 
      omit: StoreOwnProjectionSchema, 
    }).partial()
    


    export const WarrantyPolicyOwnQueryOneSchema = z.object({ 
        where:WarrantyPolicyOwnWhereSchema, 
        select: WarrantyPolicyOwnProjectionSchema, 
        omit: WarrantyPolicyOwnProjectionSchema, 
    }).partial()
    


    export const WarrantyPolicyOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: WarrantyPolicyOwnWhereSchema,
      select: WarrantyPolicyOwnProjectionSchema, 
      omit: WarrantyPolicyOwnProjectionSchema, 
    }).partial()
    


    export const ProductWarrantyOwnQueryOneSchema = z.object({ 
        where:ProductWarrantyOwnWhereSchema, 
        select: ProductWarrantyOwnProjectionSchema, 
        omit: ProductWarrantyOwnProjectionSchema, 
    }).partial()
    


    export const ProductWarrantyOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProductWarrantyOwnWhereSchema,
      select: ProductWarrantyOwnProjectionSchema, 
      omit: ProductWarrantyOwnProjectionSchema, 
    }).partial()
    


    export const CategoryCreateSchema = z.object({ 
      parentId:z.int().optional(),
name:z.string(),
slug:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const CategoryUpdateSchema = z.object({ 
        parentId:z.int().optional().optional(),
name:z.string().optional(),
slug:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const CategoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
parentId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema
    }).partial()
    


    export const CategoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
parentId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
parent: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial(),
children: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial(),
products: z.object({ 
        some: ProductCategoryOwnWhereSchema,
        every: ProductCategoryOwnWhereSchema,
        none: ProductCategoryOwnWhereSchema,
      }).partial(),
discountTargets: z.object({ 
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CategoryProjectionSchema = z.object({ 
          id: z.boolean(),
parentId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
parent: CategoryOwnQueryOneSchema,
children: CategoryOwnQuerySchema,
products: ProductCategoryOwnQuerySchema,
discountTargets: DiscountTargetOwnQuerySchema
     }).partial()
     


    export const CategoryQueryOneSchema = z.object({ 
      where: CategoryWhereSchema,
      select:CategoryProjectionSchema, 
      omit:CategoryProjectionSchema
    }).partial()
    


    export const CategoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CategoryWhereSchema, 
      select: CategoryProjectionSchema, 
      omit: CategoryProjectionSchema
    }).partial()
    


    export const ProductCreateSchema = z.object({ 
      isActive:z.boolean().optional(),
name:z.string(),
slug:z.string().optional(),
description:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const ProductUpdateSchema = z.object({ 
        isActive:z.boolean().optional().optional(),
name:z.string().optional(),
slug:z.string().optional().optional(),
description:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const ProductOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
updatedAt: PZ.OrderDirectionSchema,
isActive: PZ.OrderDirectionSchema,
uuid: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProductWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
updatedAt: PZ.DateTimeFilterSchema,
isActive: PZ.BooleanFilterSchema,
uuid: PZ.StringFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
variants: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial(),
categories: z.object({ 
        some: ProductCategoryOwnWhereSchema,
        every: ProductCategoryOwnWhereSchema,
        none: ProductCategoryOwnWhereSchema,
      }).partial(),
discounts: z.object({ 
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      }).partial(),
warranties: z.object({ 
        some: ProductWarrantyOwnWhereSchema,
        every: ProductWarrantyOwnWhereSchema,
        none: ProductWarrantyOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProductProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
isActive: z.boolean(),
uuid: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
variants: VariantOwnQuerySchema,
categories: ProductCategoryOwnQuerySchema,
discounts: DiscountTargetOwnQuerySchema,
warranties: ProductWarrantyOwnQuerySchema
     }).partial()
     


    export const ProductQueryOneSchema = z.object({ 
      where: ProductWhereSchema,
      select:ProductProjectionSchema, 
      omit:ProductProjectionSchema
    }).partial()
    


    export const ProductQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProductWhereSchema, 
      select: ProductProjectionSchema, 
      omit: ProductProjectionSchema
    }).partial()
    


    export const ProductCategoryCreateSchema = z.object({ 
      productId:z.int(),
categoryId:z.int()
    })


    export const ProductCategoryUpdateSchema = z.object({ 
        productId:z.int().optional(),
categoryId:z.int().optional()
    })


    export const ProductCategoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
productId: PZ.OrderDirectionSchema,
categoryId: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProductCategoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
productId: PZ.IntegerFilterSchema,
categoryId: PZ.IntegerFilterSchema,
product: z.object({ 
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      }).partial(),
category: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProductCategoryProjectionSchema = z.object({ 
          id: z.boolean(),
productId: z.boolean(),
categoryId: z.boolean(),
product: ProductOwnQueryOneSchema,
category: CategoryOwnQueryOneSchema
     }).partial()
     


    export const ProductCategoryQueryOneSchema = z.object({ 
      where: ProductCategoryWhereSchema,
      select:ProductCategoryProjectionSchema, 
      omit:ProductCategoryProjectionSchema
    }).partial()
    


    export const ProductCategoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProductCategoryWhereSchema, 
      select: ProductCategoryProjectionSchema, 
      omit: ProductCategoryProjectionSchema
    }).partial()
    


    export const VariantCreateSchema = z.object({ 
      productId:z.int(),
sku:z.string(),
upc:z.string()
    })


    export const VariantUpdateSchema = z.object({ 
        productId:z.int().optional(),
sku:z.string().optional(),
upc:z.string().optional()
    })


    export const VariantOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
uuid: PZ.OrderDirectionSchema,
productId: PZ.OrderDirectionSchema,
sku: PZ.OrderDirectionSchema,
upc: PZ.OrderDirectionSchema
    }).partial()
    


    export const VariantWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
uuid: PZ.StringFilterSchema,
productId: PZ.IntegerFilterSchema,
sku: PZ.StringFilterSchema,
upc: PZ.StringFilterSchema,
product: z.object({ 
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      }).partial(),
attributes: z.object({ 
        some: AttributeValueOwnWhereSchema,
        every: AttributeValueOwnWhereSchema,
        none: AttributeValueOwnWhereSchema,
      }).partial(),
prices: z.object({ 
        some: PriceOwnWhereSchema,
        every: PriceOwnWhereSchema,
        none: PriceOwnWhereSchema,
      }).partial(),
quantities: z.object({ 
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      }).partial(),
discounts: z.object({ 
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      }).partial(),
serrialNumbers: z.object({ 
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      }).partial(),
warranties: z.object({ 
        some: ProductWarrantyOwnWhereSchema,
        every: ProductWarrantyOwnWhereSchema,
        none: ProductWarrantyOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const VariantProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
productId: z.boolean(),
sku: z.boolean(),
upc: z.boolean(),
product: ProductOwnQueryOneSchema,
attributes: AttributeValueOwnQuerySchema,
prices: PriceOwnQuerySchema,
quantities: QuantityOwnQuerySchema,
discounts: DiscountTargetOwnQuerySchema,
serrialNumbers: SerialNumberOwnQuerySchema,
warranties: ProductWarrantyOwnQuerySchema
     }).partial()
     


    export const VariantQueryOneSchema = z.object({ 
      where: VariantWhereSchema,
      select:VariantProjectionSchema, 
      omit:VariantProjectionSchema
    }).partial()
    


    export const VariantQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: VariantWhereSchema, 
      select: VariantProjectionSchema, 
      omit: VariantProjectionSchema
    }).partial()
    


    export const AttributeCategoryCreateSchema = z.object({ 
      name:z.string(),
slug:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const AttributeCategoryUpdateSchema = z.object({ 
        name:z.string().optional(),
slug:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const AttributeCategoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema
    }).partial()
    


    export const AttributeCategoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
attributes: z.object({ 
        some: AttributeOwnWhereSchema,
        every: AttributeOwnWhereSchema,
        none: AttributeOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AttributeCategoryProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
attributes: AttributeOwnQuerySchema
     }).partial()
     


    export const AttributeCategoryQueryOneSchema = z.object({ 
      where: AttributeCategoryWhereSchema,
      select:AttributeCategoryProjectionSchema, 
      omit:AttributeCategoryProjectionSchema
    }).partial()
    


    export const AttributeCategoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeCategoryWhereSchema, 
      select: AttributeCategoryProjectionSchema, 
      omit: AttributeCategoryProjectionSchema
    }).partial()
    


    export const AttributeCreateSchema = z.object({ 
      categoryId:z.int().optional(),
name:z.string(),
description:z.string().optional()
    })


    export const AttributeUpdateSchema = z.object({ 
        categoryId:z.int().optional().optional(),
name:z.string().optional(),
description:z.string().optional().optional()
    })


    export const AttributeOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
categoryId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const AttributeWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
categoryId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
category: z.object({ 
        some: AttributeCategoryOwnWhereSchema,
        every: AttributeCategoryOwnWhereSchema,
        none: AttributeCategoryOwnWhereSchema,
      }).partial(),
unites: z.object({ 
        some: AttributeUnitOwnWhereSchema,
        every: AttributeUnitOwnWhereSchema,
        none: AttributeUnitOwnWhereSchema,
      }).partial(),
values: z.object({ 
        some: AttributeValueOwnWhereSchema,
        every: AttributeValueOwnWhereSchema,
        none: AttributeValueOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AttributeProjectionSchema = z.object({ 
          id: z.boolean(),
categoryId: z.boolean(),
name: z.boolean(),
description: z.boolean(),
category: AttributeCategoryOwnQueryOneSchema,
unites: AttributeUnitOwnQuerySchema,
values: AttributeValueOwnQuerySchema
     }).partial()
     


    export const AttributeQueryOneSchema = z.object({ 
      where: AttributeWhereSchema,
      select:AttributeProjectionSchema, 
      omit:AttributeProjectionSchema
    }).partial()
    


    export const AttributeQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeWhereSchema, 
      select: AttributeProjectionSchema, 
      omit: AttributeProjectionSchema
    }).partial()
    


    export const UnitCreateSchema = z.object({ 
      name:z.string(),
symbol:z.string()
    })


    export const UnitUpdateSchema = z.object({ 
        name:z.string().optional(),
symbol:z.string().optional()
    })


    export const UnitOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
symbol: PZ.OrderDirectionSchema
    }).partial()
    


    export const UnitWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
symbol: PZ.StringFilterSchema,
attributes: z.object({ 
        some: AttributeUnitOwnWhereSchema,
        every: AttributeUnitOwnWhereSchema,
        none: AttributeUnitOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const UnitProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
symbol: z.boolean(),
attributes: AttributeUnitOwnQuerySchema
     }).partial()
     


    export const UnitQueryOneSchema = z.object({ 
      where: UnitWhereSchema,
      select:UnitProjectionSchema, 
      omit:UnitProjectionSchema
    }).partial()
    


    export const UnitQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: UnitWhereSchema, 
      select: UnitProjectionSchema, 
      omit: UnitProjectionSchema
    }).partial()
    


    export const AttributeUnitCreateSchema = z.object({ 
      attributeId:z.int(),
unitId:z.int()
    })


    export const AttributeUnitUpdateSchema = z.object({ 
        attributeId:z.int().optional(),
unitId:z.int().optional()
    })


    export const AttributeUnitOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
attributeId: PZ.OrderDirectionSchema,
unitId: PZ.OrderDirectionSchema
    }).partial()
    


    export const AttributeUnitWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
attributeId: PZ.IntegerFilterSchema,
unitId: PZ.IntegerFilterSchema,
attribute: z.object({ 
        some: AttributeOwnWhereSchema,
        every: AttributeOwnWhereSchema,
        none: AttributeOwnWhereSchema,
      }).partial(),
unit: z.object({ 
        some: UnitOwnWhereSchema,
        every: UnitOwnWhereSchema,
        none: UnitOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AttributeUnitProjectionSchema = z.object({ 
          id: z.boolean(),
attributeId: z.boolean(),
unitId: z.boolean(),
attribute: AttributeOwnQueryOneSchema,
unit: UnitOwnQueryOneSchema
     }).partial()
     


    export const AttributeUnitQueryOneSchema = z.object({ 
      where: AttributeUnitWhereSchema,
      select:AttributeUnitProjectionSchema, 
      omit:AttributeUnitProjectionSchema
    }).partial()
    


    export const AttributeUnitQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeUnitWhereSchema, 
      select: AttributeUnitProjectionSchema, 
      omit: AttributeUnitProjectionSchema
    }).partial()
    


    export const AttributeValueCreateSchema = z.object({ 
      attributeId:z.int(),
variantId:z.int(),
textValue:z.string().optional(),
booleanValue:z.boolean().optional(),
floatValue:z.number().optional()
    })


    export const AttributeValueUpdateSchema = z.object({ 
        attributeId:z.int().optional(),
variantId:z.int().optional(),
textValue:z.string().optional().optional(),
booleanValue:z.boolean().optional().optional(),
floatValue:z.number().optional().optional()
    })


    export const AttributeValueOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
attributeId: PZ.OrderDirectionSchema,
variantId: PZ.OrderDirectionSchema,
textValue: PZ.OrderDirectionSchema,
booleanValue: PZ.OrderDirectionSchema,
floatValue: PZ.OrderDirectionSchema
    }).partial()
    


    export const AttributeValueWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
attributeId: PZ.IntegerFilterSchema,
variantId: PZ.IntegerFilterSchema,
textValue: PZ.StringFilterSchema,
booleanValue: PZ.BooleanFilterSchema,
floatValue: {},
variant: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial(),
attribute: z.object({ 
        some: AttributeOwnWhereSchema,
        every: AttributeOwnWhereSchema,
        none: AttributeOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AttributeValueProjectionSchema = z.object({ 
          id: z.boolean(),
attributeId: z.boolean(),
variantId: z.boolean(),
textValue: z.boolean(),
booleanValue: z.boolean(),
floatValue: z.boolean(),
variant: VariantOwnQueryOneSchema,
attribute: AttributeOwnQueryOneSchema
     }).partial()
     


    export const AttributeValueQueryOneSchema = z.object({ 
      where: AttributeValueWhereSchema,
      select:AttributeValueProjectionSchema, 
      omit:AttributeValueProjectionSchema
    }).partial()
    


    export const AttributeValueQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AttributeValueWhereSchema, 
      select: AttributeValueProjectionSchema, 
      omit: AttributeValueProjectionSchema
    }).partial()
    


    export const CurrencyCreateSchema = z.object({ 
      name:z.string(),
code:z.string(),
symbol:z.string().optional()
    })


    export const CurrencyUpdateSchema = z.object({ 
        name:z.string().optional(),
code:z.string().optional(),
symbol:z.string().optional().optional()
    })


    export const CurrencyOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
code: PZ.OrderDirectionSchema,
symbol: PZ.OrderDirectionSchema
    }).partial()
    


    export const CurrencyWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
code: PZ.StringFilterSchema,
symbol: PZ.StringFilterSchema,
priceLevels: z.object({ 
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CurrencyProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
code: z.boolean(),
symbol: z.boolean(),
priceLevels: PriceLevelOwnQuerySchema
     }).partial()
     


    export const CurrencyQueryOneSchema = z.object({ 
      where: CurrencyWhereSchema,
      select:CurrencyProjectionSchema, 
      omit:CurrencyProjectionSchema
    }).partial()
    


    export const CurrencyQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CurrencyWhereSchema, 
      select: CurrencyProjectionSchema, 
      omit: CurrencyProjectionSchema
    }).partial()
    


    export const PriceLevelCreateSchema = z.object({ 
      currencyId:z.int(),
name:z.string(),
slug:z.string().optional(),
taxrate:z.number(),
notes:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const PriceLevelUpdateSchema = z.object({ 
        currencyId:z.int().optional(),
name:z.string().optional(),
slug:z.string().optional().optional(),
taxrate:z.number().optional(),
notes:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const PriceLevelOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
currencyId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
taxrate: PZ.OrderDirectionSchema,
notes: PZ.OrderDirectionSchema
    }).partial()
    


    export const PriceLevelWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
currencyId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
taxrate: PZ.NumberFilterSchema,
notes: PZ.StringFilterSchema,
currency: z.object({ 
        some: CurrencyOwnWhereSchema,
        every: CurrencyOwnWhereSchema,
        none: CurrencyOwnWhereSchema,
      }).partial(),
stores: z.object({ 
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      }).partial(),
prices: z.object({ 
        some: PriceOwnWhereSchema,
        every: PriceOwnWhereSchema,
        none: PriceOwnWhereSchema,
      }).partial(),
discounts: z.object({ 
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PriceLevelProjectionSchema = z.object({ 
          id: z.boolean(),
currencyId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
taxrate: z.boolean(),
notes: z.boolean(),
currency: CurrencyOwnQueryOneSchema,
stores: StoreOwnQuerySchema,
prices: PriceOwnQuerySchema,
discounts: DiscountTargetOwnQuerySchema
     }).partial()
     


    export const PriceLevelQueryOneSchema = z.object({ 
      where: PriceLevelWhereSchema,
      select:PriceLevelProjectionSchema, 
      omit:PriceLevelProjectionSchema
    }).partial()
    


    export const PriceLevelQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriceLevelWhereSchema, 
      select: PriceLevelProjectionSchema, 
      omit: PriceLevelProjectionSchema
    }).partial()
    


    export const PriceCreateSchema = z.object({ 
      variantId:z.int(),
priceLevelId:z.int(),
price:z.number(),
cost:z.number(),
description:z.string().optional()
    })


    export const PriceUpdateSchema = z.object({ 
        variantId:z.int().optional(),
priceLevelId:z.int().optional(),
price:z.number().optional(),
cost:z.number().optional(),
description:z.string().optional().optional()
    })


    export const PriceOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
variantId: PZ.OrderDirectionSchema,
priceLevelId: PZ.OrderDirectionSchema,
price: PZ.OrderDirectionSchema,
cost: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const PriceWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
variantId: PZ.IntegerFilterSchema,
priceLevelId: PZ.IntegerFilterSchema,
price: PZ.NumberFilterSchema,
cost: PZ.NumberFilterSchema,
description: PZ.StringFilterSchema,
variant: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial(),
priceLevel: z.object({ 
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PriceProjectionSchema = z.object({ 
          id: z.boolean(),
variantId: z.boolean(),
priceLevelId: z.boolean(),
price: z.boolean(),
cost: z.boolean(),
description: z.boolean(),
variant: VariantOwnQueryOneSchema,
priceLevel: PriceLevelOwnQueryOneSchema
     }).partial()
     


    export const PriceQueryOneSchema = z.object({ 
      where: PriceWhereSchema,
      select:PriceProjectionSchema, 
      omit:PriceProjectionSchema
    }).partial()
    


    export const PriceQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriceWhereSchema, 
      select: PriceProjectionSchema, 
      omit: PriceProjectionSchema
    }).partial()
    


    export const QuantityCreateSchema = z.object({ 
      variantId:z.int(),
storeId:z.int(),
quantity:z.int(),
alertThreshold:z.int().optional()
    })


    export const QuantityUpdateSchema = z.object({ 
        variantId:z.int().optional(),
storeId:z.int().optional(),
quantity:z.int().optional(),
alertThreshold:z.int().optional().optional()
    })


    export const QuantityOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
variantId: PZ.OrderDirectionSchema,
storeId: PZ.OrderDirectionSchema,
quantity: PZ.OrderDirectionSchema,
alertThreshold: PZ.OrderDirectionSchema
    }).partial()
    


    export const QuantityWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
variantId: PZ.IntegerFilterSchema,
storeId: PZ.IntegerFilterSchema,
quantity: PZ.IntegerFilterSchema,
alertThreshold: PZ.IntegerFilterSchema,
variant: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial(),
store: z.object({ 
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const QuantityProjectionSchema = z.object({ 
          id: z.boolean(),
variantId: z.boolean(),
storeId: z.boolean(),
quantity: z.boolean(),
alertThreshold: z.boolean(),
variant: VariantOwnQueryOneSchema,
store: StoreOwnQueryOneSchema
     }).partial()
     


    export const QuantityQueryOneSchema = z.object({ 
      where: QuantityWhereSchema,
      select:QuantityProjectionSchema, 
      omit:QuantityProjectionSchema
    }).partial()
    


    export const QuantityQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: QuantityWhereSchema, 
      select: QuantityProjectionSchema, 
      omit: QuantityProjectionSchema
    }).partial()
    


    export const SerialNumberCreateSchema = z.object({ 
      variantId:z.int(),
storeId:z.int(),
serialNumber:z.string(),
inStock:z.boolean()
    })


    export const SerialNumberUpdateSchema = z.object({ 
        variantId:z.int().optional(),
storeId:z.int().optional(),
serialNumber:z.string().optional(),
inStock:z.boolean().optional()
    })


    export const SerialNumberOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
variantId: PZ.OrderDirectionSchema,
storeId: PZ.OrderDirectionSchema,
serialNumber: PZ.OrderDirectionSchema,
inStock: PZ.OrderDirectionSchema
    }).partial()
    


    export const SerialNumberWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
variantId: PZ.IntegerFilterSchema,
storeId: PZ.IntegerFilterSchema,
serialNumber: PZ.StringFilterSchema,
inStock: PZ.BooleanFilterSchema,
variant: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial(),
store: z.object({ 
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const SerialNumberProjectionSchema = z.object({ 
          id: z.boolean(),
variantId: z.boolean(),
storeId: z.boolean(),
serialNumber: z.boolean(),
inStock: z.boolean(),
variant: VariantOwnQueryOneSchema,
store: StoreOwnQueryOneSchema
     }).partial()
     


    export const SerialNumberQueryOneSchema = z.object({ 
      where: SerialNumberWhereSchema,
      select:SerialNumberProjectionSchema, 
      omit:SerialNumberProjectionSchema
    }).partial()
    


    export const SerialNumberQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: SerialNumberWhereSchema, 
      select: SerialNumberProjectionSchema, 
      omit: SerialNumberProjectionSchema
    }).partial()
    


    export const DiscountCreateSchema = z.object({ 
      code:z.string(),
type:DiscountTypeSchema,
valueType:ValueTypeSchema,
value:z.number().optional(),
minQuantity:z.int().optional(),
maxQuantity:z.int().optional(),
minOrderTotal:z.number().optional(),
maxOrderTotal:z.number().optional(),
startDate:z.iso.datetime().optional(),
endDate:z.iso.datetime().optional(),
usageLimit:z.int().optional(),
usageCount:z.int().optional()
    })


    export const DiscountUpdateSchema = z.object({ 
        code:z.string().optional(),
type:DiscountTypeSchema.optional(),
valueType:ValueTypeSchema.optional(),
value:z.number().optional().optional(),
minQuantity:z.int().optional().optional(),
maxQuantity:z.int().optional().optional(),
minOrderTotal:z.number().optional().optional(),
maxOrderTotal:z.number().optional().optional(),
startDate:z.iso.datetime().optional().optional(),
endDate:z.iso.datetime().optional().optional(),
usageLimit:z.int().optional().optional(),
usageCount:z.int().optional().optional()
    })


    export const DiscountOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
code: PZ.OrderDirectionSchema,
value: PZ.OrderDirectionSchema,
minQuantity: PZ.OrderDirectionSchema,
maxQuantity: PZ.OrderDirectionSchema,
minOrderTotal: PZ.OrderDirectionSchema,
maxOrderTotal: PZ.OrderDirectionSchema,
startDate: PZ.OrderDirectionSchema,
endDate: PZ.OrderDirectionSchema,
usageLimit: PZ.OrderDirectionSchema,
usageCount: PZ.OrderDirectionSchema
    }).partial()
    


    export const DiscountWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
code: PZ.StringFilterSchema,
type: DiscountTypeSchema,
valueType: ValueTypeSchema,
value: PZ.NumberFilterSchema,
minQuantity: PZ.IntegerFilterSchema,
maxQuantity: PZ.IntegerFilterSchema,
minOrderTotal: PZ.NumberFilterSchema,
maxOrderTotal: PZ.NumberFilterSchema,
startDate: PZ.DateTimeFilterSchema,
endDate: PZ.DateTimeFilterSchema,
usageLimit: PZ.IntegerFilterSchema,
usageCount: PZ.IntegerFilterSchema,
targets: z.object({ 
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const DiscountProjectionSchema = z.object({ 
          id: z.boolean(),
code: z.boolean(),
type: z.boolean(),
valueType: z.boolean(),
value: z.boolean(),
minQuantity: z.boolean(),
maxQuantity: z.boolean(),
minOrderTotal: z.boolean(),
maxOrderTotal: z.boolean(),
startDate: z.boolean(),
endDate: z.boolean(),
usageLimit: z.boolean(),
usageCount: z.boolean(),
targets: DiscountTargetOwnQuerySchema
     }).partial()
     


    export const DiscountQueryOneSchema = z.object({ 
      where: DiscountWhereSchema,
      select:DiscountProjectionSchema, 
      omit:DiscountProjectionSchema
    }).partial()
    


    export const DiscountQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: DiscountWhereSchema, 
      select: DiscountProjectionSchema, 
      omit: DiscountProjectionSchema
    }).partial()
    


    export const DiscountTargetCreateSchema = z.object({ 
      type:DiscountTargetTypeSchema,
discountId:z.int(),
storeId:z.int().optional(),
productId:z.int().optional(),
variantId:z.int().optional(),
priceLevelId:z.int().optional(),
categoryId:z.int().optional()
    })


    export const DiscountTargetUpdateSchema = z.object({ 
        type:DiscountTargetTypeSchema.optional(),
discountId:z.int().optional(),
storeId:z.int().optional().optional(),
productId:z.int().optional().optional(),
variantId:z.int().optional().optional(),
priceLevelId:z.int().optional().optional(),
categoryId:z.int().optional().optional()
    })


    export const DiscountTargetOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
discountId: PZ.OrderDirectionSchema,
storeId: PZ.OrderDirectionSchema,
productId: PZ.OrderDirectionSchema,
variantId: PZ.OrderDirectionSchema,
priceLevelId: PZ.OrderDirectionSchema,
categoryId: PZ.OrderDirectionSchema
    }).partial()
    


    export const DiscountTargetWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
type: DiscountTargetTypeSchema,
discountId: PZ.IntegerFilterSchema,
storeId: PZ.IntegerFilterSchema,
productId: PZ.IntegerFilterSchema,
variantId: PZ.IntegerFilterSchema,
priceLevelId: PZ.IntegerFilterSchema,
categoryId: PZ.IntegerFilterSchema,
discount: z.object({ 
        some: DiscountOwnWhereSchema,
        every: DiscountOwnWhereSchema,
        none: DiscountOwnWhereSchema,
      }).partial(),
store: z.object({ 
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      }).partial(),
category: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial(),
priceLevel: z.object({ 
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      }).partial(),
product: z.object({ 
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      }).partial(),
variant: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const DiscountTargetProjectionSchema = z.object({ 
          id: z.boolean(),
type: z.boolean(),
discountId: z.boolean(),
storeId: z.boolean(),
productId: z.boolean(),
variantId: z.boolean(),
priceLevelId: z.boolean(),
categoryId: z.boolean(),
discount: DiscountOwnQueryOneSchema,
store: StoreOwnQueryOneSchema,
category: CategoryOwnQueryOneSchema,
priceLevel: PriceLevelOwnQueryOneSchema,
product: ProductOwnQueryOneSchema,
variant: VariantOwnQueryOneSchema
     }).partial()
     


    export const DiscountTargetQueryOneSchema = z.object({ 
      where: DiscountTargetWhereSchema,
      select:DiscountTargetProjectionSchema, 
      omit:DiscountTargetProjectionSchema
    }).partial()
    


    export const DiscountTargetQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: DiscountTargetWhereSchema, 
      select: DiscountTargetProjectionSchema, 
      omit: DiscountTargetProjectionSchema
    }).partial()
    


    export const StoreCreateSchema = z.object({ 
      priceLevelId:z.int(),
name:z.string(),
slug:z.string().optional(),
description:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const StoreUpdateSchema = z.object({ 
        priceLevelId:z.int().optional(),
name:z.string().optional(),
slug:z.string().optional().optional(),
description:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const StoreOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
priceLevelId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const StoreWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
priceLevelId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
priceLevel: z.object({ 
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      }).partial(),
quantities: z.object({ 
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      }).partial(),
discounts: z.object({ 
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      }).partial(),
serialNumbers: z.object({ 
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const StoreProjectionSchema = z.object({ 
          id: z.boolean(),
priceLevelId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
priceLevel: PriceLevelOwnQueryOneSchema,
quantities: QuantityOwnQuerySchema,
discounts: DiscountTargetOwnQuerySchema,
serialNumbers: SerialNumberOwnQuerySchema
     }).partial()
     


    export const StoreQueryOneSchema = z.object({ 
      where: StoreWhereSchema,
      select:StoreProjectionSchema, 
      omit:StoreProjectionSchema
    }).partial()
    


    export const StoreQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StoreWhereSchema, 
      select: StoreProjectionSchema, 
      omit: StoreProjectionSchema
    }).partial()
    


    export const WarrantyPolicyCreateSchema = z.object({ 
      name:z.string(),
description:z.string().optional(),
duration:z.int(),
durationUnit:TimeUnitSchema.optional()
    })


    export const WarrantyPolicyUpdateSchema = z.object({ 
        name:z.string().optional(),
description:z.string().optional().optional(),
duration:z.int().optional(),
durationUnit:TimeUnitSchema.optional().optional()
    })


    export const WarrantyPolicyOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema,
duration: PZ.OrderDirectionSchema
    }).partial()
    


    export const WarrantyPolicyWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
duration: PZ.IntegerFilterSchema,
durationUnit: TimeUnitSchema,
products: z.object({ 
        some: ProductWarrantyOwnWhereSchema,
        every: ProductWarrantyOwnWhereSchema,
        none: ProductWarrantyOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const WarrantyPolicyProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
duration: z.boolean(),
durationUnit: z.boolean(),
products: ProductWarrantyOwnQuerySchema
     }).partial()
     


    export const WarrantyPolicyQueryOneSchema = z.object({ 
      where: WarrantyPolicyWhereSchema,
      select:WarrantyPolicyProjectionSchema, 
      omit:WarrantyPolicyProjectionSchema
    }).partial()
    


    export const WarrantyPolicyQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: WarrantyPolicyWhereSchema, 
      select: WarrantyPolicyProjectionSchema, 
      omit: WarrantyPolicyProjectionSchema
    }).partial()
    


    export const ProductWarrantyCreateSchema = z.object({ 
      productId:z.int().optional(),
variantId:z.int().optional(),
policyId:z.int()
    })


    export const ProductWarrantyUpdateSchema = z.object({ 
        productId:z.int().optional().optional(),
variantId:z.int().optional().optional(),
policyId:z.int().optional()
    })


    export const ProductWarrantyOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
productId: PZ.OrderDirectionSchema,
variantId: PZ.OrderDirectionSchema,
policyId: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProductWarrantyWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
productId: PZ.IntegerFilterSchema,
variantId: PZ.IntegerFilterSchema,
policyId: PZ.IntegerFilterSchema,
product: z.object({ 
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      }).partial(),
variant: z.object({ 
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      }).partial(),
policy: z.object({ 
        some: WarrantyPolicyOwnWhereSchema,
        every: WarrantyPolicyOwnWhereSchema,
        none: WarrantyPolicyOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProductWarrantyProjectionSchema = z.object({ 
          id: z.boolean(),
productId: z.boolean(),
variantId: z.boolean(),
policyId: z.boolean(),
product: ProductOwnQueryOneSchema,
variant: VariantOwnQueryOneSchema,
policy: WarrantyPolicyOwnQueryOneSchema
     }).partial()
     


    export const ProductWarrantyQueryOneSchema = z.object({ 
      where: ProductWarrantyWhereSchema,
      select:ProductWarrantyProjectionSchema, 
      omit:ProductWarrantyProjectionSchema
    }).partial()
    


    export const ProductWarrantyQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProductWarrantyWhereSchema, 
      select: ProductWarrantyProjectionSchema, 
      omit: ProductWarrantyProjectionSchema
    }).partial()
    


export type  CategoryCreate = z.infer<typeof CategoryCreateSchema>; 

export type  CategoryUpdate = z.infer<typeof CategoryUpdateSchema>; 

export type  CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>; 

export type  CategoryOwnProjection = z.infer<typeof CategoryOwnProjectionSchema>; 

export type  CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>; 

export type  CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>; 

export type  CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>; 

export type  CategoryWhere = z.infer<typeof CategoryWhereSchema>; 

export type  CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>; 

export type  CategoryQuery = z.infer<typeof CategoryQuerySchema>; 

export type  CategoryProjection = z.infer<typeof CategoryProjectionSchema>; 

    


export type  ProductCreate = z.infer<typeof ProductCreateSchema>; 

export type  ProductUpdate = z.infer<typeof ProductUpdateSchema>; 

export type  ProductOrderBy = z.infer<typeof ProductOrderBySchema>; 

export type  ProductOwnProjection = z.infer<typeof ProductOwnProjectionSchema>; 

export type  ProductOwnWhere = z.infer<typeof ProductOwnWhereSchema>; 

export type  ProductOwnQuery = z.infer<typeof ProductOwnQuerySchema>; 

export type  ProductOwnQueryOne = z.infer<typeof ProductOwnQueryOneSchema>; 

export type  ProductWhere = z.infer<typeof ProductWhereSchema>; 

export type  ProductQueryOne = z.infer<typeof ProductQueryOneSchema>; 

export type  ProductQuery = z.infer<typeof ProductQuerySchema>; 

export type  ProductProjection = z.infer<typeof ProductProjectionSchema>; 

    


export type  ProductCategoryCreate = z.infer<typeof ProductCategoryCreateSchema>; 

export type  ProductCategoryUpdate = z.infer<typeof ProductCategoryUpdateSchema>; 

export type  ProductCategoryOrderBy = z.infer<typeof ProductCategoryOrderBySchema>; 

export type  ProductCategoryOwnProjection = z.infer<typeof ProductCategoryOwnProjectionSchema>; 

export type  ProductCategoryOwnWhere = z.infer<typeof ProductCategoryOwnWhereSchema>; 

export type  ProductCategoryOwnQuery = z.infer<typeof ProductCategoryOwnQuerySchema>; 

export type  ProductCategoryOwnQueryOne = z.infer<typeof ProductCategoryOwnQueryOneSchema>; 

export type  ProductCategoryWhere = z.infer<typeof ProductCategoryWhereSchema>; 

export type  ProductCategoryQueryOne = z.infer<typeof ProductCategoryQueryOneSchema>; 

export type  ProductCategoryQuery = z.infer<typeof ProductCategoryQuerySchema>; 

export type  ProductCategoryProjection = z.infer<typeof ProductCategoryProjectionSchema>; 

    


export type  VariantCreate = z.infer<typeof VariantCreateSchema>; 

export type  VariantUpdate = z.infer<typeof VariantUpdateSchema>; 

export type  VariantOrderBy = z.infer<typeof VariantOrderBySchema>; 

export type  VariantOwnProjection = z.infer<typeof VariantOwnProjectionSchema>; 

export type  VariantOwnWhere = z.infer<typeof VariantOwnWhereSchema>; 

export type  VariantOwnQuery = z.infer<typeof VariantOwnQuerySchema>; 

export type  VariantOwnQueryOne = z.infer<typeof VariantOwnQueryOneSchema>; 

export type  VariantWhere = z.infer<typeof VariantWhereSchema>; 

export type  VariantQueryOne = z.infer<typeof VariantQueryOneSchema>; 

export type  VariantQuery = z.infer<typeof VariantQuerySchema>; 

export type  VariantProjection = z.infer<typeof VariantProjectionSchema>; 

    


export type  AttributeCategoryCreate = z.infer<typeof AttributeCategoryCreateSchema>; 

export type  AttributeCategoryUpdate = z.infer<typeof AttributeCategoryUpdateSchema>; 

export type  AttributeCategoryOrderBy = z.infer<typeof AttributeCategoryOrderBySchema>; 

export type  AttributeCategoryOwnProjection = z.infer<typeof AttributeCategoryOwnProjectionSchema>; 

export type  AttributeCategoryOwnWhere = z.infer<typeof AttributeCategoryOwnWhereSchema>; 

export type  AttributeCategoryOwnQuery = z.infer<typeof AttributeCategoryOwnQuerySchema>; 

export type  AttributeCategoryOwnQueryOne = z.infer<typeof AttributeCategoryOwnQueryOneSchema>; 

export type  AttributeCategoryWhere = z.infer<typeof AttributeCategoryWhereSchema>; 

export type  AttributeCategoryQueryOne = z.infer<typeof AttributeCategoryQueryOneSchema>; 

export type  AttributeCategoryQuery = z.infer<typeof AttributeCategoryQuerySchema>; 

export type  AttributeCategoryProjection = z.infer<typeof AttributeCategoryProjectionSchema>; 

    


export type  AttributeCreate = z.infer<typeof AttributeCreateSchema>; 

export type  AttributeUpdate = z.infer<typeof AttributeUpdateSchema>; 

export type  AttributeOrderBy = z.infer<typeof AttributeOrderBySchema>; 

export type  AttributeOwnProjection = z.infer<typeof AttributeOwnProjectionSchema>; 

export type  AttributeOwnWhere = z.infer<typeof AttributeOwnWhereSchema>; 

export type  AttributeOwnQuery = z.infer<typeof AttributeOwnQuerySchema>; 

export type  AttributeOwnQueryOne = z.infer<typeof AttributeOwnQueryOneSchema>; 

export type  AttributeWhere = z.infer<typeof AttributeWhereSchema>; 

export type  AttributeQueryOne = z.infer<typeof AttributeQueryOneSchema>; 

export type  AttributeQuery = z.infer<typeof AttributeQuerySchema>; 

export type  AttributeProjection = z.infer<typeof AttributeProjectionSchema>; 

    


export type  UnitCreate = z.infer<typeof UnitCreateSchema>; 

export type  UnitUpdate = z.infer<typeof UnitUpdateSchema>; 

export type  UnitOrderBy = z.infer<typeof UnitOrderBySchema>; 

export type  UnitOwnProjection = z.infer<typeof UnitOwnProjectionSchema>; 

export type  UnitOwnWhere = z.infer<typeof UnitOwnWhereSchema>; 

export type  UnitOwnQuery = z.infer<typeof UnitOwnQuerySchema>; 

export type  UnitOwnQueryOne = z.infer<typeof UnitOwnQueryOneSchema>; 

export type  UnitWhere = z.infer<typeof UnitWhereSchema>; 

export type  UnitQueryOne = z.infer<typeof UnitQueryOneSchema>; 

export type  UnitQuery = z.infer<typeof UnitQuerySchema>; 

export type  UnitProjection = z.infer<typeof UnitProjectionSchema>; 

    


export type  AttributeUnitCreate = z.infer<typeof AttributeUnitCreateSchema>; 

export type  AttributeUnitUpdate = z.infer<typeof AttributeUnitUpdateSchema>; 

export type  AttributeUnitOrderBy = z.infer<typeof AttributeUnitOrderBySchema>; 

export type  AttributeUnitOwnProjection = z.infer<typeof AttributeUnitOwnProjectionSchema>; 

export type  AttributeUnitOwnWhere = z.infer<typeof AttributeUnitOwnWhereSchema>; 

export type  AttributeUnitOwnQuery = z.infer<typeof AttributeUnitOwnQuerySchema>; 

export type  AttributeUnitOwnQueryOne = z.infer<typeof AttributeUnitOwnQueryOneSchema>; 

export type  AttributeUnitWhere = z.infer<typeof AttributeUnitWhereSchema>; 

export type  AttributeUnitQueryOne = z.infer<typeof AttributeUnitQueryOneSchema>; 

export type  AttributeUnitQuery = z.infer<typeof AttributeUnitQuerySchema>; 

export type  AttributeUnitProjection = z.infer<typeof AttributeUnitProjectionSchema>; 

    


export type  AttributeValueCreate = z.infer<typeof AttributeValueCreateSchema>; 

export type  AttributeValueUpdate = z.infer<typeof AttributeValueUpdateSchema>; 

export type  AttributeValueOrderBy = z.infer<typeof AttributeValueOrderBySchema>; 

export type  AttributeValueOwnProjection = z.infer<typeof AttributeValueOwnProjectionSchema>; 

export type  AttributeValueOwnWhere = z.infer<typeof AttributeValueOwnWhereSchema>; 

export type  AttributeValueOwnQuery = z.infer<typeof AttributeValueOwnQuerySchema>; 

export type  AttributeValueOwnQueryOne = z.infer<typeof AttributeValueOwnQueryOneSchema>; 

export type  AttributeValueWhere = z.infer<typeof AttributeValueWhereSchema>; 

export type  AttributeValueQueryOne = z.infer<typeof AttributeValueQueryOneSchema>; 

export type  AttributeValueQuery = z.infer<typeof AttributeValueQuerySchema>; 

export type  AttributeValueProjection = z.infer<typeof AttributeValueProjectionSchema>; 

    


export type  CurrencyCreate = z.infer<typeof CurrencyCreateSchema>; 

export type  CurrencyUpdate = z.infer<typeof CurrencyUpdateSchema>; 

export type  CurrencyOrderBy = z.infer<typeof CurrencyOrderBySchema>; 

export type  CurrencyOwnProjection = z.infer<typeof CurrencyOwnProjectionSchema>; 

export type  CurrencyOwnWhere = z.infer<typeof CurrencyOwnWhereSchema>; 

export type  CurrencyOwnQuery = z.infer<typeof CurrencyOwnQuerySchema>; 

export type  CurrencyOwnQueryOne = z.infer<typeof CurrencyOwnQueryOneSchema>; 

export type  CurrencyWhere = z.infer<typeof CurrencyWhereSchema>; 

export type  CurrencyQueryOne = z.infer<typeof CurrencyQueryOneSchema>; 

export type  CurrencyQuery = z.infer<typeof CurrencyQuerySchema>; 

export type  CurrencyProjection = z.infer<typeof CurrencyProjectionSchema>; 

    


export type  PriceLevelCreate = z.infer<typeof PriceLevelCreateSchema>; 

export type  PriceLevelUpdate = z.infer<typeof PriceLevelUpdateSchema>; 

export type  PriceLevelOrderBy = z.infer<typeof PriceLevelOrderBySchema>; 

export type  PriceLevelOwnProjection = z.infer<typeof PriceLevelOwnProjectionSchema>; 

export type  PriceLevelOwnWhere = z.infer<typeof PriceLevelOwnWhereSchema>; 

export type  PriceLevelOwnQuery = z.infer<typeof PriceLevelOwnQuerySchema>; 

export type  PriceLevelOwnQueryOne = z.infer<typeof PriceLevelOwnQueryOneSchema>; 

export type  PriceLevelWhere = z.infer<typeof PriceLevelWhereSchema>; 

export type  PriceLevelQueryOne = z.infer<typeof PriceLevelQueryOneSchema>; 

export type  PriceLevelQuery = z.infer<typeof PriceLevelQuerySchema>; 

export type  PriceLevelProjection = z.infer<typeof PriceLevelProjectionSchema>; 

    


export type  PriceCreate = z.infer<typeof PriceCreateSchema>; 

export type  PriceUpdate = z.infer<typeof PriceUpdateSchema>; 

export type  PriceOrderBy = z.infer<typeof PriceOrderBySchema>; 

export type  PriceOwnProjection = z.infer<typeof PriceOwnProjectionSchema>; 

export type  PriceOwnWhere = z.infer<typeof PriceOwnWhereSchema>; 

export type  PriceOwnQuery = z.infer<typeof PriceOwnQuerySchema>; 

export type  PriceOwnQueryOne = z.infer<typeof PriceOwnQueryOneSchema>; 

export type  PriceWhere = z.infer<typeof PriceWhereSchema>; 

export type  PriceQueryOne = z.infer<typeof PriceQueryOneSchema>; 

export type  PriceQuery = z.infer<typeof PriceQuerySchema>; 

export type  PriceProjection = z.infer<typeof PriceProjectionSchema>; 

    


export type  QuantityCreate = z.infer<typeof QuantityCreateSchema>; 

export type  QuantityUpdate = z.infer<typeof QuantityUpdateSchema>; 

export type  QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>; 

export type  QuantityOwnProjection = z.infer<typeof QuantityOwnProjectionSchema>; 

export type  QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>; 

export type  QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>; 

export type  QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>; 

export type  QuantityWhere = z.infer<typeof QuantityWhereSchema>; 

export type  QuantityQueryOne = z.infer<typeof QuantityQueryOneSchema>; 

export type  QuantityQuery = z.infer<typeof QuantityQuerySchema>; 

export type  QuantityProjection = z.infer<typeof QuantityProjectionSchema>; 

    


export type  SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>; 

export type  SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>; 

export type  SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBySchema>; 

export type  SerialNumberOwnProjection = z.infer<typeof SerialNumberOwnProjectionSchema>; 

export type  SerialNumberOwnWhere = z.infer<typeof SerialNumberOwnWhereSchema>; 

export type  SerialNumberOwnQuery = z.infer<typeof SerialNumberOwnQuerySchema>; 

export type  SerialNumberOwnQueryOne = z.infer<typeof SerialNumberOwnQueryOneSchema>; 

export type  SerialNumberWhere = z.infer<typeof SerialNumberWhereSchema>; 

export type  SerialNumberQueryOne = z.infer<typeof SerialNumberQueryOneSchema>; 

export type  SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>; 

export type  SerialNumberProjection = z.infer<typeof SerialNumberProjectionSchema>; 

    


export type  DiscountCreate = z.infer<typeof DiscountCreateSchema>; 

export type  DiscountUpdate = z.infer<typeof DiscountUpdateSchema>; 

export type  DiscountOrderBy = z.infer<typeof DiscountOrderBySchema>; 

export type  DiscountOwnProjection = z.infer<typeof DiscountOwnProjectionSchema>; 

export type  DiscountOwnWhere = z.infer<typeof DiscountOwnWhereSchema>; 

export type  DiscountOwnQuery = z.infer<typeof DiscountOwnQuerySchema>; 

export type  DiscountOwnQueryOne = z.infer<typeof DiscountOwnQueryOneSchema>; 

export type  DiscountWhere = z.infer<typeof DiscountWhereSchema>; 

export type  DiscountQueryOne = z.infer<typeof DiscountQueryOneSchema>; 

export type  DiscountQuery = z.infer<typeof DiscountQuerySchema>; 

export type  DiscountProjection = z.infer<typeof DiscountProjectionSchema>; 

    


export type  DiscountTargetCreate = z.infer<typeof DiscountTargetCreateSchema>; 

export type  DiscountTargetUpdate = z.infer<typeof DiscountTargetUpdateSchema>; 

export type  DiscountTargetOrderBy = z.infer<typeof DiscountTargetOrderBySchema>; 

export type  DiscountTargetOwnProjection = z.infer<typeof DiscountTargetOwnProjectionSchema>; 

export type  DiscountTargetOwnWhere = z.infer<typeof DiscountTargetOwnWhereSchema>; 

export type  DiscountTargetOwnQuery = z.infer<typeof DiscountTargetOwnQuerySchema>; 

export type  DiscountTargetOwnQueryOne = z.infer<typeof DiscountTargetOwnQueryOneSchema>; 

export type  DiscountTargetWhere = z.infer<typeof DiscountTargetWhereSchema>; 

export type  DiscountTargetQueryOne = z.infer<typeof DiscountTargetQueryOneSchema>; 

export type  DiscountTargetQuery = z.infer<typeof DiscountTargetQuerySchema>; 

export type  DiscountTargetProjection = z.infer<typeof DiscountTargetProjectionSchema>; 

    


export type  StoreCreate = z.infer<typeof StoreCreateSchema>; 

export type  StoreUpdate = z.infer<typeof StoreUpdateSchema>; 

export type  StoreOrderBy = z.infer<typeof StoreOrderBySchema>; 

export type  StoreOwnProjection = z.infer<typeof StoreOwnProjectionSchema>; 

export type  StoreOwnWhere = z.infer<typeof StoreOwnWhereSchema>; 

export type  StoreOwnQuery = z.infer<typeof StoreOwnQuerySchema>; 

export type  StoreOwnQueryOne = z.infer<typeof StoreOwnQueryOneSchema>; 

export type  StoreWhere = z.infer<typeof StoreWhereSchema>; 

export type  StoreQueryOne = z.infer<typeof StoreQueryOneSchema>; 

export type  StoreQuery = z.infer<typeof StoreQuerySchema>; 

export type  StoreProjection = z.infer<typeof StoreProjectionSchema>; 

    


export type  WarrantyPolicyCreate = z.infer<typeof WarrantyPolicyCreateSchema>; 

export type  WarrantyPolicyUpdate = z.infer<typeof WarrantyPolicyUpdateSchema>; 

export type  WarrantyPolicyOrderBy = z.infer<typeof WarrantyPolicyOrderBySchema>; 

export type  WarrantyPolicyOwnProjection = z.infer<typeof WarrantyPolicyOwnProjectionSchema>; 

export type  WarrantyPolicyOwnWhere = z.infer<typeof WarrantyPolicyOwnWhereSchema>; 

export type  WarrantyPolicyOwnQuery = z.infer<typeof WarrantyPolicyOwnQuerySchema>; 

export type  WarrantyPolicyOwnQueryOne = z.infer<typeof WarrantyPolicyOwnQueryOneSchema>; 

export type  WarrantyPolicyWhere = z.infer<typeof WarrantyPolicyWhereSchema>; 

export type  WarrantyPolicyQueryOne = z.infer<typeof WarrantyPolicyQueryOneSchema>; 

export type  WarrantyPolicyQuery = z.infer<typeof WarrantyPolicyQuerySchema>; 

export type  WarrantyPolicyProjection = z.infer<typeof WarrantyPolicyProjectionSchema>; 

    


export type  ProductWarrantyCreate = z.infer<typeof ProductWarrantyCreateSchema>; 

export type  ProductWarrantyUpdate = z.infer<typeof ProductWarrantyUpdateSchema>; 

export type  ProductWarrantyOrderBy = z.infer<typeof ProductWarrantyOrderBySchema>; 

export type  ProductWarrantyOwnProjection = z.infer<typeof ProductWarrantyOwnProjectionSchema>; 

export type  ProductWarrantyOwnWhere = z.infer<typeof ProductWarrantyOwnWhereSchema>; 

export type  ProductWarrantyOwnQuery = z.infer<typeof ProductWarrantyOwnQuerySchema>; 

export type  ProductWarrantyOwnQueryOne = z.infer<typeof ProductWarrantyOwnQueryOneSchema>; 

export type  ProductWarrantyWhere = z.infer<typeof ProductWarrantyWhereSchema>; 

export type  ProductWarrantyQueryOne = z.infer<typeof ProductWarrantyQueryOneSchema>; 

export type  ProductWarrantyQuery = z.infer<typeof ProductWarrantyQuerySchema>; 

export type  ProductWarrantyProjection = z.infer<typeof ProductWarrantyProjectionSchema>; 

    