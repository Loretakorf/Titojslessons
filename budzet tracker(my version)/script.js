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
const form = document.querySelector('#add-expense-form');
const budgedOverview = document.querySelector('#budget-overview');
const dateInput = document.querySelector('#date');
const expenseTypeSelector = document.querySelector('#expense-type');
const notesInput = document.querySelector('#notes');
const spentAmmountInput = document.querySelector('#spent-ammount');
const rightSideContainer = document.querySelector('.right-side-container');
const currentStateSelector = document.querySelector('.current-state');
const budgetInput = document.querySelector('#budget')
let currentBalanceValue = 0;
let hasChanged = false;
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    displayExpenseContainer(formData);
    recalculateCurrentBalance();
}

function displayExpenseContainer() {
    const container = document.createElement('div');
    container.classList.add('expense-container');
    const dateParagraph = constructExpenseParagraph('Date: ', dateInput.value);
    const spentAmmountParagraph = constructExpenseParagraph('Spent Ammount: ', spentAmmountInput.value);
    const expenseTypeParagraph = constructExpenseParagraph('Expense Type: ', expenseTypeSelector.value);
    const notesParagraph = constructExpenseParagraph('Notes: ', notesInput.value);
    container.append(dateParagraph, spentAmmountParagraph, expenseTypeParagraph, notesParagraph)
    rightSideContainer.append(container);
}

function constructExpenseParagraph(title, value) {
    const paragraph = document.createElement('p');
    const span = document.createElement('span');
    paragraph.textContent = title;
    paragraph.append(span);
    span.textContent = value;

    return paragraph;
}

function recalculateCurrentBalance() {
    const currentBalance = document.querySelector('#current-balance');
    const startingBudget = document.querySelector('#budget').value;
    console.log();
    if (currentBalance.textContent && !hasChanged) {
        hasChanged = true;
        currentBalanceValue = +startingBudget - +spentAmmountInput.value;        
    } else {
        currentBalanceValue -= +spentAmmountInput.value;
    }
    currentBalance.textContent = currentBalanceValue;
    if (currentBalanceValue < 0) {
        currentBalance.style.color = 'red';
    }
}

currentStateSelector.addEventListener('change', onCurrentStateChange)

function onCurrentStateChange(event) {
    handleDisplayOfStates(event.target.value)
}

function handleDisplayOfStates(currentState) {
    if (currentState === 'Current budget') {
        form.classList.add('hidden');
        budgedOverview.classList.remove('hidden');
    } else {
        form.classList.remove('hidden');
        budgedOverview.classList.add('hidden');
    }
}

handleDisplayOfStates(currentStateSelector.value);

budgedOverview.addEventListener('submit', onBudgetSubmit);

function onBudgetSubmit(event) {
    event.preventDefault();

    const paragraph = createBalanceParagraph(budgetInput.value);
    budgedOverview.append(paragraph);
    budgetInput.setAttribute('disabled', true)
    document.querySelector('#submit-budget').setAttribute('disabled', true)
}

function createBalanceParagraph(value) {
    const paragraph = document.createElement('p');
    const span = document.createElement('span');
    paragraph.textContent = 'Current balance after expenses: ';
    span.textContent = value;
    span.id = 'current-balance';
    paragraph.append(span);

    return paragraph;
}






