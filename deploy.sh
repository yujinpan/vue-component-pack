#!/usr/bin/env sh

npm run docs:build

cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
