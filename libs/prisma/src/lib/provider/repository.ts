import { createRepositoryProvider } from '../factory/create-repository-provider.js';

export const {
  token: getRepositoryToken,
  provide: provideRepository,
  inject: InjectRepository,
} = createRepositoryProvider();
