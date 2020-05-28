const fs = require("fs")

// convert shortboxed data to Fluree seed data
const comics = require("./comic-data.json");

// console.log(comics)

const transactions = [];

// store publisher names that have already been added to the transaction array
const addedPubs = new Set();

// object to store temp ids for each publisher
const pubIds = {};
let idCounter = 0;

// iterate through comics data, creating seed transactions for the publishers and books collections
for (let comic of comics) {
  if (!addedPubs.has(comic.publisher)) {
    transactions.push({
      _id: `publishers$${idCounter}`,
      name: `${comic.publisher}`,
    });
    addedPubs.add(comic.publisher);
    pubIds[comic.publisher] = `publishers$${idCounter}`;
    idCounter++;
  }
  let numIndex = comic.title.indexOf();
  console.log(comic.title.slice(0, numIndex));
  transactions.push({
    _id: `books$${comic.diamond_id}`,
    title: comic.title,
    publisher: pubIds[comic.publisher],
    release_date: comic.release_date,
    creators: comic.creators,
    price: comic.price,
    diamond_id: comic.diamond_id,
  });
}

console.log(transactions);
const output = JSON.stringify(transactions);

fs.writeFile("comics_seeds.json", output, err => {
  if (err) throw err;
  else console.log("file saved!")
})