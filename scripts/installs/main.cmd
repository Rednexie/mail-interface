@echo off
if exist node_modules (
    echo node_modules folder already exists
) else (
    echo node_modules folder does not exist
    echo running npm i
    npm i
)
pause
