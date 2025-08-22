// @index(['./**/*.ts', '!./**/*{spec,test,program,schema.d}.ts'], f => `export * from '${f.path}'`)
export * from './commands/rename/rename.command'
export * from './commands/replace/replace.command'
export * from './common/command-class'
export * from './generators/project/project'
