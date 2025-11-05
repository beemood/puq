import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductTagController } from './product-tag.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-tag'] })],
  controllers: [ProductTagController],
})
export class ProductTagModule {}
