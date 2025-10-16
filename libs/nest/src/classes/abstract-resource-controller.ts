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
   * @param body
   * @param projection
   */
  saveOne(body: Any, projection: Any): Any {
    throw new NIE(`saveOne is not implemented: ${{ body, projection }}`);
  }

  /**
   * 🤣 Find a single entity by id
   * @param id Unqiue id
   * @param query query and projection options
   */
  findOneById(id: number, projection: Any): Any {
    throw new NIE(`findOneById is not implemented: ${{ id, projection }}`);
  }

  /**
   * 🤣 Find items by advance query filters, orders, and projections
   * @param query query and projection options
   */
  findMany(query: Any): Any {
    throw new NIE(`findMany is not implemented: ${query}`);
  }

  /**
   * 🤣 Update an entity by id and projection the result
   * @param id
   * @param projection
   * @param body
   */
  updateOneById(id: number, projection: Any, body: Any): Any {
    throw new NIE(
      `updateOneById is not implemented: ${{ id, projection, body }}`
    );
  }

  /**
   * 🤣 Delete a single entity by id and projection
   * @param id
   * @param projection
   */
  deleteOneById(id: number, projection: Any): Any {
    throw new NIE(`deleteOneById is not implemented: ${{ id, projection }}`);
  }

  /**
   * 😱 Find a single entity by advance query and projection
   * @param query query and projection options
   */
  findOne(query: Any): Any {
    throw new NIE(`findOne is not implemented: ${query}`);
  }

  /**
   * 😱 Find a single entity by exact property and value match
   * @deprecated Do not implement this method, use the findOne or findMany instead.
   * @param params
   * @param query query and projection options
   */
  findOneBy(params: PropertyValueParam, projection: Any): Any {
    throw new NIE(`findOneBy is not implemented: ${{ params, projection }}`);
  }

  /**
   * 😱 Find items by exact property and value match and projection
   * @deprecated Do not implement this method, use findMany instead
   * @param params
   * @param projection
   */
  findManyBy(params: PropertyValueParam, projection: Any): Any {
    throw new NIE(`findManyBy is not implemented: ${{ params, projection }}`);
  }

  /**
   * 😱 Save items to the database and projection
   * @param body
   * @param projection
   */
  saveMany(body: Any, projection: Any): Any {
    throw new NIE(`saveMany is not implemented: ${{ body, projection }}`);
  }

  /**
   * 😱 Udpate a single entity in database by the advance query and projection
   * @deprecated Not recommended. user `updateById` operation instead
   * @param query query and projection options
   * @param body
   */
  updateOne(query: Any, body: Any): Any {
    throw new NIE(`updateOne is not implemented: ${{ query, body }}`);
  }

  /**
   * 😱 Update an entity by exact property and value
   * Not recommended use update by id operation instead
   * @param params
   * @param projection
   * @param body
   */
  updateOneBy(params: PropertyValueParam, projection: Any, body: Any): Any {
    throw new NIE(
      `updateOneBy is not implemented: ${{ params, projection, body }}`
    );
  }

  /**
   * 😱 Update many entities by advance query and projections
   * @param query query and projection options
   * @param body
   */
  updateMany(query: Any, body: Any): Any {
    throw new NIE(`updateMany is not implemented: ${{ query, body }}`);
  }

  /**
   * Update many entities by exact property and value
   * @param params
   * @param query query and projection options
   * @param body
   */
  updateManyBy(params: PropertyValueParam, query: Any, body: Any): Any {
    throw new NIE(
      `updateManyBy is not implemented: ${{ params, query, body }}`
    );
  }

  /**
   * Delete a single entity by advance query and projection
   * @param query query and projection options
   */
  deleteOne(query: Any): Any {
    throw new NIE(`deleteOne is not implemented: ${query}`);
  }

  /**
   * Delete a single entity by exact property and value match and projection
   * @param params
   * @param query query and projection options
   */
  deleteOneBy(params: PropertyValueParam, query: Any): Any {
    throw new NIE(`deleteOneBy is not implemented: ${{ params, query }}`);
  }
  /**
   * Delete many entities by advance query and projection
   * @deprecated use `deleteOneById` operation whenever possible
   * @param query query and projection options
   */
  deleteMany(query: Any): Any {
    throw new NIE(`deleteMany is not implemented: ${query}`);
  }

  /**
   * Delete many entities by exact property and value match
   * @deprecated use `deleteOneById` operation whenever possible
   * @param params
   * @param query query and projection options
   */
  deleteManyBy(params: PropertyValueParam, query: Any): Any {
    throw new NIE(`deleteManyBy is not implemented: ${{ params, query }}`);
  }
}
