import type { Type } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { createEnvKeys } from './create-env-keys.js';

/**
 * Bootstrap the api project
 * @param appModule  App module
 */
export async function boot(appModule: Type) {
  const app = await NestFactory.create(appModule, {});
  const config = app.get(ConfigService);

  const APP_NAME = config.getOrThrow('APP_NAME');

  const {
    description: DESCRIPTION_KEY,
    port: PORT_KEY,
    prefix: PREFIX_KEY,
  } = createEnvKeys(APP_NAME);

  const DESCRIPTION = config.get(DESCRIPTION_KEY, 'App description');
  const PORT = config.getOrThrow(PORT_KEY, 3000);
  const SECONDARY_PREFIX = config.getOrThrow(PREFIX_KEY, 3000);

  const PREFIX = `${SECONDARY_PREFIX}/api`;

  // Configure app
  {
    app.enableCors();
    app.use(helmet());
    app.setGlobalPrefix(PREFIX);
  }

  // Configure swagger
  {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(APP_NAME)
      .setDescription(DESCRIPTION)
      .addBearerAuth()
      .build();
    const doc = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(PREFIX, app, doc);
  }

  await app.listen(PORT);

  const greeting = `${APP_NAME} is up: ${await app.getUrl()}`;

  Logger.log(greeting, 'Boot');
}
