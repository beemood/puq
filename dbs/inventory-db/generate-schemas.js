#!/usr/bin/env node

const { generateZodSchemas } = require('@puq/prisma-schema');
const { Prisma } = require('./generated');
const { writeFileSync } = require('fs');

const result = generateZodSchemas(Prisma.dmmf.datamodel);

writeFileSync('./src/lib/schema.ts', result);
