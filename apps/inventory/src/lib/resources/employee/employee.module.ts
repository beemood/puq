import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { EmployeeController } from './employee.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['employee'] })],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
