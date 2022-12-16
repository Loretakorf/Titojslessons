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
// selectActivity.value = "current";

selectActivity.addEventListener("change", onChange);

function onChange() {
  if (selectActivity.value == "current") {
    containerFirst.style.display = "none";
    containerSecond.style.display = "block";
  } else if (selectActivity.value == "add") {
    containerSecond.style.display = "none";
    containerFirst.style.display = "block";
  }
}
