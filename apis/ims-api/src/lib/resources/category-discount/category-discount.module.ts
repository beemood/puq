import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CategoryDiscountController } from './category-discount.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category-discount'] })],
  controllers: [CategoryDiscountController],
})
export class CategoryDiscountModule {}
