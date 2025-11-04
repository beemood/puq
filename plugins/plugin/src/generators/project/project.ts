/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Tree } from '@nx/devkit';
import { formatFiles, generateFiles, names, readJsonFile } from '@nx/devkit';
import { join } from 'path';
import {
  addTsconfigReference,
  getOrganizationPrefix,
  getShortName,
} from './project-helper';
import type { ProjectGeneratorSchema } from './schema';

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
  const mp = await readJsonFile<{
    name: string;
    version: string;
    homepage: string;
    author: any;
    funding: any;
  }>('package.json');

  const shortName = getShortName(projectDirectory);
  const organizationPrefix = getOrganizationPrefix(mp.name);

  const projectName = `${organizationPrefix}/${shortName}`;

  const __names = names(shortName);

  const projectNames = names(shortName);
  const DATABASE_URL = projectNames.constantName + '_URL';

  generateFiles(tree, source, target, {
    ...__names,
    DATABASE_URL,
    projectName,
    projectDirectory,
    mp,
  });

  await addTsconfigReference(tree, projectDirectory);

  await formatFiles(tree);
}

export default projectGenerator;
