import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CustomerDiscountController } from './customer-discount.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['customer-discount'] })],
  controllers: [CustomerDiscountController],
})
export class CustomerDiscountModule {}
