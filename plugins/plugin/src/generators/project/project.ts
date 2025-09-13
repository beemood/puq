import { formatFiles, Tree } from '@nx/devkit';
import { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {

  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  console.log('Working');
  await formatFiles(tree);
}

export default projectGenerator;
