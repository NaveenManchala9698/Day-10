// JS Basics
// Exercise A

let test = "Naveen"

//Exercise B

let number = 20
let sum=0

for (let i = 10; i <= number; i++) {
    sum += i;
}
console.log('The sum of numbers is:', sum )

// Exercise C

console.log(Math.floor(Math.random( ) * 20))

// Exercise D

let me = {
    name : "Naveen",
    surname : "Manchala",
    age : 23
}

// Exercise E

delete me.age
console.log(me)

//Exercise F

me.skills = ['HTML', 'CSS', 'JavaScript']
console.log(me)

// Exercise G

me.skills.pop()
console.log(me)


// JS Functions

// Exercise 1

function dice(max, min) {
    console.log((Math.floor(Math.random() * (max-min + 1) + min)))
}

dice(1, 6)

// Exercise 2

function whoIsBigger(a, b) {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}
whoIsBigger(6, 4)

// Exercise 3

function splitMe(text) {
    let newArr = text.trim().split(" ")
    console.log(newArr)
}
splitMe("My Name is Naveen")


// Exercise 4

function deleteOne(x, y) {
    let str = x
    if (y === true) {
        console.log(str.slice(1))
    } else {
        console.log(str.slice(-1))
    }
}

deleteOne('I am Naveen', true)

// Exercise 5

function onlyLetters(x) {
    let str = x
    console.log(str.replace(/[0-9]/g, ''))
}
onlyLetters('I have 5 dogs')


// Exercise 6

function isThisAnEmail(x) {

}

// Exercise 7

function whatDayIsIt(day) {

}


// Exercise 8

function rollTheDices() {

}

// Exercise 9

function howManyDays(dt) {


}

// Exercise 10

function isTodayMyBirthday(date) {

}


// Arrays & Objects

// Exercise 11

function deleteProp(x, y) {

}


// Exercise 12

function oldestMovie() {
    for (i=0; i<oldestMovie.length; i++) {
        if(oldestMovie[i].releaseYear < i++) {
            console.log(oldestMovie.name)
        } 
    }
}
console.log(oldestMovie.name)
oldestMovie([
    {name : 'RRR', releaseYear : 1999},
    {name : 'KGF', releaseYear : 2001}
])