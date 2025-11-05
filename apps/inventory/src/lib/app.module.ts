import { Module } from '@nestjs/common';
import { CommonAppModule } from '@puq/nest';
import { ResourceModule } from './resource.module.js';
@Module({
  imports: [CommonAppModule, ResourceModule],
})
export class AppModule {}
