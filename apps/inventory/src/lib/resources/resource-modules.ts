import { AttributeModule } from './attribute/attribute.module.js';
import { CategoryModule } from './category/category.module.js';
import { CurrencyModule } from './currency/currency.module.js';
import { DiscountTargetModule } from './discount-target/discount-target.module.js';
import { DiscountModule } from './discount/discount.module.js';
import { PriceLevelModule } from './price-level/price-level.module.js';
import { PriceModule } from './price/price.module.js';
import { ProductCategoryModule } from './product-category/product-category.module.js';
import { ProductWarrantyModule } from './product-warranty/product-warranty.module.js';
import { ProductModule } from './product/product.module.js';
import { QuantityModule } from './quantity/quantity.module.js';
import { SerialNumberModule } from './serial-number/serial-number.module.js';
import { StoreModule } from './store/store.module.js';
import { VariantModule } from './variant/variant.module.js';
import { WarrantyPolicyModule } from './warranty-policy/warranty-policy.module.js';

export const resourceModules = [
  CategoryModule,
  ProductModule,
  ProductCategoryModule,
  VariantModule,
  AttributeModule,
  CurrencyModule,
  PriceLevelModule,
  PriceModule,
  QuantityModule,
  SerialNumberModule,
  DiscountModule,
  DiscountTargetModule,
  StoreModule,
  WarrantyPolicyModule,
  ProductWarrantyModule,
];
