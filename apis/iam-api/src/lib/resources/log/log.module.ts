import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { LogController } from './log.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['log'] })],
  controllers: [LogController],
})
export class LogModule {}
