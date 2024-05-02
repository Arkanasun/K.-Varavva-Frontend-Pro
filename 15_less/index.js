class Building {
    constructor(name, flatQuantity) {
        this.name = name;
        this.flats = [];
        let i = 0;
        while (i < flatQuantity) {
            i++;
            this.flats.push(new Flat(i));
        }
    }
}

class Flat {
    constructor(number) {
        this.number = number;
        this.rooms = 4;
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

const newBuilding = new Building('Sun', 20);
const person = new Person('Eren', 'male');
const person2 = new Person('Armin', 'male');
const person3 = new Person('Annie', 'female');
const flat = newBuilding.flats[6];
const flat2 = newBuilding.flats[7];
const flat3 = newBuilding.flats[8];

flat.addResident(person);
flat2.addResident(person2);
flat3.addResident(person3);

const flatResidents = newBuilding.flats.flatMap(flat => flat.residents);

console.log(newBuilding);