import { ClassConstructor } from '@puq/types';
import {
  DateFilterDto,
  IntFilterDto,
  NumberFilterDto,
  StringFilterDto,
} from './dtos/filter-dtos.js';
import { Prop } from './prop.js';

export function StringFilterProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'object', target: () => StringFilterDto });
  };
}

export function NumberFilterProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'object', target: () => NumberFilterDto });
  };
}

export function IntFilterProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'object', target: () => IntFilterDto });
  };
}

export function DateFilterProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'object', target: () => DateFilterDto });
  };
}

export function WhereObjectProp(
  target: () => ClassConstructor
): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'object', target })(...args);
  };
}

export function WhereObjectListProp(
  target: () => ClassConstructor
): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'array', items: { type: 'object', target } })(...args);
  };
}

export function DistictProp(
  modelObject: Record<string, string>
): PropertyDecorator {
  return (...args) => {
    Prop({
      type: 'array',
      items: { type: 'string', isIn: Object.keys(modelObject) },
    })(...args);
  };
}

export function TakeProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'integer', minimum: 0, defaultValue: 20 })(...args);
  };
}

export function SkipProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'integer', minimum: 0, defaultValue: 0 })(...args);
  };
}

export function OrderByProp(): PropertyDecorator {
  return (...args) => {
    Prop({ type: 'string', isIn: ['asc', 'desc'] })(...args);
  };
}
