import type { DynamicModule, Type } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import type { Datamodel } from '@puq/prisma-extentions';
import { getClientToken, provideClient } from './client.provider.js';
import { getRawClientToken, provideRawClient } from './raw-client-provider.js';
import {
  getRawRepositoryToken,
  provideRawRepository,
} from './raw-repository.provider.js';
import {
  getRepositoryToken,
  provideRepository,
} from './repository.provider.js';

export type PrismaModuleOptions = {
  datasourceName?: string;
  prismaClient: Type;
  databaseUrlKey?: string;
  datamodel: Datamodel;
};

export type PrismaModuleFeatureOptions = {
  datasourceName?: string;
  resourceNames: string[];
};

@Module({})
export class PrismaModule {
  static forRoot(options: PrismaModuleOptions): DynamicModule {
    return {
      global: true,
      module: PrismaModule,
      imports: [ConfigModule.forFeature(() => ({}))],
      providers: [
        provideClient(
          options.datasourceName,
          options.prismaClient,
          options.databaseUrlKey,
          options.datamodel
        ),

        provideRawClient(
          options.datasourceName,
          options.prismaClient,
          options.databaseUrlKey
        ),
      ],
      exports: [
        getClientToken(options.datasourceName),
        getRawClientToken(options.datasourceName),
      ],
    };
  }

  static forFeature(options: PrismaModuleFeatureOptions): DynamicModule {
    const repoProviders = options.resourceNames.map((e) => {
      return provideRepository(e, options.datasourceName);
    });

    const rawRepoProviders = options.resourceNames.map((e) => {
      return provideRawRepository(e, options.datasourceName);
    });

    const repoTokens = options.resourceNames.map((e) => {
      return getRepositoryToken(e, options.datasourceName);
    });

    const rawRepoTokens = options.resourceNames.map((e) => {
      return getRawRepositoryToken(e, options.datasourceName);
    });

    return {
      module: PrismaModule,
      providers: [...repoProviders, ...rawRepoProviders],
      exports: [...repoTokens, ...rawRepoTokens],
    };
  }
}
