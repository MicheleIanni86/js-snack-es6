let cars = [
    {
        color: "purple",
        type: "minivan",
        capacity: 7,
    },
    {
        color: "red",
        type: "station",
        capacity: 5,
    },
    {
        color: "green",
        type: "berlina",
        capacity: 4,
    },
    {
        color: "yellow",
        type: "muscle",
        capacity: 4,
    },
    {
        color: "black",
        type: "sportiva",
        capacity: 5,
    },
    {
        color: "white",
        type: "smart",
        capacity: 2,
    },
];

let passenger = parseInt(prompt("In quante persone viaggiate?"));
console.log("passeggeri selezionati: ", passenger);

cars.forEach((car) => {
    if (passenger <= car.capacity) {
        alert(`La ${car.type} è adatta per te`);
    } else {
        console.warn(`La ${car.type} non va bene, siete in tanti `);
    }
});

// ----------------------------------------------------------------------------------

const products = [
    { title: "Mela", price: 2.3 },
    { title: "Banana", price: 1.5 },
    { title: "Mango", price: 2 },
    { title: "Pesca", price: 1.8 },
    { title: "Pera", price: 1.5 },
    { title: "Arancia", price: 2.2 },
];
/**
 *
 * @param {number} max il numero massimo
 * @param {number} min il numero minimo
 * @returns {number} number il numero generato
 */
function generateNumber(max, min) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

// let ingredients = generateNumber(4, 2);
let product = 0;
let totalPrice = 0;

for (let i = 0; i < 4; i++) {
    product = generateNumber(5, 0);
    totalPrice += products[product].price;
    console.log(products[product]);
}
console.log(totalPrice);
//   ----------------------------------------------------------------------------