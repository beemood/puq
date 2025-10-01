#!/usr/bin/env node
const { generateZodSchemaFiles } = require('@puq/prisma-schema');
const { Prisma } = require('./generated');

generateZodSchemaFiles(Prisma.dmmf.datamodel, 'src/lib');
