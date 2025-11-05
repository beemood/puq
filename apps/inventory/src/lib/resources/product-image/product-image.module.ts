import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductImageController } from './product-image.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-image'] })],
  controllers: [ProductImageController],
})
export class ProductImageModule {}
