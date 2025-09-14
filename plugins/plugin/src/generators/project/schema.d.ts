export type ProjectType = 'lib' | 'api' | 'plugin';

export interface ProjectGeneratorSchema {
  directory: string;
  type: ProjectType;
}
