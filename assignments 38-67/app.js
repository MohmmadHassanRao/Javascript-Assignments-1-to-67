//CHP 38-42
// TASK#1

function power(a, b = a + b) {
  return a + b;
}
alert(power(2, 4));

// TASK#2

function leapYear(year) {
  if (0 == year % 4) {
    alert(year + " is a leap year");
  } else if (0 == year % 400) {
    alert(year + " is a leap year");
  } else {
    alert(year + " is not a leap year");
  }
}

leapYear(+prompt("Enter year to check if its a leap year"));

// TASK#3

function lenOfTriangle(a, b, c) {
  var s = (a + b + c) / 2;
  function valueOfs() {
    var area = s * ((s - a) * (s - b) * (s - c));
    alert(area);
  }
  valueOfs();
}

lenOfTriangle(+prompt("enter a"), +prompt("enter b"), +prompt("enter c"));

// TASK#4

function mainFunction() {
  var totalMarks = 100;
  var math = +prompt("Number in maths");
  var chemistry = +prompt("Number in chemistry");
  var physics = +prompt("Number in physics");
  function percentage() {
    var sum = math + chemistry + physics;
    var total = (sum / totalMarks) * 100;
    document.write("Your percentage is " + total);
  }
  function average() {
    var numbers = math + chemistry + physics / 3;
    document.write("<br />Your average is " + numbers);
  }
  percentage();
  average();
}
mainFunction();

// TASK#5
function vowels(findvowels) {
  var matchingVowels = findvowels.match(/[aeiou]/g);
  if (matchingVowels) {
    alert("there are " + matchingVowels.length + " vowels");
  } else {
    alert("no vowels found");
  }
}
vowels(prompt("find vowels"));

// TASK#6

function distance(km) {
  var meterValue = 1000;
  var feetValue = 3281;
  var inchValue = 39370;
  var centimeterValue = 100000;
  function meters() {
    return document.write(
      "the distance between two cities in meters is " + km * meterValue
    );
  }
  function feets() {
    return document.write(
      "<br />the distance between two cities in feets is " + km * feetValue
    );
  }
  function inches() {
    return document.write(
      "<br />the distance between two cities in inches is " + km * inchValue
    );
  }
  function centimeters() {
    return document.write(
      "<br/>the distance between two cities in centimeters is " +
        km * centimeterValue
    );
  }

  meters();
  feets();
  inches();
  centimeters();
}

distance(
  prompt("Enter your distance you covered between two cities in Kilometers")
);

// TASK#7

function currencyNotes(amount) {
  if (amount >= 500) {
    return document.write(
      "<h1>Currency Notes</h1><br/> you have " +
        Math.floor(amount / 500) +
        " '500' notes <br/>" +
        "you have " +
        Math.floor(amount / 100) +
        " '100' notes <br/>" +
        "you have " +
        Math.floor(amount / 50) +
        " '50' notes <br/>" +
        "you have " +
        Math.floor(amount / 10) +
        " '10' notes <br/>"
    );
  } else {
    return document.write(
      "<h1>Currency Notes</h1><br/>you have " +
        Math.floor(amount / 500) +
        " '500' notes <br/>" +
        "you have " +
        Math.floor(amount / 100) +
        " '100' notes <br/>" +
        "you have " +
        Math.floor(amount / 50) +
        " '50' notes <br/>" +
        "you have " +
        Math.floor(amount / 10) +
        " '10' notes <br/>"
    );
  }
}
currencyNotes(prompt("write our amount to be withdrawn"));
// CHP 43 TO 48
// #1
function Row1() {
  var row1 = document.getElementById("row1");
  row1.style.visibility = "hidden";
}
function Row2() {
  var row2 = (document.getElementById("row2").style.visibility = "hidden");
}
function Row3() {
  var row3 = (document.getElementById("row3").style.visibility = "hidden");
}

// #2
function chngeImg() {
  document.getElementById("img").src = "./images/samsung.png";
}
function prevImg() {
  document.getElementById("img").src = "./images/onePlus.jpg";
}

// #3
function incrementCounter() {
  var counter = document.getElementById("counter");
  counter.innerHTML++;
}
function decrementCounter() {
  var counter = document.getElementById("counter");
  counter.innerHTML--;
}
// CHP 49 TO 52
// #1
function showData() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var data = document.getElementById("data");
  data.innerHTML =
    name.value + "<br/>" + email.value + "<br/>" + password.value;
}
// #2
function showDetails() {
  var para = document.getElementById("more");
  var details =
    "sunt sit sed doloremque cumque aanimi iste recusandae sequi ullam vel tempore. Vero, amet illo.";
  para.innerHTML += details;
}

// #3
// SIR EDIT AUR ADD NAHI HO PARHA

// CHP 58 to 67
// TASK#1

var domById = document.getElementById("main-content");
domById.innerHTML;
var domByClass = document.getElementsByClassName(".render");
domByClass.innerHTML;
var firstName = (document.getElementById("first-name").value = "Hassan");
var lastName = (document.getElementById("last-name").value = "Rao");
var email = (document.getElementById("Email").value =
  "hassanribery0335@gmail.com");

// TASK#2

// 1)
var form = document.getElementById("form-content").nodeType;
document.getElementById("1").innerHTML =
  "The node type of element having an id of form-content is " + form;
// 2)
var lastname = document.getElementById("lastName").nodeType;
document.getElementById("2").innerHTML =
  "The node type of element having an id of lastName is " + lastname;

var lastnameCN = document.getElementById("lastName").childNodes;
console.log(lastnameCN);
document.getElementById("3").innerHTML =
  "The Child nodes of element having an id of lastName is " + lastnameCN;

// #3

var updateLastName = document.getElementById("lastName").childNodes;
document.getElementById("4").innerHTML =
  "child node updated having an id of lastName: " +
  updateLastName[0].textContent;

// 4)
var firstchild = document.getElementById("main-content").firstChild;
document.getElementById("5").innerHTML =
  "the first child of element having an id is " + firstchild;
var lastchild = document.getElementById("main-content").lastChild;
document.getElementById("6").innerHTML =
  "the last child of element having an id is " + lastchild;

// 5)

var nextSibling = document.getElementById("lastName").nextSibling;
var prevSibling = document.getElementById("lastName").previousSibling;
document.getElementById("7").innerHTML =
  "next sibling of id lastName is " +
  nextSibling +
  "previous sibling of id lastName is " +
  prevSibling;

// 6)
var parentNode = document.getElementById("Email").parentNode;
var parentNodeType = document.getElementById("Email").nodeType;
document.getElementById("8").innerHTML =
  "parent node of element having an id of email is " +
  parentNode +
  " node type of element having an id of email is " +
  parentNodeType;
