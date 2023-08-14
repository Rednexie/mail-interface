fetch("https://floodmail.net/free/golab78232@viperace.com", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://floodmail.net",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
})
  .then((response) => response.text())
  .then((data) => {} /*console.log(data)*/)
  .catch((error) => console.error(error));
