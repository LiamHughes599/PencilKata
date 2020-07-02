var main = require('./app');

var emptySpace = [];

function eraser(fullPrint, erase, eraserDeg){
    console.log("you wish to erase " + erase);

    var index = main.fullPrint.lastIndexOf(erase);
    

    if(index == -1){
        console.log("Hmm, Can't seem to find that. Why don't you try again? (Hint: You might need to add a space somewhere)");
    }else{
        var spaces = main.fullPrint[index].length;
        if(spaces > eraserDeg){
            console.log("You don't have enough eraser tip to do that. Please grab a new pencil.");
        }else{
            eraserDeg = eraserDeg -  spaces;
            main.fullPrint[index] = " ";
            for (i = 1; i < spaces; i++){
                main.fullPrint[index]= main.fullPrint[index] + " ";
            }
        }
        emptySpace.push(index);

        console.log(" ");
        main.printText();
    }
    
}

module.exports.eraser = eraser;
module.exports.emptySpace = emptySpace;