import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductController } from './product.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product'] })],
  controllers: [ProductController],
})
export class ProductModule {}
