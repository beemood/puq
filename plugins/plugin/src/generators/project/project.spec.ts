import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { projectGenerator } from './project';
import { ProjectGeneratorSchema } from './schema';

describe('project generator', () => {
  let tree: Tree;
  const options: ProjectGeneratorSchema = { directory: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await projectGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
