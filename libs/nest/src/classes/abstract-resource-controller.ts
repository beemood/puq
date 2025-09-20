import { NotImplementedException as NIE } from '@nestjs/common';

import type { Any } from '@puq/types';
import type { ResourceOperationName } from '../names/resource-operation-name.js';

export abstract class AbstractResourceController
  implements Record<ResourceOperationName, (...params: Any[]) => Any>
{
  findOne(...params: Any[]): Any {
    throw new NIE(`findOne is not implemented: ${params}`);
  }
  findOneBy(...params: Any[]): Any {
    throw new NIE(`findOneBy is not implemented: ${params}`);
  }
  findOneById(...params: Any[]): Any {
    throw new NIE(`findOneById is not implemented: ${params}`);
  }
  findMany(...params: Any[]): Any {
    throw new NIE(`findMany is not implemented: ${params}`);
  }
  findManyBy(...params: Any[]): Any {
    throw new NIE(`findManyBy is not implemented: ${params}`);
  }
  saveOne(...params: Any[]): Any {
    throw new NIE(`saveOne is not implemented: ${params}`);
  }
  saveMany(...params: Any[]): Any {
    throw new NIE(`saveMany is not implemented: ${params}`);
  }
  updateOne(...params: Any[]): Any {
    throw new NIE(`updateOne is not implemented: ${params}`);
  }
  updateOneBy(...params: Any[]): Any {
    throw new NIE(`updateOneBy is not implemented: ${params}`);
  }
  updateOneById(...params: Any[]): Any {
    throw new NIE(`updateOneById is not implemented: ${params}`);
  }
  updateMany(...params: Any[]): Any {
    throw new NIE(`updateMany is not implemented: ${params}`);
  }
  updateManyBy(...params: Any[]): Any {
    throw new NIE(`updateManyBy is not implemented: ${params}`);
  }
  deleteOne(...params: Any[]): Any {
    throw new NIE(`deleteOne is not implemented: ${params}`);
  }
  deleteOneBy(...params: Any[]): Any {
    throw new NIE(`deleteOneBy is not implemented: ${params}`);
  }
  deleteOneById(...params: Any[]): Any {
    throw new NIE(`deleteOneById is not implemented: ${params}`);
  }
  deleteMany(...params: Any[]): Any {
    throw new NIE(`deleteMany is not implemented: ${params}`);
  }
  deleteManyBy(...params: Any[]): Any {
    throw new NIE(`deleteManyBy is not implemented: ${params}`);
  }
}
