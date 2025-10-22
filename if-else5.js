//Traffic Light System
const prompt = require("prompt-sync")();
let color;
color = prompt("Enter Light color: ");

if (color =="red"){
    console.log("Stop");
}
else if (color =="yellow"){
    console.log("Slow")
}
else if (color =="green"){
    console.log("Go");
}
else{
    console.log("incorrect color");
}