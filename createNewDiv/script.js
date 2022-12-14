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



// const firstNameInput = document.querySelector("#one");
// const lastNameInput = document.querySelector("#two");
// const firstNameValue = document.querySelector("#first-name");
// const lastNameValue = document.querySelector("#last-name");
// const btn = document.querySelector(".btn");
// const container = document.querySelector("#container");

// btn.addEventListener("click", registerUser);

// function registerUser() {
//   // create element
//   const firstNameParagraph = document.createElement("p");
//   const firstNameValue = document.createElement("span");
//   // insert el into document
//   container.append(firstNameParagraph);

//   firstNameParagraph.textContent = "First Name: "; //title
//   firstNameParagraph.append(firstNameValue);
//   //add attributes to element
//   firstNameValue.id = "first-name"; //id

//   firstNameValue.classList.add("test-class");
//   //   firstNameValue.classList.add('error');
//   //   firstNameValue.classList.remove('error');
//   //add content i span
//   firstNameValue.textContent = firstNameInput.value; //spanContent
// }

// function constractParagraph(title, id, spancontent) {
//     container.append(constractParagraph('First name: ', 'first-name', firstNameInput.value));
//     container.append(constractParagraph('Email: ', 'email', '@'));
    
    
//     return firstNameParagraph
// }
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".help-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const complaintInput = document.querySelector("#complaint");
const submitBtn = document.querySelector(".submit-btn");

const error = document.querySelector(".error");

const displayFirstName = document.querySelector(".first-name");
const displayLastName = document.querySelector(".last-name");
const displayEmail = document.querySelector(".email");
const displayComplaint = document.querySelector(".complaint");
const displayDate = document.querySelector(".date");
const date = new Date().toLocaleString();

const btn = document.querySelector(".btn");
const container = document.querySelector("#form-container");

openModalBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
// modalCloseBtn.addEventListener("click", cleanupResults);

submitBtn.addEventListener("click", submitComplaint);
// openModalBtn.addEventListener("click", cleanupResults);
submitBtn.addEventListener("click", constractParagraph);



function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
emailInput.addEventListener("input", (event) => {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("I am expecting an e-mail address!");
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity("");
  }
}); ///???

function isInputValid() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const complaint = complaintInput.value;

  if (firstName && lastName && email && complaint) {
    return true;
  } else {
    return false;
  }
}
firstNameInput.textContent = firstNameInput.value;
lastNameInput.textContent = lastNameInput.value;
complaintInput.textContent = complaintInput.value;
emailInput.textContent = emailInput.value;

function submitComplaint() {
  //  event.preventDefault();

  if (!isInputValid()) {
    if (!firstNameInput.value) {
      applyErrorToField(firstNameInput);
      displayError();
     
    } else if (!lastNameInput.value) {
      applyErrorToField(lastNameInput);
      displayError();
    } else if (!complaintInput.value) {
      applyErrorToField(complaintInput);
      displayError();
    } else if (!emailInput.value) {
      applyErrorToField(emailInput);
      displayError();
    } 
  } else {
    // logInput();
    applyComplaint();
    cleanupResults();
    closeModal();
  }
}
function applyErrorToField(input) {
  input.style.border = "1px solid red";
}
function displayError() {
  error.style.display = "block";
}
function logInput() {
//   displayFirstName.textContent = firstNameInput.value;
//   displayLastName.textContent = lastNameInput.value;
//   displayEmail.textContent = emailInput.value;
//   displayComplaint.textContent = complaintInput.value;
//   const date = new Date().toLocaleString();
//   displayDate.textContent = date;
}


// function registerUser() {
  
//   const firstNameParagraph = document.createElement("p");
//   const firstNameValue = document.createElement("span");
  
//   container.append(firstNameParagraph);

//   firstNameParagraph.textContent = "First Name: "; //title
//   firstNameParagraph.append(firstNameValue);
  
//   firstNameValue.id = "first-name"; //id

//   firstNameValue.classList.add("test-class");
//   //   firstNameValue.classList.add('error');
//   //   firstNameValue.classList.remove('error');
//   //add content i span
//   firstNameValue.textContent = firstNameInput.value; //spanContent
// }
function constractParagraph(divContent, title, id, spanContent) {
    const divElem = document.createElement('div');
    const firstNameParagraph = document.createElement('p');
    const firstNameValue = document.createElement('span');

    container.append(divElem);
    divElem.classList.add('new-div');
    divElem.style.paddingTop = '5px';
   
    divElem.append(firstNameParagraph);
   
    firstNameParagraph.textContent = title;
    firstNameParagraph.append(firstNameValue);
    firstNameValue.id = id;
    firstNameValue.textContent = spanContent;
    firstNameParagraph.style.paddingLeft = '20px'
    

    return divElem;
    // return firstNameParagraph;
}


function applyComplaint() {
    
    container.append(constractParagraph('new-div', 'First name: ', 'first-name', firstNameInput.value));
    container.append(constractParagraph('new-div', 'Last name: ', 'last-name', lastNameInput.value));

    container.append(constractParagraph('new-div', 'Email: ', 'email', emailInput.value,));
    container.append(constractParagraph('new-div', 'Complaint: ', 'complaint', complaintInput.value));
    container.append(constractParagraph('new-div', 'Date of complaint:: ', 'date',  new Date().toLocaleString()));
    
    
    return firstNameParagraph
}


function cleanupResults() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  complaintInput.value = "";
  emailInput.value = "";
  error.style.display = "none";
  
 
}
function cleanError() {
  
  clearErrorFromField(firstName);
  clearErrorFromField(lastName);
  clearErrorFromField(email);
  clearErrorFromField(complaint);
  
}
function clearErrorFromField(input) {
input.style.border = "1px solid grey";
}