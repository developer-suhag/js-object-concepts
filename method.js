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

student.doCode()
const remaining = student.cost(2000);
console.log(remaining);

// student.dobuleIt()
console.log(student.dobuleIt(2, 4));