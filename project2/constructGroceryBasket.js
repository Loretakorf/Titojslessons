import { store } from "./store.js";
import { localStorageKey } from "./localStorageKey.js";
import { getItemFromStorage } from "./getItemFromStorage.js";
import { deleteItemFromLocalStorage } from "./deleteItemFromLocalStorage.js";

const addButton = document.querySelector("#btn");
const orderList = document.querySelector(".order-list");
export const constructGroceryBasket = (grocery) => {
  const productList = document.createElement("div");
  const itemParagraph = document.createElement("p");
  const iconsContainer = document.createElement("div");
  const editBtn = document.createElement("button");
  const editIcon = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("span");

  productList.classList.add("grocery");
  itemParagraph.textContent = grocery.name;
  iconsContainer.classList.add("icons");
  editBtn.classList.add("edit");
  editIcon.classList.add("material-symbols-outlined");
  editIcon.textContent = "edit";
  deleteBtn.classList.add("delete");
  deleteIcon.classList.add("material-symbols-outlined");
  deleteIcon.textContent = "delete";

  editBtn.addEventListener("click", () => {
    const groceries = getItemFromStorage(localStorageKey.groceries);
    const editableGroceryIndex = groceries.findIndex(
      (groceryFromLocalStorage) => {
        if (groceryFromLocalStorage.id === grocery.id) {
          return true;
        }
      }
    );
    store.editableGroceryIndex = editableGroceryIndex;
    addButton.textContent = "Edit";
  });
  deleteBtn.addEventListener("click", () => {
    const groceries = getItemFromStorage(localStorageKey.groceries);

    const deleteGroceryIndex = groceries.filter((groceriesFromLocalStorage) => {
      if (groceriesFromLocalStorage.id === grocery.id) {
        return deleteItemFromLocalStorage(localStorageKey.groceries);
      }
    });
    store.deleteGroceryIndex = deleteGroceryIndex;
  });

  editBtn.append(editIcon);
  deleteBtn.append(deleteIcon);
  iconsContainer.append(editBtn, deleteBtn);
  productList.append(itemParagraph, iconsContainer);
  orderList.append(productList);
};
