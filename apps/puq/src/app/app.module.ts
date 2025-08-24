import { Module } from '@nestjs/common';
import { PrismaModule } from '@puq/prisma';
import { PrismaClient } from '@puq/prisma-puq';
import { ProductModule } from './resources/product/product.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({ client: PrismaClient }),
    ProductModule,
  ],
})
export class AppModule {}
