import { exec } from 'child_process';

export async function runCommand(command, libs) {
  await Promise.all(
    libs.map(async (e) => {
      return await new Promise((res, rej) => {
        exec(`npx nx g @puq/cli:${command} libs/${e}`, (err, out, stderr) => {
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
