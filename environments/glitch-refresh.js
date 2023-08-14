const { exec } = require("child_process");
exec("refresh", (err, stderr, stdout) => {
  if(err) console.error(err)
  if(stderr) console.error(stderr)
  if(stdout) console.info(stdout)
})
