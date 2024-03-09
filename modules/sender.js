const fetch = require("node-fetch");
const cache = require("./cache.js");
function direct(email) {

module.exports = (mail) => {
fetch("https://www.pardus.org.tr/wp-json/contact-form-7/v1/contact-forms/1701/feedback", {
  "headers": {
    "accept": "application/json, */*;q=0.1",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundary0kwF942rg8jkMHlt",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.pardus.org.tr/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"_wpcf7\"\r\n\r\n1701\r\n------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"_wpcf7_version\"\r\n\r\n5.8.7\r\n------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"_wpcf7_locale\"\r\n\r\nen_US\r\n------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"_wpcf7_unit_tag\"\r\n\r\nwpcf7-f1701-p8387-o1\r\n------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"_wpcf7_container_post\"\r\n\r\n8387\r\n------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"_wpcf7_posted_data_hash\"\r\n\r\n2346f7dda6da4e8a51b621bc3679a887\r\n------WebKitFormBoundary0kwF942rg8jkMHlt\r\nContent-Disposition: form-data; name=\"e-mail\"\r\n\r\nswbgvn@hldrive.com\r\n------WebKitFormBoundary0kwF942rg8jkMHlt--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
});
