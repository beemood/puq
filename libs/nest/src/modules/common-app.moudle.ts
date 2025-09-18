import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ResourceTransformInterceptor } from 'src/interceptors/resource-transform.js';
import { EventInterceptor } from '../interceptors/event.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 10_000, limit: 10 }],
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    CacheModule.register({
      ttl: 5_000,
    }),
  ],
  exports: [ConfigModule, ScheduleModule, EventEmitterModule, CacheModule],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: EventInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResourceTransformInterceptor,
    },
  ],
})
export class CommonAppModule {}
