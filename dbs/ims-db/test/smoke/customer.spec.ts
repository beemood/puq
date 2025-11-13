import { v4 } from 'uuid';
import type { Customer } from '../../generated';
import type { CustomerCreateType } from '../../src';
import { client, plainClient } from '../client.spec';

describe('Customer', () => {
  const plainRepo = plainClient.customer;
  const repo = client.customer;

  const testData: CustomerCreateType[] = [{ uuid: v4() }];

  beforeAll(async () => {
    await plainRepo.deleteMany();
  });

  describe('create', () => {
    let created: Customer;

    beforeAll(async () => {
      created = await repo.create({ data: testData[0] });
    });

    it('should create', () => {
      expect(created).toBeDefined();
    });
  });
});
