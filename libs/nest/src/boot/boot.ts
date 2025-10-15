import type { Type } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

/**
 * Common nestjs bootstrap configuration including cors and helpmet middleware, global prefix, and swagger integrateion.
 *
 * @param appModule  Nestjs main app module
 */
export async function boot(appModule: Type) {
  const app = await NestFactory.create(appModule, {});

  const config = app.get(ConfigService);
  const TITLE = config.get('TITLE', 'App name');
  const GLOBAL_PREFIX = config.get('GLOBAL_PREFIX', 'api');
  const DESCRIPTION = config.get('DESCRIPTION', 'App description');
  const PORT = config.getOrThrow('PORT');

  app.enableCors();
  app.use(helmet());
  app.setGlobalPrefix(GLOBAL_PREFIX);

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
