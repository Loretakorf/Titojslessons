// Tasks:
// 1. Write a function that will count vowels (balsė) in a given word. Vowels: a, e, i, o, u.
function countVowels(word) {
  let vowelCount = 0;
  const wordsLetters = word.split("");

  const vowel = ["a", "e", "i", "o", "u"];

  wordsLetters.forEach((letter) => {
    if (vowel.includes(letter)) {
      vowelCount++;
    }
  });
  return vowelCount;
}
console.log(countVowels("margin"));
// 2. Write a function that will return you boolean value based on if given word is palindrome or not. A word is considered to be palindrome only if it retains same if reversed, for example racecar, bannana.
function initPalindrome(word) {
  const arrayValue = word.split("");
  const arrayValueReverse = arrayValue.reverse();
  const reverseWord = arrayValueReverse.join("");
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
console.log(initPalindrome("racecar"));

// 3. Write a function to find letter occurences in a word. For example: letterCount('Connect', 'c') -> 2, because letter c occures two times.
function letterCount(word, letter) {
  // let count = 0;
  // for (let i = 0; i < word.length; i++) {
  //   if (word.charAt(i) == letter) {
  //     count += 1;
  //   }
  // }
  // return count;
  const array = word.split("");
  const newArr = array.filter((char) => {
    return char === letter;
  }).length;
  return newArr;
}
console.log(letterCount("connect", "c"));

// 4. Write a function to compute a union of two arrays, and removes all duplicates. For example: union([1, 2, 3], [1, 10, 2, 100]) -> [1, 2, 3, 10, 100]
function computeUnionOfArray(arr1, arr2) {
  const union = arr1.concat(arr2);

  return union.filter((item, index) => union.indexOf(item) === index);
}
console.log(computeUnionOfArray([1, 2, 3], [1, 10, 2, 100]));
// 5. Write a function to find a pair of elements from an given array whose sum equals a specific target number. Return an array with those two elements indexes.
// For example: findNumberPairs([10, 20, 10, 40, 50, 60, 70], 50) -> [2, 3]

function findaPairOfElem(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let firstNumber = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNumber = arr[j];
      if (firstNumber + secondNumber == sum) {
        return [i, j];
      }
    }
  }
}
console.log(findaPairOfElem([10, 20, 10, 40, 50, 60, 70], 50));
// 6. Write a function to filter false, null, undefined, 0 and empty string values from an array. It should return a new array.

function filterArray(array) {
  const filtered = array.filter(Boolean);
  return filtered;
}
console.log(filterArray([3, null, false, 0, 54]));
// For next two tasks we will be working with this data: const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
// 7. Write a function to find index of the 'Eagles' item, and use that to remove the 'Eagles' item. Return the end result which should be [ "Parrots", "Falcons", "Emus", "Caracaras", "Egrets" ]

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

function redactBirds(result) {
  const birdIndex = birds.findIndex((bird) => bird === "Eagles");
    if (birdIndex > -1) {
    birds.splice(birdIndex, 1);
  }
    return result;
}
console.log(redactBirds(birds));
// 8. Make a new array from the above array, called eBirds, that contains only birds from the original array whose names begin with the letter "E".
function makeeBirds() {
  
}

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
    // console.log(char);
  }
};
// logTtiangle();

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
// console.log(addNumbers(1, 30));

// 3. Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. for example: range(1, 3) // [1, 2, 3]
function range(start, end) {
  const array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
// console.log(range(1, 5));
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
