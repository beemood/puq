import type { Any } from '@puq/types';
import { extractResourceName } from '../names/extract-resource-name.js';
import { isResourceOperationName } from '../names/resource-operation-name.js';
import { AbstractResourceController } from './../classes/abstract-resource-controller.js';
import { AutoResourceMethod } from './auto-resource-method.js';

vi.mock('@puq/names', () => {
  return {
    names: vi.fn(),
  };
});

vi.mock('../names/resource-operation-name.js', () => {
  return {
    isResourceOperationName: vi.fn(),
  };
});

vi.mock('../names/extract-resource-name.js', () => {
  return {
    extractResourceName: vi.fn(),
  };
});

describe('AutoResourceMethod', () => {
  it('should configure the method', async () => {
    class SampleController extends AbstractResourceController {
      @AutoResourceMethod()
      override findMany(...params: Any[]): Any {
        return { params };
      }
    }

    expect(extractResourceName).toHaveBeenCalledOnce();
    expect(extractResourceName).toHaveBeenCalledWith(SampleController.name);

    expect(isResourceOperationName).toHaveBeenCalledOnce();
    expect(isResourceOperationName).toBeCalledWith('findMany');
  });
});
