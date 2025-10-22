//Credit Score Rating
const prompt = require("prompt-sync")();
let day;
day = prompt("Enter Blood Pressure ");

if (day >=800 && day <=850){
    console.log("Exceptional - Best rates available");
}
else if (day >= 750 && day <= 799){
    console.log("Very Good - Better than average");
}
else if(day >= 670 && day <= 739){
    console.log("Good - Near or above average");
}
else if (day >= 580 && day <= 669){
    console.log("Fair - Below average");
}
else if (day >= 300 && day <= 579){
    console.log("Poor - Credit may be denied");
}
else if (day > 850){
    console.log("Invalid if outside 300-850 range");
}