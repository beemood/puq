export type ProjectType = 'lib' | 'api' | 'plugin' | 'prisma';

/**
 * @group Generators
 */
export interface ProjectGeneratorSchema {
  /**
   * Project directory such as `libs/project-name`
   */
  directory: string;

  /**
   * Project type such as `lib`, `api`, `prisma`
   */
  type: ProjectType;
}
