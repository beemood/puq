import helper from '@prisma/generator-helper';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { printSchemas } from './print-schemas.js';

helper.generatorHandler({
  onGenerate: async (options) => {
    const outputPath = options.generator.output?.value;

    if (!outputPath) {
      throw new Error('No output directory specified!');
    }
    const datamodel = options.dmmf.datamodel;

    const outputFileName = 'schemas.ts';

    await mkdir(outputPath, { recursive: true });

    const schemas = printSchemas(datamodel);
    await writeFile(join(outputPath, outputFileName), schemas);
  },

  onManifest: () => ({
    defaultOutput: '../src/lib/schemas',
    prettyName: 'Zod Generator',
  }),
});
