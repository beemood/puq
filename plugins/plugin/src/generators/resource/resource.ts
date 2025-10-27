import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import type { ResourceGeneratorSchema } from './schema';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const config = readProjectConfiguration(tree, options.project);

  const projectRootPath = config.root;

  const sourcePath = path.join(__dirname, 'files');

  const { Prisma } = require(path.join(projectRootPath, 'generated'));

  const modelNames = Prisma.dmmf.datamodel.models.map((e: any) => e.name);

  for (const modelName of modelNames) {
    const __names = names(modelName);
    const targetPath = path.join(
      projectRootPath,
      'src',
      'lib',
      'resources',
      __names.fileName
    );
    generateFiles(tree, sourcePath, targetPath, {
      ...__names,
      projectName: options.project,
    });
  }

  await formatFiles(tree);
}

export default resourceGenerator;
