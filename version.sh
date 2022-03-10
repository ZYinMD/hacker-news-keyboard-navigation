#!/bin/bash
set -e

# update version in manifest
node version.cjs

# make new zip
rm -f dist.zip
cd src # cd in and cd out to avoid including the "src" folder in the zip
zip -r ../dist *
cd ..

# changes created by version.sh will need to be added before the automatic version commit
git add -A
