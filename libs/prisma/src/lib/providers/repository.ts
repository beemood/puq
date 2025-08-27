import type { Provider } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { names } from '@puq/names';
import { inferResourceName } from '@puq/nest';
import { getClientToken } from './client.js';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getRepositoryToken(
  name: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
) {
  return `${datasourceName}_${
    names(name).screamingSnakeCase
  }_repository`.toUpperCase();
}

export function provideRepository(
  name: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(name, datasourceName),
    useFactory(client: any) {
      return client[names(name).pascalCase];
    },
  };
}

export function InjectRepository(
  name?: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    name = name ?? inferResourceName((args[0] as any).name);

    Inject(getRepositoryToken(name, datasourceName))(...args);
  };
}
