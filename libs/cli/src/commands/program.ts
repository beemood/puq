import { program } from 'commander';
import { CommandClassConstructor } from './../common/command-class';
import { RenameCommand } from './rename/rename.command';
import { ReplaceCommand } from './replace/replace.command';

const NAME = 'puq';
const DESCRIPTION = 'common command line utilities';

function bootstrap(commands: CommandClassConstructor[]) {
  program.name(NAME).description(DESCRIPTION);

  commands.forEach((c) => {
    new c().bind(program);
  });

  program.parse();
}

bootstrap([RenameCommand, ReplaceCommand]);
