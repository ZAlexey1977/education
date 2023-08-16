let log = console.log;
function toCamelCase(str) {
  let arr = str.split("-");
  let arr1 = arr.map((el) => {
    el.split("_");
  })

  let array = [...arr, ...arr1];

  return array;
}

// log(toCamelCase("the-stealth-warrior"));
// log(toCamelCase("the-stealth_warrior"));
// log(toCamelCase("the stealth warrior"));