import type { Field, Model } from '../dmmf.js';

export function hasWhereMark(field: Field) {
  return field.documentation?.includes('@where');
}

export function hasSelectMark(field: Field): boolean {
  return !!field.documentation?.includes('@select');
}

export function hasIncludeMark(field: Field): boolean {
  return !!field.documentation?.includes('@include');
}

export function hasOrderMark(field: Field): boolean {
  return !!field.documentation?.includes('@order');
}

export function hasParentMark(model: Model) {
  return !!model.documentation?.includes('@parent');
}

export function hasChildMark(model: Model) {
  return !!model.documentation?.includes('@child');
}

export function hasInputMark(model: Model) {
  return !!model.documentation?.includes('@input');
}

export function hasMapMark(model: Model) {
  return !!model.documentation?.includes('@map');
}
