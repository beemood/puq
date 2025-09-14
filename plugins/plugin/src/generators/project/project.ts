import { formatFiles, generateFiles, names, readJsonFile, Tree, updateJson } from '@nx/devkit';
import { join } from 'path';
import { ProjectGeneratorSchema } from './schema';


async function addTsconfigReference(tree: Tree, projectDirectory: string) {
  await updateJson(tree, 'tsconfig.json', (value) => {
    if (value.references == undefined) {
      value.references = []
    }

    {
      const references = value.references;

      const path = `./${projectDirectory}`;

      if (references.find((e: { path: string; }) => e.path === path)) {
        return value
      } else {
        references.push({ path })
      }

      return value;
    }
  })
}

function getOrganizationPrefix(projectName: string) {
  return projectName.split(/\//).shift() as string
}

function getShortName(projectDirectory: string) {
  return projectDirectory.split(/[/\\]{1,}/).pop() as string;
}

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {

  const { directory: projectDirectory, type } = options
  const source = join(__dirname, type);
  const target = projectDirectory
  const mp = await readJsonFile<{ name: string, version: string, homepage: string, author: any, funding: any }>('package.json')

  const shortName = getShortName(projectDirectory)
  const organizationPrefix = getOrganizationPrefix(mp.name);

  const projectName = `${organizationPrefix}/${shortName}`

  const __names = names(shortName);

  generateFiles(tree, source, target, {
    ...__names,
    projectName,
    projectDirectory,
    mp
  });

  await addTsconfigReference(tree, projectDirectory)

  await formatFiles(tree);


}

export default projectGenerator;
