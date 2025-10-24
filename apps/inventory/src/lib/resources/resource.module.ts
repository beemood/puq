import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PrismaClient as prismaClient } from '@puq/inventory-db/client';
import { PrismaClientKnownRequestError } from '@puq/inventory-db/runtime/library';
import { createPrismaExceptionFilter } from '@puq/nest';
import { PrismaModule } from '@puq/prisma';
import { CategoryModule } from './category/category.module.js';

@Module({
  imports: [PrismaModule.forRoot({ prismaClient }), CategoryModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: createPrismaExceptionFilter(PrismaClientKnownRequestError),
    },
  ],
})
export class ResourceModule {}
