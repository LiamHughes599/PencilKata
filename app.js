var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var Eraser = require('./eraser.js');
var count = require('./Count.js');
var editer = require('./editer.js');
var pencil = require('./pencil.js');

var fullPrint = ["You have written:"];
var pLength = 5;

var eraserDeg = 20;

console.log(" "); // Line Break

console.log("Welcome to my Pencil Kata!");
console.log("Enter text to write with a number 2 Pencil.");
console.log("Type `exit` to exit.");
console.log("Type `help` for list of commands");

console.log(" "); // Line Break

startInput();

function startInput(){
  rl.on('line', function (txtInput){
    switch (txtInput.toLocaleLowerCase().trim()){
      case "exit":
        rl.close();
        break;

      case "help":
          console.log(" ");
          console.log("Type `sharpen` to sharpen your pencil.");
          console.log("Type `new pencil` to grab a new pencil");
          console.log("Type `erase` to erase the first instance of a word");
          console.log("Type `edit` to enter a word into the first available blank space");
        break;
        
      case "sharpen":
        pencil.sharpen(pLength);
        break;
      
      case "new pencil":
        pencil.newPencil(pLength, eraserDeg);
        break;

      case "erase":
        
        rl.question('Enter the word you would like erased, or type `back` to go back.', (erase) =>{
          if (erase.toLowerCase().trim() === `back`){ 
            //Do nothing
          }else{
            Eraser.eraser(fullPrint, erase); 
          }
          })
        break;

      case "edit":
        if(fullPrint.length == 1){
          console.log("There's nothing to edit.");
          console.log(" "); 
         }
         if(Eraser.emptySpace.length == 0){
          console.log("You haven't erased anything yet.");
          console.log(" "); 
         }else{
          console.log("Enter `back` to go back.");
          rl.question('Enter what you would like to fill the blanks:', (edit) =>{
            if (edit.toLowerCase().trim() === `back`){ 
              //Do nothing
            }else{
              editer.editor(fullPrint, edit);
            }
          }) 
        }
        break;

      default:
          count.countLetters(txtInput);  
    }
    
  })
}

function printText(){
  console.log(fullPrint.join(" "));
  console.log(" "); // line break
 
}

module.exports.fullPrint = fullPrint;
module.exports.printText = printText;
module.exports.eraserDeg = eraserDeg;
module.exports.eraserDeg = eraserDeg;
module.exports.pLength = pLength;
