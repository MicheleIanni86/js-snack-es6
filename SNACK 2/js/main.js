/*SNACK 2:
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.*/


const studenti = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48,
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84,
    },
];




// 1°STEP
// Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);*/
let nameUpperCase = studenti.map((studenti) => {

    let onlyNameUpper = (studenti.name.toUpperCase());

    return onlyNameUpper;

});
console.log(nameUpperCase);



// 2°STEP
// Un array di oggetti "studente" che hanno un totale di voti superiore a 70
let nameHighGrades = studenti.filter((studenti) => {


    if (studenti.grades > 70) {
        return true;
    } else {

        return false;
    }
});

let onlyName = nameHighGrades.map((studente, index) => {

    return studente.name.toUpperCase();
});

console.log(onlyName);



// 3°STEP
// Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120

let nameHighGradesId = studenti.filter((studenti) => {


    if (studenti.grades > 70 && studenti.id > 120) {
        return true;
    } else {

        return false;
    }

});

let onlyNameForId = nameHighGradesId.map((studente) => {

    return studente.name.toUpperCase();
});

console.log(onlyNameForId);

/*Questo è l'elenco degli studenti:
| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |
*/
