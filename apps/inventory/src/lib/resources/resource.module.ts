import type { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaClient as prismaClient } from '@puq/inventory-db/client';
import { PrismaClientKnownRequestError } from '@puq/inventory-db/runtime/library';
import {
  createPrismaExceptionFilter,
  ResourceEventInterceptor,
} from '@puq/nest';
import { PrismaModule } from '@puq/prisma';
import { CategoryModule } from './category/category.module.js';
export type ResourceModuleOptions = {
  datasourceName?: string;
  databaseUrlKey?: string;
};

@Module({
  imports: [PrismaModule.forRoot({ prismaClient }), CategoryModule],
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
export class ResourceModule {
  static register(options: ResourceModuleOptions): DynamicModule {
    return {
      module: ResourceModule,
      imports: [
        PrismaModule.forRoot({
          prismaClient,
          datasourceName: options.datasourceName,
          databaseUrlKey: options.databaseUrlKey,
        }),
        CategoryModule,
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
    };
  }
}
