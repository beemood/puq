import { createClientProvider } from '../factory/create-client-provider.js';

export const {
  inject: InjectClient,
  provide: provideClient,
  token: getClientToken,
} = createClientProvider();
