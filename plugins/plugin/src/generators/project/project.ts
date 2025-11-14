import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  names,
  readJsonFile,
} from '@nx/devkit';
import { NotFoundError } from '@puq/errors';
import { join } from 'path';
import {
  addTsconfigReference,
  getOrganizationPrefix,
  getShortName,
} from './project-helper';
import type { ProjectGeneratorSchema } from './schema';

import type { Package } from '@puq/types';
/**
 * Generate project
 *
 * @group Generators
 * @param tree
 * @param options
 */
export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const { directory: projectDirectory, type } = options;
  const source = join(__dirname, type);
  const target = projectDirectory;
  const mp = await readJsonFile<Package>('package.json');

  const shortName = getShortName(projectDirectory);

  if (!mp.name) throw new NotFoundError('package.name');

  const organizationPrefix = getOrganizationPrefix(mp.name);
  const projectName = `${organizationPrefix}/${shortName}`;

  const __names = names(shortName);

  const typedoc = await readJsonFile<{ out: string }>('typedoc.json');

  const relativeTypeDocOut = typedoc.out;

  if (!relativeTypeDocOut) throw new NotFoundError('typedoc.out');

  const databaseProjectName = projectName.replace('api', 'db');

  const databaseName = __names.fileName.replace('api', 'db');

  const segments = options.directory
    .split(',')
    .map(() => '..')
    .join('/');

  const typedocOut = join('..', segments, relativeTypeDocOut, __names.fileName);

  generateFiles(tree, source, target, {
    ...__names,
    projectName,
    projectDirectory,
    databaseName: databaseName,
    typedocOut,
    databaseProjectName,
    mp,
  });

  await addTsconfigReference(tree, projectDirectory);

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree, true, projectDirectory, 'pnpm');
  };
}

export default projectGenerator;
