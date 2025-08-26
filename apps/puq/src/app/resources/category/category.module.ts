import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CategoryController } from './category.controller';

@Module({
  imports: [PrismaModule.forFeature({ modelNames: ['category'] })],
  controllers: [CategoryController],
})
export class CategoryModule {}
