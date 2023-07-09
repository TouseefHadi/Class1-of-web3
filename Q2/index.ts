var names = "Touseef hadi";
//now printing upper case 
var uppercase_name = names.toUpperCase();
console.log("Name in upper case is: ",uppercase_name);
//now printing lower case 
var lowerCase_name = names.toLowerCase();
console.log("Name in lower case is: ",lowerCase_name);
//now printing title case 
var titlcase_name = names.toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase());
console.log("Name in title case is: ",titlcase_name);