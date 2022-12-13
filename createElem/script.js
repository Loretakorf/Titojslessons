// // const num1 = 1;
// // const num2 = 2;
// // const num3 = 3;
// // const num4 = 4;

// // function multiply(x, y, j) {
// //     if(j) {
// //         return x * y * j
// //     }
// //     return x * y;
// // }
// // function addNumbers(x, y) {
// //     return x + y;
// // }

// // function algoritm(number1, number2, number3, number4) {
// //     // multiply 2 numbers
// //     const multiplyResult = multiply(number1, number2);

// //     //add result with a number
// //     const sumResilt = addNumbers(multiplyResult, number3);
// //     //multiply result with a number
// //     const result = multiply(sumResilt, number4);
// //     return result;
// // }

// // console.log('multiplication: ', multiply(5, 6));

// const body = document.querySelector("body")
// const btn = document.querySelector('button')
// const input1 = document.querySelector('#one');
// const input2 = document.querySelector('#two');
// const input3 = document.querySelector('#three');
// const input4 = document.querySelector('#four');
// const input5 = document.querySelector('#five');

// const error1 = true;
// const error2 = true;
// const error3 = true;
// const error4 = true;
// const error5 = true;

// function addErrors() {
//     if(isFormValid())  {
//         body.style.backgroundColor = "green";
//     }
//     if(error1) {
//         displayErrorOnField(input1);
//     }
//     if(error2) {
//         displayErrorOnField(input2);
//     }
//     if(error3) {
//         displayErrorOnField(input3);
//     }
//     if(error4) {
//         displayErrorOnField(input4);
//     }
//     if(error4) {
//         displayErrorOnField(input5);
//     }
// }

// function isFormValid() {
//     if(!input1.value || !input2.value || !input3.value || !input4.value || !input5.value) {
//         return false;
//     }
//     return true;

// }

// function displayErrorOnField(input) {
//     input.style.border = '1px solid red';
//     input.style.backgroundColor = 'brown';
// }
// btn.addEventListener('click', addErrors)

const firstNameInput = document.querySelector("#one");
const lastNameInput = document.querySelector("#two");
const firstNameValue = document.querySelector("#first-name");
const lastNameValue = document.querySelector("#last-name");
const btn = document.querySelector(".btn");
const container = document.querySelector("#container");

btn.addEventListener("click", registerUser);

function registerUser() {
  // create element
  const firstNameParagraph = document.createElement("p");
  const firstNameValue = document.createElement("span");
  // insert el into document
  container.append(firstNameParagraph);

  firstNameParagraph.textContent = "First Name: "; //title
  firstNameParagraph.append(firstNameValue);
  //add attributes to element
  firstNameValue.id = "first-name"; //id

  firstNameValue.classList.add("test-class");
  //   firstNameValue.classList.add('error');
  //   firstNameValue.classList.remove('error');
  //add content i span
  firstNameValue.textContent = firstNameInput.value; //spanContent
}

function constractParagraph(title, id, spancontent) {
    container.append(constractParagraph('First name: ', 'first-name', firstNameInput.value));
    container.append(constractParagraph('Email: ', 'email', '@'));
    
    
    return firstNameParagraph
}