export function inferResourceName(className: string): string {
  return className
    .replace(/Controller/i, '')
    .replace(/Service/i, '')
    .replace(/Module/i, '')
    .replace(/Query/i, '')
    .replace(/Public/i, '')
    .replace(/Private/i, '')
    .replace(/Secured/i, '')
    .replace(/Secure/i, '');
}
