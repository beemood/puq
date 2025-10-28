import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductCategoryController } from './product-category.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-category'] })],
  controllers: [ProductCategoryController],
})
export class ProductCategoryModule {}
