import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { AccessTokenController } from './access-token.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['access-token'] })],
  controllers: [AccessTokenController],
})
export class AccessTokenModule {}
