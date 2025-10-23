const { updateJsonFile } = require('@puq/fs');
const { execSync } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');

const root = join(__dirname, '../dbs');
const dirs = readdirSync(root);

for (const d of dirs) {
  // updateJsonFile(join(root, d, 'package.json'), (value) => {
  //   const dName = `@puq/${d}`;

  //   const udpated = {
  //     peerDependencies: {
  //       zod: '4.1.11',
  //     },
  //     dependencies: {
  //       '@prisma/client': '6.16.2',
  //       '@swc/helpers': '0.5.11',
  //     },
  //     devDependencies: {
  //       [dName]: 'workspace:*',
  //     },
  //   };

  //   value = { ...value, ...udpated };
  //   return value;
  // });

  // execSync(`npx nx g @puq/plugin:schemas @puq/${d}`);
}
