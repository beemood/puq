import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductAttributeController } from './product-attribute.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-attribute'] })],
  controllers: [ProductAttributeController],
})
export class ProductAttributeModule {}
