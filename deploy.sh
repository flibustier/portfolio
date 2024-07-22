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
git switch -c gh-pages

git push -f git@github.com:flibustier/portfolio.git gh-pages

cd -