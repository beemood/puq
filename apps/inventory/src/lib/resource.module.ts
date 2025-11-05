import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Prisma, PrismaClient } from '@puq/inventory-db';
import { PrismaClientKnownRequestError } from '@puq/inventory-db/runtime/library';
import {
  createPrismaExceptionFilter,
  ResourceEventInterceptor,
} from '@puq/nest';
import { PrismaModule } from '@puq/prisma';
import { withSlugify, withSoftDelete } from '@puq/prisma-extentions';
import * as modules from './resources/resource-modules.js';

export const inventoryClient = new PrismaClient()
  .$extends(withSlugify(Prisma.dmmf.datamodel))
  .$extends(withSoftDelete(Prisma.dmmf.datamodel));

@Module({
  imports: [
    PrismaModule.forRoot({
      client: inventoryClient,
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
