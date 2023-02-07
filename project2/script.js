// const dataContainer = document.querySelector("#data");
// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");
// const userName = "UserName";
// const localStorageKey = "userName";

// btn.addEventListener("click", () => {
//   dataContainer.textContent += dataContainer.textContent
//     ? `, ${input.value}`
//     : input.value;
//   const dataToStore = JSON.stringify([{ name: "name" }]); // to string
//   window.localStorage.setItem(localStorageKey, dataToStore); // sessionStorage bus null tik vienam tab
// });

// const userNames = window.localStorage.getItem(localStorageKey); // veikia tik su string

// console.log(JSON.parse(userNames)); //atgal
// console.log(userNames);
// if (userNames) {
//   dataContainer.textContent = userNames;
// }

/* Acceptance Criteria:
    1. Display input where user can enter grocery which he wants to purchase
    2. Display button that when clicked will add grocery to the list of groceries
        a. Clear input when grocery is added
    3. Display list of groceries that has been added by the user
        a. It should display grocery name
        b. It should display edit icon
            i. When clicked it should populate input with grocery name that is being edited, change button next to input to be 'Edit' and once 'Edit' button is clicked it should update grocery with new name.
                Once groceries are updated it should clear input.
        c. It should display delete icon
            i. When clicked it should delete grocery from the list.
    4. Display delete all button, when clicked it should remove all groceries from the list.
    5. All groceries should be stored in localStorage so that when user refreshes the page, all the data that is stored should be displayed. */
// import { constructProductBasket } from "./array.js";
import { constructGroceryBasket } from "./constructGroceryBasket.js";
import { localStorageKey } from "./localStorageKey.js";
import { getItemFromStorage } from "./getItemFromStorage.js";
import { setupLocalStorage } from "./setUpLocalStorage.js";
import { deleteItemFromLocalStorage } from "./deleteItemFromLocalStorage.js";
import { store } from "./store.js";
import { setItemToLocalStorage } from "./setItemToLocalStorage.js";

const groceryInput = document.querySelector("#product-input");
const addButton = document.querySelector("#btn");
const removeButton = document.querySelector("#remove-btn");
setupLocalStorage();

addButton.addEventListener("click", () => {
  if (store.editableGroceryIndex >= 0) {
    
  } else {
    const grocery = {
      id: Math.random(),
      name: groceryInput.value,
    };
    constructGroceryBasket(grocery);
    const groceries = getItemFromStorage(localStorageKey.groceries);
    setItemToLocalStorage(localStorageKey.groceries, [...groceries, grocery]);
  }
  clearInputvalue();
});
removeButton.addEventListener("click", (key, data) => {
  addButton.textContent = "Add";
  const orderList = document.querySelector(".order-list");
  window.localStorage.clear(key, data);
  orderList.classList.add("hidden");
  clearInputvalue();
});

const groceriesFromLocalStorage = getItemFromStorage(localStorageKey.groceries);
groceriesFromLocalStorage.forEach = (grocery) => {
  constructGroceryBasket(grocery);
};
function clearInputvalue() {
  groceryInput.value = "";
}
