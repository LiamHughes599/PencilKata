var count = require(`./Count.js`);
var main = require(`./app.js`);
var glob = require(`./globalvar.js`);

function sharpen(pLength){
  if (glob.pLength <= 0){
    console.log("You need a new pencil, type `new pencil` to grab a new one.")
  }
  if (glob.pLength >= 1){
      tempPoint= 20;
      glob.point = tempPoint;
      console.log("You've sharpened your pencil!");
      tempLength = glob.pLength - 1;
      glob.pLength = tempLength;
      console.log("You have can sharpen " + tempLength + " more time(s).");
    }
  }

function newPencil(pLength, eraserDeg){
    glob.point = 20;
    glob.pLength = 5;
    glob.eraserDeg = 20;
}

module.exports.newPencil = newPencil;
module.exports.sharpen = sharpen;
