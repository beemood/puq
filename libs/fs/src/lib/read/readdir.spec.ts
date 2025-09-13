import { readdir } from 'fs/promises';

describe('dirs', () => {
  it('should read directories', async () => {
    const d = await readdir('.', { recursive: true });

    console.log(d);
  });
});
