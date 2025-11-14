import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit';
import { NotFoundError } from '@puq/errors';
import { execSync } from 'child_process';
import { rm } from 'fs/promises';
import * as path from 'path';
import type { ResourcesGeneratorSchema } from './schema';

export async function resourcesGenerator(
  tree: Tree,
  options: ResourcesGeneratorSchema
) {
  const config = readProjectConfiguration(tree, options.project);
  const projectRoot = config.root;
  const source = path.join(__dirname, 'files');

  const target = path.join(projectRoot);
  const timestamp = new Date().getTime().toString();

  const scriptPath = path.join(
    projectRoot,
    `/tmp/generate-resources-${timestamp}.mjs`
  );

  const projectName = config.name;

  if (!projectName) throw new NotFoundError('config.name');

  const databaseProjectName = projectName.replace('api', 'db');

  await generateFiles(tree, source, target, {
    databaseProjectName,
    projectName,
    timestamp,
  });

  await formatFiles(tree);

  return async () => {
    try {
      await execSync(`node ${scriptPath}`, {
        stdio: 'inherit',
      });
    } finally {
      await rm(scriptPath, { maxRetries: 3 });
    }
  };
}

export default resourcesGenerator;
