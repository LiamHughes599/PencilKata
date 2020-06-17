var readline = require('readline');
var main = require("./app.js");
var eraser  = require(`./eraser.js`);

function editor(fullPrint, edit){
  var startPoint = Array.min(eraser.emptySpace);
  console.log(startPoint);

  var editLength = edit.length;
  var spaceLength = fullPrint[startPoint].length;

  if(editLength == spaceLength){
    fullPrint[startPoint] = edit;
    
  }

  if(editLength < spaceLength){
    var i = 0;
    while (i < editLength){
      var rep = fullPrint[startPoint].replace(" ", edit.charAt(i));
      fullPrint[startPoint] = rep;
      i++;
    }
  }

  if(editLength > spaceLength){
    while(editLength > spaceLength){
      fullPrint[startPoint] = fullPrint[startPoint] + " " + fullPrint[startPoint + 1];
      fullPrint.splice(startPoint + 1, 1);
    
      var i = 0;
      while(i < editLength){

        if(i > spaceLength){
          var rep2 = fullPrint[startPoint].replace(fullPrint[startPoint].charAt(i), "@");
          fullPrint[startPoint] = rep2;
        }

        if(i <= spaceLength){
          var rep1 = fullPrint[startPoint].replace(" ", edit.charAt(i));
          fullPrint[startPoint] = rep1;
        }
        i++;
        console.log("i is at " + i);
      }  
      console.log("editlength is at " + editLength);
      console.log("spacelenght is at " + spaceLength);
      spaceLength = fullPrint[startPoint].length;
    }
    
  }  
  console.log(" ");
  main.printText();
}

Array.min = function( array ){
  return Math.min.apply( Math, array );
};
module.exports.editor = editor;