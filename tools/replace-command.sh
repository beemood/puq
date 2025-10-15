#!/bin/bash
find ./dbs/* -maxdepth 0 -type d | while read dir; do


    sed -i 's|"commands": [
            "npx prisma migrate reset --force",
            "npx prisma migrate dev --name updated",
            "npx prisma generate"
          ],|"commands": [
            "npx prisma migrate reset --force"
          ],|g' "$dir/package.json"
    
done
