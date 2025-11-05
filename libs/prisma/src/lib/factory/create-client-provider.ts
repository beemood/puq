import { Inject, type Provider } from '@nestjs/common';
import type { PrismaClient } from '@prisma/client';
import {
  DEFAULT_DATASOURCE_NAME,
  DEFAULT_GROUP_NAME,
} from '../common/constants.js';

export type ClientProvider = {
  /**
   * Create a token for datasource
   * @param datasouceName optional datasource name to group resources
   * @returns
   */
  token: (datasouceName?: string) => string;

  /**
   * Provide PrismaClient in module
   * @param client PrismaClient instance
   * @param groupName optional group name to group resouces
   * @returns Provider
   */
  provide: (client: PrismaClient, groupName?: string) => Provider;

  /**
   * Inject PrismaClient instance
   * @param datasourceName optional datasource name to group resources (different from groupName)
   * @returns
   */
  inject: (datasourceName?: string) => ParameterDecorator;
};

/**
 * Create PrismaClient token, provider, and injector
 * @param groupName optional group name to group resouces
 * @returns {@link ClientProvider}
 */
export function createClientProvider(
  groupName = DEFAULT_GROUP_NAME
): ClientProvider {
  const token = (datasourceName = DEFAULT_DATASOURCE_NAME) =>
    `${groupName}_${datasourceName}`.toUpperCase();

  const provide = (
    client: PrismaClient,
    groupName = DEFAULT_GROUP_NAME
  ): Provider => {
    return {
      provide: token(groupName),
      useValue: client,
    };
  };

  const inject = (
    datasourceName = DEFAULT_DATASOURCE_NAME
  ): ParameterDecorator => {
    return (...args) => {
      Inject(token(datasourceName))(...args);
    };
  };

  return {
    token,
    provide,
    inject,
  };
}
