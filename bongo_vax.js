//function for getting person
function vaxTrail(person) {

    let boothAPersonList = [];
    let boothBPersonList = [];
    let boothCPersonList = [];
    let boothDPersonList = [];

    person.map(singlePerson => { //iterating the array person & then checking condition for each element & sorting

        if (singlePerson.temperature < 100) {

            if (singlePerson.age >= 20 && singlePerson.age <= 30) {
                if (singlePerson.age % 2 == 0) boothAPersonList.unshift(singlePerson)
                else boothAPersonList.push(singlePerson)
            }

            else if (singlePerson.age >= 31 && singlePerson.age <= 40) {
                if (singlePerson.age % 2 == 0) boothBPersonList.unshift(singlePerson)
                else boothBPersonList.push(singlePerson)
            }

            if (singlePerson.age >= 41 && singlePerson.age <= 50) {
                if (singlePerson.age % 2 == 0) boothCPersonList.unshift(singlePerson)
                else boothCPersonList.push(singlePerson)
            }
        }

        else if (singlePerson.temperature >= 100) {
            if (singlePerson.age % 2 == 0) boothDPersonList.unshift(singlePerson)
            else boothDPersonList.push(singlePerson)
        }
    })

    return { //returning object of the lists of person
        A: boothAPersonList,
        B: boothBPersonList,
        C: boothCPersonList,
        D: boothDPersonList
    }
}


//declaring array of person
var person = [
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 20, temperature: 98 },
    { name: 'Hosne', age: 28, temperature: 98 },
    { name: 'Dulal', age: 23, temperature: 95 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Katty', age: 44, temperature: 95 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 },
    { name: 'Ruhnaj', age: 50, temperature: 101 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Mahul', age: 39, temperature: 96 },
    { name: 'Baul', age: 38, temperature: 97 }
];


//calling function & sample input-output 
const personListOfVaccineBooth = vaxTrail(person);
console.log(personListOfVaccineBooth);