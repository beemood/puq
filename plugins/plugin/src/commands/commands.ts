import { program } from 'commander';
import { HelloCommand } from './commands/hello.command';

export function parse() {
  new HelloCommand().parse(program);

  program.parse();
}
