import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductDiscountController } from './product-discount.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-discount'] })],
  controllers: [ProductDiscountController],
})
export class ProductDiscountModule {}
