const {v4} = require('uuid');
const fs = require('fs');

const options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date('2011-11-01').getTime(),
  nsecs: 5678,
};

const [id] = v4(options).split('-');

fs.copyFileSync('./index.html', `./replace-the-name-${id}.html`)
