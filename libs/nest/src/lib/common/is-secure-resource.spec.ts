import { isSecureResource } from './is-secure-resource.js';

describe('isSecureResource', () => {
  it('should infer the resource is secured or not', () => {
    expect(isSecureResource('SomePrivateResource')).toEqual(true);
    expect(isSecureResource('SomeSecuredResource')).toEqual(true);
    expect(isSecureResource('SomeSecure')).toEqual(true);
    expect(isSecureResource('SomePrivatResource')).toEqual(false);
    expect(isSecureResource('SomeSecurResource')).toEqual(false);
    expect(isSecureResource('SomeSecu')).toEqual(false);
  });
});
