#!/bin/bash
if [ -d "node_modules" ]; then
    echo "node_modules folder already exists"
else
    echo "node_modules folder does not exist"
    echo "running npm i"
    npm i
fi
