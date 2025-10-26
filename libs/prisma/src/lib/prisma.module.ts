import type { DynamicModule, Type } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getClientToken, provideClient } from './client.provider.js';
import {
  getRepositoryToken,
  provideRepository,
} from './repository.provider.js';

export type PrismaModuleOptions = {
  datasourceName?: string;
  prismaClient: Type;
  databaseUrlKey?: string;
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
          options.databaseUrlKey
        ),
      ],
      exports: [getClientToken(options.datasourceName)],
    };
  }

  static forFeature(options: PrismaModuleFeatureOptions): DynamicModule {
    const __providers = options.resourceNames.map((e) => {
      return provideRepository(e, options.datasourceName);
    });
    const __exports = options.resourceNames.map((e) => {
      return getRepositoryToken(e, options.datasourceName);
    });

    return {
      module: PrismaModule,
      providers: __providers,
      exports: __exports,
    };
  }
}
