/**
 * Check the name is a positive integer field
 * @param name
 * @returns
 */
export function isPositiveIntegerField(name: string) {
  // Matches common integer-related terms, usually for IDs, counts, or sizes.
  // The 'i' flag makes the match case-insensitive.
  // The '$' anchor ensures the match is at the end of the string for precision.
  return new RegExp(
    /(count|id|num|number|index|size|qty|quantity|rank|order|row|year|version)$/i
  ).test(name);
}
