/*SNACK 4
Usa l'array allegato alla traccia per completare i seguenti punti:
Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici*/

const teams = [
    {
        name: 'Team Turtle',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Frog',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Penguin',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Hippopotamus',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Seal',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Crocodile',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Dolphin',
        score: 0,
        foul: 0,
    },
];



teams.forEach((team) => {
    team.score = randomNumbers(1, 100);
    team.foul = randomNumbers(1, 10);

});
console.log(teams);


/*Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.*/

const newArray = teams.map((team) => {
    const { name, foul } = team;
    console.log(name, foul);

    let newTeam = {
        name: name,
        foul: foul,
    };
    return newTeam;
});
console.log(newArray);


// const newArray = teams.map((team) => {
//     const { name, foul } = team;
//     console.log(name, foul);

//     let newTeam = {
//         name: name,
//         foul: foul,
//     };
//     return newTeam;
// });
// console.log(newArray);

/*BONUS
Stampare in pagina oltre che in console!*/






// FUNZIONI
function randomNumbers(min, max) {
    let numRand = Math.floor(Math.random() * (max - min + 1) + min);
    return numRand;
}
