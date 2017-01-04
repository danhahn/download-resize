var fs = require('fs'),
    request = require('request'),
    mkdirp = require('mkdirp');

const folderPath = './files';

mkdirp(folderPath, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const files = ["https://i1.wp.com/c2.staticflickr.com/6/5711/30372923993_a671361c95_b.jpg?zoom=2&resize=489%2C214&ssl=1",
"https://i1.wp.com/c4.staticflickr.com/6/5836/30372924003_d256ab22f4_b.jpg?zoom=2&resize=489%2C657&ssl=1",
"https://i1.wp.com/c4.staticflickr.com/6/5516/30372923683_7aa4002f13_b.jpg?zoom=2&resize=489%2C594&ssl=1",
"https://i1.wp.com/c2.staticflickr.com/6/5746/30372924273_a000edc9b2_b.jpg?zoom=2&resize=489%2C751&ssl=1",
"https://i0.wp.com/c4.staticflickr.com/6/5746/30372923603_ab41ba8066_b.jpg?zoom=2&resize=489%2C596&ssl=1",
"https://i2.wp.com/c4.staticflickr.com/6/5675/30372923523_510c575d44_b.jpg?zoom=2&resize=489%2C607&ssl=1",
"https://i2.wp.com/c8.staticflickr.com/6/5799/30372924263_90cbc57704_b.jpg?zoom=2&resize=489%2C666&ssl=1",
"https://i1.wp.com/c1.staticflickr.com/6/5521/30812526600_870a6836bd_b.jpg?zoom=2&resize=489%2C586&ssl=1",
"https://i2.wp.com/c4.staticflickr.com/6/5738/30372924083_a961d854da_b.jpg?zoom=2&resize=489%2C761&ssl=1",
"https://i1.wp.com/c8.staticflickr.com/6/5792/30372924143_e40f47b7b7_b.jpg?zoom=2&resize=489%2C606&ssl=1",
"https://i1.wp.com/c6.staticflickr.com/6/5477/30372923933_03b1e607e9_b.jpg?zoom=2&resize=489%2C580&ssl=1",
"https://i1.wp.com/c4.staticflickr.com/6/5322/30372923843_1a7ba3c8c3_b.jpg?zoom=2&resize=489%2C805&ssl=1",
"https://i1.wp.com/c8.staticflickr.com/6/5583/30372924023_48ec18982e_b.jpg?zoom=2&resize=489%2C822&ssl=1",
"https://i2.wp.com/c4.staticflickr.com/6/5629/30372924163_33b1e381da_b.jpg?zoom=2&resize=489%2C731&ssl=1",
"https://i2.wp.com/c8.staticflickr.com/6/5622/30372923823_9f34b16ae5_b.jpg?zoom=2&resize=489%2C632&ssl=1",
"https://i1.wp.com/c4.staticflickr.com/6/5724/30372924203_336e052c90_b.jpg?zoom=2&resize=489%2C591&ssl=1",
"https://i2.wp.com/c5.staticflickr.com/6/5726/30358708524_55c9ecaa92_b.jpg?zoom=2&resize=489%2C673&ssl=1",
"https://i0.wp.com/c8.staticflickr.com/6/5687/30372923663_0d45917b4b_b.jpg?zoom=2&resize=489%2C657&ssl=1",
"https://i1.wp.com/c8.staticflickr.com/6/5595/30372924103_960c47974d_b.jpg?zoom=2&resize=489%2C663&ssl=1",
"https://i1.wp.com/c3.staticflickr.com/6/5822/30358708754_1daeb88a8d_b.jpg?zoom=2&resize=489%2C580&ssl=1",
"https://i0.wp.com/c1.staticflickr.com/6/5747/30358708864_c88f3f35a7_b.jpg?zoom=2&resize=489%2C594&ssl=1"];

const fileData = files.map( file => {
  return {
    uri: file,
    filename: file.match(/[\w-+.]*(.jpg|.png|.gif)/)[0],
  };
});

fileData.map( file => download(file.uri, `${folderPath}/${file.filename}.jpg`, () => console.log('done')));
