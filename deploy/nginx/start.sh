#!/bin/sh
set -e

cd /app/dist

echo "window.__getBase = function() { return '$BASE_URL' }" > runtime.js
sed -i "s#/BASE_PLACEHOLDER/#$BASE_URL#g" ./index.html

nginx $@
