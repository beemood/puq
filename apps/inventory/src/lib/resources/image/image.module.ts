import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { ImageController } from './image.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['image'] })],
  controllers: [ImageController],
})
export class ImageModule {}
