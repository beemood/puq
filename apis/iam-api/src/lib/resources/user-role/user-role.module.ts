import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { UserRoleController } from './user-role.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['user-role'] })],
  controllers: [UserRoleController],
})
export class UserRoleModule {}
