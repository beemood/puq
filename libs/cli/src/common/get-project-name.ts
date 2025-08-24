export function getProjectName(directory: string): string {
  return directory.split(/[\/\\]/).pop()!;
}

export function getFullProjectName(
  mainProjectName: string,
  projectName: string
) {
  return mainProjectName.split(/[\/]/).shift()! + '/' + projectName;
}
