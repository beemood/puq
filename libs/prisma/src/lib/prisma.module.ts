import type { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import type { ClassConstructor } from '@puq/types';
import { getClientToken, provideClient } from './providers/client.js';
import { DEFAULT_DATASOURCE_NAME } from './providers/constants.js';
import {
  getRepositoryToken,
  provideRepository,
} from './providers/repository.js';

export type PrismaModuleOptions = {
  client: ClassConstructor;
};

export type PrismaFeatureModuleOptions = {
  modelNames: string[];
};

@Module({
  imports: [ConfigModule.forFeature(() => ({}))],
})
export class PrismaModule {
  static forRoot(
    options: PrismaModuleOptions,
    datasourceName = DEFAULT_DATASOURCE_NAME
  ): DynamicModule {
    return {
      module: PrismaModule,
      global: true,
      providers: [provideClient(options.client, datasourceName)],
      exports: [getClientToken(datasourceName)],
    };
  }

  static forFeature(
    options: PrismaFeatureModuleOptions,
    datasourceName = DEFAULT_DATASOURCE_NAME
  ): DynamicModule {
    const repositoryProviders = options.modelNames.map((e) => {
      return provideRepository(e, datasourceName);
    });
    const repositoryTokens = options.modelNames.map((e) => {
      return getRepositoryToken(e, datasourceName);
    });
    return {
      module: PrismaModule,
      providers: [...repositoryProviders],
      exports: [...repositoryTokens],
    };
  }
}
