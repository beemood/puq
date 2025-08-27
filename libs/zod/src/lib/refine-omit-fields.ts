import type { ZodType } from 'zod';

export function refineOmitFields(baseOmitSelect: Record<string, ZodType>) {
  return (value: any) => {
    if (
      Object.keys(value).sort().toString() ===
      Object.keys(baseOmitSelect).sort().toString()
    ) {
      return false;
    }
    return true;
  };
}

export const refineOmitFieldsErrorMessage = {
  message: `All properties are not allowed to be omitted`,
};

export const getOmitFieldsRefineOptions = (
  baseOmitSelect: Record<string, ZodType>
) =>
  [refineOmitFields(baseOmitSelect), refineOmitFieldsErrorMessage] as [
    (value: any) => boolean,
    { message: string }
  ];
