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

  const root = config.root;

  const __names = names(options.name);

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    path.join(root, 'src', 'lib', 'resources'),
    {
      ...__names,
      projectName: options.project,
    }
  );

  await formatFiles(tree);
}

export default resourceGenerator;
