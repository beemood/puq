import { fileName } from './file-name.js';

describe('fileName', () => {
  it.each`
    path                        | name
    ${''}                       | ${''}
    ${'some.json'}              | ${'some'}
    ${'../some.json'}           | ${'some'}
    ${'../some/some/some.json'} | ${'some'}
  `('fileName($path) should return $name', ({ path, name }) => {
    expect(fileName(path)).toEqual(name);
  });
});
