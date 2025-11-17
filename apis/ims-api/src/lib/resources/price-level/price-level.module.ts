import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { PriceLevelController } from './price-level.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['price-level'] })],
  controllers: [PriceLevelController],
})
export class PriceLevelModule {}
