#!/bin/sh
set -e

cd /app/dist

echo "window.__getBase = function() { return '$BASE' }" > runtime.js
sed -i "s#/BASE_PLACEHOLDER/#$BASE#g" ./index.html

nginx $@
