var span = document.createElement("span");
span.innerHTML = "My Gram";

var div = document.getElementById("Instagram");

div.appendChild(span);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Log in";

div.appendChild(loginButton);

var signUpButton = document.createElement("button");
signUpButton.innerHTML = "Sign Up";

div.appendChild(signUpButton);

var lineBreak = document.createElement("br");

div.appendChild(lineBreak);

var image1 = document.createElement("span");
image1.innerHTML = "Image 1 "; 

div.appendChild(image1);

var image2 = document.createElement("span");
image2.innerHTML = "Image 2 ";

div.appendChild(image2);

var image3 = document.createElement("span");
image3.innerHTML = "Image 3 ";

div.appendChild(image3);

var image4 = document.createElement("span");
image4.innerHTML = "Image 4 ";

div.appendChild(image4);

var image5 = document.createElement("span");
image5.innerHTML = "Image 5 ";

div.appendChild(image5);

var lineBreak2 = document.createElement("br");

div.appendChild(lineBreak2);

var about = document.createElement("span");
about.innerHTML = "About  ";

div.appendChild(about);

var blog = document.createElement("span");
blog.innerHTML = "Blog  ";

div.appendChild(blog);

var jobs = document.createElement("span");
jobs.innerHTML = "Jobs  ";

div.appendChild(jobs);

var help = document.createElement("span");
help.innerHTML = "Help  ";

div.appendChild(help);

var lineBreak3 = document.createElement("br");

div.appendChild(lineBreak3);

var english = document.createElement("span");
english.innerHTML = "English  ";

div.appendChild(english);

var year = document.createElement("span");
year.innerHTML = "2021  ";

div.appendChild(year);

var gram = document.createElement("span");
gram.innerHTML = "My Gram  ";

div.appendChild(gram);

var firstNumber = 1;
var firstString = "a simple string";
var firstBool = true;

console.log(firstNumber);
console.log(firstString);
console.log(firstBool);

function Subtraction(a, b) {
    var result = a - b;
    console.log(result);
}

Subtraction(12, 8);

var secondString = "Hello, this is a string  ";
var result = secondString.substring(0, 3);

console.log(result.trim());

var d = new Date();

var dateType = (d.getMonth() + 1).toString().padStart(2, "0")
    + "/" + d.getDate().toString().padStart(2, "0") + "/" + d.getFullYear();

console.log(dateType);

var b = new Date(2000, 4, 7);
document.write(b.toLocaleString("ru-RU"));