const { obterPessoas } = require("./service");

Array.prototype.myFilter = function(callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    // 0, "", null, undefined === false
    if (!result) continue;
    list.push(item);
  }

  return list;
};

async function main() {
  try {
    const { results } = await obterPessoas(`a`);
    // const familyLars = results.filter(item => {
    //   //Por padrão precisa retornar um bool,
    //   //Para informar se deve remover ou n da lista.
    //   //false -> remove da lista;
    //   //true -> mantem
    //   //Não encontrou = -1;
    //   //Encontrou = posicaoNoArray
    //   const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
    //   return result;
    // });

    const familyLars = results.myFilter((item, index, list) => {
      console.log(`Index: ${index}`, list.length);
      item.name.toLowerCase().indexOf("lars") !== -1;
    });
    const names = familyLars.map(people => people.name);
    console.log(names);
  } catch (error) {
    console.error("Erro Interno", error);
  }
}

main();
