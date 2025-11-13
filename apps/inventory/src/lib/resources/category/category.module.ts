import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CategoryController } from './category.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
})
export class CategoryModule {}
