import { Delete, Get, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { names, pluralNames } from '@puq/names';
import { inferResourceName } from '../common/infer-resource-name.js';
import { __getFields, CommonMethodDecorator } from './common.js';

export function FindMany(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);

    const fields = __getFields(...args);

    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);

    ApiQuery({
      name: 'take',
      type: 'integer',
      required: false,
      default: 20,
    })(...args);

    ApiQuery({
      name: 'skip',
      type: 'integer',
      required: false,
      default: 0,
    })(...args);

    ApiQuery({
      name: 'orderBy',
      enum: fields,
      required: false,
    })(...args);

    ApiQuery({
      name: 'orderDir',
      type: 'string',
      enum: ['asc', 'desc'],
      required: false,
    })(...args);

    ApiQuery({
      name: 'where',
      schema: { properties: {} },
      required: false,
    })(...args);

    Get(pluralResourceNames.kebabCase)(...args);
  };
}

export function FindOneById(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);

    ApiParam({ name: 'id', type: 'integer', required: true })(...args);
    Get(`${resourceNames.kebabCase}/:id`)(...args);
  };
}

export function CreateOne(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);
    ApiBody({ schema: { properties: {} } })(...args);
    Post(resourceNames.kebabCase)(...args);
  };
}

export function CreateMany(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);
    ApiBody({ schema: { properties: {} }, isArray: true })(...args);
    Post(pluralResourceNames.kebabCase)(...args);
  };
}

export function DeleteOneById(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);

    ApiParam({ name: 'id', type: 'integer', required: true })(...args);
    Delete(`${resourceNames.kebabCase}/:id`)(...args);
  };
}

export function DeleteMany(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);

    ApiQuery({
      name: 'limit',
      type: 'integer',
      required: false,
      nullable: true,
    })(...args);

    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);
    Delete(`${pluralResourceNames.kebabCase}`)(...args);
  };
}

export function UpdateOne(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);

    ApiParam({ name: 'id', type: 'integer', required: true })(...args);
    ApiBody({ schema: { properties: {} } })(...args);
    Put(`${resourceNames.kebabCase}/:id`)(...args);
  };
}

export function UpdateMany(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);
    ApiBody({ schema: { properties: {} }, isArray: true })(...args);
    Put(`${pluralResourceNames.kebabCase}`)(...args);
  };
}
