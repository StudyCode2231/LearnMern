// entry point of my command line 
let helpFunc = require("./commands/help");
// console.log(helpFunc.ghoda());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) { //organizee
    case "tree":
        //call tree function
        console.log("tree function called and executed succesfully on path " + path);
        break;
    case "organize":
        //call organize function
        console.log("organize function called and executed succesfully on path "+ path);
        break;
    case "help":
        //call help function
        helpFunc.help();
        // console.log("help function called and executed succesfully");
        break;
    default:
        console.log("command not recognized :/")
        break;
}