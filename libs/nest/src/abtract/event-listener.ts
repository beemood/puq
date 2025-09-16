/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotImplementedException } from '@nestjs/common';
import type { CrudOperationName } from '@puq/names';

export type EventPayload = {
  req: {
    uuid: string;
    timestamp: number;
    url: string;
    body?: any;
    query?: any;
    params?: any;
  };
  res?: {
    uuid: string;
    timestamp: number;
    body: any;
    status: number;
    errors?: any;
  };
};

export abstract class AbstractEventListener
  implements Record<CrudOperationName, (payload: EventPayload) => void>
{
  findOne(payload: EventPayload): void {
    throw new NotImplementedException('findOne is not implemented');
  }
  findOneBy(payload: EventPayload): void {
    throw new NotImplementedException('findOneBy is not implemented');
  }
  findOneById(payload: EventPayload): void {
    throw new NotImplementedException('findOneById is not implemented');
  }
  findMany(payload: EventPayload): void {
    throw new NotImplementedException('findMany is not implemented');
  }
  findManyBy(payload: EventPayload): void {
    throw new NotImplementedException('findManyBy is not implemented');
  }
  saveOne(payload: EventPayload): void {
    throw new NotImplementedException('saveOne is not implemented');
  }
  saveMany(payload: EventPayload): void {
    throw new NotImplementedException('saveMany is not implemented');
  }
  updateOne(payload: EventPayload): void {
    throw new NotImplementedException('updateOne is not implemented');
  }
  updateOneBy(payload: EventPayload): void {
    throw new NotImplementedException('updateOneBy is not implemented');
  }
  updateOneById(payload: EventPayload): void {
    throw new NotImplementedException('updateOneById is not implemented');
  }
  updateMany(payload: EventPayload): void {
    throw new NotImplementedException('updateMany is not implemented');
  }
  updateManyBy(payload: EventPayload): void {
    throw new NotImplementedException('updateManyBy is not implemented');
  }
  deleteOne(payload: EventPayload): void {
    throw new NotImplementedException('deleteOne is not implemented');
  }
  deleteOneBy(payload: EventPayload): void {
    throw new NotImplementedException('deleteOneBy is not implemented');
  }
  deleteOneById(payload: EventPayload): void {
    throw new NotImplementedException('deleteOneById is not implemented');
  }
  deleteMany(payload: EventPayload): void {
    throw new NotImplementedException('deleteMany is not implemented');
  }
  deleteManyBy(payload: EventPayload): void {
    throw new NotImplementedException('deleteManyBy is not implemented');
  }
}
