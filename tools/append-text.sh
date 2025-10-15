#!/bin/bash
find ./dbs/* -maxdepth 0 -type d | while read dir; do
    sed -i "5 a\\const { execSync } = require('child_process');" "$dir/generate-schemas.js"
done
