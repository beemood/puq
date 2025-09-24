/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, type Provider } from '@nestjs/common';
import { extractResourceName } from '@puq/names';
import { DEFAULT_DATASOURCE_NAME, getClientToken } from './client.provider.js';

export function getRepositoryToken(
  resourceName: string,
  datasouceName = DEFAULT_DATASOURCE_NAME
) {
  return `${datasouceName}_${resourceName}_PRISMA_REPOSITORY`;
}

export function provideRepository(
  resourceName: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(resourceName),
    useFactory(client: any) {
      const repository = client[resourceName];

      if (repository == undefined) {
        throw new Error(
          `Prisma repository for ${resourceName}, is not found in the provided prisma instance!`
        );
      }
      return repository;
    },
  };
}

export function InjectRepository(
  resourceName?: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    resourceName = resourceName ?? extractResourceName(className);
    Inject(getRepositoryToken(resourceName, datasourceName))(...args);
  };
}
