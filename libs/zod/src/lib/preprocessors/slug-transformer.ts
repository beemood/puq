import { slugify } from '@puq/names';

/**
 * Create a slug transform function
 * @param key the key of the object from which the slug is generated
 * @returns
 */
export function slugTransformer(key: string) {
  return (value: any) => {
    if (value.slug == undefined && value[key] != undefined) {
      return {
        ...value,
        slug: value[key] ? slugify(value[key].toString()) : null,
      };
    }
    return value;
  };
}
