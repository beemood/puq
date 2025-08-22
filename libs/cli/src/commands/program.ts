import { program } from 'commander';
import { RenameCommand } from './rename/rename.command';
import { ReplaceCommand } from './replace/replace.command';
import { ClassConstructor } from '@puq/types';
import { CommandClass } from '../common/command-class';

const NAME = 'puq';
const DESCRIPTION = 'common command line utilities';

function bootstrap(commands: ClassConstructor<CommandClass>[]) {
  program.name(NAME).description(DESCRIPTION);

  commands.forEach((c) => {
    new c().bind(program);
  });

  program.parse();
}

bootstrap([RenameCommand, ReplaceCommand]);
