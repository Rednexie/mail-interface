fetch("https://tmbi-ps.azurewebsites.net/api/login/ForgotPassword", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://www.tasteofhome.com/reset-password/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "Email=golab78232%40viperace.com",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

fetch("https://mapi.yummly.com/mapi/v19/auth/auth-email", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "cache-control": "public, no-store",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "x-visitor": "VJY0_uc7tVEl6f5PseVKS",
    "x-yummly-locale": "en-US",
    "x-yummly-type": "Yummly.com"
  },
  "referrer": "https://www.yummly.com/",
  "referrerPolicy": "origin-when-cross-origin",
  "body": "type=email&email-address=golab78232%40viperace.com&password=undefined&app=web&cookie=true",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

fetch("https://auth.lush.com/dbconnections/change_password", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "auth0-client": "eyJuYW1lIjoibG9jay5qcy11bHAiLCJ2ZXJzaW9uIjoiMTEuMjcuMiIsImVudiI6eyJhdXRoMC5qcy11bHAiOiI5LjE0LjAiLCJhdXRoMC5qcyI6IjkuMTQuMCJ9fQ==",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://auth.lush.com/login?state=hKFo2SBrMUUwQUZ6dWI1Ymdpb05vamUwakVEVjhIYzI5ak0wUqFupWxvZ2luo3RpZNkgU2g4VzYwaW5EdzUwMlE1SkNvbUNHWHcya0hwdXN3d2ajY2lk2SA4dkpORGp5UThqT1JsSXdUZUlnYlA2aWpGNEhHZFhoNg&client=8vJNDjyQ8jORlIwTeIgbP6ijF4HGdXh6&protocol=oauth2&scope=openid%20profile%20email%20offline_access&response_type=code&redirect_uri=https%3A%2F%2Fwww.lush.com%2Fapi%2Fauth%2Fcallback&audience=https%3A%2F%2Fwww.lush.com%2Fpermissions&returnTo=https%3A%2F%2Fwww.lush.com&logoReturnTo=https%3A%2F%2Fwww.lush.com&ui_locales=en&initialScreen=login&nonce=zx2IpB6FC9xO3J8BSeHJFdnd4IVqEkTdCbZZbuLDBBU&code_challenge=e7jXUJQylmExrUjIHxrFO_Yt8dJRUT7prAB_AXmQOpI&code_challenge_method=S256",
  "referrerPolicy": "same-origin",
  "body": "{\"client_id\":\"8vJNDjyQ8jORlIwTeIgbP6ijF4HGdXh6\",\"email\":\"golab78232@viperace.com\",\"connection\":\"Username-Password-Authentication\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
