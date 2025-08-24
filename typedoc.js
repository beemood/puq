#!/usr/bin/env node

const { exec } = require('child_process');
const { readdir } = require('fs/promises');

async function typedoc() {
  const found = await readdir(__dirname, 'libs');

  await Promise.all(
    found.map(async (e) => {
      return await new Promise((res, rej) => {
        exec(`npx nx g @puq/cli:typedoc libs/${e}`, (err, out, stderr) => {
          if (err) {
            rej(err);
          } else {
            res(out);
          }
        });
      });
    })
  );
}
// npx nx g @puq/cli:typedoc libs/types
