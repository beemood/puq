import type { Command } from 'commander';

export type HelloCommandOptions = {
  name: string;
};

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
