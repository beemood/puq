import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CustomerGroupDiscountController } from './customer-group-discount.controller.js';

@Module({
  imports: [
    PrismaModule.forFeature({ resourceNames: ['customer-group-discount'] }),
  ],
  controllers: [CustomerGroupDiscountController],
})
export class CustomerGroupDiscountModule {}
