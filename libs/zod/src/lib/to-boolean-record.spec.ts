import z from "zod";
import { toBooleanRecord } from './to-boolean-record.js';

describe("toBooleanRecord", () => {

    const objectSchema = z.object({
        name: z.string()
    });

    it('should convert object schemea into boolean record schema', () => {
        const booleanRecord = toBooleanRecord(objectSchema);
        expect(booleanRecord.parse({ name: true })).toEqual({ name: true })
        expect(() => booleanRecord.parse({ name: "some'" })).toThrowError();
    })
})