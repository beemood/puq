import type { Tree } from '@nx/devkit';
import { formatFiles, readProjectConfiguration } from '@nx/devkit';
import { execSync } from 'child_process';
import { rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { SchemasGeneratorSchema } from './schema';

export async function schemasGenerator(
  tree: Tree,
  options: SchemasGeneratorSchema
) {
  const c = readProjectConfiguration(tree, options.project);
  const projectRoot = c.root;

  const tempScript = [
    '#!/usr/bin/env node',
    '',
    "const { printSchemas } = require('@puq/prisma-schema');",
    "const { Prisma } = require('./generated');",
    "const { writeFileSync } = require('fs');",
    'const schemas = printSchemas(Prisma.dmmf.datamodel);',
    "writeFileSync('./src/lib/schema.ts', require('prettier').format(schemas));",
  ].join('\n');

  const tmpScriptName = `generate-schema-${Date.now()}.js`;
  const tmpScriptPath = join(projectRoot, tmpScriptName);

  try {
    writeFileSync(tmpScriptPath, tempScript);
    execSync(`node ./${tmpScriptName}`, { cwd: projectRoot });
  } finally {
    rmSync(tmpScriptPath, {});
  }
  await formatFiles(tree);
}

export default schemasGenerator;
