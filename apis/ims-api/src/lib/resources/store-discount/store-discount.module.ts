import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { StoreDiscountController } from './store-discount.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['store-discount'] })],
  controllers: [StoreDiscountController],
})
export class StoreDiscountModule {}
