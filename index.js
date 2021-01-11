const Database = require("@replit/database")
const db = new Database()
const prompting = prompt("Get value (1) or Add value (2) or Remove value (3)");
if (prompting == 1) {
  const inputFromUser = prompt('username:');
  db.get(`${inputFromUser}'s Key'`).then(value => {console.log(value);});
} else if (prompting == 2) {
  const inputFromUser = prompt('username:');
  const inputFromUserAsk = prompt('value:');
  db.set(`${inputFromUser}'s Key'`, `${inputFromUserAsk}'s Value`).then(() => {});
} else if (prompting == 3) {
  const inputFromUserDelete = prompt('delete:');
  db.delete(`${inputFromUserDelete}'s Key'`).then(() => {});
}