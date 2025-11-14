import { Module } from '@nestjs/common';
import { CommonAppModule } from '@puq/nest';
import { AppController } from './app.controller.js';
import { ResourceModule } from './resource.module.js';

@Module({
  imports: [CommonAppModule, ResourceModule],
  controllers: [AppController],
})
export class AppModule {}
