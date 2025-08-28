import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ProductController } from './product.controller';

@Module({
  imports: [PrismaModule.forFeature({ modelNames: ['product'] })],
  controllers: [ProductController],
})
export class ProductModule {}
