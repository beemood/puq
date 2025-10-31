import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Prisma, PrismaClient as prismaClient } from '@puq/inventory-db';
import { PrismaClientKnownRequestError } from '@puq/inventory-db/runtime/library';
import {
  createPrismaExceptionFilter,
  ResourceEventInterceptor,
} from '@puq/nest';
import { PrismaModule } from '@puq/prisma';

@Module({
  imports: [
    PrismaModule.forRoot({ prismaClient, datamodel: Prisma.dmmf.datamodel }),
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
