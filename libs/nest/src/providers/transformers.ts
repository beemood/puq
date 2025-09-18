import type { ResourceTransformers } from '../types/resource-transformers.js';
import { createProvider } from './helpers/create-provider.js';

export const {
  inject: InjectTransformers,
  key: TRANSFORMERS_PROVIDER_KEY,
  provideValue: provideTransformers,
} = createProvider<ResourceTransformers>('transformers');

