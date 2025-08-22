import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  Tree,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const source = path.join(__dirname, options.type);

  const target = options.directory;
  const projectName = options.directory.split(/[\/\\]/).pop()!;
  const mp = readJsonFile('package.json');

  const projectFullName =
    (mp.name as string).split(/[\/]/).shift()! + '/' + projectName;
  const __names = names(projectName);

  updateJson(tree, 'tsconfig.json', (value) => {
    if (!value.references) {
      value.references = [];
    }

    const projectPath = `./${options.directory}`;

    if (
      value.references.find((e: { path: string }) => e.path === projectPath)
    ) {
      throw new Error(`${options.directory} project already exist!`);
    }

    value.references.push({ path: projectPath });

    return value;
  });

  generateFiles(tree, source, target, {
    mp,
    projectName,
    projectFullName,
    directory: options.directory,
    ...__names,
  });

  await formatFiles(tree);
}

export default projectGenerator;
