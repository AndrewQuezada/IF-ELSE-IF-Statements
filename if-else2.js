//Day of the Week
const prompt = require("prompt-sync")();
let day;
day = parseInt(prompt("Enter the number thats the same for the day of the week "));

if (day == 1){
    console.log("It is SUN");
}
else if (day == 2){
    console.log("It is MON");
}
else if (day == 3 ){
    console.log("It is TUE");
}
else if (day == 4 ){
    console.log("It is WEN");
}
else if (day == 5 ){
    console.log("It is THR");
}
else if (day == 6 ){
    console.log("It is FRI");
}
else if (day == 7 ){
    console.log("It is SAT");
}
else{
    console.log("Not a day")
}