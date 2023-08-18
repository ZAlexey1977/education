log = console.log;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // unit  96 Налаштування
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
log(recordCollection[5439].albumTitle);
//Змініть код лише під цим рядком

function updateRecords(records, id, prop, value) {
  if (value == "") {
    log(records[id][prop]);
    delete records[id][prop];
  }
  if (prop == 'tracks' && value != '') {
    //log(records[id][prop] = value);
    records[id][prop] = value;
  }
  // else {
  //   records[id][prop] = value;
  // }
  return records;
}

//updateRecords(recordCollection, 5439, 'artist', '');
log(updateRecords(recordCollection, 5439, "artist", "ABBA")); +

  log(updateRecords(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////