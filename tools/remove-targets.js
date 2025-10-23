const { updateJsonFile } = require('@puq/fs');
const { readdirSync } = require('fs');
const { join } = require('path');

const root = join(__dirname, '../dbs');
const dirs = readdirSync(root);

for (const d of dirs) {
  updateJsonFile(join(root, d, 'package.json'), (value) => {
    return value;
  });
}
