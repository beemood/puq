import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductTypeDiscountController } from './product-type-discount.controller.js';

@Module({
  imports: [
    PrismaModule.forFeature({ resourceNames: ['product-type-discount'] }),
  ],
  controllers: [ProductTypeDiscountController],
})
export class ProductTypeDiscountModule {}
