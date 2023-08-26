# [mail-interface](https://github.com/Rednexie/mail-interface)
e-mail spammer with node.js - with various interfaces


This repository was originally an e-mail spammer, using the subscription form in the website https://pardus.org.tr. After the vulnerability was reported by me, the website developers have taken action, and quickly fixed the issue. Now this repository is using floodmail.net's e-mail spam API. I can consider a collab if you have access to send e-mails either via smtp or an api. Or you can just use the repository with your own e-mail sender function, by exporting it from the module file `modules/sender.js`. 

# Supported Interfaces
- `index.js`: Application Programming Interface(API)
- `cli.js` Command Line Interface(CLI)
- `arg.js`: Arguments Interface

# Features: 
- Colored output using consoled.js
- Log the Date, IP Address, and the e-mail into both console and text file.
- Provides a JSON API.
- Provides command-line tools(readline and args).
- Customizable rate-limit, number of e-mails sent and the default delay between sending e-mails.

# Setup & Installation
Manually download, or clone the the repository. 

Move the needed setup file based on your environment from the folder scripts to the project folder, and run it.

For Unix based environments, please use `setup.sh`.

For Windows-based environments, please use one of the following files:
`setup.vbs`,
`setup.bat` 
or `setup.cmd`.

# Usage

Add your code that sends one e-mail into `modules/sender.js`, and setup the server.


- to make the api available, start the server: *node `index.js`*. 


This will listen the port 3000 by default, but you can customize it from `config.json`.
- to use the cli, run the file: *node `cli.js`*, and enter an e-mail adress along with the number of e-mails.
- to use arguments, run the file: *node `arg.js` e-mail times*

# Possible Update

Proxy configuration.

More interfaces, such as discord/guilded bots etc.


