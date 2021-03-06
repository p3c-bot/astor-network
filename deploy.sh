#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'astor.host' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/p3c-bot/astor-network.git master:gh-pages

cd -
