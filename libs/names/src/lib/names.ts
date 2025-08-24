import { normalizeName } from './normalize-name.js';

export type Names = {
  pascalCase: string;
  camelCase: string;
  snakeCase: string;
  kebabCase: string;
  screamingSnakeCase: string;
  titleCase: string;
  sentenceCase: string;
};

export function toKebabCase(name: string): string {
  return normalizeName(name);
}

export function toCamelCase(name: string): string {
  return normalizeName(name)
    .split('-')
    .map((e, index) => {
      if (index > 0) {
        return e[0].toUpperCase() + e.slice(1);
      }
      return e;
    })
    .join('');
}

export function toPascalCase(name: string) {
  return normalizeName(name)
    .split('-')
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join('');
}

export function toSnakeCase(name: string) {
  return normalizeName(name).replace(/\-/g, '_');
}

export function toScreamingSnakeCase(name: string) {
  return toSnakeCase(name).toUpperCase();
}

export function toSentenceCase(name: string) {
  name = name.replace(/\-/, ' ');
  return name[0].toUpperCase() + name.slice(1);
}

export function toTitleCase(name: string) {
  return normalizeName(name)
    .split('-')
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(' ');
}
export function names(name: string): Names {
  return {
    camelCase: toCamelCase(name),
    kebabCase: toKebabCase(name),
    pascalCase: toPascalCase(name),
    snakeCase: toSnakeCase(name),
    screamingSnakeCase: toScreamingSnakeCase(name),
    sentenceCase: toSentenceCase(name),
    titleCase: toTitleCase(name),
  };
}
