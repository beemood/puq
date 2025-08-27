import type { Provider } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { ClassConstructor } from '@puq/types';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getClientToken(
  datasourceName = DEFAULT_DATASOURCE_NAME
): string {
  return `${datasourceName}_DATA_SOURCE`.toUpperCase();
}

export function provideClient(
  client: ClassConstructor,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  return {
    inject: [ConfigService],
    provide: getClientToken(datasourceName),
    useFactory(configService: ConfigService) {
      const DATABASE_URL = configService.getOrThrow('DATABASE_URL');
      return new client({ datasourceUrl: DATABASE_URL });
    },
  };
}

export function InjectClient(
  datasourceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    Inject(getClientToken(datasourceName))(...args);
  };
}
