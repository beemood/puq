import type { ApiParamOptions, ApiQueryOptions } from '@nestjs/swagger';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import type { ResourceOperationName } from '@puq/names';

export const __PageExamples: ApiQueryOptions['examples'] = {
  'Skip first and take 2 items': {
    value: {
      take: 2,
      skip: 1,
    },
  },
};

export const __ProjectionExamples: ApiQueryOptions['examples'] = {
  'Omit id property': {
    value: {
      omit: { id: true },
    },
  },
  'Select id property only': {
    value: {
      select: { id: true },
    },
  },
  'Include relations': {
    value: {
      include: { category: true },
    },
  },
};

export const __OrderExamples: ApiQueryOptions['examples'] = {
  'Order by id asc': {
    value: {
      orderBy: {
        id: 'asc',
      },
    },
  },
  'Order by id desc': {
    value: {
      orderBy: {
        id: 'desc',
      },
    },
  },
};

export const __WhereExamples: ApiQueryOptions['examples'] = {
  'Find items with id equals 1': {
    value: {
      id: { equals: 1 },
    },
  },
  'Find items with id greater than 1': {
    value: {
      id: { gt: 1 },
    },
  },
  'Find items with id is 1 or 3': {
    value: {
      id: { in: [1, 3] },
    },
  },
  'Find items with id is not 1': {
    value: {
      id: { not: { equals: 1 } },
    },
  },
};

export const __FinOneQueryOptions: ApiQueryOptions = {
  name: 'query',
  schema: { type: 'object' },
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
    schema: { type: 'object' },
    examples: {
      ...examples,
    },
    required: false,
  };
}

export type SwaggerApiExamples = {
  createOne: ApiParamOptions['examples'];
  update: ApiParamOptions['examples'];
  findMany: ApiParamOptions['examples'];
};

/**
 * Add common query,params, and body examples to the swagger ui.
 * @returns
 */
export function SwaggerApiParams(
  options?: SwaggerApiExamples
): MethodDecorator {
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
