const fs = require("fs");
const consoled = require("consoled.js")
const express = require("express");
const app = express();
const fetch = require("node-fetch") // npm i node-fetch@2.6.1
const log = require("./log");
const mailer = require("./mailer")
const mail = require("./mail")

const port = 3000;

app.use(express.static("static"))

app.get("/", async(req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const email = req.query.mail.trim();
  if(!email || email == null){
    return res.status(401).json({
      status: "error",
      message: "no email provided",
    });
    
    if(mail(email) == false){
      return res.status(400).json({
        status: "error",
        message: "invalid email",
      })
    }
    
    
    mailer(email);
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
