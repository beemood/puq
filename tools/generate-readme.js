#!/usr/bin/env node

import { libs } from './libs.js';
import { runCommand } from './run-command.js';

async function run() {
  runCommand('readme', await libs());
}

run();
