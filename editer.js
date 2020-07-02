var main = require('./app.js');
var eraser  = require('./eraser.js');
var glob = require('./globalvar.js');


function editor(fullPrint, edit){
  var startPoint = eraser.emptySpace[eraser.emptySpace.length - 1];
  var editLength = edit.length;
  var spaceLength = fullPrint[startPoint].length;

  if(glob.point < editLength){
    console.log("Sharpen your pencil first");
  }else{ 

  ///if the edit length is equal to the space given
    if(editLength == spaceLength){
      fullPrint[startPoint] = edit;
    }
  ///if the edit length is less than space given
    if(editLength < spaceLength){
      var i = 0;
      while (i < editLength){
        var replaced = fullPrint[startPoint].replace(" ", edit.charAt(i));
        fullPrint[startPoint] = replaced;
        i++;
      }
    }
  ///if the edit length is greater than the space given
    if(editLength > spaceLength){
      //runs if there is no word after the empty space point 
      if(fullPrint.length < startPoint +2){
        var tempString = "";
        while(editLength > tempString.length){
          if(fullPrint.length <= startPoint + 1){
            fullPrint.push(" ");
          }
          if(fullPrint.length > startPoint + 1){
            var tempArray = fullPrint.slice(startPoint, startPoint + 1);
            var tempString = tempArray.join(" ");
            fullPrint[startPoint] = fullPrint[startPoint] + fullPrint[startPoint + 1];
            fullPrint.pop();
          }
        }
      tempString = edit;
      fullPrint[startPoint] = edit;
      }else{
        var tempString = "";
        var i = 0;

        while(editLength > tempString.length - 1){
          i++;
          var tempArray = fullPrint.slice(startPoint, startPoint + i);
          var tempString = tempArray.join(" ");
        }
        
      //gather swapping letter positions
        var i = 0;
        var swapLetters = [];
        while(i < edit.length){
          if(tempString.charAt(i) !== " "){
            swapLetters.push(i);
          }
          i++;
        
        }
      
      //adds extra letters onto tempString
        while(tempString.length > edit.length){
          var i = edit.length;
          edit += tempString.charAt(i);
        }
       
      //Swap Letters
      var i = 0;
      var editSplitArray = edit.split("");
      while( i < swapLetters.length){
        var spot = swapLetters[i];
        editSplitArray[spot] = "%";
        i++; 
      }
      swappedLetters = editSplitArray.join("");

      edit = swappedLetters;
      //pushes the tempString to fullPrint
        tempString = edit;
        fullPrint.splice(startPoint, i, tempString);
      }
      

    }
    main.printText();
  }
}

Array.min = function( array ){
  return Math.min.apply( Math, array );
};
module.exports.editor = editor;