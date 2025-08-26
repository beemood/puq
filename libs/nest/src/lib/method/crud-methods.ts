import { Delete, Get, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { names, pluralNames } from '@puq/names';
import { inferResourceName } from '../common/infer-resource-name.js';
import { CommonMethodDecorator } from './common.js';

export function FindMany(properties?: Record<string, string>): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
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

    ApiQuery({ name: 'search', type: 'string', required: false })(...args);

    ApiQuery({
      name: 'orderBy',
      enum: properties ? Object.keys(properties) : undefined,
      required: false,
    })(...args);

    ApiQuery({
      name: 'orderDir',
      type: 'string',
      enum: ['asc', 'desc'],
      required: false,
    })(...args);

    Get(pluralResourceNames.kebabCase)(...args);
  };
}

export function FindOneById(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);

    ApiParam({ name: 'id', type: 'integer', required: true })(...args);
    Get(`${resourceNames.kebabCase}/:id`)(...args);
  };
}

export function CreateOne(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);
    ApiBody({ schema: { properties: {} } })(...args);
    Post(resourceNames.kebabCase)(...args);
  };
}

export function CreateMany(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);
    ApiBody({ schema: { properties: {} }, isArray: true })(...args);
    Post(pluralResourceNames.kebabCase)(...args);
  };
}

export function DeleteOneById(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);

    ApiParam({ name: 'id', type: 'integer', required: true })(...args);
    Delete(`${resourceNames.kebabCase}/:id`)(...args);
  };
}

export function DeleteMany(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);
    Delete(`${pluralResourceNames.kebabCase}`)(...args);
  };
}

export function UpdateOne(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNames = names(resourceName);

    ApiParam({ name: 'id', type: 'integer', required: true })(...args);
    ApiBody({ schema: { properties: {} } })(...args);
    Put(`${resourceNames.kebabCase}/:id`)(...args);
  };
}

export function UpdateMany(
  properties?: Record<string, string>
): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator(properties)(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNames = pluralNames(resourceName);
    ApiBody({ schema: { properties: {} }, isArray: true })(...args);
    Put(`${pluralResourceNames.kebabCase}`)(...args);
  };
}
