import { Delete, Get, Post, Put } from '@nestjs/common';
import {
  CrudOperationName,
  extractResourceName,
  InvalidResourceOperationNameError,
  isCrudOperationName,
  names,
} from '@puq/names';
import { ApiOperation } from './api-operation.js';
import { resourcePaths } from './resource-paths.js';

/**
 * A method decorator that automatically configures an HTTP endpoint
 * for a CRUD operation based on the method name.
 *
 * It uses the method name and the class name to determine the resource
 * and the specific operation to perform (e.g., findOne, saveMany, etc.).
 * It then applies the appropriate NestJS HTTP method decorator (@Get, @Post, etc.)
 * and a custom API operation decorator for documentation purposes.
 *
 * @group Resource
 * @returns - {@link MethodDecorator}
 */
export function ResourceMethod(): MethodDecorator {
  return (...args) => {
    const { singularPath, operationName, resourceName } = (() => {
      const className = args[0].constructor.name;
      const operationName = args[1].toString() as CrudOperationName;

      if (!isCrudOperationName(operationName)) {
        throw new InvalidResourceOperationNameError(operationName);
      }

      const resourceName = extractResourceName(className);
      const { kebab } = names(resourceName);

      return { resourceName, singularPath: kebab, operationName };
    })();

    const { pluralByPath, pluralPath, singularByPath, singularIdPath } =
      resourcePaths(singularPath);

    // Configure nestjs http method
    switch (operationName) {
      case 'findOne': {
        Get(singularPath)(...args);
        break;
      }
      case 'findOneBy': {
        Get(singularByPath)(...args);
        break;
      }
      case 'findOneById': {
        Get(singularIdPath)(...args);
        break;
      }
      case 'findMany': {
        Get(pluralPath)(...args);
        break;
      }
      case 'findManyBy': {
        Get(pluralByPath)(...args);
        break;
      }
      case 'saveOne': {
        Post(singularPath)(...args);
        break;
      }
      case 'saveMany': {
        Post(pluralPath)(...args);
        break;
      }
      case 'updateOne': {
        Put(singularPath)(...args);
        break;
      }
      case 'updateOneBy': {
        Put(singularByPath)(...args);
        break;
      }
      case 'updateOneById': {
        Put(singularIdPath)(...args);
        break;
      }
      case 'updateMany': {
        Put(pluralPath)(...args);
        break;
      }
      case 'updateManyBy': {
        Put(pluralByPath)(...args);
        break;
      }
      case 'deleteOne': {
        Delete(singularPath)(...args);
        break;
      }
      case 'deleteOneById': {
        Delete(singularIdPath)(...args);
        break;
      }
      case 'deleteOneBy': {
        Delete(singularByPath)(...args);
        break;
      }
      case 'deleteMany': {
        Delete(pluralPath)(...args);
        break;
      }
      case 'deleteManyBy': {
        Delete(pluralByPath)(...args);
        break;
      }
    }

    ApiOperation(resourceName, operationName)(...args);
  };
}
