/**
 * Check the field name is a short string name
 * @param name
 * @returns
 */
export function isShortStringField(name: string) {
  // Matches common terms for short text fields, typically 255 characters or less.
  // The 'i' flag makes the match case-insensitive.
  // The '$' anchor ensures the match is at the end of the string for precision.
  return new RegExp(
    /(name|label|code|abbr|acronym|title|key|short|brief|ref|reference|url|uri|email|phone|zip|postcode|city|state|country)$/i
  ).test(name);
}
