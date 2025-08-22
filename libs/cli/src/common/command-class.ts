import { Command } from 'commander';

export abstract class CommandClass {
  bind(command: Command): void {
    throw new Error('Not implemented!');
  }

  protected handler(options: any): void | Promise<void> {
    throw new Error('Not implemented!');
  }
}
