import { pluralize } from '@puq/names';

/**
 * Defines the structure for a set of standardized RESTful API paths
 * generated for a resource.
 * @group Path
 */
export type ResourcePaths = {
  /**
   * The base path for a singular resource (e.g., 'user').
   */
  singularPath: string;

  /**
   * Path for a singular resource by ID (e.g., 'user/:id').
   */
  singularIdPath: string;

  /**
   * Path for a singular resource by a specific property (e.g., 'user/by/:property/:value').
   */
  singularByPath: string;

  /**
   * The base path for a plural resource (e.g., 'users').
   */
  pluralPath: string;

  /**
   * Path for a plural resource by a specific property (e.g., 'users/by/:property/:value').
   */
  pluralByPath: string;
};

/**
 * Generates a set of standardized RESTful API paths for a given singular resource name.
 *
 * This function creates paths for both singular and plural resources, including
 * paths with `:id` and `:property/:value` parameters for specific queries. It also
 * includes a fallback to ensure pluralization even for irregular nouns or nouns
 * that are already plural.
 *
 * @group Path
 * @param singularPath The singular, kebab-case name of the resource (e.g., 'user', 'category').
 * @returns An object containing the generated paths {@link ResourcePaths}.
 */
export function resourcePaths(singularPath: string): ResourcePaths {
  const singularIdPath = `${singularPath}/:id`;
  const singularByPath = `${singularPath}/:property/:value`;
  const pluralPath = pluralize(singularPath);
  const pluralByPath = `${pluralPath}/:property/:value`;

  const paths = {
    singularPath,
    singularIdPath,
    singularByPath,
    pluralPath,
    pluralByPath,
  };

  if (singularPath === pluralPath) {
    paths.pluralPath += 's';
    paths.pluralByPath += 's';
  }

  return paths;
}
