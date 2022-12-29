const value = "some value";
const value2 = "some value2";
const obj1 = {
  key: value,
  key2: value2,
  key3: 1,
  key4: false,
  key5: {
    key1: value,
    key2: {
      key1: value,
      key2: {
        key1: value,
      },
    },
  },
  //method
  key6: function () {
    console.log("I am key6 value");
  },
  "key 7": undefined, //some shit
  key8: null,
  //key10: 10
};

obj1.key3; // 1
obj1.key9; // underfined

if (obj1.key9) {
  //do something with obj1 key9 value
}

obj1.key10 = 10; // will create a key since it was not able to find one

const previousValueKey3 = obj1.key3; // will assign key3 value to variable
obj1.key3 = 2; // update value
//const obj2 = new Object();
//function
function func() {}
obj1.key6();
console.log(obj1.key5.key2.key2.key1);
obj1.key5.key2.key2.key1;
obj1["key 7"];
console.log(obj1["key 7"]);

const inputValue = "color";

obj1.inputValue = "red"; // bus inputvalue:red
obj1[inputValue] = "red"; // color: red

obj1.key5.key2.key1 = "updated value";
console.log(obj1);

//how to compare object?
const obj2 = {
  key: value,
  key2: value2,
  key3: 1,
  key4: false,
  key5: {
    key1: value,
    key2: {
      key1: value,
      key2: {
        key1: value,
      },
    },
  },
  //method
  key6: function () {
    console.log("I am key6 value");
  },
  "key 7": undefined, //some shit
  key8: null,
  //key10: 10
};
const obj3 = {
    firstName: "vardenis",
}

const obj4 = {
    firstName: "vardenis",
}
if(obj3.firstName === obj4.firstName) {
    console.log("these objects ars equal");
}
const obj5 = obj1;
if(obj5 === obj1) {
    console.log("is equal");
}
obj5.key = "obj5 has changed key value";
console.log(obj1);

const arg1 = 1;
const arg2 = 2;// cia nemato
function func1(arg1, arg2){
    console.log(arg1, arg2);// 1 2

    // if(arg1 > 5) {
    //     return 5; 
    // }
    return arg1 + arg2;
}
const result = func1(arg1, arg2)
console.log(result);
const arrowFunction = () => {}//cia negalima iskvesti anksciau
function regularFunction() {

}