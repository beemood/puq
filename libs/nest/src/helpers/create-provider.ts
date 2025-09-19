import type { Provider, Type } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import type { Any } from '@puq/types';
import { createProviderKey } from './create-provider-key.js';

export type ProviderMetadata<T> = {
  key: symbol;
  inject: () => ParameterDecorator;
  provideValue: (value: T) => Provider;
  provideClass: (useClass: Type<T>) => Provider;
  provideFactory: (useFactory: (...args: Any[]) => T) => Provider;
};


export function createProvider<T>(name: string): ProviderMetadata<T> {
  const key = createProviderKey(name);

  
  function inject(): ParameterDecorator {
    return (...args) => {
      Inject(key)(...args);
    };
  }

  function provideValue(useValue: T): Provider {
    return {
      provide: key,
      useValue,
    };
  }

  function provideClass(useClass: Type<T>): Provider {
    return {
      provide: key,
      useClass,
    };
  }

  function provideFactory(useFactory: (...args: Any[]) => T): Provider {
    return {
      provide: key,
      useFactory,
    };
  }

  return {
    key,
    inject,
    provideValue,
    provideFactory,
    provideClass,
  };
}
