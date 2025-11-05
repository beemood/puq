import type { ApiQueryOptions } from '@nestjs/swagger';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import type { ResourceOperationName } from '@puq/names';

export const __PageExamples: ApiQueryOptions['examples'] = {
  'Take first 20 items': {
    value: {
      take: 20,
    },
  },
};

export const __ProjectionExamples: ApiQueryOptions['examples'] = {
  'Select id field': {
    value: {
      select: { id: true },
    },
  },

  'Omit id field': {
    value: {
      omit: { id: true },
    },
  },
  'Include category relation with id and name field': {
    value: {
      include: { category: { select: { id: true, name: true } } },
    },
  },
};

export const __OrderExamples: ApiQueryOptions['examples'] = {
  'Order by id': {
    value: {
      orderBy: {
        id: 'asc',
      },
    },
  },
};

export const __WhereExamples: ApiQueryOptions['examples'] = {
  'Find items by id': {
    value: {
      where: {
        id: { equals: 1 },
      },
    },
  },
  'Find items by name contains': {
    value: {
      where: {
        name: { contains: 'sample' },
      },
    },
  },

  'Find items by categories': {
    value: {
      where: {
        categories: { some: { category: { name: { startsWith: 'Sample' } } } },
      },
    },
  },
};

export const __FinOneQueryOptions: ApiQueryOptions = {
  name: 'query',
  schema: { type: 'object', properties: {} },
  examples: {
    ...__ProjectionExamples,
    ...__WhereExamples,
  },
  required: false,
};

function apiQueryOptions(
  examples: ApiQueryOptions['examples']
): ApiQueryOptions {
  return {
    name: 'query',
    schema: { type: 'object', properties: {} },
    examples: {
      ...examples,
    },
    required: false,
  };
}

/**
 * Add common query,params, and body examples to the swagger ui.
 * @returns
 */
export function SwaggerApiParams(): MethodDecorator {
  return (...args) => {
    const operationName = args[1].toString() as ResourceOperationName;

    // Configure URL params
    switch (operationName) {
      case 'deleteManyBy':
      case 'deleteOneBy':
      case 'findOneBy':
      case 'updateManyBy':
      case 'updateOneBy':
      case 'findManyBy': {
        ApiParam({ name: 'value', type: 'string', required: true })(...args);
        ApiParam({ name: 'property', type: 'string', required: true })(...args);
        break;
      }
      case 'updateOneById':
      case 'findOneById':
      case 'deleteOneById': {
        ApiParam({ name: 'id', type: 'integer', required: true })(...args);
        break;
      }
      case 'findOne':
      case 'findMany':
      case 'saveOne':
      case 'saveMany':
      case 'updateOne':
      case 'updateMany':
      case 'deleteOne':
      case 'deleteMany': {
        break;
      }
    }

    // Configure Query params
    switch (operationName) {
      case 'findOne': {
        ApiQuery(
          apiQueryOptions({
            ...__ProjectionExamples,
            ...__WhereExamples,
          })
        )(...args);
        break;
      }
      case 'findMany': {
        ApiQuery(
          apiQueryOptions({
            ...__PageExamples,
            ...__ProjectionExamples,
            ...__WhereExamples,
            ...__OrderExamples,
          })
        )(...args);
        break;
      }
      case 'findManyBy': {
        ApiQuery(
          apiQueryOptions({
            ...__PageExamples,
            ...__ProjectionExamples,
            ...__OrderExamples,
          })
        )(...args);
        break;
      }
      case 'findOneById':
      case 'findOneBy':
      case 'saveOne':
      case 'saveMany':
      case 'deleteOne':
      case 'updateMany':
      case 'updateOneById':
      case 'updateOneBy':
      case 'updateManyBy':
      case 'updateOne':
      case 'deleteOneById':
      case 'deleteOneBy':
      case 'deleteMany':
      case 'deleteManyBy': {
        // These one-by operations only need projections such as select, omit.
        ApiQuery(apiQueryOptions({ ...__ProjectionExamples }))(...args);
        break;
      }
    }

    // Configure body
    switch (operationName) {
      case 'saveOne':
      case 'saveMany':
      case 'updateOne':
      case 'updateOneBy':
      case 'updateOneById':
      case 'updateMany':
      case 'updateManyBy': {
        // Only these operation require body
        ApiBody({
          required: true,
          schema: {
            type: 'object',
          },
          examples: {
            Empty: {
              description: 'Empty Object',
              value: {},
            },
          },
        })(...args);
        break;
      }
      case 'findOne':
      case 'findOneBy':
      case 'findOneById':
      case 'findMany':
      case 'findManyBy':
      case 'deleteOne':
      case 'deleteOneBy':
      case 'deleteOneById':
      case 'deleteMany':
      case 'deleteManyBy': {
        //  There is no body for this operations
        break;
      }
    }
  };
}
