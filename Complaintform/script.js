// function endsWith(text, search) {
//     const start = text.lengh - search.lengh
//     const end = text.lengh
//     return(text.substring(start, end) === search)
// }

// console.log("hello");
// const btn = document.querySelector("#click-btn");
// const input = document.querySelector(".input");
// const inputValue = document.querySelector("#input-value");

// btn.addEventListener('click',logInput);

// function logInput( ){
//     // console.log(input.value);
//     // inputValue.textContent = input.value;
//     const now = new Date().toLocaleString();
//     inputValue.textContent = now;
//     console.log(now);
//  }
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
    logInput();
    constractParagraph();
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
  displayFirstName.textContent = firstNameInput.value;
  displayLastName.textContent = lastNameInput.value;
  displayEmail.textContent = emailInput.value;
  displayComplaint.textContent = complaintInput.value;
  const date = new Date().toLocaleString();
  displayDate.textContent = date;
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

function constractParagraph(title, id, spancontent) {
    container.append(constractParagraph('First name: ', 'first-name', firstNameInput.value));
    container.append(constractParagraph('Last name: ', 'last-name', lastNameInput.value));

    container.append(constractParagraph('Email: ', 'email', '@'));
    container.append(constractParagraph('Complaint: ', 'complaint', complaintInput.value));
    container.append(constractParagraph('Date of complaint:: ', 'date',  new Date().toLocaleString()));
    
    
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