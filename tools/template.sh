#!/bin/bash

# Add ".template" prefix to all files

for file in *.*; do
    mv "$file" "${file}.template"
done
