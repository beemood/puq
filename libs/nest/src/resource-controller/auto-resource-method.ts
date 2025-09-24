import { Delete, Get, Post, Put } from '@nestjs/common';
import type { ResourceOperationName } from '@puq/names';
import { extractResourceName, resourcePaths } from '@puq/names';
import { OperationName } from '../metadata/operation-name.js';
import { SwaggerResourceOperation } from '../swagger/swagger-resource-operation.js';

/**
 * This automatically wires the corresponding HTTP operation to the target method.
 * It infers the operation's details from the method name, as defined in {@link ResourceOperationNames}.
 * It also set the {@link OperationName} metadata
 *
 * @group Decorators
 * @returns - {@link MethodDecorator}
 */
export function AutoResourceMethod(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;

    const operationName = args[1].toString() as ResourceOperationName;
    const resourceName = extractResourceName(className);
    const resourcePathRecord = resourcePaths(resourceName);

    OperationName()(...args);

    SwaggerResourceOperation(resourceName, operationName)(...args);

    const resourcePath = resourcePathRecord[operationName];

    // Configure nestjs http method
    switch (operationName) {
      case 'findOne': {
        Get(resourcePath)(...args);
        break;
      }
      case 'findOneBy': {
        Get(resourcePath)(...args);
        break;
      }
      case 'findOneById': {
        Get(resourcePath)(...args);
        break;
      }
      case 'findMany': {
        Get(resourcePath)(...args);
        break;
      }
      case 'findManyBy': {
        Get(resourcePath)(...args);
        break;
      }
      case 'saveOne': {
        Post(resourcePath)(...args);
        break;
      }
      case 'saveMany': {
        Post(resourcePath)(...args);
        break;
      }
      case 'updateOne': {
        Put(resourcePath)(...args);
        break;
      }
      case 'updateOneBy': {
        Put(resourcePath)(...args);
        break;
      }
      case 'updateOneById': {
        Put(resourcePath)(...args);
        break;
      }
      case 'updateMany': {
        Put(resourcePath)(...args);
        break;
      }
      case 'updateManyBy': {
        Put(resourcePath)(...args);
        break;
      }
      case 'deleteOne': {
        Delete(resourcePath)(...args);
        break;
      }
      case 'deleteOneById': {
        Delete(resourcePath)(...args);
        break;
      }
      case 'deleteOneBy': {
        Delete(resourcePath)(...args);
        break;
      }
      case 'deleteMany': {
        Delete(resourcePath)(...args);
        break;
      }
      case 'deleteManyBy': {
        Delete(resourcePath)(...args);
        break;
      }
    }
  };
}
