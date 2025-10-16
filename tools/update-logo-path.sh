#!/bin/bash
find ./dbs/* ./libs/*  -maxdepth 0 -type d | while read dir; do

    sed -i 's|https://beemood.github.io/puq|https://beemood.github.io|g' "$dir/README.md"

done
