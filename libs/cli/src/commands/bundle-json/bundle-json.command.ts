import { bundleJson } from '@puq/bundle-json';
import { writeJsonFile } from '@puq/fs';
import { Command } from 'commander';
import { CommandClass } from '../../common/command-class';

export type BundleJsonCommandOptions = {
  rootDirectory: string;
  mainSchemaFilePath: string;
  outputPath: string;
};

export class BundleJsonCommand extends CommandClass {
  override bind(command: Command) {
    command
      .name('bundle-json')
      .description('bundle-json schemas into a single schema file')
      .command('bundle-json')
      .requiredOption('-r, --rootDirectory, <string>', 'Root directory')
      .requiredOption(
        '-m, --mainSchemaFilePath, <string>',
        'Main schema file path'
      )
      .requiredOption('-o, --outputPath, <string>', 'Output path')

      .action(this.handler);
  }

  override async handler(options: BundleJsonCommandOptions) {
    const schema = await bundleJson(
      options.rootDirectory,
      options.mainSchemaFilePath
    );
    await writeJsonFile(options.outputPath, schema);
  }
}
