import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClient } from '@puq/prisma-puq';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {});

  const configService = app.get(ConfigService);

  const PORT = configService.getOrThrow('PORT');

  const DATABASE_URL = configService.getOrThrow('DATABASE_URL');

  const client = new PrismaClient({ datasourceUrl: DATABASE_URL });

  console.log(await client.product.findMany());

  // Swagger configuration
  {
    const swaggerDocument = new DocumentBuilder()
      .setTitle('Puq')
      .setDescription('Puq qpi')
      .addBearerAuth()
      .build();
    const swaggerConfig = SwaggerModule.createDocument(app, swaggerDocument);
    SwaggerModule.setup('api', app, swaggerConfig);
  }

  await app.listen(PORT);

  logger.log(`App is up and running at ${await app.getUrl()} `);
}

bootstrap();
