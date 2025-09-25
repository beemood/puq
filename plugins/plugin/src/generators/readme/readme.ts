import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  readJsonFile,
  readProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import type { ReadmeGeneratorSchema } from './schema';

/**
 * Generate README.md file for the project from its package.json
 *
 * @group Generator
 * @param tree
 * @param options
 */
export async function readmeGenerator(
  tree: Tree,
  options: ReadmeGeneratorSchema
) {
  const config = readProjectConfiguration(tree, options.project);

  const mp = await readJsonFile(path.join(config.root, 'package.json'));

  generateFiles(tree, path.join(__dirname, 'files'), config.root, { mp });
  await formatFiles(tree);
}

export default readmeGenerator;
