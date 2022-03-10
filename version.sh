#!/bin/bash
set -e

node version.cjs

# make new zip
rm -f dist.zip
zip -r dist src/*

git add -A
