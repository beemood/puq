import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  workspaceRoot,
} from '@nx/devkit';
import { execSync } from 'child_process';
import { rm } from 'fs/promises';
import * as path from 'path';
import type { ResourcesGeneratorSchema } from './schema';

export async function resourcesGenerator(
  tree: Tree,
  options: ResourcesGeneratorSchema
) {
  const config = readProjectConfiguration(tree, options.project);

  const source = path.join(__dirname, 'files');
  const timestamp = new Date().getTime().toString();

  const scriptPath = `tmp/generate-resources-${timestamp}.mjs`;

  await generateFiles(tree, source, workspaceRoot, {
    projectName: config.name,
  });

  await formatFiles(tree);

  return async () => {
    await execSync(scriptPath, { stdio: 'inherit', cwd: workspaceRoot });
    await rm(scriptPath, { maxRetries: 3 });
  };
}

export default resourcesGenerator;
