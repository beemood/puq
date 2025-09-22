import z from "zod";
import { toWhereRecord } from "./to-where-record.js";

describe("toWhereRecord", () => {


    it('should convert the object schema into where record', () => {


        const whereSchema = toWhereRecord(z.object({ name: z.string() }));
        expect(whereSchema).toBeDefined();
        expect(whereSchema.parse({ name: { equals: "" } })).toEqual({ name: { equals: '' } })
    })
})