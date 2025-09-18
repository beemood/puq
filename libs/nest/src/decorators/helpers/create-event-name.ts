export function createEventName(resouceName: string, handlerName: string) {
  return `${resouceName}.${handlerName}`;
}
