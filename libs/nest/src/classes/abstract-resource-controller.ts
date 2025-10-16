import { NotImplementedException as NIE } from '@nestjs/common';
import type { ResourceOperationName } from '@puq/names';
import type { Any } from '@puq/types';
import type { PropertyValueParam } from '../types/property-value-param.js';

export abstract class AbstractResourceController
  implements Record<ResourceOperationName, (...params: Any[]) => Any>
{
  /**
   *
   * 🤣 Save a single entity to the database and projection
   * @param data Request body
   * @param projection Options such as select, omit fields, and include relations
   */
  saveOne(data: Any, projection: Any): Any {
    throw new NIE(`saveOne is not implemented: ${{ data, projection }}`);
  }

  /**
   * 🤣 Find a single entity by id.
   * @param id Unqiue id
   * @param projection Options such as select, omit fields, and include relations
   */
  findOneById(id: number, projection: Any): Any {
    throw new NIE(`findOneById is not implemented: ${{ id, projection }}`);
  }

  /**
   * 🤣 Find items by advance query filters, orders, and projections
   * @param query Advance query options
   * @param projection Options such as select, omit fields, and include relations
   */
  findMany(query: Any, projection: Any): Any {
    throw new NIE(`findMany is not implemented: ${{ query, projection }}`);
  }

  /**
   * 🤣 Update an entity by id and projection the result
   * @param id Entity id
   * @param projection Options such as select, omit fields, and include relations
   * @param data Request body
   */
  updateOneById(id: number, projection: Any, data: Any): Any {
    throw new NIE(
      `updateOneById is not implemented: ${{ id, projection, data }}`
    );
  }

  /**
   * 🤣 Delete a single entity by id and projection
   * @param id
   * @param projection Options such as select, omit fields, and include relations
   */
  deleteOneById(id: number, projection: Any): Any {
    throw new NIE(`deleteOneById is not implemented: ${{ id, projection }}`);
  }

  /**
   * 😱 Find a single entity by advance query and projection
   * @param query Advance query options
   * @param projection Options such as select, omit fields, and include relations
   */
  findOne(query: Any, projection: Any): Any {
    throw new NIE(`findOne is not implemented: ${{ query, projection }}`);
  }

  /**
   * 😱 Find a single entity by exact property and value match
   * @deprecated Do not implement this method, use the findOne or findMany instead.
   * @param params Property and value parameters
   * @param projection Options such as select, omit fields, and include relations
   */
  findOneBy(params: PropertyValueParam, projection: Any): Any {
    throw new NIE(`findOneBy is not implemented: ${{ params, projection }}`);
  }

  /**
   * 😱 Find items by exact property and value match and projection
   * @deprecated Do not implement this method, use findMany instead
   * @param params
   * @param projection Options such as select, omit fields, and include relations
   */
  findManyBy(params: PropertyValueParam, projection: Any): Any {
    throw new NIE(`findManyBy is not implemented: ${{ params, projection }}`);
  }

  /**
   * 😱 Save items to the database and projection
   * @param data Request body
   * @param projection Options such as select, omit fields, and include relations
   */
  saveMany(data: Any, projection: Any): Any {
    throw new NIE(`saveMany is not implemented: ${{ data, projection }}`);
  }

  /**
   * 😱 Udpate a single entity in database by the advance query and projection
   * @deprecated Not recommended. user `updateById` operation instead
   * @param query Advance query options
   * @param projection Options such as select, omit fields, and include relations
   * @param data Request body
   */
  updateOne(query: Any, projection: Any, data: Any): Any {
    throw new NIE(
      `updateOne is not implemented: ${{ query, projection, data }}`
    );
  }

  /**
   * 😱 Update an entity by exact property and value
   * Not recommended use update by id operation instead
   * @param params
   * @param projection
   * @param data Request body
   */
  updateOneBy(params: PropertyValueParam, projection: Any, data: Any): Any {
    throw new NIE(
      `updateOneBy is not implemented: ${{ params, projection, data }}`
    );
  }

  /**
   * 😱 Update many entities by advance query and projections
   * @param query query and options
   * @param projection Options such as select, omit fields, and include relations
   * @param data Request body
   */
  updateMany(query: Any, projection: Any, data: Any): Any {
    throw new NIE(
      `updateMany is not implemented: ${{ query, projection, data }}`
    );
  }

  /**
   * Update many entities by exact property and value
   * @param params
   * @param query query and options
   * @param projection Options such as select, omit fields, and include relations
   * @param data Request body
   */
  updateManyBy(
    params: PropertyValueParam,
    query: Any,
    projection: Any,
    data: Any
  ): Any {
    throw new NIE(
      `updateManyBy is not implemented: ${{ params, query, projection, data }}`
    );
  }

  /**
   * Delete a single entity by advance query and projection
   * @param query query and options
   * @param projection Options such as select, omit fields, and include relations
   */
  deleteOne(query: Any, projection: Any): Any {
    throw new NIE(`deleteOne is not implemented: ${{ query, projection }}`);
  }

  /**
   * Delete a single entity by exact property and value match and projection
   * @param params
   * @param query query and options
   * @param projection Options such as select, omit fields, and include relations
   */
  deleteOneBy(params: PropertyValueParam, query: Any, projection: Any): Any {
    throw new NIE(
      `deleteOneBy is not implemented: ${{ params, query, projection }}`
    );
  }
  /**
   * Delete many entities by advance query and projection
   * @deprecated use `deleteOneById` operation whenever possible
   * @param query query and options
   * @param projection Options such as select, omit fields, and include relationsF
   */
  deleteMany(query: Any, projection: Any): Any {
    throw new NIE(`deleteMany is not implemented: ${{ query, projection }}`);
  }

  /**
   * Delete many entities by exact property and value match
   * @deprecated use `deleteOneById` operation whenever possible
   * @param params
   * @param query Advance query options
   * @param projection Options such as select, omit fields, and include relations
   */
  deleteManyBy(params: PropertyValueParam, query: Any, projection: Any): Any {
    throw new NIE(
      `deleteManyBy is not implemented: ${{ params, query, projection }}`
    );
  }
}
