module.exports = (email) => {

  fetch("https://floodmail.net/free/" + email.trim().split("@")[0] + "+" + Math.round(Math.random() * 10) + email.trim().split("@")[1], {
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
