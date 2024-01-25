/*SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.*/
const bikes = [
    {
        nome: 'Bici Rossa',
        peso: 4,
    },
    {
        nome: 'Bici Blu',
        peso: 5,
    },
    {
        nome: 'Bici Verde',
        peso: 2,
    },
    {
        nome: 'Bici Gialla',
        peso: 7,
    },
    {
        nome: 'Bici Fucsia',
        peso: 6,
    },
    {
        nome: 'Bici Nera',
        peso: 9,
    },
    {
        nome: 'Bici Marrone',
        peso: 8,
    },
    {
        nome: 'Bici Arancione',
        peso: 6,
    },
];


let minPosition = 0;

for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < bikes[minPosition].peso) {
        minPosition = i;
    }
};

const bike = bikes[minPosition];

const { nome, peso } = bike;

/*Stampare in console la bici con peso minore utilizzando destructuring e template literal*/
console.log(nome);



// let [{ peso: peso1 }, { peso: peso2 }, { peso: peso3 }, { peso: peso4 }, { peso: peso5 }, { peso: peso6 }, { peso: peso7 }, { peso: peso8 },] = bikes;


// let minWeight = peso1;

// bikes.forEach(function (bike) {

//     if (bike.peso < minWeight) {
//         minWeight = bike.peso;
//     }
// });


// console.log('Il peso minimo è: ' + minWeight);

// const bikesEgualWeigth = bikes.filter((bike) => {

//     let isBike = false;

//     if (minWeight == bike.peso) {
//         isBike = true;
//     }
//     return isBike;
// });

// const [nomeBiciFinale] = bikesEgualWeigth;

// console.log(nomeBiciFinale.nome.toUpperCase())