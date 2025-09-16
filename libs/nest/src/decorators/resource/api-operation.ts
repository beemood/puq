import { ApiOperation as __ApiOperation } from '@nestjs/swagger';
import { CrudOperationName, pluralize } from '@puq/names';


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
export function ApiOperation(
  resouceName: string,
  operationName: CrudOperationName
): MethodDecorator {
  const pluralResouceName = pluralize(resouceName);
  const singular = '$singular';
  const plural = '$plural';

  return (...args) => {
    let summary = `Unkown operation summary`;

    switch (operationName) {
      case 'findOne': {
        summary = `Find one ${singular} by advance query`;
        break;
      }
      case 'findOneBy': {
        summary = `Find one ${singular} by property and value param`;
        break;
      }
      case 'findOneById': {
        summary = `Find one ${singular} by id`;
        break;
      }
      case 'findMany': {
        summary = `Find many ${plural} by advance query`;
        break;
      }
      case 'findManyBy': {
        summary = `Find many ${plural} by property and value`;
        break;
      }
      case 'saveOne': {
        summary = `Save one ${singular}`;
        break;
      }
      case 'saveMany': {
        summary = `Save many ${plural}`;
        break;
      }
      case 'updateOne': {
        summary = `Update one ${singular} by advance query`;
        break;
      }
      case 'updateOneBy': {
        summary = `Update one ${singular} by property and value`;
        break;
      }
      case 'updateOneById': {
        summary = `Update one ${singular} by id`;
        break;
      }
      case 'updateMany': {
        summary = `Update many ${plural} by advance query`;
        break;
      }
      case 'updateManyBy': {
        summary = `Update many ${plural} by advance query`;
        break;
      }
      case 'deleteOne': {
        summary = `Delete one ${singular} by advance query`;
        break;
      }
      case 'deleteOneBy': {
        summary = `Delete one ${singular} by property and value`;
        break;
      }
      case 'deleteOneById': {
        summary = `Delete one ${singular} by id`;
        break;
      }
      case 'deleteMany': {
        summary = `Delete many ${plural} by advance query`;
        break;
      }
      case 'deleteManyBy': {
        summary = `Delete many ${plural} by property and value`;
        break;
      }
    }

    summary = summary
      .replaceAll(plural, pluralResouceName)
      .replaceAll(singular, resouceName);

    __ApiOperation({ summary })(...args);
  };
}
