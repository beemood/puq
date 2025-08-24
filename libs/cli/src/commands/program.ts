import { ClassConstructor } from '@puq/types';
import { program } from 'commander';
import { CommandClass } from '../common/command-class';
import { BundleJsonCommand } from './bundle-json/bundle-json.command';
import { GenerateTypesCommand } from './generate-types/generate-types.command';
import { RenameCommand } from './rename/rename.command';
import { ReplaceCommand } from './replace/replace.command';

const NAME = 'puq';
const DESCRIPTION = 'common command line utilities';

function bootstrap(commands: ClassConstructor<CommandClass>[]) {
  program.name(NAME).description(DESCRIPTION);

  commands.forEach((c) => {
    new c().bind(program);
  });

  program.parse();
}

bootstrap([
  RenameCommand,
  ReplaceCommand,
  BundleJsonCommand,
  GenerateTypesCommand,
]);
