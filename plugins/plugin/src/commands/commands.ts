import { program } from 'commander';
import { HelloCommand } from './commands/hello.command';

/**
 * Parse commands
 * 
 * @group Commands
 */
export function parse() {
  new HelloCommand().parse(program);

  program.parse();
}
