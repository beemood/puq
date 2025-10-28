import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
} from '@nx/devkit';
import { writeFileSync } from 'fs';
import * as path from 'path';
import type { ResourceGeneratorSchema } from './schema';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const config = readProjectConfiguration(tree, options.project);

  const projectRootPath = config.root;

  const sourcePath = path.join(__dirname, 'files');

  const { Prisma } = require(options.project + '-db');

  const modelNames = Prisma.dmmf.datamodel.models.map((e: any) => e.name);

  const moduleImports = modelNames
    .map((e: string) => {
      const n = names(e);
      return `import { ${n.className}Module } from './${n.fileName}/${n.fileName}.module.js';`;
    })
    .join('\n');

  const moduleNames = modelNames
    .map((e: string) => {
      const n = names(e);
      return `${n.name}Module`;
    })
    .join(',');

  const resourceModules = `
  ${moduleImports}

  export const resourceModules = [
      ${moduleNames}
  ];`;

  const resourceRoot = path.join(projectRootPath, 'src', 'lib', 'resources');

  writeFileSync(
    path.join(resourceRoot, 'resource-modules.ts'),
    resourceModules
  );
  for (const modelName of modelNames) {
    const __names = names(modelName);
    const targetPath = path.join(resourceRoot, __names.fileName);
    generateFiles(tree, sourcePath, targetPath, {
      ...__names,
      projectName: options.project,
    });
  }

  await formatFiles(tree);
}

export default resourceGenerator;
