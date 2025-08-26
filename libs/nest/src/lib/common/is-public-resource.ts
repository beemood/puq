export function isPublicResource(name: string): boolean {
  return new RegExp(/public|open/i).test(name);
}
