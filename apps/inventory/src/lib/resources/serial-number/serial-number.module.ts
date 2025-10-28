import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { SerialNumberController } from './serial-number.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['serial-number'] })],
  controllers: [SerialNumberController],
})
export class SerialNumberModule {}
