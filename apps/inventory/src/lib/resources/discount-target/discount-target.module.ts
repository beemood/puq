import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { DiscountTargetController } from './discount-target.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['discount-target'] })],
  controllers: [DiscountTargetController],
})
export class DiscountTargetModule {}
