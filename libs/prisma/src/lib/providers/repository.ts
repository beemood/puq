import { Inject, Provider } from '@nestjs/common';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';
import { getClientToken } from './client.js';

export function getRepositoryToken(
  name: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
) {
  return `${datasourceName}_${name}_repository`.toUpperCase();
}

export function provideRepository(
  name: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(name, datasourceName),
    useFactory(client: any) {
      return client[name];
    },
  };
}

export function InjectRepository(
  name: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    Inject(getRepositoryToken(name, datasourceName))(...args);
  };
}
