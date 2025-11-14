import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { PriceController } from './price.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['price'] })],
  controllers: [PriceController],
})
export class PriceModule {}
