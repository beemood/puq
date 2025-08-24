import { Inject, Provider } from '@nestjs/common';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';
import { ConfigService } from '@nestjs/config';
import { ClassConstructor } from '@puq/types';

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
