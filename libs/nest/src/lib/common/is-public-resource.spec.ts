import { isPublicResource } from './is-public-resource.js';

describe('isPublicResource', () => {
  it('should infer the resource is secured or not', () => {
    expect(isPublicResource('SomePublicResource')).toEqual(true);
    expect(isPublicResource('SomeOpenResource')).toEqual(true);
  });
});
