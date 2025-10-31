/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, type Provider } from '@nestjs/common';
import { extractResourceName, names } from '@puq/names';
import type { Any } from '@puq/types';
import { isStringOrThrow } from '@puq/utils';
import { getClientToken } from './client.provider.js';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getRawRepositoryToken(
  resourceName: string,
  datasouceName = DEFAULT_DATASOURCE_NAME
) {
  return `${names(datasouceName).screamingSnake}_${
    names(resourceName).screamingSnake
  }_PRISMA_RAW_REPOSITORY`.toUpperCase();
}

export function provideRawRepository(
  resourceName: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  const __resourceNames = names(resourceName);
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRawRepositoryToken(resourceName),
    useFactory(client: any) {
      const repository = client[__resourceNames.camel];

      if (repository == undefined) {
        throw new Error(
          `Prisma raw repository for ${resourceName}, is not found in the provided prisma instance!`
        );
      }
      return repository;
    },
  };
}

export function InjectRawRepository(
  resourceName?: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    if (resourceName == undefined) {
      const className = (args[0] as Any).name;
      isStringOrThrow(className);
      resourceName = extractResourceName(className);
    }

    Inject(getRawRepositoryToken(resourceName, datasourceName))(...args);
  };
}
