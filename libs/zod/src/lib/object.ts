import z from 'zod';
import { id } from './number.js';
import { DateTimeFilter, IntFilter } from './prisma.js';

export const Id = {
  id: id,
};

export const Timestamp = {
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  deletedAt: z.iso.datetime(),
};

export const Base = {
  ...Id,
  ...Timestamp,
};

export const WhereId = { id: IntFilter };

export const WhereTimestamp = {
  createdAt: DateTimeFilter,
  updatedAt: DateTimeFilter,
  deletedAt: DateTimeFilter,
};

export const BaseWhere = {
  ...WhereId,
  ...WhereTimestamp,
};
