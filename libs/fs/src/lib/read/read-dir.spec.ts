import { readDirs } from './read-dirs.js';

describe('dirs', () => {
  it('should read directories', async () => {
    const d = await readDirs('.', { recursive: true });

    console.log(d);
  });
});
