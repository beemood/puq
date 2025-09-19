import { createProvider } from '../helpers/create-provider.js';
import type { ResourceTransformers } from '../types/resource-transformers.js';

export const {
  inject: InjectTransformers,
  key: TRANSFORMERS_PROVIDER_KEY,
  provideValue: provideTransformers,
} = createProvider<ResourceTransformers>('transformers');

