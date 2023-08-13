const fs = require("fs");
const consoled = require("consoled.js") // consoled.js by rednexie
const express = require("express");
const ratelimit = require("express-rate-limit");
const app = express();
const fetch = require("node-fetch") // npm i node-fetch@2.6.1
const log = require("./modules/log.js");
const sender = require("./modules/sender");
const valid = require("./modules/valid");
const { times, delay, rate} = require("./config.json").api
const { port } = require("./config.json")


app.use(ratelimit({
  windowMs: 1 * 60 * 1000, 
  max: rate 
}))


app.get("/", async(req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const email = req.query.mail.trim();
  if(!email || email == null){
    return res.status(401).json({
      status: "error",
      message: "no email provided",
    });
    
    if(valid(email) == false){
      return res.status(400).json({
        status: "error",
        message: "invalid email",
      })
    }
    
    
    sender(email);
    log("[" + new Date().toLocaleString() + "]" + ip + " => " + email)
    
    consoled.bright.green(ip + " => " + email)
    
    res.status(200).json({
      "status": "success",
      "message": "500 emails sent."
    })
  }
})

app.listen(port, () => {
  consoled.bright.blue("Listening on port: " + port)
})
