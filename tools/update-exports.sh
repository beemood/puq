#!/bin/bash

find ./dbs/*  -maxdepth 0 -type d | while read dir; do

# sed -i 's|"require": "./generated/runtime/library.js"|"require": "./generated/runtime/library.js","import": {"types": "./generated/runtime/library.d.ts","node": "./generated/runtime/library.js"}|g' "$dir/package.json"
# npx prettier --write $dir/package.json
done
