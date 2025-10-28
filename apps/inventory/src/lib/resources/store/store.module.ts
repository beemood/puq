import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { StoreController } from './store.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['store'] })],
  controllers: [StoreController],
})
export class StoreModule {}
