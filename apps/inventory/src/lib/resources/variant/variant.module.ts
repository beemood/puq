import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { VariantController } from './variant.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['variant'] })],
  controllers: [VariantController],
})
export class VariantModule {}
