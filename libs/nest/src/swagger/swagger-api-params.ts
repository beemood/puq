import type { ApiQueryOptions } from '@nestjs/swagger';
import { ApiQuery } from '@nestjs/swagger';
import type { ResourceOperationName } from '@puq/names';

export const __CommonApiQueryOptions: ApiQueryOptions = {
  name: 'query',
  schema: { type: 'object' },
  examples: {
    Empty: {
      value: {},
    },
    Select: {
      value: {
        select: {
          id: true,
        },
      },
    },
    Omit: {
      value: {
        omit: {
          id: true,
        },
      },
    },
    Where: {
      value: {
        where: {
          id: {
            equals: 1,
          },
        },
      },
    },
  },
};
export function SwaggerApiParams(): MethodDecorator {
  return (...args) => {
    const operationName = args[1].toString() as ResourceOperationName;

    // Configure params
    switch (operationName) {
      case 'findOne': {
        ApiQuery({ ...__CommonApiQueryOptions });
        break;
      }
      case 'findOneBy':{ 
        
        break; 
      }
      case 'findOneById':
      case 'findMany':
      case 'findManyBy':
      case 'saveOne':
      case 'saveMany':
      case 'updateOne':
      case 'updateOneBy':
      case 'updateOneById':
      case 'updateMany':
      case 'updateManyBy':
      case 'deleteOne':
      case 'deleteOneById':
      case 'deleteOneBy':
      case 'deleteMany':
      case 'deleteManyBy':
    }
  };
}
