  const fs = require("fs");
  const consoled = require("consoled.js") // consoled.js by rednexie
  const express = require("express");
  const ratelimit = require("express-rate-limit");
  const app = express();
  const fetch = require("node-fetch") // npm i node-fetch@2.6.1
  const log = require("./modules/log.js");
  const sender = require("./modules/sender");
  const valid = require("./modules/valid");
  const { times, delay, max } = require("./config.json").api
  const { port, rate } = require("./config.json")
  
  app.set('json spaces',2);  
  app.set('trust proxy', 'loopback');

  app.use(ratelimit({
    windowMs: 1 * 60 * 1000, 
    max: rate,
    handler: (req, res, next) => {
      res.status(403).json({
        status: "error",
        message: "rate limited"
      })
    } 
  }))


  app.get("/:id", (req, res) => {
    if(!req.params.id) return res.status(401).json({
        status: "error",
        message: "no email provided",
        usage: "/example@mail.com"
      });
    
    const ip = req.headers['x-real-ip']?.replace("::ffff:","") || req.headers['x-forwarded-for'].split(",")[0].replace("::ffff:","") || req.connection.remoteAddress;
    const email = decodeURIComponent(req.params.id);
    const times = req.query.times || 500;
    if(valid(email) == false){
        return res.status(400).json({
          status: "error",
          message: "invalid email",
        })
      }
    
    if(isNaN(Number(times))) return res.status(400).json({
          status: "error",
          message: "times must be a number",
        })
    if(times > max) return res.status(400).json({
      status: "error",
      message: "max emails can be sent in one request is: " + max
    })
    if(times < 1) return res.status(400).json({
      status: "error",
      message: "times must be positive"
    });
    
    
    
    log("\n[" + new Date().toLocaleString("tr-TR") + "]" + ip + " => " + email + " x" + Math.round(times))
    consoled.bright.blue("[" + new Date().toLocaleString("tr-TR") + "] " + ip + " => " + email + " x" + Math.round(times))
    
    for(let i = 0; i < Number(times) + 1; i++){
      setTimeout(() => {
        sender(email)
      }, Math.round(delay))
    }
    
      res.status(200).json({
        "status": "success",
        "message": "successfully sent " + Math.round(times) + " e-mails."
      })
    
  })

  app.get("/", async(req, res) => {
    
      if(!req.query.mail) return res.status(401).json({
        status: "error",
        message: "no email provided",
        usage: "?mail=example@mail.com"
      });
    
    
    const ip = req.headers['x-real-ip']?.replace("::ffff:","") || req.headers['x-forwarded-for'].split(",")[0].replace("::ffff:","") || req.connection.remoteAddress;
    const email = req.query.mail.trim()
    const times = req.query.times || 500;
    if(isNaN(Number(times))) return res.status(400).json({
          status: "error",
          message: "times must be a number",
    })
        if(times > max) return res.status(400).json({
      status: "error",
      message: "max emails can be sent in one request is: " + max
    })
    if(times < 1) return res.status(400).json({
      status: "error",
      message: "times must be positive"
    });
    
    if(email == null || typeof email != "string"){
      return res.status(401).json({
        status: "error",
        message: "no email provided",
        usage: "/?mail=example@mail.com"
      });
    }
      if(valid(email) == false){
        return res.status(400).json({
          status: "error",
          message: "invalid email",
        })
      }

  
      log("\n[" + new Date().toLocaleString("tr-TR") + "] " + ip + " => " + email + " x" + times)
      consoled.bright.blue("[" + new Date().toLocaleString("tr-TR") + "]" + ip + " => " + email + " x" + times)
      
    for(let i = 0; i < Number(times) + 1; i++){
      setTimeout(() => {
        sender(email)
      }, Math.round(delay))
    }

      res.status(200).json({
        "status": "success",
        "message": "successfully sent " + Math.round(times) + " e-mails."
      })
    
  })
  consoled.bright.magenta("mail-interface by rednexie")
  consoled.bright.magenta("https://github.com/Rednexie/mail-interface")
  app.listen(port, () => {
    consoled.bright.blue("Listening on port: " + port)
  })
