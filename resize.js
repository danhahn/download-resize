var fs = require('fs')
  , gm = require('gm');

// gm('./files/30358708524_55c9ecaa92_b.jpg')
//   .resize(240, 240 + ">")
//   .gravity('Center')
//   .extent(240, 240)
//   .write('./files/30358708524_55c9ecaa92_b_sm.jpg', function (err) {
//   if (!err) console.log('done');
// });


// var size = {width: 200, height: 200};
// gm('./files/30358708524_55c9ecaa92_b.jpg')
//   .resize(size.width, size.height + ">")
//   .gravity('Center')
//   .extent(size.width, size.height)
//   .write('./files/30358708524_55c9ecaa92_b_sm.jpg', function (error) {
//     if (error) console.log('Error - ', error);
//   });

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
