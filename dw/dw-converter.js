const fs = require("fs");
const monstersData = require("./monsters.json");

const transactions = [];

// divided by environments
for (let [environment, monsters] of Object.entries(monstersData)) {
  console.log(environment);
  let tempId = `environments$${environment}`;
  transactions.push({
    _id: tempId,
    name: environment,
  });
  let flureeMonsters = monsters.map((mon) => {
    return {
      ...mon,
      "attack_tags": mon.attack_tags.split(","),
      "monster_tags": mon.monster_tags.split(","),
      "hp": parseInt(mon.hp),
      "_id": "monsters",
      "environment": tempId
    };
  });
  transactions.push(...flureeMonsters);
}

console.log(transactions);
const output = JSON.stringify(transactions);

fs.writeFile("dw-seeds.json", output, (err) => {
  if (err) throw err;
  else console.log("file save");
});
