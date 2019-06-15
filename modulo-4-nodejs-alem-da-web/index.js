const Commander = require('commander');
const Database = require('./database');
const Hero = require('./hero');

async function main(params) {
  Commander.version('v1')
    .option('-n, --name [value]', 'Nome do heroi')
    .option('-p, --power [value]', 'Poder do heroi')
    .option('-i, --id [value]', 'Id do heroi')

    .option('-c, --create [value]', 'Cadastrar um heroi')
    .option('-r, --read', 'Listar um heroi')
    .option('-u, --update [value]', 'Atualizar um heroi pelo id')
    .option('-d, --delete', 'Atualizar um heroi pelo id')
    .parse(process.argv);
  const hero = new Hero(Commander);

  try {
    if (Commander.create) {
      delete hero.id;
      const result = await Database.create(hero);
      if (!result) {
        console.error('Heroi não foi cadastrado');
        return;
      }

      console.log('Heroi cadastrado com sucesso');
    }

    if (Commander.read) {
      const results = await Database.read();
      console.log(results);
      return;
    }

    if (Commander.update) {
      const idForUpdate = parseInt(Commander.update);

      // remover todas as chaves que estiverem com undefined
      const data = JSON.stringify(hero);
      const heroUpdate = JSON.parse(data);
      const result = await Database.update(idForUpdate, heroUpdate);
      if (!result) {
        console.error('Não foi posivel atualizar heroi.');
        return;
      }
      console.log('Heroi atualizado com sucesso.');
      delete hero.id;
    }

    if (Commander.delete) {
      const result = await Database.delete(hero.id);
      if (!result) {
        console.error('Não foi possivel remover o heroi.');
        return;
      }
      console.log('Heroi removido com sucesso.');
      return;
    }
  } catch (error) {
    console.error('Erro inesperado', error);
  }
}

main();
