import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaClientKnownRequestError } from '@puq/inventory-db/runtime/library';
import {
  createPrismaExceptionFilter,
  ResourceEventInterceptor,
} from '@puq/nest';
import { PrismaModule } from '@puq/prisma';
import { inventoryExtendedClient } from './prisma-client.js';
import * as modules from './resources/resource-modules.js';

@Module({
  imports: [
    PrismaModule.forRoot({
      client: inventoryExtendedClient,
    }),
    ...Object.values(modules),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: createPrismaExceptionFilter(PrismaClientKnownRequestError),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResourceEventInterceptor,
    },
  ],
})
export class ResourceModule {}
