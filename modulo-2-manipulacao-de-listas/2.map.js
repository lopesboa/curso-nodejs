const Service = require("./service");

Array.prototype.myMap = function(callback) {
  const newArrayMap = [];

  for (let indece = 0; indece <= this.length - 1; indece++) {
    const result = callback(this[indece], indece);
    newArrayMap.push(result);
  }

  return newArrayMap;
};

async function main() {
  try {
    const result = await Service.obterPessoas(`a`);

    // Getting data using FOREACH
    // const names = [];
    // result.results.forEach(function(item) {
    //   names.push(item.name);
    // });

    // Using Map ans arrow function
    // const names = result.results.map(people => people.name);

    const names = result.results.myMap(function(people, indice) {
      return `[${indice}] - ${people.name}`;
    });

    console.log("Names", names);
  } catch (error) {
    console.error("Erro interno", error);
  }
}

main();
