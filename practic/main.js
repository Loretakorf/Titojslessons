// // function withReturnSomeValue(a, b) { //withreturn(1, )
// //     return a + b;
// // }
// // function addEventListener(action, callback) {
// // const event = 'event';
// //     if(action === "click") {
// //         callback(event)
// //     }
// //     function innerFunction() {
// //         const event = 0;
// //         console.log(event);
// //     }
// //     innerFunction();
// // }
// // addEventListener("click", callbackFunction);
// // function callbackFunction(event) {
// //     console.log(event);
// // }
// // //booleans
// // const t = true;
// // const f = false;// NaN
// // const truthy = ' ' && 1// truthy 1, ' ' '1'
// // const falsy = null//falsy  null, underfined, NaN '' 0
// // if(truthy) {
// //     console.log('worked');
// // }

// //object

// // const paragraph = document.querySelector('p');
// // const x1 = 6;

// const permission = {
//     canBay: true,
//     canSell: true,
// }

// const user = {
//     firstName: 'vardenis',
//     lastName: 'paverdenis',
//     addEventListener: addEventListener,
//     permission: permission,
//     isActive: true,
//     email: undefined,
//     x1: 6,     // key/property  value
// };

// // paragraph.textContent = 'abc'
// const container = document.querySelector('#container');
// const input = document.querySelector('#key');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function updateObject() {
//   const inputValue  = input.value
//     // console.log(keyValue);
//     // user[keyValue] = '';
//     user.firstName = inputValue;
//     user[inputValue] = 'some value';//dinamic
//     user.favoriteColor = 'red';// simple key
//     console.log(user);

// });

// // console.log(user);

// function displayUser(user) {
//     // console.log('before',user);
//     user.eyecolor = "green";
//     // console.log('after', user);

//     const paragraph = document.createElement('p');
//     paragraph.textContent = `${user.firstName} ${user.lastName} canDelete:${user.permission.canDelete}`;
//     //paragraph.textContent = JSON.stringify(user); // viso object rodo
//     // user.addEventListener('click', callbackFunction);
//     container.append(paragraph)

// }
// displayUser(user);

// const dog = {
//   name: 'doggy',
//   car: 'audi',
// };
// // delete dog.car;
// dog.name = "";
// const dynamicKey = 'name';
// // delete dog.car;
// delete dog[dynamicKey];

// const object1 = { name: "name" };
// const object2 = { name: "name" };
// console.log(object1 === object2); //false

// const object3 = {};
// const object4 = object3;
// object4.name = "name";
// object3.name = "other name";

// console.log({
//   object3: object3, // shorthand
//   object4,
// });

// // function that calls itself until it doesnt crash
// let step = 0;
// function recursive() {
//   if (step === 10) {
//     return;
//   }
//   step++;
//   recursive();
// }
// recursive();

const keyInput = document.querySelector('#key');
const valueInput = document.querySelector('#value');
const existingKeysSelect = document.querySelector('#existing-keys');
const updateBtn = document.querySelector('#update-btn');
const textareaInput = document.querySelector('.object-displayer');
const obj = {};
textareaInput.value = JSON.stringify(obj);
updateBtn.addEventListener('click', onClick)

function onClick() {
    if (valueInput.value) {
        if (keyInput.value) {
            if (!obj[keyInput.value]) {
                obj[keyInput.value] = valueInput.value;
                addExistingKeyToDropdown(keyInput.value);
            }
        }
        if (existingKeysSelect.value) {
            obj[existingKeysSelect.value] = valueInput.value;
        }
        textareaInput.value = JSON.stringify(obj)
    }
}

function addExistingKeyToDropdown(key) {
    const optionElement = document.createElement('option');
    optionElement.textContent = key;
    optionElement.value = key;

    existingKeysSelect.append(optionElement)
    existingKeysSelect.removeAttribute('disabled')
}

