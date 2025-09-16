import { pluralize } from '@puq/names';

export function resourcePaths(singularPath: string) {
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
