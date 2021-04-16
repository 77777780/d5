
//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = 'Koni'
console.log(test)
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/



/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name : 'Aizada',
    surname : 'Nazarova',
    age : 31
}
console.log (me)
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/





/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/




// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger = function (n1, n2) {
    if (n1 > n2)
    {return n1 + ' this number is bigger'
} else 
{return n2 + ' this number is bigger' }
}
console.log(whoIsBigger(5,7))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/


const splitMe = function(str){
   let sep = ('i love coding')
   
}
console.log(splitMe(res))
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne = function(n1, bool){
    let myStr = n1
    if (bool === true)
    {return myStr.slice(1,6)
    } else {
        return myStr.slice (0,5)
    }
}
console.log(deleteOne('String', false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/ 
function onlyLetters(str){ 
    return str.splice(2,1)
     
}

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
const isThisAnEmail = function(n5){
    let validEmail = n5
    let invalidEmail = 'aizakoni@mail.ru'
    if (validEmail === invalidEmail) {
        return true }
    }


/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/ 
const isTodayMyBirthday = function(n1){
    let myBirthday = '24th of jan'
    if (myBirthday === n1) {
        return true + 'Today is your birtday'
    } else {return 'today is not your birthday'}
}
console.log(isTodayMyBirthday('14th of April'))

/*Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

const deleteProp = function(obj,str){
    return delete obj.name
}
console.log(deleteProp(myObj = {name : 'Aizada',
age: 31},'Nazarova'))
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
function countMovies(){
    return 
}
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/