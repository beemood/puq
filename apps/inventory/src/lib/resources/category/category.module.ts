import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CategoryController } from './category.controller.js';

import type { Provider } from '@nestjs/common';
import { Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { AuthenticatedRequest } from '@puq/nest';

const someProvider: Provider = {
  scope: Scope.REQUEST,
  inject: [REQUEST],
  provide: 'Some',
  useFactory(req: AuthenticatedRequest) {
    console.table({
      host: req.host,
      hostname: req.hostname,
      url: req.url,
    });
    return '';
  },
};
@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
  providers: [someProvider],
})
export class CategoryModule {}
