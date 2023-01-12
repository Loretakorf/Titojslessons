// cycles/loops

const orderNumberOfCars = (numberOfCars) => {
// console.log(`car ${numberOfCars} has been ordered`);

    for(let i = 1; i <= numberOfCars; i++) {
        console.log(`car ${i} has been ordered`);  
    //execute
    }
    console.log("finished");
}

orderNumberOfCars(10);

//types of cycles: for, while, do...while