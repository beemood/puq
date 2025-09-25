import type { Command } from 'commander';

/**
 * @group Commands
 */
export type HelloCommandOptions = {
  /**
   * username
   */
  name: string;
};

/**
 * Say hello to the user
 * @group Commands
 */
export class HelloCommand {
  protected handle(options: HelloCommandOptions) {
    console.log(`Hello, ${options.name}`);
  }
  public parse(program: Command) {
    program
      .command('hello')
      .requiredOption('-n, --name <string>', 'What is your name?')
      .action(this.handle);
  }
}
