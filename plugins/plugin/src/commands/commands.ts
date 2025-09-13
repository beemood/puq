import { program } from 'commander';
import { HelloCommand } from './commands/hello.command';

new HelloCommand().parse(program);

program.parse();
