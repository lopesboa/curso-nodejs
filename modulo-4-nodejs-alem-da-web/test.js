const { deepEqual } = require('assert');
const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
  name: 'flash',
  power: 'speed',
  id: 1,
};
const DEFAULT_ITEM_ATUALIZAR = {
  name: 'Lanterna Verde',
  power: 'Energia do Anel',
  id: 2,
};

describe('Suite de manipulação de herois', () => {
  before(async () => {
    await database.create(DEFAULT_ITEM_CADASTRAR);
    await database.create(DEFAULT_ITEM_ATUALIZAR);
  });
  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const result = await database.create(DEFAULT_ITEM_CADASTRAR);
    const [actual] = await database.read(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(actual, expected);
  });

  it('deve pesquisar um heroi usando um arquivo ', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [result] = await database.read(expected.id);

    deepEqual(result, expected);
  });

  it('deve atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      name: 'Batman',
      power: 'Dinheiro',
    };
    const newData = {
      name: 'Batman',
      power: 'Dinheiro',
    };
    await database.update(DEFAULT_ITEM_ATUALIZAR.id, newData);
    const [result] = await database.read(DEFAULT_ITEM_ATUALIZAR.id);
    deepEqual(result, expected);
  });

  it('deve remover um heroi pelo id', async () => {
    const expected = true;
    const result = await database.delete(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(result, expected);
  });
});
