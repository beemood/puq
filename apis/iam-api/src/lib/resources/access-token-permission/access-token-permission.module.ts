import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { AccessTokenPermissionController } from './access-token-permission.controller.js';

@Module({
  imports: [
    PrismaModule.forFeature({ resourceNames: ['access-token-permission'] }),
  ],
  controllers: [AccessTokenPermissionController],
})
export class AccessTokenPermissionModule {}
