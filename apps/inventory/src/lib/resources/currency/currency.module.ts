import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CurrencyController } from './currency.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['currency'] })],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
