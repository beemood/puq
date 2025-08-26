import { inferResourceName } from './infer-resource-name.js';

describe('inferResourceName', () => {
  it('should infer resource name', () => {
    expect(inferResourceName('SomeClass')).toEqual('SomeClass');
    expect(inferResourceName('SomeController')).toEqual('Some');
    expect(inferResourceName('CreateSomeDto')).toEqual('Some');
    expect(inferResourceName('SomeService')).toEqual('Some');
    expect(inferResourceName('SomeModule')).toEqual('Some');
  });
});
