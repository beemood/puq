import { Inject, type Provider, type Type } from '@nestjs/common';

export const DEFAULT_DATASOURCE_NAME = 'DEFAULT';

export function getClientToken(
  datasourceName = DEFAULT_DATASOURCE_NAME
): string {
  return `${datasourceName}_PRISMA_CLIENT_TOKEN`.toUpperCase();
}

export function provideClient(
  datasourceName = DEFAULT_DATASOURCE_NAME,
  prismaClient: Type
): Provider {
  return {
    provide: getClientToken(datasourceName),
    useFactory() {
      return new prismaClient();
    },
  };
}

export function InjectClient(
  datasouceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    Inject(getClientToken(datasouceName))(...args);
  };
}
