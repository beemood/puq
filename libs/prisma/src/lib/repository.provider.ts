/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, type Provider } from '@nestjs/common';
import { extractResourceName, names } from '@puq/names';
import type { Any } from '@puq/types';
import { isStringOrThrow } from '@puq/utils';
import { DEFAULT_DATASOURCE_NAME, getClientToken } from './client.provider.js';

export function getRepositoryToken(
  resourceName: string,
  datasouceName = DEFAULT_DATASOURCE_NAME
) {
  return `${names(datasouceName).screamingSnake}_${
    names(resourceName).screamingSnake
  }_PRISMA_REPOSITORY`.toUpperCase();
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
    if (resourceName == undefined) {
      const className = (args[0] as Any).name;
      isStringOrThrow(className);
      resourceName = extractResourceName(className);
    }

    Inject(getRepositoryToken(resourceName, datasourceName))(...args);
  };
}
