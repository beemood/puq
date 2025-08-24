/**
 * Convert file path into file name (without file extention)
 * @param filePath file path
 * @returns file name without extention
 */
export function fileName(filePath: string) {
  return filePath
    .split(/[\/\\]{1,}/)
    .pop()!
    .split('.')
    .slice(0, -1)
    .join('.');
}
