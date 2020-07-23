// ALERTS

//  #1
alert("Welcome");

// #2
var input = prompt("Please enter your password");
var password = "Hassan";
if (password === input) {
  alert("welcome back");
} else {
  alert("Error! please enter a valid password");
}

// #3
alert("Welcome to JS land...\n Happy Coding!");

// #4
var a = alert("Weclome to Js land...");
var a = alert("Happy Coding!");

// #5
console.log("Hello... i can run JS through my web browser's console");

// VARIABLES FOR STRING
// #1
var username;
// #2
var myName = "Mohammad Hassan Rao";
// #3
var message;
message = "Hello World";
alert(message);
// #4
var Name = prompt("Enter your name");

var age = prompt("Your Age?");

var qual = prompt("Your Qualification?");
alert(Name + "\n" + age + "\n" + qual);
// #5
var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);
// #6
var email = "hassanribery0335@gmail.com";
alert("My email address is " + email);
// #6
var book = "A smarter way to learn JS";
alert("I am trying to learn from the Book" + book);
// #7
document.write("Yah! I can write HTML content through JAVASCRIPT <br>");
// #8
alert("▬▬▬▬▬▬▬▬▬ஜ۩END۩ஜ▬▬▬▬▬▬▬▬▬");

// VARIABLES FOR NUMBER
// #1

var age1 = 21;

alert("I am " + age1 + " years old");

// #2
var birthYear = 1998;
document.write("<br>My birht year is " + birthYear + "<br>");
// #3
var vName = prompt("Welcome to our store \n what's your name?");
var vPorduct = prompt("which product you want?");
var vQuantity = prompt("How many you want?");
document.write(
  "<br>" +
    vName +
    " ordered " +
    vQuantity +
    " " +
    vPorduct +
    " on our store <br>"
);

//CHAPTER 14-16 ARRAYS
//TASK#1

var empArr = [""];
// TASK#2
var empArrObj = [{}, {}];
// TASK#3
var strArr = ["", "", ""];
// TASK#4
var numArr = [1, 2, 3, 4];
// TASK#5
var boolArr = [true, false];
// TASK#6
var mixArr = [[], [], [], []];
// TASK#7
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil"];
document.write("<h1>Qualification:</h1> <br/>");
for (var i = 0; i < education.length; i++) {
  document.write("<br/>" + i + ")" + education[i]);
}
//TASK#8
var colors = ["green", "blue", "yellow", "red"];
var colors1 = ["green", "blue", "yellow", "red"];

var colorInput = prompt("Which color you want to add in our Colors array");
var updatedColor = colors.unshift(colorInput);
document.write(
  "<h1>Colors:" +
    colors1 +
    "</h1> <br/> <h1>Updated Colors: " +
    colors +
    "</h1>"
);

//TASK#9
var colors = ["green", "blue", "yellow", "red"];
var colors1 = ["green", "blue", "yellow", "red"];

var colorInput = prompt("Which color you want to add in our Colors array");
var updatedColor = colors.push(colorInput);
document.write(
  "<h1>Colors:" +
    colors1 +
    "</h1> <br/> <h1>Updated Colors: " +
    colors +
    "</h1>"
);
//TASK#10
var colors = ["green", "blue", "yellow", "red"];
var colors1 = ["green", "blue", "yellow", "red"];

var colorInput = prompt("Which color you want to add in our Colors array.");
var colorInput1 = prompt("Which color you want to add in our Colors array.");

var updatedColor = colors.splice(0, 0, colorInput, colorInput1);
document.write(
  "<h1>Colors:" +
    colors1 +
    "</h1> <br/> <h1>Updated Colors: " +
    colors +
    "</h1>"
);

//TASK#11

var scores = [320, 230, 480, 120];
var scoresOrdered = scores.sort();

console.log(scoresOrdered);

// TASK#12

var catArr = ["this", "is", "my", "cat"];
var catJoin = catArr.join(" ");
console.log(catJoin);

// CHAPTER 17-20 ARRAYS AND LOOPS
// TASK#1
var arr = [[], [], []];
// TASK#2
var arr1 = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
// TASK#3
for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}
// TASK#4
var tableNumber = prompt("Enter a number to show its multiplication table");

var tableLength = prompt("Enter length of your table");
document.write(
  "<br>Multiplication table of " +
    tableNumber +
    " Length is " +
    tableLength +
    "<br> <br>"
);

for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " x " + i + " = " + i * tableNumber + "<br>");
}

// TASK#5
var fruits = ["apple", "banana", "mango", "orange", "peach"];
for (var i = 0; i < fruits.length; i++) {
  document.write("fruits at index " + i + " is " + fruits[i] + "<br>");
}

// TASK#6
document.write("<h1>Counting</h1> <br>");

for (var i = 1; i <= 10; i++) {
  document.write(i + ",");
}

document.write("<h1>Reverse Counting</h1> <br>");

for (var i = 10; i > 0; i--) {
  document.write(i + ",");
}

document.write("<h1>Even</h1> <br>");

for (var i = 0; i <= 20; i = i + 2) {
  document.write(i + ",");
}

document.write("<h1>Odd</h1> <br>");

for (var i = 1; i <= 20; i = i + 2) {
  document.write(i + ",");
}
document.write("<h1>Series</h1> <br>");

for (var i = 2; i <= 20; i = i + 2) {
  document.write(i + "k,");
}

// TASK#7

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to our Bakery,what do you want to order?");
for (var i = 0; i < bakery.length; i++) {
  if (bakery[i] === search) {
    document.write("Yes " + search + " is available at index " + [i]);
    break;
  } else if (i === bakery.length - 1) {
    document.write("no " + search + " is not available");

    break;
  }
}

//TASK#8

var arrItem = [24, 53, 78, 91, 12];
for (var i = 0; i < 100; i++) {
  if (arrItem[i] == 91) {
    document.write(
      "Array Items: " + arrItem + "<br/> The largest number is " + arrItem[i]
    );
  }
}

// TASK#9

var arrItem = [24, 53, 78, 91, 12];
for (var i = 0; i < arrItem.length; i++) {
  if (arrItem[i] == 12) {
    document.write(
      "<br/><br/>Array Items: " +
        arrItem +
        "<br/> The smallet number is " +
        arrItem[i] +
        "<br/>"
    );
  }
}

// TASK#10

for (var i = 5; i <= 100; i = i + 5) {
  document.write(+i + ",");
}
