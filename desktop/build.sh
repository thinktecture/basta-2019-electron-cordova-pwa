#!/bin/bash

rm -rf .tmp
mkdir .tmp
mkdir .tmp/renderer
cp desktop-app/package.json .tmp/
cp desktop-app/*.js .tmp/
cp dist/basta2019/*.* .tmp/renderer
cd .tmp
npm install
electron-packager . --electron-version 6.0.10 --platform darwin --icon ./../gfx/tt.icns --out ../publish --overwrite true
