class Building {
    constructor(maxFlats) {
        this.flats = [];
        maxFlats = 9;
        let i = 0;
        while (i < maxFlats) {
            i++;
            this.flats.push(new Flat(i));
        }
    }

    addFlat(flat) {
        if (flat instanceof Flat) {
            this.flats.push(flat);
        }
    }
}

class Flat {
    constructor(residents) {
        this.residents = [];
    }
    addResident(person) {
        if (person instanceof Person) {
            this.residents.push(person);
        } else {
            alert('Error')
        }
    }
}

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

const newBuilding = new Building();
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