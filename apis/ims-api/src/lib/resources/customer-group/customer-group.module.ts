import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CustomerGroupController } from './customer-group.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['customer-group'] })],
  controllers: [CustomerGroupController],
})
export class CustomerGroupModule {}
