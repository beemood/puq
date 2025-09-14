import { formatFiles, generateFiles, names, readJsonFile, Tree, workspaceRoot } from '@nx/devkit';
import { join } from 'path';
import { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {

  const { directory: projectDirectory, type } = options
  const source = join(__dirname, type);
  const target = join(workspaceRoot, projectDirectory)
  const mp = await readJsonFile<{ name: string, version: string, homepage: string, author: any, funding: any }>('package.json')

  const shortName = projectDirectory.split(/[/\\]{1,}/).pop()!;
  const organizationPrefix = mp.name.split(/\//).shift()!;
  const projectName = `${organizationPrefix}/${shortName}`

  const __names = names(shortName);

  generateFiles(tree, source, target, {
    __names,
    projectName,
    projectDirectory,
    
  });

  await formatFiles(tree);
}

export default projectGenerator;
