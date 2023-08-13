@echo off
color a
echo.
echo Welcome to mailer-template installer for Windows.
echo "This script will install the dependencies and help you to setup your server."
echo "Starting to install..."
echo.
echo ------------------------------------------------------------------------------
where node >nul 2>&1
if %errorlevel% equ 0 (
  echo node.js runtime environment is installed. continuing...
) else (
  echo node.js runtime environment is not installed, quitting...
  pause
  pause
)
where npm >nul 2>&1
if %errorlevel% equ 0 (
  echo node package manager(npm) is installed, continuing...
) else (
  echo node package manager(npm) is not installed, quitting...
  pause
)

npm i consoled.js@1.0.4 express fs express-rate-limit node-fetch@2.6.1
echo ------------------------------------------------------------------------------
echo.
echo "Installation is done."
echo "Thanks for using mailer-template"
