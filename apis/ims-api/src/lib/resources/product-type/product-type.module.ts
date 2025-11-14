import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductTypeController } from './product-type.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product-type'] })],
  controllers: [ProductTypeController],
})
export class ProductTypeModule {}
