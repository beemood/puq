import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ShelfController } from './shelf.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['shelf'] })],
  controllers: [ShelfController],
})
export class ShelfModule {}
