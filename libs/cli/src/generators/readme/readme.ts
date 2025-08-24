import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import { readJsonFile } from '@puq/fs';
import * as path from 'path';

import {
  getFullProjectName,
  getProjectName,
} from '../../common/get-project-name';
import { ReadmeGeneratorSchema } from './schema';

export async function readmeGenerator(
  tree: Tree,
  options: ReadmeGeneratorSchema
) {
  const projectName = getProjectName(options.directory);
  const mp = await readJsonFile('package.json');
  const projectFullName = getFullProjectName(mp.name, projectName);

  const target = path.join(options.directory);

  generateFiles(tree, path.join(__dirname, 'files'), target, {
    mp,
    projectName,
    projectFullName,
    directory: options.directory,
    ...names(projectName),
  });
  await formatFiles(tree);
}

export default readmeGenerator;
