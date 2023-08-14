
const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname, "../.replit")


fs.readFile(filePath, 'utf8', (err, data) => {

  if (err) {
    console.error(err);
    return console.log('.replit dosyası bulunamadı.')
  }

  const regex = /liveReload\s*=\s*(true|false)/;
  if (regex.test(data)) {
    const newData = data.replace(regex, 'liveReload = true');

    fs.writeFile(filePath, newData, 'utf8', (err) => {

      if (err) {
        console.error(err);
        return;
      }

      console.log('liveReload parametresi true olarak ayarlandı.');
    });
  } else {

    const newData = data + '\nliveReload = true\n';

    fs.writeFile(filePath, newData, 'utf8', (err) => {

      if (err) {
        console.error(err);
        return;
      }

      console.log('liveReload parametresi eklendi ve true olarak ayarlandı.');
    });
  }
});
