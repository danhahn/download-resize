var fs = require('fs')
  , gm = require('gm');

const testFolder = './files/';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if(!file.includes('.DS_Store')) {
      var fileParts = file.split('.');
      const [ fileName , exctention ] = fileParts;
      gm(`./files/${file}`)
        .resize(240, 240 + ">")
        .gravity('Center')
        .extent(240, 240)
        .write(`./files/${fileName}_sm.${exctention}`, function (err) {
        if (!err) console.log('done');
      });
    }
  });
})
