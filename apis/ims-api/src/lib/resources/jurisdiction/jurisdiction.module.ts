import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { JurisdictionController } from './jurisdiction.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['jurisdiction'] })],
  controllers: [JurisdictionController],
})
export class JurisdictionModule {}
