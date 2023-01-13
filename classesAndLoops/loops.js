// cycles/loops

const orderNumberOfCars = (numberOfCars) => {
  // console.log(`car ${numberOfCars} has been ordered`);

  for (let i = 1; i <= numberOfCars; i++) {
    console.log(`car ${i} has been ordered`);
    //execute
  }
  console.log("finished");
};

orderNumberOfCars(10);

//types of cycles: for, while, do...while
const manufactureCars = (availableParts) => {
  let i = 1;
  while (i <= availableParts) {
    console.log(`manufactured a car with number ${i}`);
    i++;
  }
  console.log("finished");
};
manufactureCars(10);
const writeTicket = (isSpeeding) => {
  const maxTicket = 5;
  let i = 1;
  do {
    if (i === maxTicket) {
      console.log("Stop");
      break;
    } 
      console.log("Driver has received a ticket for speeeding");
    
    i++;
  } while (isSpeeding && maxTicket >= i);
};
writeTicket(true);
// cicle sustabda break