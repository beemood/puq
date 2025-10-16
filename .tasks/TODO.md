# TODO 

- [x] update the readme `favicon.png` path. Remove the `puq` part becuase the documents are under the libs, dbs,apps, and samples directories NOT puq. 


- [x] The runtime/library does not support "imports", add the import options to it. 
````json
"./runtime/library": {
   "import": {"types": "./generated/runtime/library.d.ts","node": "./generated/runtime/library.js"}
}

````


- [x] The current response for Not-Found entity from prisma exception filter is as follows. Optimize this response and hide internal information. 
````json
{
  "code": "P2025",
  "meta": {
    "modelName": "Category",
    "cause": "No record was found for a query."
  },
  "clientVersion": "6.17.1",
  "name": "PrismaClientKnownRequestError"
}


{
  "code": "P2002",
  "meta": {
    "modelName": "Category",
    "target": [
      "name"
    ]
  },
  "clientVersion": "6.17.1",
  "name": "PrismaClientKnownRequestError"
}

````

- [ ] When request contains two of select, omit, and include, the system throw Internal Error (PrismaClientValidationError), optimaize the Zod schemas so that it throws Unprocessable Entity error

- [ ] Grouped Projection schema is missing, the `create` opteration needs such a schema like `{ select: ..., omit:..., include:... }` but the system only provides `QueryOneSchema` which includes where property!. Create a seperate `ModelNameProjectionSchema` that includes `{select,omit, and include}`

- [ ]  `distinct: [.... ] ` option does not exist in QuerySchemas and QueryOneSchema! Create the distict option which is an enum schema that including all of model property names.



- [ ] Where proeprty queries does not allow the scalar values but require the FilterObject (IntFilterScheam, StringFilterSchema, ...). Fix the where schemas so that they allow scalar values withtout object schema such as for a string filter, I should be able to just say "some string" instead of providing an object `{ equals:"some string" }`


- [ ] The where property in the `QuerySchema and QueryOneSchema` such as `CategoryQuerySchema, CategoryQueryOneSchema` has issue. The x-to-one relations' where options are suppoed to be the target' models' OwnWhereSchema but it has `{ some: WhereSchem, every: WhereSchema, none: WhereSchema }`, which is correct for the x-to-many relations but not one. One must be just `whereSchema` not the some,every, none object.




- [ ] Optimize the zod error object. The current response is as follows. Make sure to throw Unprocessable entity error as an object 

````json 
{
  "name": "ZodError",
  "message": "[\n  {\n    \"expected\": \"boolean\",\n    \"code\": \"invalid_type\",\n    \"path\": [\n      \"select\",\n      \"id\"\n    ],\n    \"message\": \"Invalid input: expected boolean, received number\"\n  }\n]"
}
````


- [ ] Remove the "findOneBy" ("api/products/:property/:value") operation! It can be done by "findOne" advance query operation GET ("api/product?query....) or (api/products?query....)




