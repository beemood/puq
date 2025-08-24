import { libs } from './libs';
import { runCommand } from './run-command';

async function run() {
  runCommand('readme', await libs());
}

run();
