export type ProjectType = 'lib' | 'api' | 'plugin' | 'prisma';

export interface ProjectGeneratorSchema {
  directory: string;
  type: ProjectType;
}
