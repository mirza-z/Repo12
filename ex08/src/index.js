//              Profile Lookup (The Contact Lists)              //
var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScrit", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
for(let x=0; x < contacts.length; x++){
    if(contacts[x].firstName == name){
        if(contacts[x].hasOwnProperty(prop)){
            return contacts[x][prop];
        } else {
        return "No such property";
        }
    }
}
return "No such contact";
// Only change code above this line
}

console.log(lookUpProfile('John', "addreess"));
module.exports = lookUpProfile;