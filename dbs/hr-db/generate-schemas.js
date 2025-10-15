#!/usr/bin/env node

const { generateZodSchemas } = require('@puq/prisma-schema');
const { Prisma } = require('./generated');
const { writeFileSync } = require('fs');
const { execSync } = require('child_process');

const result = generateZodSchemas(Prisma.dmmf.datamodel);

writeFileSync('./src/lib/schema.ts', result);
execSync('npx prettier ./src/lib --write', { cwd: __dirname })
