import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { CustomerController } from './customer.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['customer'] })],
  controllers: [CustomerController],
})
export class CustomerModule {}
