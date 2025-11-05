import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { SupplierController } from './supplier.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['supplier'] })],
  controllers: [SupplierController],
})
export class SupplierModule {}
