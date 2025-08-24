#!/usr/bin/env node

const { runCommand } = require('./run-command');
const { libs } = require('./libs');

async function run() {
  await runCommand('typedoc', await libs());
}

run();
