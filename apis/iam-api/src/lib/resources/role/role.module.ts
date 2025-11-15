import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { RoleController } from './role.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['role'] })],
  controllers: [RoleController],
})
export class RoleModule {}
