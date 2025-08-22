import { Command } from 'commander';
import { CommandClass } from '../../common/command-class';

export type RenameCommandOptions = {
  from: string[];
  to: string[];
};

export class RenameCommand extends CommandClass {
  override bind(command: Command) {
    command
      .name('rename')
      .description('rename files and directories')
      .command('rename')
      .requiredOption('-f, --from, <from...>', 'list of names to replace')
      .requiredOption('-t, --to, <to...>', 'list of name replacements')
      .action(this.handler);
  }

  override handler(options: RenameCommandOptions) {
    console.table(options);
  }
}
