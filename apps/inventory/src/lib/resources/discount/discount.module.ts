import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { DiscountController } from './discount.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['discount'] })],
  controllers: [DiscountController],
})
export class DiscountModule {}
