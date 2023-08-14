  const consoled = require("consoled.js")
  const sender = require("./modules/sender");
  const valid = require("./modules/valid");
  const log = require("./modules/log.js");
  let { delay } = require("./config.json").cli;
  const email = process.argv[2];
  const times = Math.round(process.argv[3]);
  delay = process.argv[4] || delay || 10



  if(!email) {
    consoled.bright.cyan("Usage: node arg.js <email> <times>")
    consoled.bright.red("Error: No e-mail provided")
    process.exit(0)
  }

  if(!times) {
    consoled.bright.cyan("Usage: node arg.js <email> <times>")
    consoled.bright.red("Error: No times provided")
    process.exit(0)
  }

  if(valid(email) == false){
    consoled.bright.red("Error: Invalid e-mail provided!");
    process.exit(0)
  }

  if(isNaN(Number(times))){
    consoled.bright.red("Error: times must be a number!");
    process.exit(0)
  }

  if(Number(times) < 1){
    consoled.bright.red("Error: times must be greater than 0.");
    process.exit(0)
  }
  log("[" + new Date().toLocaleString("tr-TR") + "]" + "arg" + " => " + email + " x" + Math.round(times))
  consoled.bright.green(`Sending ${times} ${times == 1 ? "email" : "emails"} to: ${email}`)

  for(let i = 0; i < times + 1; i++){
    setTimeout(() => {
      sender(email)
    },Math.round(delay))
  }
