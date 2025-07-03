# what is string ?

string is a data type used to represent sequences of characters, such as words, sentences, or any other textual data. Strings are fundamental for handling text-based information and are used in various programming tasks, including displaying messages, storing user input, and manipulating text. 

# string indexing 
 
 - indexing start with 0
 - keyword for string is (str)
 
 String manipulation:
 
   Programming languages provide various built-in functions and methods to manipulate strings, such as: 
 
  - Concatenation (joining strings together). 
  - Substrings (extracting parts of a string). 
  - Searching and replacing characters. 
  - Converting strings to uppercase or lowercase. 

  # Types of method in string

  - slice methods
  - trim methods



  # undefined datatype 

  A variable that has not been assigned a value is 
of type undefined . A method or statement also returns 
undefined if the variable that is being evaluated does 
not have an assigned value. 
A function returns undefined if a value was not returned .

# What is undefined data type in JavaScript?

    A variable in JavaScript that is without any value has a
value of undefined. The datatype of a variable that holds 
an undefined value is also 'undefined'. 

# Typeof operator 

- What is typeof in JavaScript?
Typeof in JavaScript is an operator used for type checking 
and returns the data type of the operand passed to it.


- Data types

 # Primitive Data Types

- string "abcd"
-  number 2,3,4,5.6
-  booleans
- undefined
- null
- BigInt
- Symbol

# Boolean & Comparison Operator 

- booleans return true or false;

// let num1 = 5;

// let num2 = 7;


// console.log(num1 > num2); // false

// console.log(num1 < num2); // true

# Null data type 

What is the null in JavaScript?

Null is an object in JavaScript and represents 
primitive data types. A null value in JavaScript is
used for referring absence of any object value and 
if any function or variable returns null,
then we can infer that the object could not be created.

# Slice method 
- start index 
- end index

--Example--

let str = "theworldisgreat";

let newstr = str.slice(0,5); // thewo

// 0 1 2 3 4 index values will be returned

// will iterate from 0 to <5 and slice from str to newstr
console.log(newstr); // thewo

let newstr2 = str.slice(4); 

console.log(newstr2); // orldisgreat
// here from 4th index to end of string will be returned and sliced

// will iterate from 4th to last index

# String Concatenation 
// adding two strings

let string1 = "Minal";
let str2 = "suryawanshi";

let full_name = string1 + " " + str2;
console.log(full_name);  // Minal suryawanshi

# template String

let age = 18;
let first_name= "Minal";

// "my name is Minal and my age is 18 "

let about_me = "my name is "+first_name+ " and my age is " + age;
console.log(about_me);

# Useful String Methods


 # 1. Trim Method.

The trim() method in Java String is a built-in 
function that eliminates leading and trailing spaces.

# Truthy and falsy values 


 #1. falsy values

// false
// ""
// null
// undefined
// 0

// 2# .truthy values
// all are truthy
// "abc"
// 1, -1



