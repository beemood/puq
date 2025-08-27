import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ZodExceptionFilter } from '@puq/nest';
import { AppModule } from './app/app.module';
import { PrismaExceptionFilter } from './app/filters/prisma-exception.filter';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {});

  const configService = app.get(ConfigService);

  const PORT = configService.getOrThrow('PORT');

  // Middlewares
  {
    app.useGlobalFilters(new ZodExceptionFilter(), new PrismaExceptionFilter());
    app.enableCors({ origins: ['*'] });
  }

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
