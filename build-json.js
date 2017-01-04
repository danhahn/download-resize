var fs = require('fs'),
    mkdirp = require('mkdirp');

const folderPath = './files';
const dataFolder = `${folderPath}/data`

mkdirp(dataFolder, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

fs.readdir(folderPath, (err, files) => {
  fs.writeFile(`${dataFolder}/cmf.js`,JSON.stringify(files.reduce((a,b) => {
    if(!b.includes('.DS_Store') && !b.includes('_sm')) {
      return [
        ...a,
        {
          name: "",
          modelNumber: 0,
          disc: "",
          file: b
        }
      ];
    }
    return a;
  }, [])), function (err) {
   if (err) return console.log(err);
   console.log('saved!');
 });
});
