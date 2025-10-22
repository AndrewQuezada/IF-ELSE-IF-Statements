//Income Tax Calculator
const prompt = require("prompt-sync")();
let day;
day = prompt("Enter Income Tax ");

if (day >=0 && day <=10000){
    console.log("No Tax");
}
else if (day >= 10001 && day <= 30000){
    console.log("10%");
}
else if(day >= 30001 && day <= 60000){
    console.log("20%");
}
else if (day >= 60001 && day <= 100000){
    console.log("30%");
}
else if (day > 100001){
    console.log("Above $100,000: so you are taxed at a 40% rate");
}