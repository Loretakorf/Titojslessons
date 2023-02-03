export const deleteItemFromLocalStorage =((key, data) => {
    window.localStorage.removeItem(key, data)
})