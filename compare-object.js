const first = {
    a: 1,
    b: 2
}
const second = {
    b: 2,
    a: 1
}
const third = first;

if (first === third) {
    // console.log('object are same');
} else {
    // console.log('object are not same');
}

// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));

// if (JSON.stringify(first) === JSON.stringify(second)) {
//     console.log('Object are same');
// } else {
//     console.log('Object are not same');
// }


const first2 = {
    a: 1,
    b: 2,
    c: 3
}
const second2 = {
    c: 3,
    b: 2,
    a: 1
}

function compareObjects(first, second) {
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false
    }
    for (const prop in first) {
        if (first[prop] !== second[prop]) {
            return false
        }
    }
    return true
}

const obj = compareObjects(first2, second2)
console.log(obj);


const obj1 = {
    a: 2,
    b: 3,
    c: 1,
    d: 5
}
const obj2 = {
    a: 2,
    d: 5,
    b: 3,
    c: 1
}

const compareObj = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false
        }
    }
    return true;
}

console.log(compareObj(obj1, obj2));