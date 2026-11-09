#!/usr/bin/env sh 
set -e 
pnpm run docs:build 
cd dist 
git init 
git add -A 
git commit -m 'deploy' 
echo "The course is published by the root personal-site build."
echo "Run 'pnpm docs:build' here, then copy src/.vuepress/dist/ to courses/fpga-system-design/."
cd -
