#!/usr/bin/env node

const { printSchemas } = require('@puq/prisma-schema');
const { Prisma } = require('./generated');
const { writeFileSync } = require('fs');

const schemas = printSchemas(Prisma.dmmf.datamodel);

writeFileSync('./src/lib/schema.ts', require('prettier').format(schemas));
