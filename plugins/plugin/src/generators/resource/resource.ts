import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import type { ResourceGeneratorSchema } from './schema';

/**
 * Generate rest api resoure module for a database model
 *
 * @param tree
 * @param options
 */
export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const config = readProjectConfiguration(tree, options.project);
  const projectRootPath = config.root;
  const sourcePath = path.join(__dirname, 'files');
  const targetPath = path.join(projectRootPath, 'src', 'lib', 'resources');
  const __names = names(options.resourceName);

  generateFiles(tree, sourcePath, targetPath, {
    ...__names,
    projectName: options.project,
  });
  await formatFiles(tree);
}

export default resourceGenerator;
