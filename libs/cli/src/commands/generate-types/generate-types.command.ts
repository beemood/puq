import { writeTextFile } from '@puq/fs';
import { generateTypes } from '@puq/generate-types';
import { Command } from 'commander';
import { CommandClass } from '../../common/command-class';

export type GenerateTypesCommandOptions = {
  mainSchemaFilePath: string;
  outputPath: string;
};

export class GenerateTypesCommand extends CommandClass {
  override bind(command: Command) {
    command
      .name('generate-types')
      .description('generate-types')
      .command('generate-types')
      .requiredOption(
        '-m, --mainSchemaFilePath, <string>',
        'Main schema file path'
      )
      .requiredOption(
        '-o, --outputPath, <string>',
        'Output typescript file path'
      )
      .action(this.handler);
  }

  override async handler(options: GenerateTypesCommandOptions) {
    const content = await generateTypes(options.mainSchemaFilePath);
    await writeTextFile(options.outputPath, content);
  }
}
