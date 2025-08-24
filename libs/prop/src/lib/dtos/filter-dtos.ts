import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringMode,
} from '@puq/types';
import { Dto, Prop } from '../prop.js';

@Dto()
export class IntFilterDto implements IntFilter {
  @Prop({ type: 'integer' }) equals?: number;
  @Prop({ type: 'array', items: { type: 'integer' } }) in?: number[];
  @Prop({ type: 'array', items: { type: 'integer' } }) notIn?: number[];
  @Prop({ type: 'integer' }) lt?: number;
  @Prop({ type: 'integer' }) lte?: number;
  @Prop({ type: 'integer' }) gt?: number;
  @Prop({ type: 'integer' }) gte?: number;
  @Prop({ type: 'object', target: () => IntFilterDto }) not?: IntFilter;
}

@Dto()
export class NumberFilterDto implements IntFilter {
  @Prop({ type: 'number' }) equals?: number;
  @Prop({ type: 'array', items: { type: 'number' } }) in?: number[];
  @Prop({ type: 'array', items: { type: 'number' } }) notIn?: number[];
  @Prop({ type: 'number' }) lt?: number;
  @Prop({ type: 'number' }) lte?: number;
  @Prop({ type: 'number' }) gt?: number;
  @Prop({ type: 'number' }) gte?: number;
  @Prop({ type: 'object', target: () => NumberFilterDto }) not?: IntFilter;
}

@Dto()
export class DateFilterDto implements DateTimeFilter {
  @Prop({ type: 'date' }) equals?: string;
  @Prop({ type: 'date' }) in?: string[];
  @Prop({ type: 'date' }) notIn?: string[];
  @Prop({ type: 'date' }) lt?: string;
  @Prop({ type: 'date' }) lte?: string;
  @Prop({ type: 'date' }) gt?: string;
  @Prop({ type: 'date' }) gte?: string;
  @Prop({ type: 'object', target: () => DateFilterDto }) not?: DateFilterDto;
}

@Dto()
export class StringFilterDto implements StringFilter {
  @Prop({ type: 'string' }) equals?: string;
  @Prop({ type: 'array', items: { type: 'string' } }) in?: string[];
  @Prop({ type: 'array', items: { type: 'string' } }) notIn?: string[];
  @Prop({ type: 'string' }) lt?: string;
  @Prop({ type: 'string' }) lte?: string;
  @Prop({ type: 'string' }) gt?: string;
  @Prop({ type: 'string' }) gte?: string;
  @Prop({ type: 'string' }) contains?: string;
  @Prop({ type: 'string' }) startsWith?: string;
  @Prop({ type: 'string' }) endsWith?: string;
  @Prop({ type: 'string', isIn: ['default', 'insensitive'] }) mode?: StringMode;
  @Prop({ type: 'object', target: () => StringFilterDto })
  not?: StringFilterDto;
}
