  
//global variables
var glob = require(`./globalvar.js`);
var main = require('./app');

function countLetters(txtInput){
  var lowerActual = 0;
  var upperActual = 0;
  var lowerCheck = /[a-z]/g;
  var upperCheck = /[A-Z]/g;
  var lowerTest = lowerCheck.test(txtInput);
  var upperTest = upperCheck.test(txtInput);
  
  if (lowerTest === true){
    var lowerCount = txtInput.match(lowerCheck);
    var lowerActual = lowerCount.length;
  }
  if (upperTest === true){
    var upperCount = txtInput.match(upperCheck);
    var upperActual = upperCount.length;
  }

  var pointDeg = lowerActual + (upperActual * 2);

  console.log(" ");
  console.log("Pencil tip Degraded by " + pointDeg);

  if(glob.point > 0){
    if (pointDeg > glob.point){
    splitText(txtInput,pointDeg);
    } else{
    degradeAndPush(pointDeg, txtInput);
    }
  }else{
    console.log("sharpen your pencil");
  }

  console.log(" ");
  main.printText();
}

function degradeAndPush(pointDeg, txtInput){
  glob.point = glob.point - pointDeg;
  words = txtInput.split(" ");
  
  var i;
  for (i = 0; i < words.length; i++) { 
    main.fullPrint.push(words[i]);
  }
  console.log("Your point has " + glob.point + " Remaining");
  };

function splitText(txtInput,pointDeg){
  txtInputSliced = txtInput.slice(0, glob.point);
  degradeAndPush(pointDeg, txtInputSliced);
}


module.exports.countLetters = countLetters;
