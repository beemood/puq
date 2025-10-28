import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { WarrantyPolicyController } from './warranty-policy.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['warranty-policy'] })],
  controllers: [WarrantyPolicyController],
})
export class WarrantyPolicyModule {}
