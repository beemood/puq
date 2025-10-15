import { Inject, type Provider, type Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { names } from '@puq/names';
export const DEFAULT_DATASOURCE_NAME = 'DEFAULT';

export function getClientToken(
  datasourceName = DEFAULT_DATASOURCE_NAME
): string {
  return `${
    names(datasourceName).screamingSnake
  }_PRISMA_CLIENT_TOKEN`.toUpperCase();
}

export function provideClient(
  datasourceName = DEFAULT_DATASOURCE_NAME,
  prismaClient: Type
): Provider {
  return {
    inject: [ConfigService],
    provide: getClientToken(datasourceName),
    useFactory(config: ConfigService) {
      const url = config.getOrThrow('DATABASE_URL');
      return new prismaClient({
        datasources: { db: { url } },
      });
    },
  };
}

export function InjectClient(
  datasouceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    Inject(getClientToken(datasouceName))(...args);
  };
}
