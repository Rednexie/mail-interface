const fetch = require("node-fetch");

module.exports = (email) => {
  fetch(
    "https://www.pardus.org.tr/wp-json/contact-form-7/v1/contact-forms/18514/feedback",
    {
      headers: {
        accept: "application/json, */*;q=0.1",
        "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundaryKiovsaJILejIAeqg",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      referrer: "https://www.pardus.org.tr/en/home/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body:
        '------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="_wpcf7"\r\n\r\n18514\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="_wpcf7_version"\r\n\r\n5.7.7\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="_wpcf7_locale"\r\n\r\nen_US\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="_wpcf7_unit_tag"\r\n\r\nwpcf7-f18514-p18505-o1\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="_wpcf7_container_post"\r\n\r\n18505\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="_wpcf7_posted_data_hash"\r\n\r\n\r\n------WebKitFormBoundaryKiovsaJILejIAeqg\r\nContent-Disposition: form-data; name="e-mail"\r\n\r\n' +
        email +
        "\r\n------WebKitFormBoundaryKiovsaJILejIAeqg--\r\n",
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  )
    .then((res) => res.text())
    .then((data) => {})
    .catch((err) => console.error(err));
};



module.exports.mail = (email) => {



fetch("https://news.easypanel.io/subscription/form", {
  method: 'POST',
  headers: {
    'Cache-Control': 'max-age=0',
    'Sec-Ch-Ua': '"Not(A:Brand";v="24", "Chromium";v="122"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Upgrade-Insecure-Requests': '1',
    'Origin': 'https://easypanel.io',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'Referer': 'https://easypanel.io/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    'Priority': 'u=0, i',
  },
  body: "email=" + email + "&l=adbdd93a-f80a-4639-8e1e-1aa6cbfaa91f"
})
  .then(response => {
    if (response.ok) {
      return response.text(); // You can use response.json() if the response is in JSON format
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    console.log('Received data:', data);
    // Handle the data as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error
  });

  






