//Water State Classifier
const prompt = require("prompt-sync")();
let day;
day = prompt("Enter the Temp of the water ");

if (day < 0){
    console.log("It is ice");
}
else if (day <= 99){
    console.log("It is water");
}
else if (day >= 100 ){
    console.log("It is a steam");
}
else{
    console.log("not right")
}