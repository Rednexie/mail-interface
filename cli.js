const readline = require("readline")
const consoled = require("consoled.js")
const fetch = require("node-fetch") // npm i node-fetch@2.6.1
const { times, delay } = require("./config.json").cli;
const valid = require("./modules/valid")
const sender = require("./modules/sender")

let mail = "";

function prompt(question, callback) {
  if (question === undefined) return false;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question + " => ", (answer) => {
    rl.close();
    callback(answer);
  });
}

function callback(email) {
  if(valid(email.trim()) == false) {
    consoled.bright.red("Please enter a valid e-mail.")
    return prompt("Please enter an e-mail to spam", callback)
  }
  mail = email;
  prompt("How much times do you want to send?", send)
}

function send(times){
  if(isNaN(Number(times))){
    consoled.bright.red("Please enter a valid number.")
    return prompt("How much times do you want to send?", send)
  }
  if(Math.round((Number(times))) < 1){
    consoled.bright.red("Please enter a positive number")
    return prompt("How much times do you want to send?", send)
  }
  
  for(let i = 0; i < times + 1; i++){
    setTimeout(() => {
      sender(mail);
    },delay)
  }
}


consoled.bright.blue("Welcome to mailer-cli <3");
consoled.bright.magenta("https://github.com/Rednexie/mailer-cli");

  prompt("Please enter an e-mail to spam:", callback)
