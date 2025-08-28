import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@puq/prisma';
import { PrismaClient } from '@puq/prisma-puq';
import { CategoryModule } from './resources/category/category.module';
import { ProductModule } from './resources/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({ client: PrismaClient }),
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
