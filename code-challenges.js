// ASSESSMENT 6: JavaScript Coding Practical Questions

console.log("\n")
console.log("Week 6 Assessment - Java Script Code Challenges - Brian Thomas Hammond", "\n")


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

//Write a function that takes an array of objects
const nameOccupation = (argumentArray) => {
  //Create a variable to hold the result of mapping over the argument array
  //Perform a second map to split each name
  //Capitalize the first letter of each name component
  //Attach the remaining letters of each name component using slice
  //Join the names back together into a single string
  let capitalizer = argumentArray.map(person => person.name.split(" ").map(name => name[0].toUpperCase().concat(name.slice(1))).join(" "))
  //Return the result of joining the strings created by mapping over the argumentArray to string interpolate the name of each index from capitalizer and the occupation of each index from argumentArray 
  return argumentArray.map((value, index) => `${capitalizer[index]} is a ${argumentArray[index].occupation}.`).join(" ")
}

console.log("#1:")
console.log(nameOccupation(people), "\n"); // expect: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//Write a function that takes an array
const onlyNumsModThree = (array) => {
  //Filter through the array to get an array of only numbers
  //Map through that array to get the result of mod 3 on each element
  //Return the result of the final array
  return array.filter(value => typeof value === "number").map(value => value % 3)
}

console.log("#2:")
console.log(onlyNumsModThree(testingArray1)); // expect: [ 2, 0, -0, 0 ]
console.log(onlyNumsModThree(testingArray2), "\n"); // expect: [ 2, 1, -1 ]


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//Write a function that takes two arrays
const noDupes = (array1, array2) => {
  //Create an array to hold the answer
  let answerArray = []
  //Merge the argument arrays into a single array
  let bigArray = array1.concat(array2)
  //Map over the merged array, pushing the value into the answer array if it's not already there
  bigArray.map(value => answerArray.includes(value) ? "" : answerArray.push(value))
  //Return the answerArray
  return answerArray

  //Alternate solution
  //Merge the argument arrays into a single array
  // let alternateArray = arr1.concat(arr2)
  // //Filter alternateArray to only contain the first instance of each value
  // //Return the filtered array
  // return alternateArray.filter((value, index) => alternateArray.indexOf(value) === index)
}
console.log("#3:")// expect: [ 3, 7, "hi", 10, "hello", 4, 1 ]
console.log(noDupes(testingArray3, testingArray4), "\n");
