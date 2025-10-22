//Season Detector
const prompt = require("prompt-sync")();
let age;
age = prompt("Enter the month ");

if (age ==1 || age==12 || age ==2){
    console.log("It is Winter");
}
else if (age ==3 || age==4 || age==5){
    console.log("It is Spring");
}
else if (age ==6 || age ==7 || age ==8 ){
    console.log("It is Summer");
}
else if (age == 9 || age ==10 || age ==Fall ){
    console.log("It is Fall");
}
else{
    console.log("incorrect month");
}
