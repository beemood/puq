import type { Type } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

export async function boot(appModule: Type) {
  const app = await NestFactory.create(appModule, {});

  app.enableCors();
  app.use(helmet());

  const config = app.get(ConfigService);
  const TITLE = config.get('TITLE', 'App name');
  const DESCRIPTION = config.get('DESCRIPTION', 'App description');
  const PORT = config.getOrThrow('PORT');

  const swaggerConfig = new DocumentBuilder()
    .setTitle(TITLE)
    .setDescription(DESCRIPTION)
    .addBearerAuth()
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDoc);

  await app.listen(PORT);

  Logger.log(`Api is up and running ${await app.getUrl()}`);
}
