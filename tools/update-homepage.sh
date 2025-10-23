#!/bin/bash

find ./libs/*/package.json ./plugins/*/package.json ./dbs/*/package.json ./samples/*/package.json -maxdepth 0 -type f | while read file; do
    echo "filepath: $file"
    sed -i 's|https://beemood.github.io/puq/|https://beemood.github.io/|g' "$file"

done
