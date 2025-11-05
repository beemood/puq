import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CategoryController } from './category.controller.js';
import { CategoryEventListener } from './category.event-listener.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
  providers: [CategoryEventListener],
})
export class CategoryModule {}
