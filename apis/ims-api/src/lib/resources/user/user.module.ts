import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { UserController } from './user.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['user'] })],
  controllers: [UserController],
})
export class UserModule {}
