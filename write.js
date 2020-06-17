
var writeOnScreen = function write(){
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter text here: `, (text) => {
  
    readline.close()
    var UI = `${text}`;
    console.log(UI);
  })
};
module.exports = WriteOnScreen;