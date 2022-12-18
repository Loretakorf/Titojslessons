// const btn = document.querySelector("#click-btn");
// const input = document.querySelector(".input");
// const inputValue = document.querySelector("#title");
// const selectInput = document.querySelector("#select-input");

// // document.querySelector('event-target-test').addEventListener('click', logInput);

// btn.addEventListener("click", logInput);

// function logInput(event) {
//   // console.log('clicked me: ', event);
// }

// // function addNumbers() {

// // }
// // addNumbers(1, 2);
// selectInput.addEventListener("change", onChange);
// function onChange(e) {
//   console.log(e.target.value);
// }

// //console.log(container.contains(event.target));
// const body = document.querySelector("body");
// const heading1 = document.createElement("h1");
// const heading2 = document.createElement("h1");
// const btn2 = document.createElement("button");
// heading1.textContent = "Hello World";
// heading2.textContent = "Hello World 2";
// heading2.append(btn2);
// btn2.textContent = "O, no";
// body.append(heading2, heading1);
// console.log(heading1);

const selectActivity = document.querySelector("#dropdown");
const containerFirst = document.querySelector(".container");
const containerSecond = document.querySelector(".container2");
const expenseBtn = document.querySelector("#click-btn");
const dateInput = document.querySelector("#date");
const amountInput = document.querySelector("#amount");
const selectExpenseInput = document.querySelector("#select-expense");
const textareaInput = document.querySelector("#notes");
const siblingDiv = document.querySelector(".sibling");

const budzetInput = document.querySelector("#budzet");
const submitBtn = document.querySelector("#click-btn2");
const spanBalance = document.querySelector("#balance");

dateInput.textContent = new Date().toLocaleString();
amountInput.textContent = Number(amountInput.value);
textareaInput.textContent = textareaInput.value;


submitBtn.addEventListener("click", submitBudzet);
selectActivity.addEventListener("change", onChange);
expenseBtn.addEventListener("click", logInput);

function onChange() {
  if (selectActivity.value == "current") {
    containerFirst.style.display = "none";
    containerSecond.style.display = "block";
  } else if (selectActivity.value == "add") {
    containerSecond.style.display = "none";
    containerFirst.style.display = "block";
  }
}

function displayErrors() {
  const amount = Number(amountInput.value);
  const date = dateInput.value;
  const selectExpense =selectExpenseInput.value;
  const textarea = textareaInput.value;
  if (!amount || !date || !selectExpense || !textarea) {
    applyErrorToField();
      return;
  }
  else {
    logInput();
  }
}
function applyErrorToField(input) {
    input.style.border = "1px solid red";
}
function saveExpense() {
    const firstTitle = document.createElement("p");
    const firstTitleValue = document.createElement("span");
    siblingDiv.append(firstTitle);
    firstTitle.textContent = "Date: "  //title

    firstTitle.append(firstTitleValue);
    firstTitleValue.id = "date"; //id
    firstTitleValue.textContent = dateInput.value; //spanContent

    return firstTitle
   
}
function logInput(title, id, spancontent) {
  siblingDiv.style.backgroundColor = "rgb(223, 235, 245)";
  siblingDiv.style.borderRadius = "10px";
  siblingDiv.style.padding = "10px";

  siblingDiv.append(saveExpense('Date: ', 'date', dateInput.value));
  siblingDiv.append(saveExpense('Spent Ammount: ', 'amount', amountInput.value));
  siblingDiv.append(saveExpense('Expense Type:', 'select-expense', selectExpenseInput.value));
  siblingDiv.append(saveExpense('Notes: ', 'notes', textareaInput.value));

   
}
function submitBudzet() {
  const budzet = Number(budzetInput.value);
  if(!budzet) {
    budzetInput.style.border = "1px solid red";
    return;
  } else {
    budzetAfterExpence();
  }
  console.log(budzet);
}
 function budzetAfterExpence() {
  const balance = spanBalance.value;
  balance.textContent = Number(spanBalance.value);
  const budzet = Number(budzetInput.value);
  const amount = Number(amountInput.value);
  balance = budzet - amount;
  
} 

   