#!/bin/bash

DIR="./generated/schema.prisma"

# Is the schema.prisma file exist?
if [ -f "$DIR" ]; then

  echo "prisma client already exists"

else
  npx prisma migrate dev --name updated
  npx prisma generate
fi
