const api = { id: 1, name: "raza", age: 32, job: "khai dai" };
console.log(api);
const stringify = JSON.stringify(api);
console.log(stringify);

/*
{ id: 1, name: 'raja', age: 32, job: 'chai dai' };
{"id":1,"name":"raja","age":32,"job":"chai dai"};
*/

const shop = {
  owner: "Alaia vat",
  address: {
    country: "BD",
    city: "ranbir",
  },
  product: ["laptap", "mic", "monitor", "keybord"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
// console.log(shop);
const shopJson = JSON.stringify(shop);
// console.log(shopJson);
