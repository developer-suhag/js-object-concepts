const suhag = {
    id: 101,
    name: 'Suhag',
    money: 5000,
    cost: function (taka) {
        this.money = this.money - taka;
        return this.money;
    },
};

const alAmin = {
    id: 102,
    name: 'Al Amin',
    money: 10000,
}

const mokta = {
    id: 103,
    name: 'Mokta',
    money: 3000
}
// console.log(alAmin);

const suhagCost = suhag.cost(300)
console.log(suhagCost);
console.log(suhag.cost(700));

const alAminCost = suhag.cost.bind(alAmin);
console.log(alAminCost(500));
console.log(alAminCost(800));
console.log(alAminCost(5000));

const moktaCost = suhag.cost.bind(mokta);
console.log(moktaCost(400));
console.log(moktaCost(600));


const allo = {
    id: 104,
    name: 'Allo',
    money: 50000,
}

const alloCost = suhag.cost.bind(allo)
console.log(alloCost(10394));