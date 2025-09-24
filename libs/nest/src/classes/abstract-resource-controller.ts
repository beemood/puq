import { NotImplementedException as NIE } from '@nestjs/common';
import type { ResourceOperationName } from '@puq/names';
import type { Any } from '@puq/types';
import type { PropertyValueParam } from '../types/property-value-param.js';

export abstract class AbstractResourceController
  implements Record<ResourceOperationName, (...params: Any[]) => Any>
{
  findOne(query: Any): Any {
    throw new NIE(`findOne is not implemented: ${query}`);
  }

  findOneBy(params: PropertyValueParam, query: Any): Any {
    throw new NIE(`findOneBy is not implemented: ${{ params, query }}`);
  }

  findOneById(id: number, query: Any): Any {
    throw new NIE(`findOneById is not implemented: ${{ id, query }}`);
  }

  findMany(query: Any): Any {
    throw new NIE(`findMany is not implemented: ${query}`);
  }

  findManyBy(params: PropertyValueParam, query: Any): Any {
    throw new NIE(`findManyBy is not implemented: ${{ params, query }}`);
  }

  saveOne(data: Any, query: Any): Any {
    throw new NIE(`saveOne is not implemented: ${{ data, query }}`);
  }

  saveMany(data: Any, query: Any): Any {
    throw new NIE(`saveMany is not implemented: ${{ data, query }}`);
  }

  updateOne(query: Any, data: Any): Any {
    throw new NIE(`updateOne is not implemented: ${{ query, data }}`);
  }

  updateOneBy(params: PropertyValueParam, query: Any, data: Any): Any {
    throw new NIE(`updateOneBy is not implemented: ${{ params, query, data }}`);
  }

  updateOneById(id: number, query: Any, data: Any): Any {
    throw new NIE(`updateOneById is not implemented: ${{ id, query, data }}`);
  }

  updateMany(query: Any, data: Any): Any {
    throw new NIE(`updateMany is not implemented: ${{ query, data }}`);
  }

  updateManyBy(params: PropertyValueParam, query: Any, data: Any): Any {
    throw new NIE(
      `updateManyBy is not implemented: ${{ params, query, data }}`
    );
  }

  deleteOne(query: Any): Any {
    throw new NIE(`deleteOne is not implemented: ${query}`);
  }

  deleteOneBy(params: PropertyValueParam, query: Any): Any {
    throw new NIE(`deleteOneBy is not implemented: ${{ params, query }}`);
  }
  deleteOneById(id: number, query: Any): Any {
    throw new NIE(`deleteOneById is not implemented: ${{ id, query }}`);
  }

  deleteMany(query: Any): Any {
    throw new NIE(`deleteMany is not implemented: ${query}`);
  }

  deleteManyBy(params: PropertyValueParam, query: Any): Any {
    throw new NIE(`deleteManyBy is not implemented: ${{ params, query }}`);
  }
}
