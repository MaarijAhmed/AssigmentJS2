// // object 1

// function time(d) {
//   d = new Date();
//   alert(d);
// }
// time();

// // object 2

// function names(a, b, c) {
//   a = prompt("what is your first name : ");
//   b = prompt("what is your second name : ");
//   c = a + " " + b;
//   alert("greetings " + c);
// }
// names();

// // object 3

// function numbers(f, g, h) {
//   f = +prompt("what is your 1st number ");
//   g = +prompt("what is your 2nd number ");
//   h = f + g;
//   alert(h);
// }
// numbers();

// // object 4

// function calcu(num1, num2, opr) {
//   num1 = +prompt("what is your 1st number");
//   num2 = +prompt("what is your second number");
//   opr = prompt("what is your operator");
//   if (opr === "+") {
//     alert(num1 + num2);
//   } else if (opr === "-") {
//     alert(num1 - num2);
//   } else if (opr === "*") {
//     alert(num1 * num2);
//   } else if (opr === "/") {
//     alert(num1 / num2);
//   } else {
//     alert("invalid operator");
//   }
// }
// calcu();
// // object 5

// function square(a, b) {
//   a = +prompt("what is your number to be sqaured");
//   b = a * a;
//   alert("the square of " + a + " is " + b);
// }
// square();
// // object 6

// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }
// l = prompt("what is your factorial number");
// alert(factorial(l));

// // object 7

// function counting() {
//   const num1 = prompt("Enter your first number");
//   const num2 = prompt("Enter your second number");
//   for (let i = num1; i <= num2; i++) {
//     document.write(i + "<br>");
//   }
// }
// counting();
// object 8
// function hypotanious(l, h) {
//   let p = +prompt("what is the base");
//   let k = +prompt("what is the perpendicular");
//   l = p * p;
//   h = k * k;
//   a = l + h;
//   alert("the hypotanious of triangle is " + a);
// }
// hypotanious();
// // object 9
// function area(r, t, y) {
//   r = +prompt("what is the width");
//   t = prompt("what is the hight");
//   y = r * t;
//   alert(y);
// }
// area();

// object 10
// function palindrome() {
//   const str = prompt("Enter your string");
//   var len = str.length;
//   var mid = Math.floor(len / 2);

//   for (var i = 0; i < mid; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       alert("This is not a palindrome");
//       return false;
//     }
//   }
//   alert("This is a palindrome");
//   return true;
// }
// palindrome();

// object 11

// const toTitleCase = (phrase) => {
//   return phrase
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };
// let m = prompt("what is your scentence");
// let result = toTitleCase(m);
// document.write(result);
// object 12
// function find_longest_word(str) {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for (var x = 1; x < array1.length; x++) {
//     if (result.length < array1[x].length) {
//       result = array1[x];
//     }
//   }
//   return result;
// }
// let q = prompt("what is your scentence ")
// let u = find_longest_word(q);
// alert(u)
// object 13
// function char_count(str, letter) {
//   var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter) {
//       letter_Count += 1;
//     }
//   }
//   return letter_Count;
// }

// document.write(char_count("w3resource.com", "o"));
// object 14
function calccurcumfarence(l,r) {
   let p = +prompt("what is the radius");
 let y = 2 * 3.142 * p
  alert("curcumfarence of circle is " + y)
}
calccurcumfarence();
function calcarea(k,o){
 let p = +prompt("what is the radius");
 let w = 3.142*(p*p)
 alert("area of circle is " + w)
}
calccurcumfarence();
calcarea();