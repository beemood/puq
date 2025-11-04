/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getClientToken, provideClient } from '../provider/client.js';
import {
  getRepositoryToken,
  provideRepository,
} from '../provider/repository.js';

export type PrismaModuleOptions = {
  groupName?: string;
  datasourceName?: string;
  client: any;
};

export type PrismaModuleFeatureOptions = {
  datasourceName?: string;
  resourceNames: string[];
};

@Module({})
export class PrismaModule {
  /**
   * Provide prisma client
   * @param options {@link PrismaModuleOptions}
   * @returns
   */
  static forRoot(options: PrismaModuleOptions): DynamicModule {
    return {
      global: true,
      module: PrismaModule,
      imports: [ConfigModule.forFeature(() => ({}))],
      providers: [provideClient(options.client)],
      exports: [getClientToken(options.datasourceName)],
    };
  }

  /**
   * Provide repositories
   * @param options {@link PrismaModuleFeatureOptions}
   * @returns
   */
  static forFeature(options: PrismaModuleFeatureOptions): DynamicModule {
    const repoProviders = options.resourceNames.map((e) => {
      return provideRepository(e, options.datasourceName);
    });

    const repoTokens = options.resourceNames.map((e) => {
      return getRepositoryToken(e, options.datasourceName);
    });

    return {
      module: PrismaModule,
      providers: [...repoProviders],
      exports: [...repoTokens],
    };
  }
}
