import { formatFiles, generateFiles, Tree, updateJson } from '@nx/devkit';
import * as path from 'path';
import { getProjectName } from '../../common/get-project-name';
import { TypedocGeneratorSchema } from './schema';

export async function typedocGenerator(
  tree: Tree,
  options: TypedocGeneratorSchema
) {
  const projectName = getProjectName(options.directory);

  updateJson(tree, path.join(options.directory, 'package.json'), (value) => {
    value.nx.targets.doc = {
      executor: 'nx:run-commands',
      options: {
        command: 'npx typedoc',
        cwd: '{projectRoot}',
      },
    };
    return value;
  });

  generateFiles(tree, path.join(__dirname, 'files'), options.directory, {
    projectName,
    directory: options.directory,
  });

  await formatFiles(tree);
}

export default typedocGenerator;
