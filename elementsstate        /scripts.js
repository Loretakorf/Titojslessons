// const generateColorBtn = document.querySelector(".generate-btn");
// const colorValueElement = document.querySelector("#color-value");
// const colorContainer = document.querySelector(".color-container");

// generateColorBtn.addEventListener("click", generateRandomColor);
// window.addEventListener("load", generateRandomColor);


// function generateRandomColor() {
//     const randomRGB = `rgb(${getRandomRGBNumber()}, ${getRandomRGBNumber()}, ${getRandomRGBNumber()})`;
//     colorContainer.style.backgroundColor = randomRGB;
//     colorValueElement.textContent = randomRGB;
//     // console.log(event);
// }

// function getRandomRGBNumber() {

//     return Math.floor(Math.random() * 256);
// }



// const x = 1;
// const y = 2;

// function sum(x, y) {
// const result = x + y;
//return result;
//    
// }
//const sumResult = getSum(2, 2);
//console.log(sumResult);



// function getFullName(middleName, lastName, firstName) {
//     console.log(`${firstName} ${middleName ? middleName : ''} ${lastName}`)
// }
// getFullName('', "Jonas", "Petrikas");

const modalButton = document.querySelector(".open-modal");
const closeButton = document.querySelector(".modal-close-btn");
const acceptButton = document.querySelector(".modal-accept-btn");
const modalWindow = document.querySelector(".modal");

modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeWindow);
acceptButton.addEventListener('click', closeWindow);
acceptButton.addEventListener('click', acceptTerms);
modalWindow.addEventListener('click', closeOnOverlaybyClick);

function openModal() {
    modalWindow.className = "visible";
    
}
function closeWindow() {
    modalWindow.className = "invisible";
}
function acceptTerms() {
    console.log("accepted");
}
function closeOnOverlaybyClick(event) {
    console.log(event);
}