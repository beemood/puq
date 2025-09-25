/**
 * Creates a utility for replacing a specific placeholder string.
 * This is useful for building text templates where the placeholder name is dynamic.
 *
 * @group Strings
 * @param name The name of the placeholder (e.g., 'user.name').
 * @returns An object containing the generated placeholder string and a replacement function.
 */
export function createPlaceholderReplacer(name: string) {
  const placeholder = `{{{{${name}}}}}`;
  const replace = (value: string, replacement: string) =>
    value.replaceAll(placeholder, replacement);

  return {
    placeholder,
    replace,
  };
}
