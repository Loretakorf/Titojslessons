// const favoriteNumber1 = 1;
// const favoriteNumber2 = 4;
// const favoriteNumber3 = 76;

// const favoriteNumbers = [favoriteNumber1, favoriteNumber2, 76];
//                     //spread
// favoriteNumbers.push(...[3, 9]);//i gala// inserts an item to the end of the arrray
// favoriteNumbers.unshift({ take: 1})//i pradzia

// favoriteNumbers.reverse(); //nuo galo

// favoriteNumbers.pop()// paskutini elementa isimti
// favoriteNumbers.shift()// pirma elementa isimti// takes out the first item

// console.log(favoriteNumbers[0]);
// console.log(favoriteNumbers.at(2));
// console.log(favoriteNumbers[favoriteNumbers.length - 1]);//paimti last element
// console.log(favoriteNumbers.at(-1));

// const arrraySample = ['some text', 1, { text: 'abc', arr: [] }, () => {}, true, undefined, null];

// const listElements = document.querySelectorAll('li')

// for(let i = 0; i <= listElements.length - 1; i++) {
//     const li = listElements[i];
//     li.style.color = "red"
// }
// const anchorTags = document.querySelectorAll('a');
// const sampleTest = () => {
//     for(let i = 0; i <= listElements.length - 1; i++) {
//         const li = listElements[i];
//         li.style.color = "red"
//     }
// }

// Text

//       1. Write a loop/cycle that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

const logTtiangle = () => {
  for (let char = "#"; char.length <= 7; char += "#") {
    console.log(char);
  }
};
logTtiangle();

// 2. Write a function that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the nubmer,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// 2.1 Once you have that working, modify your function to print "FizzBuzz" for members that are divisible by both 3 and 5 ( and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
function addNumbers(start, end) {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push(`${"FizzBuzz"}`);
    } else if (i % 3 === 0) {
      numbers.push(`${"Fizz"}`);
    } else if (i % 5 === 0) {
      numbers.push(`${"Buzz"}`);
    } else {
      numbers.push(i);
    }
  }

  return numbers;
}
console.log(addNumbers(1, 30));

// 3. Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. for example: range(1, 3) // [1, 2, 3]
function range(start, end) {
  const array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
console.log(range(1, 5));
// 4. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elemens
// in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(array) {
  const result = [];

  for (let i = 0; i <= array.length; i++) {
    result.unshift(array[i]);
  }
  return result;
}

const reverseArrayInPlace = (array) => {
  let currrentIteratedValue;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    //array[0] -> 1
    currrentIteratedValue = array[i];
    //array[3-1-0] -> array[2] -> 3
    const switchWith = array[array.length - 1 - i];
    //array[0] -> 3
    
    array[i] = switchWith;
    //array[array.length - 1 - i] -> array[3-1-0]
    array[array.length - 1 - i] = currrentIteratedValue;
  }
};

