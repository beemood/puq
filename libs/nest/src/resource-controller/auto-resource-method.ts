import { Delete, Get, Post, Put } from '@nestjs/common';
import { names } from '@puq/names';
import { values } from '@puq/utils';
import { createResourcePaths } from '../helpers/create-resource-paths.js';
import { OperationName } from '../metadata/operation-name.js';
import { extractResourceName } from '../names/extract-resource-name.js';
import { InvalidNameError } from '../names/invalid-name-error.js';
import type { ResourceOperationName } from '../names/resource-operation-name.js';
import {
  isResourceOperationName,
  ResourceOperationNames,
} from '../names/resource-operation-name.js';
import { SwaggerResourceOperation } from '../swagger/swagger-resource-operation.js';

/**
 * This automatically wires the corresponding HTTP operation to the target method.
 * It infers the operation's details from the method name, as defined in {@link ResourceOperationNames}.
 *
 * @group Decorators
 * @returns - {@link MethodDecorator}
 */
export function AutoResourceMethod(): MethodDecorator {
  return (...args) => {
    const { singularPath, operationName, resourceName } = (() => {
      const className = args[0].constructor.name;
      const operationName = args[1].toString() as ResourceOperationName;

      if (!isResourceOperationName(operationName)) {
        throw new InvalidNameError(
          operationName,
          values(ResourceOperationNames) + ''
        );
      }

      const resourceName = extractResourceName(className);
      const { kebab } = names(resourceName);

      return { resourceName, singularPath: kebab, operationName };
    })();

    const { pluralByPath, pluralPath, singularByPath, singularIdPath } =
      createResourcePaths(singularPath);

    OperationName()(...args);

    SwaggerResourceOperation(resourceName, operationName)(...args);

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
  };
}
