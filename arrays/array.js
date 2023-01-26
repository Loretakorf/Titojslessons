const favoriteColor = ['black'];
favoriteColor.push('green');
console.log(favoriteColor);// black, green

favoriteColor.unshift('red'); //red, black, green
favoriteColor.pop();
favoriteColor[0] = 'red' 


const someValue = 'firstName'
const obj = { firstName: 'Vardenis'}
obj.firstName = 'vardenis';
obj[someValue] = 'test' //firstName: 'test' ieska reksme

console.log(obj[someValue]);

const testArr = [];
testArr[0] = 'black';


let iteration = 0;
while(iteration < 5) {
    console.log(Math.random());
    iteration++;
} //true veiks

do {
    console.log(Math.random());
    iteration++;
} while(iteration < 5) 

let maxIteration = 5
for(let i = 0; i < maxIteration; console.log('ha')) {
   i++
}
 for (let color of favoriteColor) {

 }
 favoriteColor.forEach()


let userFavoriteColor = '';
const forEachFunction = (color, index) => {
    // favoriteColor[index] = 'red'
    // if(index === 0) {
    //     return;
    // }
userFavoriteColor += `${index === 0 ? '' : ','}${color}`;
}
favoriteColor.forEach(forEachFunction)


favoriteColor.forEach((color, index) => {
    userFavoriteColor += `${index === 0 ? '' : ','}${color}`;
})
console.log(`Favorite colors of user are: ${userFavoriteColor}`);

const favoriteColorwithoutRed = favoriteColor.filter((color) => {
    return color !== 'red';// without red // true arba false ir palika item
});
console.log(favoriteColor);

