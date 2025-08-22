export type ProjectType = 'lib' | 'api' | 'prisma';

export interface ProjectGeneratorSchema {
  directory: string;
  type: ProjectType;
}
