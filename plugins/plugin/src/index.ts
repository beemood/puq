// @index(['./**/*.ts', '!./**/*.{spec,test}.ts'], f => `export * from '${f.path}'`)
export * from './commands/commands';
export * from './commands/commands/hello.command';
export * from './generators/event-listener/event-listener';
export * from './generators/event-listener/schema.d';
export * from './generators/project/project';
export * from './generators/project/project-helper';
export * from './generators/project/schema.d';
export * from './generators/readme/readme';
export * from './generators/readme/schema.d';
export * from './generators/resource/resource';
export * from './generators/resource/schema.d';
export * from './generators/resources/resources/resources';
export * from './generators/resources/resources/schema.d';

