var main = require("./app.js");
var eraser  = require(`./eraser.js`);
var glob = require('./globalvar.js');


function editor(fullPrint, edit){
  var startPoint = Array.min(eraser.emptySpace);
  var editLength = edit.length;
  var spaceLength = fullPrint[startPoint].length;

  if(glob.point < editLength){
    console.log("Sharpen your pencil first");
  }else{
  
    if(editLength == spaceLength){
      fullPrint[startPoint] = edit;
    }
  ////////////////////////////////////////////////////
    if(editLength < spaceLength){
      var i = 0;
      while (i < editLength){
        var replaced = fullPrint[startPoint].replace(" ", edit.charAt(i));
        fullPrint[startPoint] = replaced;
        i++;
      }
    }
  ////////////////////////////////////////////////////
  console.log("bingggg");
    if(editLength > spaceLength){
      var tempString = "";
      var i = 0;

      while(editLength > tempString.length - 1){
        i++;
        var tempArray = fullPrint.slice(startPoint, startPoint + i);
        var tempString = tempArray.join(" ");
      }
      console.log("bing");
    //gather swapping letter positions
      var i = 0;
      var swapLetters = [];
      while(i < edit.length){
        if(tempString.charAt(i) !== " "){
          swapLetters.push(i);
        }
        i++;
      
      }
      console.log("bing");
    //adds extra letters onto tempString
      while(tempString.length > edit.length){
        var i = edit.length;
        edit += tempString.charAt(i);
      }
      console.log("bing");
    //Swap Letters
    var i = 0;
    var editSplitArray = edit.split("");
    while( i < swapLetters.length){
      var spot = swapLetters[i];
      editSplitArray[spot] = "%";
      i++; 
    }
    swappedLetters = editSplitArray.join("");
    console.log(swappedLetters);
    edit = swappedLetters;
    console.log("bing");
    //pushes the tempString to fullPrint
      tempString = edit;
      fullPrint.splice(startPoint, i, tempString);
    }
    console.log("bing");
    
    console.log(" ");
    main.printText();
}
}

Array.min = function( array ){
  return Math.min.apply( Math, array );
};
module.exports.editor = editor;