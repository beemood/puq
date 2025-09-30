import type { DMMF } from '@prisma/client/runtime/library.js';
import * as fs from 'fs/promises';

// Map Prisma scalar types to Zod
function mapScalarToZod(field: DMMF.Field): string {
  let schema: string;

  switch (field.type) {
    case 'String':
      schema = 'z.string()';
      break;
    case 'Int':
      schema = 'z.number().int()';
      break;
    case 'BigInt':
      schema = 'z.bigint()';
      break;
    case 'Float':
    case 'Decimal':
      schema = 'z.number()';
      break;
    case 'Boolean':
      schema = 'z.boolean()';
      break;
    case 'DateTime':
      schema = 'z.date()';
      break;
    case 'Json':
      schema = 'z.any()';
      break;
    default:
      schema = 'z.any()';
  }

  if (field.isList) schema = `z.array(${schema})`;
  if (!field.isRequired) schema = `${schema}.nullish()`;

  return schema;
}

// Helper to detect auto-generated fields
function isGeneratedField(field: DMMF.Field): boolean {
  return (
    field.isId ||
    field.isUpdatedAt ||
    (field.hasDefaultValue &&
      ((field.default as any)?.name === 'autoincrement' ||
        (field.default as any)?.name === 'now' ||
        (field.default as any)?.name === 'uuid'))
  );
}

// Generate TS source code for schemas
function generateModelSchemas(model: DMMF.Model): string {
  const fields: string[] = [];
  const createFields: string[] = [];
  const updateFields: string[] = [];
  const whereFields: string[] = [];
  const orderFields: string[] = [];
  const selectFields: string[] = [];

  for (const field of model.fields) {
    if (field.kind === 'object') {
      selectFields.push(`${field.name}: z.boolean().optional(),`);
      continue;
    }

    const zodType = mapScalarToZod(field);

    fields.push(`${field.name}: ${zodType},`);

    if (!isGeneratedField(field)) {
      createFields.push(`${field.name}: ${zodType},`);
    }
    updateFields.push(`${field.name}: ${zodType}.optional(),`);
    whereFields.push(`${field.name}: ${zodType}.optional(),`);
    orderFields.push(`${field.name}: z.enum(["asc", "desc"]).optional(),`);
    selectFields.push(`${field.name}: z.boolean().optional(),`);
  }

  return `
// ---------- ${model.name} Schemas ----------


export const ${model.name}Schema = z.object({
  ${fields.join('\n  ')}
});

export const ${model.name}CreateSchema = z.object({
  ${createFields.join('\n  ')}
});

export const ${model.name}UpdateSchema = z.object({
  ${updateFields.join('\n  ')}
});

export const ${model.name}WhereSchema = toWhereQuerySchema(${model.name}Schema);

export const ${model.name}OrderSchema =  toOrderBySchema(${model.name}Schema);

export const ${model.name}SelectSchema = z.object({
  ${selectFields.join('\n  ')}
});

export const ${model.name}QuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ${model.name}WhereSchema.optional(),
  orderBy: ${model.name}OrderSchema.optional(),
  select: ${model.name}SelectSchema.optional()
});

export type ${model.name} = z.infer<typeof ${model.name}Schema>;
export type ${model.name}Create = z.infer<typeof ${model.name}CreateSchema>;
export type ${model.name}Update = z.infer<typeof ${model.name}UpdateSchema>;
export type ${model.name}Where = z.infer<typeof ${model.name}WhereSchema>;
export type ${model.name}Order = z.infer<typeof ${model.name}OrderSchema>;
export type ${model.name}Select = z.infer<typeof ${model.name}SelectSchema>;
export type ${model.name}Query = z.infer<typeof ${model.name}QuerySchema>;


`;
}

export async function generateZodSchemaFiles(
  datamodel: DMMF.Datamodel,
  outDir = './zod-schemas'
) {
  await fs.mkdir(outDir, { recursive: true });
  const filePath = `${outDir}/schema.ts`;

  await fs.writeFile(
    filePath,
    `
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    `,
    'utf-8'
  );

  for (const model of datamodel.models) {
    const code = generateModelSchemas(model);
    await fs.appendFile(filePath, '\n', 'utf-8');
    await fs.appendFile(filePath, code, 'utf-8');
  }
}
