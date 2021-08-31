const bottle = {
    // property
    //keys: values = entries
    color: 'gray',
    price: 15,
    hold: 'water',
    isClended: true
};

/* for (let i = 0; i < array.length; i++) {}
for (const iterator of object) {}
for (const key in object) {} */

for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle)
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

const entries = Object.entries(bottle)
// console.log(entries);

for (const [key, value] of Object.entries(bottle)) {
    // console.log(key, value);
}


const student = {
    name: 'Suhag',
    major: 'JavaScript',
    money: 5000,
    subjects: ['JavaScript', 'React.js', 'Node.js', 'Next.js', 'MongoDB', 'Express.js', 'Redux', 'Firebase'],
    bestFriend: {
        name: 'Masum',
        major: 'Textitle'
    },

    doCode: function () {
        console.log(`${this.name} codeing all day long!`);
    },

    cost: function (taka) {
        this.money = this.money - taka;
        return this.money;
    },

    dobuleIt: (x, y) => {
        return x * y;
    }
};


for (const prop in student) {
    // console.log(prop, student[prop]);
}

const studentKeys = Object.keys(student)
for (const prop of studentKeys) {
    // console.log(prop, student[prop]);
}

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}