const users = [
  {
    id: Math.random(),
    firstName: "Jessika",
    lastName: "Silver",
    age: 30,
    hasIdentificationDocument: true,
    isBanned: true,
  },
  {
    id: Math.random(),
    firstName: "Peter",
    lastName: "Green",
    age: 25,
    hasIdentificationDocument: false,
    isBanned: false,
  },
  {
    id: Math.random(),
    firstName: "Allen",
    lastName: "Mood",
    age: 22,
    hasIdentificationDocument: false,
    isBanned: true,
  },
  {
    id: Math.random(),
    firstName: "Tom",
    lastName: "Timber",
    age: 19,
    hasIdentificationDocument: true,
    isBanned: false,
  },
];

//FILTER
// users.forEach((user,index) => {
//     console.log(user, index);
// });
const userWithAgeFrom21 = users.filter((user) => {
  if (user.age >= 20 && user.hasIdentificationDocument && !user.isBanned) {
    return true;
  }
});
console.log(userWithAgeFrom21);

//MAP
const usersFirstNames = users.map((user) => {
  // return user.firstName;
  return `${user.firstName} ${user.lastName}`;
});
console.log(usersFirstNames);

const userWithdocuments = users.filter((user) => {
  if (user.hasIdentificationDocument) {
    return true;
  }
});
console.log(userWithdocuments);
const newUsers = userWithdocuments.map((user) => {
  return {
    id: user.id,
    firstName: user.firstName,
  };
});
console.log(newUsers);

//REDUCE
//output [underagedUsers, restOfUsers]

const usersGroups = users.reduce(
  (acc, user) => {
    if (user.age >= 21) {
      acc[1].push([user]);
    } else {
      acc[0].unshift([user]);
    }
    return acc;
  },
  [[], []]
);
console.log(usersGroups);
const userGroupAsObject = users.reduce(
  (groupUsers, user) => {
    if (user.age >= 21) {
      groupUsers.adults.push(user);
    } else {
      groupUsers.underaged.push(user);
    }
    return groupUsers;
  },
  { underaged: [], adults: [] }
);
console.log(userGroupAsObject);

const helloText = users.reduce((welcomeText, user, index) => {
  return `${welcomeText}${index ? ", " : " "} ${user.firstName}`;
}, "Hello: ");
console.log(helloText);

const adultsUsers = users.filter((user) => {
  return user.age >= 20;
});
console.log(adultsUsers);

const groupwith = adultsUsers.reduce(
  (groups, user) => {
    if (users.isBanned) {
      groups.isBanned.push(user);
    } else {
     groups.hasIdentificationDocument.push(user);
    }
    return groups;
  },
  { isBanned: [], hasIdentificationDocument: [] }
);
console.log(groupwith);
