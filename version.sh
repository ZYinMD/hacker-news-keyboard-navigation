#!/bin/bash
set -e

node version.cjs

# make new zip
rm -f dist.zip
cd src
zip -r ../dist *
cd ..

git add -A
