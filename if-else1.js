//Temperature Classification
const prompt = require("prompt-sync")();
let day;
day = parseInt(prompt("Enter the Temp today "));

if (day > 30){
    console.log("It is a hot");
}
else if (day >= 20 && day <= 30){
    console.log("It is a warm");
}
else if (day >= 10 && day <=19 ){
    console.log("It is a cold");
}
else{
    console.log("Its a cold day")
}