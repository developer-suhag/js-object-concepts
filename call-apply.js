const suhag = {
    id: 101,
    name: 'Suhag',
    money: 5000,
    cost: function (taka, boksis, tax) {
        this.money = this.money - taka - boksis - tax;
        console.log(this.money);
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
const allo = {
    id: 104,
    name: 'Allo',
    money: 50000,
}
// call method
/* 
suhag.cost.call(alAmin, 800, 100, 80)
suhag.cost.call(alAmin, 1800, 30, 180)
suhag.cost.call(alAmin, 2000, 250, 200)

suhag.cost.call(mokta, 400, 20, 40)
suhag.cost.call(mokta, 600, 40, 60)
suhag.cost.call(mokta, 1000, 50, 100)

suhag.cost.call(allo, 5000, 500, 500)
suhag.cost.call(allo, 9000, 500, 900)
suhag.cost.call(allo, 12000, 1000, 1900) */


// apply method

suhag.cost.apply(alAmin, [1000, 100, 100])
suhag.cost.apply(alAmin, [2000, 20, 200])
suhag.cost.apply(alAmin, [300, 30, 30])

suhag.cost.apply(mokta, [700, 50, 70])
suhag.cost.apply(mokta, [900, 60, 80])
suhag.cost.apply(mokta, [500, 50, 50])

suhag.cost.apply(allo, [6000, 600, 1000])
suhag.cost.apply(allo, [10200, 100, 1000])
suhag.cost.apply(allo, [25000, 500, 5000])