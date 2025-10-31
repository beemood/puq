import { Inject, type Provider, type Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { PrismaClient } from '@prisma/client/extension';
import { names } from '@puq/names';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getRawClientToken(
  datasourceName = DEFAULT_DATASOURCE_NAME
): string {
  return `${
    names(datasourceName).screamingSnake
  }_PRISMA_RAW_CLIENT_TOKEN`.toUpperCase();
}

export function provideRawClient(
  datasourceName = DEFAULT_DATASOURCE_NAME,
  prismaClient: Type<PrismaClient>,
  databaseUrlKey = 'DATABASE_URL'
): Provider {
  return {
    inject: [ConfigService],
    provide: getRawClientToken(datasourceName),
    useFactory(config: ConfigService) {
      const url = config.getOrThrow(databaseUrlKey);
      return new prismaClient({
        datasources: { db: { url } },
      });
    },
  };
}

export function InjectRawClient(
  datasouceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    Inject(getRawClientToken(datasouceName))(...args);
  };
}
