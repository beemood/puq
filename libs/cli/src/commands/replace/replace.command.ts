import { Command } from 'commander';
import { CommandClass } from '../../common/command-class';

export type ReplaceCommandOptions = {
  pattern: string;
  from: string[];
  to: string[];
};

export class ReplaceCommand extends CommandClass {
  override bind(command: Command) {
    command
      .name('replace')
      .description('replace')
      .command('replace')
      .requiredOption('-p, --pattern, <pattern>', 'file name pattern')
      .requiredOption('-f, --from, <from...>', 'list of placeholders')
      .requiredOption('-t, --to, <to...>', 'list of values')
      .action(this.handler);
  }

  override handler(options: ReplaceCommandOptions) {
    console.table(options);
  }
}
