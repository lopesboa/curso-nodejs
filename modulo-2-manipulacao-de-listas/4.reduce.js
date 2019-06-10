const { obterPessoas } = require("./service");

Array.prototype.myReduce = function(callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

  for (let index = 0; index <= this.length - 1; index++) {
    finalValue = callback(finalValue, this[index], this);
  }
  return finalValue;
};

async function main() {
  try {
    const { results } = await obterPessoas(`a`);
    const weights = results.map(item => parseInt(item.height));
    console.log("Pesos ", weights);
    // const total = weights.reduce((prev, next) => {
    //   return prev + next;
    // });

    const myList = [["Lopes", "Boa"], ["NodeBR", "Nerdzão"]];

    const total = myList
      .myReduce((prev, next) => {
        return prev.concat(next);
      }, [])
      .join(", ");
    console.log("Total ", total);
  } catch (error) {
    console.error("Erro interno", error);
  }
}

main();
