import helper from '@prisma/generator-helper';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

helper.generatorHandler({
  onGenerate: async (options) => {
    const outputPath = options.generator.output?.value;

    if (!outputPath) {
      throw new Error('No output directory specified!');
    }

    const models = options.dmmf.datamodel.models;
    const modelNames = models.map((model) => model.name);

    const outputFileName = 'schemas.ts';

    await mkdir(outputPath, { recursive: true });

    await writeFile(
      join(outputPath, outputFileName),
      `export const modelNames = "${modelNames.join(',')}"`
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
