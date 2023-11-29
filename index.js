console.log("JS Lab4: Working with Data Collections:");
console.log("-----Part 1: Refactoring Old Code-----");

/**
 *revisit your code from ALAB 308.3.1 and "refactore" the outdated code of Part3: Feeling Loopy
 */
//Old Code
const CSV_Str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
//THis is the old code:
// let word = "";
// let Cell1 = "";
// let Cell2 = "";
// let Cell3 = "";
// let Cell4 = "";

// for (let i = 0; i <= CSV_Str.length; i++) {
//   if (CSV_Str[i] === "\n" || i === CSV_Str.length) {
//     Cell4 = word;
//     console.log(Cell1, Cell2, Cell3, Cell4);
//     word = "";
//     Cell1 = "";
//     Cell2 = "";
//     Cell3 = "";
//     Cell4 = "";
//     continue;
//   }
//   if (CSV_Str[i] != ",") {
//     word += CSV_Str[i];
//   } else if (Cell1 === "") {
//     Cell1 = word;
//     word = "";
//     continue;
//   } else if (Cell2 === "") {
//     Cell2 = word;
//     word = "";
//     continue;
//   } else if (Cell3 === "") {
//     Cell3 = word;
//     word = "";
//     continue;
//   }
// }

// ---- Refactoring old code:
// Split the CSV string into rows based on newline '\n' characters.
let rows = CSV_Str.split("\n");
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
  // based on the comma delimiter and assign them to respective variables.
  let [cell1, cell2, cell3, cell4] = rows[i].split(",");
  console.log(cell1, cell2, cell3, cell4);
}

// //
console.log("-----Part 2: Expanding Functionality-----");
// Splite() method of string splits the strings into substrings as items of a an array
let resultArray = CSV_Str.split("\n");
let numColumns = resultArray[0].split(",").length;
let twoD = [];
for (const element of resultArray) {
  let row = element.split(",");
  if (row.length === numColumns) twoD.push(row);
}
//console.log(numColumns); for my code it is not needed
console.log(twoD);

console.log("-----Part 3: Transforming Data-----");
//Transforming the reasts array of data into array of objects

let header = twoD[0].map((header) => header.toLowerCase()); //the first index is the Heading to be used as Keys of the object
let result = [];
for (let i = 1; i < twoD.length; i++) {
  let values = twoD[i];
  let Obj = {};
  for (let j = 0; j < header.length; j++) {
    Obj[header[j]] = values[j];
  }
  result.push(Obj);
}
console.log(result);

console.log("-----Part 4: Sorting and Manipulating Data-----");
//Remove the last element from the sorted array.
result.pop(); // delete the last element of an array
console.log(result); //removal of the last element is confirmed.

//Insert the following object at index 1:{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
result.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(result); //insertion confirmed

//Add the following object to the end of the array:{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(result); //adding the object at the end is confirmed;

//Finding the Average Age of the group in the final result
let totalAge = 0;
for (let i = 0; i < result.length; i++) {
  totalAge += parseInt(result[i].age);
}
let averageAge = totalAge / result.length;
console.log(
  `The average age is: ${averageAge}, rounded to ${Math.round(
    averageAge,
  )} years old.`,
);

console.log("-----Part 5: Full Circle-----");
//As a final task, transform the final set of data back into CSV format.
// Switching back from array of objects to an array

let DataArray = [];
let headline = [];
for (const key in result[0]) {
  headline.push(key);
}
//
headline = headline.map(
  (headline) => headline.at(0).toUpperCase() + headline.slice(1),
);
console.log(headline); //show the heading of the data
headline = headline.join();
console.log(headline); //after joining elements
DataArray.push(headline); //head is at index 0

for (let i = 0; i < result.length; i++) {
  let values = [];
  for (const key in result[i]) {
    values.push(result[i][key]);
  }
  //console.log(values); show the values
  values = values.join(); //join values as one string
  DataArray.push(values);
}
console.log("final array of data: ", DataArray);

//finally: makeing CSVData
let CSVdata = DataArray.join("\n"); // join elements with \n
console.log(CSVdata);
