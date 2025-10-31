import helper from '@prisma/generator-helper';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

helper.generatorHandler({
  // This is the main function Prisma calls.
  onGenerate: async (options) => {
    // 1. Get the output directory specified in the schema.prisma

    const outputPath = options.generator.output?.value;

    if (!outputPath) {
      throw new Error('No output directory specified!');
    }

    // 2. Read the models defined in the schema
    const modelNames = options.dmmf.datamodel.models.map((model) => model.name);

    const outputFileName = 'schemas.ts';

    await mkdir(outputPath, { recursive: true });

    await writeFile(
      join(outputPath, outputFileName),
      `export const mdoelNames = "${modelNames.join(',')}"`
    );

    console.log(
      `Successfully generated model list for: ${modelNames.join(',')}`
    );
  },

  onManifest: () => ({
    defaultOutput: '../src/lib/schemas',
    prettyName: 'Zod Generator',
  }),
});
