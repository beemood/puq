#!/bin/bash


find ./libs/* ./plugins/* ./dbs/* ./samples/* -maxdepth 0 -type d |  while read dir; do

    echo "Directory: $dir"
    # append
    # sed -i "3 a\\$1" "samples/$dir/package.json"
done
