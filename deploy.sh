#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn generate

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:flibustier/flibustier.github.io.git master

cd -