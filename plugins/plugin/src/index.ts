// @index(['./**/*.ts', '!./**/*.{spec,test}.ts'], f => `export * from '${f.path}'`)
export * from './commands/commands'
export * from './commands/commands/hello.command'
export * from './generators/project/project'
export * from './generators/project/project-helper'
export * from './generators/project/schema.d'

