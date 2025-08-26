export function normalizeName(name: string): string {
  if (/^[A-Z.-\s_]{1,}$/.test(name)) {
    name = name.toLowerCase();
  }

  name = name
    .trim()
    .split('')
    .map((e, index) => {
      if (index > 0 && /[A-Z]/.test(e)) {
        return `-${e}`;
      }
      return e;
    })
    .join('')
    .replace(/\s{1,}|\t{1,}|\n{1,}/g, '-')
    .replace(/\.{1,}|_{1,}|\|{1,}/g, '-')
    .replace(/-{2,}/g, '-')
    .toLowerCase();

  if (name == '') throw new Error(`name, <${name}>, is empty!`);

  return name;
}
