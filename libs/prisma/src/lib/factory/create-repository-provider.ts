/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, NotFoundException, type Provider } from '@nestjs/common';
import type { PrismaClientExtends } from '@prisma/client';
import {
  DEFAULT_DATASOURCE_NAME,
  DEFAULT_GROUP_NAME,
} from '../common/constants.js';
import { getClientToken } from '../provider/client.js';

export type RepositoryProvider = {
  token: (modelName: string, datasourceName?: string) => string;
  provide: (modelName: string, datasourceName?: string) => Provider;
  inject: (modelName: string, datasourceName?: string) => PropertyDecorator;
};

export const createRepositoryProvider = (
  groupName = DEFAULT_GROUP_NAME
): RepositoryProvider => {
  const token: RepositoryProvider['token'] = (
    modelName,
    datasourceName = DEFAULT_DATASOURCE_NAME
  ) => {
    return `${groupName}_${datasourceName}_${modelName}_REPOSITORY`.toUpperCase();
  };

  const provide: RepositoryProvider['provide'] = (
    modelName,
    datasourceName = DEFAULT_DATASOURCE_NAME
  ) => {
    return {
      inject: [getClientToken(datasourceName)],
      provide: token(modelName),
      useFactory(client: PrismaClientExtends) {
        const repository = (client as any)[modelName];
        if (!repository) {
          throw new NotFoundException(modelName);
        }
        return repository;
      },
    };
  };

  const inject: RepositoryProvider['inject'] = (
    modelName,
    datasourceName = DEFAULT_DATASOURCE_NAME
  ) => {
    return (...args) => {
      Inject(token(modelName, datasourceName))(...args);
    };
  };

  return {
    token,
    provide,
    inject,
  };
};
