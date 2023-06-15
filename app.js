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



// Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

const printCool = (name) => {
    console.log(`${name} is cool`)
}   

printCool("Captain Reynolds")




// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    console.log(num**3)
}

calculateCube(3)



// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = (char) => {
    char = char.toLowerCase()
    
    vowels = 'aeiouy'
    return vowels.includes(char)
}

console.log( isVowel('b') )
console.log( isVowel('e') )
console.log( isVowel('j') )
console.log( isVowel('Y') )



// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (str1, str2) => {
    let nums = []
    
    nums.push(str1.length)
    nums.push(str2.length)

    return nums
}

console.log(getTwoLengths('review','javascript'))


// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (stringsArr) => {
    let nums = []
    stringsArr.forEach((string) => {
        nums.push(string.length)
    })
    return nums
}

console.log( getMultipleLengths(['it','is','raining']) )


// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3){
        return num1
    } else if(num2 >= num1 && num2 >= num3){
        return num2
    } else{
        return num3
    }
}

console.log( maxOfThree(1,2,3) )
console.log( maxOfThree(3,2,1) )
console.log( maxOfThree(2,3,1) )
console.log( maxOfThree(3,1,2) )
console.log( maxOfThree(3,3,2) )



// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (arr) => {
    let length = []

    arr.forEach((word) => {
        length.push(word.length)
    })

    // console.log(length)
    let max = Math.max(...length)

    // console.log(max)
    let index

    length.forEach((num,i) => {
        if(num === max){
            index = i
        }
    })

    return arr[index]
}

console.log( printLongestWord(['i', 'am', 'longest']) )
console.log( printLongestWord(['i', 'am', 'longest', 'nevermind']) )
console.log( printLongestWord(['fwefwfew', 'am', 'r', 'wjn']) )
console.log( printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]) )




// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.




// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
    name: 'First Last',
    email: 'user@email.com',
    age: 0,
    purchase: []
}

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.email = 'newEmail@email.com'
user.age++
console.log(user)


// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = `user's location`


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchase.push('carbohydrates')
user.purchase.push('peace of mind')
user.purchase.push('merino jodphurs')

console.log( user.purchase[user.purchase.length - 1] )



// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: 'friend',
    age: 0,
    location: 'friend house',
    purchased: []
}
console.log( user.friend.name )
console.log( user.friend.location )
user.friend.age = 55
user.friend.purchased.push('The One Ring')
user.friend.purchased.push('a latte')

console.log( user.friend.purchased[user.friend.purchased.length - 1] )


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
user.purchase.forEach((item) => {
    console.log(`user's ${item}`)
})

user.friend.purchased.forEach((item) => {
    console.log(`friend's ${item}`)
})


// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.



const updateUser = () => {
    user.age++
    user.name = user.name.toUpperCase()
}

const oldAndLoud = (person) => {
    person.age++
    person.name = person.name.toUpperCase()
    return person
}

console.log( oldAndLoud(user) )



// // Cat Combinator



// // 1. Mama cat
// // Define an object called cat1that contains the following properties:

// // name
// // breed
// // age (a number)
// // console.log the cat's age
// // console.log the cat's breed

let cat1 = {
    name: 'cat1',
    breed: 'breed1',
    age: 0,
}

console.log(cat1.age)
console.log(cat1.breed)

// // 2. Papa cat
// // Define an object called cat2that also contains the properties:

// // name
// // breed
// // age (a number)

let cat2 = {
    name: 'cat2',
    breed: 'breed2',
    age: 0
}






// // . Combine Cats!
// // The cats are multiplying!

// // Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// // Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// // Example:

// // combineCats(cat1, cat2)
// // { name: "Joe", age: 19, breed: "Mog" }

// // { name: "Jam", age: 45, breed: "Siamese" }

// // This is to demonstrate that functions can take objects as arguments

// // You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

// // combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// // Make it so the combineCatsfunction will return a combination of the two incoming cats

// // The result should be an object wherein the

// // name is a concatenation of the parents' names
// // the age is 1
// // the breed is each of the parents' breeds with a hyphen in between

const combineCats = (mama,papa) => {
    // console.log(mama)
    // console.log(papa)

    let newCat = {
        name: `${mama.name}${papa.name}`,
        age: 1,
        breed: `${mama.breed}-${papa.breed}`
    }

    return newCat
}

console.log( combineCats(cat1,cat2) )


// // This is to demonstrate that a function can return an object


// // 4. Cat brain bender
// // If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// // catCombinatorcan use itself as its own argument.

// // Take a second to stew on that . . .

// // What is the result of:

// // console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// // Whoa . . .

// // The above console.log is two levels deep of combineCats.

// // Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

console.log( combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)),combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)) )