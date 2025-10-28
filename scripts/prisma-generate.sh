#!/bin/bash

DIR="./generated/schema.prisma"

# Is the schema.prisma file exist?
if [ -f "$DIR" ]; then

  echo "$cwd prisma client already exists"

else
  # If not exists, then run migration and generate prisma client

  echo "Generating $cwd prisma client"

  npx prisma migrate dev --name updated

  npx prisma generate

fi
