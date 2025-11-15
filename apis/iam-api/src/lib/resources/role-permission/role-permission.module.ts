import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { RolePermissionController } from './role-permission.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['role-permission'] })],
  controllers: [RolePermissionController],
})
export class RolePermissionModule {}
