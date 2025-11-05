#!/usr/bin/env node

const { execSync } = require('child_process');
const { chdir } = require('process');

const datamodel = require('./node_modules/@puq/inventory-db').Prisma.dmmf
  .datamodel;

const models = datamodel.models;

chdir('../../');

for (const m of models) {
  execSync(`npx nx g @puq/plugin:resource ${m.name} @puq/inventory`);
}
