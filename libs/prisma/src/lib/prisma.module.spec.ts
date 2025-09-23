import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getClientToken } from './client.provider.js';
import { PrismaModule } from './prisma.module.js';
import { getRepositoryToken } from './repository.provider.js';
describe('PrismaModule', () => {
  let module: TestingModule;

  class SampleClient {
    sample = {};
  }

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        PrismaModule.forRoot({ prismaClient: SampleClient }),
        PrismaModule.forFeature({ resourceNames: ['sample'] }),
      ],
    }).compile();
  });

  it('should initialize and inject', async () => {
    expect(module.get(getClientToken())).toBeDefined();
    expect(module.get(getRepositoryToken('sample'))).toBeDefined();
  });
});
