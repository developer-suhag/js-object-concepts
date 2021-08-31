const bottle = {
    // property
    //keys: values = entries
    color: 'gray',
    price: 15,
    hold: 'water',
    isClended: true
};

// geting the object's keys 

const keys = Object.keys(bottle);
// console.log(keys);

// geting the object's values
const values = Object.values(bottle)
// console.log(values);


// geting the object's entries

const entry = Object.entries(bottle)
// console.log(entry);

// seal the object 
// Object.seal(bottle)
// bottle.price = 10;
// bottle.height = 10;

// freeze the object
Object.freeze(bottle)

bottle.price = 10;
// deleting a property from object
delete bottle.isClended;
console.log(bottle);