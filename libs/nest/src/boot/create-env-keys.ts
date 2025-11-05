import { names } from '@puq/names';

export type EnvKeys = {
  name: string;
  description: string;
  prefix: string;
  port: string;
  dbUrl: string;
};

export function createEnvKeys(appName: string): EnvKeys {
  const namePrefix = names(appName).screamingSnake;
  return {
    name: `${namePrefix}_NAME`,
    description: `${namePrefix}_DESCRIPTION`,
    port: `${namePrefix}_PORT`,
    prefix: `${namePrefix}_PREFIX`,
    dbUrl: `${namePrefix}_DB_URL`,
  };
}
