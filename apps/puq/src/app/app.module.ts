import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@puq/prisma';
import { PrismaClient } from '@puq/prisma-puq';
import { CategoryModule } from './resources/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({ client: PrismaClient }),
    CategoryModule,
  ],
})
export class AppModule {}
