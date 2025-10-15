#!/bin/bash
find ./dbs/* -maxdepth 0 -type d | while read dir; do
    sed -i "12 a\\execSync('npx prettier ./src/lib --write', { cwd: __dirname })" "$dir/generate-schemas.js"
done
