
var characterList = [];

var characterID = 1000;

const stats = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

const races = ["human", "elf", "dwarf", "halfling", "robot", "zombie"];

const classes = ["Fighter", "Wizard", "Cleric", "Thief", "Archer"];


function Character(
    name,
    stats,
    race,
    classs,
    gender,
    rightHanded
) {
    this.name = name;
    this.stats = stats;
    this.race = race;
    this.classs = classs;
    this.gender = gender;
    this.rightHanded = rightHanded;
    this.id = characterID++;

    this.sortableName = function() {
        return this.name;
    }
};

function modelCreateCharacter(
    name,
    stats,
    race,
    classs,
    gender,
    rightHanded
) {
    var newCharacter = new Character(name,
        stats,
        race,
        classs,
        gender,
        rightHanded
    );
    characterList.push(newCharacter);
    return newCharacter;
};

function modelGetAllCharacters() {
    return characterList;
}

function modelGetCharacter(id) { 
    for (x in characterList) { 
        if (characterList[x].id === id){
            return characterList[x];
        }
    }
    
    return undefined;
}

function modelUpdateCharacter(
    id,
    name,
    stats,
    race,
    classs,
    gender,
    rightHanded
) {
    let character = modelGetCharacter(id);
    if (!character) {
        return undefined;
    }

    character.name = name;
    character.stats = stats;
    character.race = race;
    character.classs = classs;
    character.gender = gender;
    character.rightHanded = rightHanded;

    return character;
}

function modelDeleteCharacter(id){
    for (x in characterList) {
        if (characterList[x].id === id){
            characterList.splice(x, 1);
            break;
        }
    }
}
