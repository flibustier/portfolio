#!/usr/bin/env sh

# abort on errors
set -e

cdate=$(date +"%m-%d-%Y")

# build
pnpm build

# Source maps go to Bugsink, not to the site
./sourcemaps.sh

# navigate into the build output directory
cd dist

git init

# The files of the previous builds stay a week, for the pages opened before: the previous deploy is
# fetched to take them back
git fetch --depth 1 git@github.com:flibustier/portfolio.git gh-pages
../keep-old-assets.sh _astro FETCH_HEAD

git add -A
git commit -m $cdate
git switch -c gh-pages

git push -f git@github.com:flibustier/portfolio.git gh-pages

cd -