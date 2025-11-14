import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { TagController } from './tag.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['tag'] })],
  controllers: [TagController],
})
export class TagModule {}
