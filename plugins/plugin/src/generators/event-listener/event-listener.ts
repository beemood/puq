import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import type { EventListenerGeneratorSchema } from './schema';

export async function eventListenerGenerator(
  tree: Tree,
  options: EventListenerGeneratorSchema
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

export default eventListenerGenerator;
