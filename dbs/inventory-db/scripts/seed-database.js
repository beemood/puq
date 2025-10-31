#!/usr/bin/env nodec
const { readJsonFile } = require('@nx/devkit');
const { PrismaClient } = require('./generated');
const { slugify } = require('@puq/names');
const { appendFile } = require('fs/promises');

const client = new PrismaClient();

async function seedCategories() {
  const categories = await readJsonFile('./data/categories.json');
  for (const c of categories) {
    try {
      const parent = await client.category.create({
        data: {
          name: c.category,
          slug: slugify(c.category),
        },
      });

      for (const d of c.departments) {
        try {
          await client.category.create({
            data: { name: d, slug: slugify(d), parentId: parent.id },
          });
        } catch (err) {
          await appendFile('./seed-errors.log', err.message);
        }
      }
    } catch (err) {
      await appendFile('./seed-errors.log', err.message);
    }
  }
}

async function seedCurrencies() {
  const currencies = await readJsonFile('./data/currency.json');
  for (const c of currencies) {
    try {
      await client.currency.create({
        data: {
          name: c.name,
          code: slugify(c.code),
        },
      });
    } catch (err) {
      await appendFile('./seed-errors.log', err.message);
    }
  }
}

async function seedPriceLevels() {
  const items = await readJsonFile('./data/price-levels.json');
  const currency = await client.currency.findFirst({
    where: { code: { equals: 'usd' } },
  });
  for (const i of items) {
    try {
      await client.priceLevel.create({
        data: {
          name: i.name,
          taxrate: i.taxrate,
          slug: slugify(i.name),
          notes: i.notes,
          currencyId: currency.id,
        },
      });
    } catch (err) {
      await appendFile('./seed-errors.log', err.message);
    }
  }
}
async function seed() {
  await seedCategories();
  await seedCurrencies();
  await seedPriceLevels();
}

seed();
