import { readDir } from './read-dir.js';

describe('dirs', () => {
  it('should read directories', async () => {
    const d = await readDir('.', { recursive: true });

    console.log(d);
  });
});
