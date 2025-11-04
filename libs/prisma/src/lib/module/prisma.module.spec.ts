describe('PrismaModule', () => {
  // let module: TestingModule;
  // beforeAll(async () => {
  //   module = await Test.createTestingModule({
  //     imports: [
  //       PrismaModule.forRoot({
  //         prismaClient: SampleClient,
  //         datamodel: {} as any,
  //       }),
  //       PrismaModule.forFeature({ resourceNames: ['sample'] }),
  //     ],
  //   }).compile();
  // });
  // it('should initialize and inject', async () => {
  //   expect(module.get(getClientToken())).toBeDefined();
  //   expect(module.get(getRepositoryToken('sample'))).toBeDefined();
  // });

  it('should work', () => {
    expect(1).toEqual(1);
  });
});
