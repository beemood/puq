import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { AppController } from './app.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['app'] })],
  controllers: [AppController],
})
export class AppModule {}
