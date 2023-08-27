#!/bin/bash
echo https://github.com/Rednexie/mail-interface
echo
echo Welcome to mail-interface installer for Linux - Bash.
echo "This script will install the dependencies and help you to setup your server."
echo "Starting to install..."
echo
echo ------------------------------------------------------------------------------
if command -v which node >/dev/null 2>&1; then
  echo "node.js runtime environment is installed. continuing..."
else
  echo "node.js runtime environment is not installed, quitting..."
  read -p "Press enter to continue"
  exit 1
fi

if command -v which npm >/dev/null 2>&1; then
  echo "node package manager(npm) is installed, continuing..."
else
  echo "node package manager(npm) is not installed, quitting..."
  read -p "Press enter to continue"
  exit 1
fi

npm i consoled.js@1.0.4 express fs express-rate-limit node-fetch@2.6.1
echo ------------------------------------------------------------------------------
echo
echo "Installation is done."
echo "Thanks for using mail-interface"
