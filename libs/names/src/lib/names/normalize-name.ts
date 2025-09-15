import { trim } from './trim.js';

export const VALID_NAME_EXP = () => /^[a-zA-Z\-_]{1,}[a-zA-Z\-_\s]{1,}$/;
export const HAS_UPPER_CASE_EXP = () => /[A-Z]{1,}/;
export const HAS_LOWER_CASE_EXP = () => /[a-z]{1,}/;
export const HAS_UNDER_SCORE_EXP = () => /[_]{1,}/;
export const HAS_DASH_EXP = () => /[-]{1,}/;

export class InvalidNameError extends Error {
  constructor(name: string) {
    super(`Name must match ${VALID_NAME_EXP().source} but found ${name}`);
  }
}

export function isValidName(name: string) {
  return VALID_NAME_EXP().test(name);
}

export function hasUpperCase(name: string) {
  return HAS_UPPER_CASE_EXP().test(name);
}

export function hasLowerCase(name: string) {
  return HAS_LOWER_CASE_EXP().test(name);
}

export function hasUnderScore(name: string) {
  return HAS_UNDER_SCORE_EXP().test(name);
}

export function hasDash(name: string) {
  return HAS_DASH_EXP().test(name);
}

export function hasUpperCaseAndLowerCase(name: string) {
  return [hasUpperCase, hasLowerCase]
    .map((f) => f(name))
    .every((v) => v == true);
}

export function upperCaseFirst(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}

export function lowerCaseFirst(name: string) {
  return name[0].toLowerCase() + name.slice(1);
}


export function normalizeName(name: string) {
  name = trim(name);
  if (!isValidName(name)) {
    throw new InvalidNameError(name);
  }

  if (hasUpperCaseAndLowerCase(name)) {
    name = name
      .split('')
      .map((v, i) => {
        if (i > 0) {
          if (/^[A-Z]$/.test(v)) {
            return '-' + v;
          }
        }
        return v;
      })
      .join('');
  }
  
  name = name.replace(/[\s-_]{1,}/g, ' ');

  name = name.toLowerCase();

  return name;
}
