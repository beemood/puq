import { Prop } from './prop.js';

export function SelectProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'boolean', transform: true })(...args);
  };
}
