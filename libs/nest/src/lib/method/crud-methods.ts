import { Delete, Get, Post } from '@nestjs/common';
import { names, pluralNames } from '@puq/names';
import { inferResourceName } from '../common/infer-resource-name.js';
import { CommonMethodDecorator } from './common.js';

export function FindAll(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const pluralResourceNameVariants = pluralNames(resourceName);
    Get(pluralResourceNameVariants.kebabCase)(...args);
  };
}

export function FindOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNameVariants = names(resourceName);
    Get(`${resourceNameVariants.kebabCase}/:id`)(...args);
  };
}

export function CreateOne(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNameVariants = names(resourceName);
    Post(resourceNameVariants.kebabCase)(...args);
  };
}

export function CreateMany(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNameVariants = pluralNames(resourceName);
    Post(resourceNameVariants.kebabCase)(...args);
  };
}

export function DeleteOne(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNameVariants = names(resourceName);
    Delete(`${resourceNameVariants}/:id`)(...args);
  };
}

export function DeleteMany(): MethodDecorator {
  return (...args) => {
    CommonMethodDecorator()(...args);
    const className = args[0].constructor.name;
    const resourceName = inferResourceName(className);
    const resourceNameVariants = pluralNames(resourceName);
    Delete(`${resourceNameVariants}`)(...args);
  };
}
