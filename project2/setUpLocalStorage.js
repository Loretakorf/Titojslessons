import { getItemFromStorage } from "./getItemFromStorage.js";
import { setItemToLocalStorage} from './setItemToLocalStorage.js'
import { localStorageKey } from "./localStorageKey.js";
export const setupLocalStorage = () => {
    const groceriesFromLocalStorage = getItemFromStorage(localStorageKey.groceries);
    if (!groceriesFromLocalStorage) {
        setItemToLocalStorage(localStorageKey.groceries, []);
    }
}