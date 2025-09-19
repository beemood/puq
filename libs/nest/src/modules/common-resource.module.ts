import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [ConfigModule.forFeature(() => ({})), EventEmitterModule],
  exports: [ConfigModule, EventEmitterModule],
})
export class CommonResourceModule {}
