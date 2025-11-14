// @index(['./**/*.ts', '!./**/*.{spec,test}.ts', '!./main.ts', '!./lib/resources/*/*.ts'], f => `export * from '${f.path}.js'`)
export * from './bootstrap.js';
export * from './lib/app.controller.js';
export * from './lib/app.module.js';
export * from './lib/prisma-client.js';
export * from './lib/resource.module.js';
export * from './lib/resources/resource-modules.js';

