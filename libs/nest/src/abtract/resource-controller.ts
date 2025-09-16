/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotImplementedException } from '@nestjs/common';
import { CrudOperationName } from '@puq/names';

export abstract class AbstractResourceController
  implements Record<CrudOperationName, (...params: any[]) => any>
{
  findOne(...params: any[]) {
    throw new NotImplementedException(`findOne is not implemented`);
  }
  findOneBy(...params: any[]) {
    throw new NotImplementedException(`findOneBy is not implemented`);
  }
  findOneById(...params: any[]) {
    throw new NotImplementedException(`findOneById is not implemented`);
  }
  findMany(...params: any[]) {
    throw new NotImplementedException(`findMany is not implemented`);
  }
  findManyBy(...params: any[]) {
    throw new NotImplementedException(`findManyBy is not implemented`);
  }
  saveOne(...params: any[]) {
    throw new NotImplementedException(`saveOne is not implemented`);
  }
  saveMany(...params: any[]) {
    throw new NotImplementedException(`saveMany is not implemented`);
  }
  updateOne(...params: any[]) {
    throw new NotImplementedException(`updateOne is not implemented`);
  }
  updateOneBy(...params: any[]) {
    throw new NotImplementedException(`updateOneBy is not implemented`);
  }
  updateOneById(...params: any[]) {
    throw new NotImplementedException(`updateOneById is not implemented`);
  }
  updateMany(...params: any[]) {
    throw new NotImplementedException(`updateMany is not implemented`);
  }
  updateManyBy(...params: any[]) {
    throw new NotImplementedException(`updateManyBy is not implemented`);
  }
  deleteOne(...params: any[]) {
    throw new NotImplementedException(`deleteOne is not implemented`);
  }
  deleteOneBy(...params: any[]) {
    throw new NotImplementedException(`deleteOneBy is not implemented`);
  }
  deleteOneById(...params: any[]) {
    throw new NotImplementedException(`deleteOneById is not implemented`);
  }
  deleteMany(...params: any[]) {
    throw new NotImplementedException(`deleteMany is not implemented`);
  }
  deleteManyBy(...params: any[]) {
    throw new NotImplementedException(`deleteManyBy is not implemented`);
  }
}
