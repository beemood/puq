import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { PermissionController } from './permission.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['permission'] })],
  controllers: [PermissionController],
})
export class PermissionModule {}
