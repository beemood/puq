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
  const projectFullName = mp.name.split(/[\/]/).pop() + '/' + projectName;
  const __names = names(projectName);

  generateFiles(tree, source, target, {
    mp,
    projectName,
    projectFullName,
    directory: options.directory,
    ...__names,
  });

  updateJson(tree, 'tsconfig.json', (value) => {
    if (!value.references) {
      value.references = [];
    }
    value.references.push({
      path: `./${options.directory}`,
    });

    return value;
  });

  await formatFiles(tree);
}

export default projectGenerator;
