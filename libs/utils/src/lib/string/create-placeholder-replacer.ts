export function createPlaceholderReplacer(name: string) {
  const placeholder = `{{{{${name}}}}}`;
  const replace = (value: string, replacement: string) =>
    value.replaceAll(placeholder, replacement);

  return {
    placeholder,
    replace,
  };
}
