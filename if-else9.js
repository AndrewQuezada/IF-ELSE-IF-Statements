//Blood Pressure Classification
const prompt = require("prompt-sync")();
let day;
day = prompt("Enter Blood Pressure ");

if (day >=80 && day <=120){
    console.log("Normal");
}
else if (day >= 121 && day <= 129){
    console.log("Blood Pressure Classification");
}
else if(day >= 130 && day <= 139){
    console.log("High BP Stage 1");
}
else if (day >= 140 && day <= 149){
    console.log("High BP Stage 2");
}
else if (day > 150){
    console.log("Above $100,000: so you are taxed at a 40% rate");
}