// variables and data types
    // How do we assign a value to a variable?
        // assignment operator =
        // declare with let/const/var. give value with =

    // How do we change the value of a variable?
        // re assignment with assignment operator =
        // recall variable and assign with = (varName = value)

    // How do we assign an existing variable to a new variable?
        // with assignment operator =
        // varName = otherVarName

    // Remind me, what are declare, assign, and define?
        // declare- let/const/var -> create space in memory with variable name
        // assign - give value to variable with =... right side is assignment
        // define ? - the variables have been initialized.. given a meaning... aka value.. which is just assignment

    // What is pseudocoding and why should you do it?
        // fake code written in human words
        // plan out logic

    // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
        // however long it takes ?
        //  90% thinking 10% coding



// strings
    // Create a variable called firstVariable
    let firstVariable

    // Assign it the value of the string "Hello World"
    firstVariable = "Hello World"

    // Change the value of this variable to some number
    firstVariable = 12

    // Store the value of firstVariablein a new variable called secondVariable
    let secondVariable = firstVariable

    // Change the value of secondVariableto any string.
    secondVariable = "any string"

    // What is the value of firstVariable?
    12

    // Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
    let yourName = "jenna"
    let expression1 = "Hello, my name is " + yourName
    let expression2 = `Hello, my name is ${yourName}`


// boolean
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name'==='Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');



//   farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if(animal === "cow"){
    console.log('mooooo')
} 
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
if(animal === "cow"){
    console.log('mooooo')
} else {
    console.log(`Hey! You're not a cow`)
}
// Commit



// driver's ed
// Make a variable that holds a person's age; be semantic
let personsAge = 16
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if(personsAge >= 16){
    console.log('Here are the keys!')
} else {
    console.log("Sorry, you're too young")
}

/*  */


// loops
// Remember: USE letwhen you initialize your for loops!

// the basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i <= 10; i++){
    console.log(i)
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++){
    console.log(i)
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000 (including orrr???)
// for(let i = 12; i <= 4000; i+=3){
//     console.log(i)
// }

// get even
// Print out the numbers that are within the range of 1 - 100 (means not including 100 ??)
for(let i = 1; i < 100; i++){
    console.log(i)
}


// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i = 1; i < 100; i++){
    if(i % 2 === 0){
        console.log(`${i} <-- is an even number`)
    } else {
        console.log(i)
    }
}

for(let i = 1; i < 100; i++){
    i % 2 ? console.log(i) : console.log(`${i} <-- is an even number`)
}
// 0 is falsey



// give me five

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0){
        console.log( i + ' I found a number. High five!')
    } else{
        console.log(i)
    }
}

for(let i = 0; i <= 100; i++){
    i % 5 ? console.log(i) : console.log(i + ' I found a number. High five!')
}

// 0 is falsey

for(let i = 0; i <= 100; i++){
    i % 5 === 0 ? console.log(i + ' I found a number. High five!') : console.log(i)
}


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three 

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0){
        console.log(i + ' I found a number. Three is a crowd')
    } else if(i % 5 === 0){
        console.log(i + ' I found a number. High five!')
    } else{
        console.log(i)
    }
}

// For numbers divisible by both three and five, be sure your code prints both messages
for(let i = 0; i <= 100; i ++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} I found a number. Three is a crowd. I found a number. High five! `)
    } else if(i % 3 === 0){
        console.log(i + ' I found a number. Three is a crowd')
    } else if(i % 5 === 0){
        console.log(i + ' I found a number. High five!')
    } else{
        console.log(i)
    }
}



// savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0
for(let i = 1; i <= 10; i++){
    // bank_account += i
    // console.log(bank_account)
}
// Check your work! Your bank_account should have $55 in it. (^^should say including not between)
console.log(bank_account)

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
for(let i = 0; i <= 100; i++){
    bank_account += i*2
}

// Check your work! Your bank_account should have $10,100 in it.
console.log(bank_account)



// Arrays & Control flow
// What are the things in an array called?
    // element
// Do Arrays guarantee those things will be in order?
    //  no
// What real-life thing could you model with an array?
    // shopping list

// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["quote 1", "quote 2", "quote 3"]



// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
    randomThings[0]
// Change the value of "Hello"to "World"
    randomThings[2] = "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)



// . Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
    ourClass[2]
// Change the value of "Github" to "Octocat"
ourClass[ourClass.length-1] = "Octocat"
// Add a new element, "Cloud City" to the array
ourClass.push('Cloud City')

console.log(ourClass)


// Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon')
myArray.push("your choice")

// Remove the 5from the beginning of the array.
myArray.shift()

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift('Bob Marley')

// Remove the string of your choice from the end of the array.
myArray.pop()
console.log('orignal array', myArray)
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// Array.prototype.reverse(myArray) 
console.log(Array.prototype.reverse(myArray)) // returned Object(0) []
console.log('prototype reverse method:', myArray) //did not mutate myArray

myArray.reverse() // did mutate myArray
console.log('reverse method:',myArray)  // returns the original array in its mutated form


// F. Biggie Smalls
// Create a variable that contains an integer.
let int = 3

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

if(int < 100){
    console.log('little number')
} else {
    console.log('big number')
}



// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

if(int < 5){
    console.log('little number')
} else if(int > 10){
    console.log('big number')
} else{
    console.log('monkey')
}


// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans") // .splice(where(not inclusive), delete number, addWhat, addWhat ...)
console.log(kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset)
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let shirt = thomsCloset[0][0]
console.log(shirt)
// In the same way, access one item from Thom's pants array.
let pants = thomsCloset[1][0]
// Access one item from Thom's accessories array.
let accessories = thomsCloset[2][2]

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fience in a ${shirt}, ${pants}, and ${accessories}`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset)