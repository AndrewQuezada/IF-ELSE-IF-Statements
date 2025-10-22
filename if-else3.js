//Age Group Classification
const prompt = require("prompt-sync")();
let age;
age = parseInt(prompt("Enter your age "));

if (age >=0 && age <=12){
    console.log("your a kid");
}
else if (age >= 13 &&  age<= 19){
    console.log("Your a teen");
}
else if (age >= 20 &&  age<=59 ){
    console.log("Your an adult");
}
else if (age >= 60){
    console.log("Your an Senior");
}
else{
    console.log("incorrect age");
}
