log = console.log;


// Налаштування
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Змініть код лише під цим рядком
  if (contacts.length < 1) {
    return "Array empty";
  }
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      log(contacts[i].firstName);
      return contacts[i][prop];
    }
    if (contacts[i][prop] == "undefined") {
      return "No such property"
    }
    if (contacts[i].firstName != name) {
      return "No such contact"
    }
  }

  // Змініть код лише над цим рядком
}

log(lookUpProfile("Kristian", "likees"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // unit  96 Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (value == "") {
//     log(records[id][prop]);
//     delete records[id][prop];

//   }
//   //records[id][prop] = value;
//   //log(records[id]);
//   return records;
// }

// //updateRecords(recordCollection, 5439, 'artist', '');
// //log(updateRecords(recordCollection, 5439, 'artist', ''));

// log(updateRecords(recordCollection, 2468, "tracks", "Free"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// unit 104
// function sum(arr, n) {
//   // Змініть код лише під цим рядком

//   // Змініть код лише над цим рядком
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////