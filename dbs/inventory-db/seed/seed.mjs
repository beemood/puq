#!/usr/bin/env node

import { seedAttributes } from './attribute/seed.mjs';
import { seedCategories } from './category/seed.mjs';
import { seedCurrencies } from './currency/seed.mjs';
import { seedPriceLevels } from './price-level/seed.mjs';
import { seedPrices } from './price/seed.mjs';
import { seedProducts } from './product/seed.mjs';
import { seedQuantities } from './quantity/seed.mjs';
import { seedSerialNumber } from './serial-number/seed.mjs';
import { seedStores } from './store/seed.mjs';
import { seedUnits } from './unit/seed.mjs';

async function seed() {
  await seedCategories();
  await seedCurrencies();
  await seedPriceLevels();
  await seedUnits();
  await seedAttributes();
  await seedStores();
  await seedProducts();
  await seedPrices();
  await seedQuantities();
  await seedSerialNumber();
}

seed();
