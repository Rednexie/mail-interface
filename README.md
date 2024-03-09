# [mail-interface](https://github.com/Rednexie/mail-interface)
e-mail spammer with node.js - with various interfaces




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


You can just type ```npm i```, or use my installers to setup the server:


Move the needed setup file based on your environment from the folder scripts to the project folder, and run it.

For Unix based environments, please use `setup.sh`.

For Windows-based environments, please use one of the following files:
`setup.vbs`,
`setup.bat` 
or `setup.cmd`.

# Usage

Add your code that sends one e-mail into `modules/sender.js`, and setup the server.


- to make the api available, start the server: ```node index.js```


This will listen the port 3000 by default, but you can customize it from `config.json`.
- to use the cli, run the command line interface: ```node cli.js```
and enter an e-mail adress along with the number of e-mails.
- to use arguments, run the file: ```node arg.js <e-mail> <times>```

# Possible Updates
5 stars:
- ⭐ Cloud hosting platform integration
- ⭐ More mails

10 Stars: 
- ⭐ Proxy configuration
- ⭐ More logging options(mysql, mongodb, perma.db, json etc.)

25 stars:
- ⭐ Discord & Guilded Bot

50 stars:
- ⭐ Web Panel with accounts, admin, csrf protection etc.




Thanks for using mail-interface.
