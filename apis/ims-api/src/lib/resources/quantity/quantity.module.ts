import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { QuantityController } from './quantity.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['quantity'] })],
  controllers: [QuantityController],
})
export class QuantityModule {}
