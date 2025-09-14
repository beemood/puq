import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';

export function tmpdir() {
  return join(workspaceRoot, 'tmp');
}

export function testDirectory(projectDirectory: string) {
  return join(tmpdir(), projectDirectory);
}
