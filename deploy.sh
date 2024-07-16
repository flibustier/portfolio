#!/usr/bin/env sh

# abort on errors
set -e

cdate=$(date +"%m-%d-%Y")

# build
pnpm build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m $cdate

git push -f git@github.com:flibustier/flibustier.github.io.git gh-pages

cd -