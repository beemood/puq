import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { TaxRateController } from './tax-rate.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['tax-rate'] })],
  controllers: [TaxRateController],
})
export class TaxRateModule {}
