import type { INestApplication, Type } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readJsonFile } from '@puq/fs';
import type { Package } from '@puq/types';
import helmet from 'helmet';

/**
 * Integrate swagger UI
 * @param app Nest application module
 * @param prefix Global api prefix ('api' by default)
 * @param name Application name (package.name)
 * @param description Application description (package.description)
 */
export function configureSwagger(
  app: INestApplication,
  prefix = 'api',
  name = 'name',
  description = 'description'
) {
  SwaggerModule.setup(
    prefix,
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle(name)
        .setDescription(description)
        .addBearerAuth()
        .build()
    )
  );
}

/**
 * Boot application
 * @param appModule Nest application module
 */
export async function boot(appModule: Type) {
  const GLOBAL_PREFIX = 'api';

  const {
    displayName: NAME,
    description: DESCRIPTION,
    funding,
    author,
    homepage,
  } = await readJsonFile<Package>('package.json');

  const app = await NestFactory.create(appModule, {});
  const config = app.get(ConfigService);
  const PORT = config.get('PORT', 3000);

  // Configure app
  {
    app.enableCors();
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );
    app.setGlobalPrefix(GLOBAL_PREFIX);
  }

  // Configure swagger
  configureSwagger(app, GLOBAL_PREFIX, NAME, DESCRIPTION);

  // Start
  await app.listen(PORT);

  // Links
  {
    const baseURL = await app.getUrl();
    const appURL = `${baseURL}/${GLOBAL_PREFIX}`;
    Logger.log(`${NAME} : ${appURL}`, 'Boot');
    Logger.log(`Swagger : ${appURL}`, 'Boot');
    Logger.log(`Documentation : ${homepage}`, 'Boot');
    Logger.log(`Contact us : ${author?.email}`, 'Boot');
    Logger.log(`Support us : ${funding?.[0]}`, 'Boot');
  }
}
