import { normalizeName } from './normalize-name.js';

export function pluralize(name: string): string {
  name = normalizeName(name);

  const irregularPlurals: Record<string, string> = {
    man: 'men',
    woman: 'women',
    child: 'children',
    tooth: 'teeth',
    foot: 'feet',
    mouse: 'mice',
    goose: 'geese',
    person: 'people',
    ox: 'oxen',
    sheep: 'sheep',
    deer: 'deer',
    fish: 'fish',
    series: 'series',
    species: 'species',
    datum: 'data',
    medium: 'media',
    criterion: 'criteria',
    phenomenon: 'phenomena',
  };

  // irregular names
  if (irregularPlurals[name]) {
    name = irregularPlurals[name];
    // ies
  } else if (/[^aeiou]y$/.test(name)) {
    name = name.slice(0, -1) + 'ies';
  } else if (/(s|x|z|ch|sh)$/.test(name)) {
    name = name + 'es';
  } else if (/(hero|potato|tomato|echo)$/.test(name)) {
    name = name + 'es';
    // Replace the 'f' or 'fe' with 'v' and add 'es'.
  } else if (/(fe?)$/.test(name)) {
    name = name.replace(/fe?$/, 'ves');
  } else {
    name = name + 's';
  }

  return name;
}
