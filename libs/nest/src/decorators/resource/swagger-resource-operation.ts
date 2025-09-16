import { ApiOperation as __ApiOperation } from '@nestjs/swagger';
import type { CrudOperationName } from '@puq/names';
import { pluralize } from '@puq/names';
import { createPlaceholderReplacer } from '@puq/utils';

function getSwaggerResouceOperationSummary(
  resourceName: string,
  operationName: CrudOperationName
) {
  const singularResourceName = resourceName;
  const pluralResouceName = pluralize(resourceName);

  const { placeholder: S, replace: replaceSingular } =
    createPlaceholderReplacer('singular');

  const { placeholder: P, replace: replacePlural } =
    createPlaceholderReplacer('plural');

  let summary = '';

  switch (operationName) {
    case 'findOne': {
      summary = `Find one ${S} by advance query`;
      break;
    }
    case 'findOneBy': {
      summary = `Find one ${S} by property and value param`;
      break;
    }
    case 'findOneById': {
      summary = `Find one ${S} by id`;
      break;
    }
    case 'findMany': {
      summary = `Find many ${P} by advance query`;
      break;
    }
    case 'findManyBy': {
      summary = `Find many ${P} by property and value`;
      break;
    }
    case 'saveOne': {
      summary = `Save one ${S}`;
      break;
    }
    case 'saveMany': {
      summary = `Save many ${P}`;
      break;
    }
    case 'updateOne': {
      summary = `Update one ${S} by advance query`;
      break;
    }
    case 'updateOneBy': {
      summary = `Update one ${S} by property and value`;
      break;
    }
    case 'updateOneById': {
      summary = `Update one ${S} by id`;
      break;
    }
    case 'updateMany': {
      summary = `Update many ${P} by advance query`;
      break;
    }
    case 'updateManyBy': {
      summary = `Update many ${P} by advance query`;
      break;
    }
    case 'deleteOne': {
      summary = `Delete one ${S} by advance query`;
      break;
    }
    case 'deleteOneBy': {
      summary = `Delete one ${S} by property and value`;
      break;
    }
    case 'deleteOneById': {
      summary = `Delete one ${S} by id`;
      break;
    }
    case 'deleteMany': {
      summary = `Delete many ${P} by advance query`;
      break;
    }
    case 'deleteManyBy': {
      summary = `Delete many ${P} by property and value`;
      break;
    }
  }

  summary = replacePlural(summary, pluralResouceName);

  summary = replaceSingular(summary, singularResourceName);

  return summary;
}

/**
 * A method decorator that generates a standardized operation summary for Swagger API documentation.
 *
 * This decorator automatically creates a human-readable summary for a RESTful API
 * endpoint based on the resource name and the CRUD operation being performed.
 * It is designed to work in conjunction with NestJS and Swagger to reduce boilerplate.
 *
 * @param resouceName The singular name of the resource (e.g., 'User').
 * @param operationName The name of the CRUD operation (e.g., 'findOne', 'saveMany').
 * @returns A NestJS method decorator that applies the Swagger `@ApiOperation` decorator.
 */
export function SwaggerResourceOperation(
  resouceName: string,
  operationName: CrudOperationName
): MethodDecorator {
  return (...args) => {
    const summary = getSwaggerResouceOperationSummary(
      resouceName,
      operationName
    );

    __ApiOperation({ summary })(...args);
  };
}
