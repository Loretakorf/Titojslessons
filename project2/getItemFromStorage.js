export const getItemFromStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
}