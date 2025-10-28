import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductWarrantyController } from './product-warranty.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-warranty'] })],
  controllers: [ProductWarrantyController],
})
export class ProductWarrantyModule {}
