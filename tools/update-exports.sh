#!/bin/bash

find ./dbs/*  -maxdepth 0 -type d | while read dir; do

# $input = "require": "./generated/runtime/library.js","import": {"types": "./generated/runtime/library.d.ts","node": "./generated/runtime/library.js"}
    sed -i 's|"require": "./generated/runtime/library.js"|"require": "./generated/runtime/library.js","import": {"types": "./generated/runtime/library.d.ts","node": "./generated/runtime/library.js"}|g' "$dir/package.json"

done
