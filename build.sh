#!/bin/bash

set -ex

rm -rf dist
mkdir dist
cp -r src/* dist/
postcss dist/**/*.css --replace
