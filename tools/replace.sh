#!/bin/bash

# Replace all place holders in the template files with ejs template.

for file in "*/**/*.template"; do

    sed -i 's|libs/sample-name|<%- projectDirectory %>|g' "$file"
    sed -i 's|@puq/sample-name|<%- projectName %>|g' "$file"
    sed -i 's|SampleName|<%- className %>|g' "$file"
    sed -i 's|sample-name|<%- fileName %>|g' "$file"
    sed -i 's|SAMPLE_NAME|<%- constantName %>|g' "$file"
    sed -i 's|sampleName|<%- propertyName %>|g' "$file"

done
