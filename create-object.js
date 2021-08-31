// 1
const player = {
    name: 'Shakib Al Hasan',
    job: 'Crickter'
}

// console.log(player);
// 2

const newPlayer = new Object()
// console.log(newPlayer);


// 3

// const newNewPlayer = Object.create(null)
const newNewPlayer = Object.create(player)
// console.log(newNewPlayer.name);


// 4

class People {
    constructor(name) {
        this.name = name;
    }
}

const newPeople = new People('Rahim')
// console.log(newPeople);


// 5

function Manus(name) {
    this.name = name;
}

const newManus = new Manus('Karim')
console.log(newManus);