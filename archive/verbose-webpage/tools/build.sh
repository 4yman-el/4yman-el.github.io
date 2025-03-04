#!/bin/bash

# Overwrite note to main.js
printf "// This file is generated AUTOMATICALLY\n\n" > js-min/main.js \
 && echo "main.js overwritten."

for file in js-src/*.js js-src/*/*.js; do
    cat $file >> js-min/main.js \
     && echo "Add $file -> main.js"
done
