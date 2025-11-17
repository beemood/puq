import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { AttributeController } from './attribute.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['attribute'] })],
  controllers: [AttributeController],
})
export class AttributeModule {}
