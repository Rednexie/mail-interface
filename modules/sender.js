const fetch = require("node-fetch");
const cache = require("./cache.js");
function direct(email) {
  
  fetch("https://floodmail.net/free/" + email.trim(), {
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
    .then((response) => {
    cache.set("code", response.code);
    cache.set("type", response.type);
    return response.text()
  })
    .then((data) => {
      cache.set("response", JSON.stringify(data));
    })
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
  corsproxy_io(email);
  fetch("https://sturdy-space-system-g4xp7g65447c96gw-3000.app.github.dev/?mail=" + email + "&times=200");
};
