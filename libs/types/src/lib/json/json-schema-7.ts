export interface JSONSchema7 {
  $filePath: string;
  $id: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;

  title?: string;
  description?: string;
  default?: any;
  examples?: any[];
  readOnly?: boolean;
  writeOnly?: boolean;
  deprecated?: boolean;

  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: { [key: string]: string[] };
  dependentSchemas?: { [key: string]: JSONSchema7 };

  definitions?: { [key: string]: JSONSchema7 };
  properties?: { [key: string]: JSONSchema7 };
  patternProperties?: { [key: string]: JSONSchema7 };
  additionalProperties?: JSONSchema7 | boolean;
  items?: JSONSchema7 | JSONSchema7[];
  additionalItems?: JSONSchema7 | boolean;
  contains?: JSONSchema7;

  const?: any;
  enum?: any[];
  type?: string | string[];

  allOf?: JSONSchema7[];
  anyOf?: JSONSchema7[];
  oneOf?: JSONSchema7[];
  not?: JSONSchema7;

  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: JSONSchema7;
  then?: JSONSchema7;
  else?: JSONSchema7;

  [key: string]: any;
}

export type JSONSchema7With$id = JSONSchema7 & { $id: string };
export type JSONSchema7Withtitle = JSONSchema7 & { title: string };
export type JSONSchema7WithDefinitions = JSONSchema7 & {
  definitions: Record<string, JSONSchema7>;
};
