import { Tree, updateJson } from '@nx/devkit';

export function createTsconfigReferenceUpdater(projectDirectory: string) {
  return (tsconfigObject: any) => {
    if (tsconfigObject.references == undefined) {
      tsconfigObject.references = [];
    }

    {
      const references = tsconfigObject.references;

      const path = `./${projectDirectory}`;

      if (references.find((e: { path: string }) => e.path === path)) {
        return tsconfigObject;
      } else {
        references.push({ path });
      }

      return tsconfigObject;
    }
  };
}

export async function addTsconfigReference(
  tree: Tree,
  projectDirectory: string
) {
  await updateJson(
    tree,
    'tsconfig.json',
    createTsconfigReferenceUpdater(projectDirectory)
  );
}

export function getOrganizationPrefix(projectName: string) {
  return projectName.split(/\//).shift() as string;
}

export function getShortName(projectDirectory: string) {
  return projectDirectory.split(/[/\\]{1,}/).pop() as string;
}
