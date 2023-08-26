const readline = require("readline")
const consoled = require("consoled.js")
const fetch = require("node-fetch") // npm i node-fetch@2.6.1
const { times, delay } = require("./config.json").cli;
const valid = require("./modules/valid")
const sender = require("./modules/sender")
const log = require("./modules/log.js");
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
  
  log("\n[" + new Date().toLocaleString("tr-TR") + "]" + "cli" + " => " + mail + " x" + Math.round(times))
  consoled.bright.green(`Sending ${times} ${times == 1 ? "email" : "emails"} to: ${mail}`)
  
  for(let i = 0; i < times + 1; i++){
    setTimeout(() => {
      sender(mail);
    },delay)
  }
  
}


consoled.bright.blue("Thanks for using mail-interact <3");
consoled.bright.magenta("https://github.com/Rednexie/mail-interact");

  prompt("Please enter an e-mail to spam:", callback)
