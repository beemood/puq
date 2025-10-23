#!/bin/bash

# Replace all place holders in the template files with ejs template.

for file in  do

  sed -i 's|https://beemood.github.io/puq/|https://beemood.github.io/|g' "$file"


done
