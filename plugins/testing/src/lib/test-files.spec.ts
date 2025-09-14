import { testDirectories } from './test-files.js';
import { testDirectory } from './tmpdir.js';

describe('test-files', () => {
  it('should be defined', () => {
    expect(testDirectories).toBeDefined();
    expect(testDirectory('')).toBeDefined();
  });
});
